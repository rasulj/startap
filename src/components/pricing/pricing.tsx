
import { Button, Heading, List, ListIcon, ListItem, Stack, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { FaCheckCircle } from 'react-icons/fa';
import { PricingProps } from './pricing.props';
<<<<<<< HEAD
import { useRouter } from 'next/router';
import { useActions } from 'src/hooks/useActions';

const Pricing = ({ options, price, title, checked ,product}: PricingProps) => {
=======

const Pricing = ({ options, price, title, checked }: PricingProps) => {
>>>>>>> 25889e5ed2447fe1262d2b1f9685c2f8c5e8b06a
	const { t } = useTranslation();

	const colorTextLight = checked ? 'white' : 'facebook.600';
	const bgColorLight = checked ? 'facebook.400' : 'gray.300';

	const colorTextDark = checked ? 'white' : 'facebook.500';
	const bgColorDark = checked ? 'facebook.400' : 'gray.300';
<<<<<<< HEAD
const { addProductToCart } = useActions();
const router = useRouter()

 	
	const addProductToCartHandler = () => {
 		addProductToCart(product);
 		router.push('/shop/checkout');
 	};
=======

>>>>>>> 25889e5ed2447fe1262d2b1f9685c2f8c5e8b06a
	return (
		<Stack
			p={3}
			py={3}
			justifyContent={{ base: 'flex-start', md: 'space-around' }}
			direction={{ base: 'column', md: 'row' }}
			alignItems={{ md: 'center' }}
		>
			<Heading size={'md'}>{title}</Heading>
			<List spacing={3} textAlign='start'>
				{options.map(item => (
					<ListItem key={item.id}>
						<ListIcon as={FaCheckCircle} color='green.500' />
						{item.desc}
					</ListItem>
				))}
			</List>
			<Heading size={'xl'}>{price.toLocaleString('en-US', { currency: 'USD', style: 'currency' })}</Heading>
			<Stack>
				<Button
					size='md'
					color={useColorModeValue(colorTextLight, colorTextDark)}
					bgColor={useColorModeValue(bgColorLight, bgColorDark)}
<<<<<<< HEAD
					onClick={addProductToCartHandler}
=======
>>>>>>> 25889e5ed2447fe1262d2b1f9685c2f8c5e8b06a
				>
					{t('pricing_btn', { ns: 'global' })}
				</Button>
			</Stack>
		</Stack>
	);
};

export default Pricing;