import { Button } from '@chakra-ui/react';
import { AddressElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { FormEvent, useEffect, useState } from 'react';
import { getTotalPrice } from 'src/helpers/total-price.helper';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import ErrorAlert from '../error-alert/error-alert';

export default function CheckoutForm() {
	const stripe = useStripe();
	const elements = useElements();

	const [message, setMessage] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const { courses, books } = useTypedSelector(state => state.cart);

	useEffect(() => {
		if (!stripe) {
			return;
		}

		const clientSecret = new URLSearchParams(window.location.search).get(
			'payment_intent_client_secret'
		);

		if (!clientSecret) {
			return;
		}

		stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
			switch (paymentIntent?.status) {
				case 'succeeded':
					setMessage('Payment succeeded!');
					break;
				case 'processing':
					setMessage('Your payment is processing.');
					break;
				case 'requires_payment_method':
					setMessage('Your payment was not successful, please try again.');
					break;
				default:
					setMessage('Something went wrong.');
					break;
			}
		});
	}, [stripe]);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		setIsLoading(true);

		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				return_url: `${process.env.NEXT_PUBLIC_CLIENT_DOMAIN}/shop/success`,
			},
		});

		if (error.type === 'card_error' || error.type === 'validation_error') {
			setMessage(error.message as string);
		} else {
			setMessage('An unexpected error occurred.');
		}

		setIsLoading(false);
	};

	return (
		<form id='payment-form' onSubmit={handleSubmit}>
			{message && <ErrorAlert title={message} clearHandler={() => setMessage(null)} />}

			<PaymentElement id='payment-element' options={{ layout: 'tabs' }} />
			<AddressElement options={{ mode: 'billing' }} />
			<Button
				w={'full'}
				h={'14'}
				mt={5}
				isDisabled={isLoading || !stripe || !elements}
				isLoading={isLoading}
				boxShadow={'xl'}
				type={'submit'}
			>
				Pay now{' '}
				{getTotalPrice(courses, books).toLocaleString('en-US', {
					style: 'currency',
					currency: 'USD',
				})}
			</Button>
		</form>
	);
}