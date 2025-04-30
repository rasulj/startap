import { GetServerSideProps } from 'next';
import { withLayout } from 'src/layouts/layout';
import { SuccessPageComponent } from 'src/page-component';

const SuccessPage = () => {
	return <SuccessPageComponent />;
};

export default withLayout(SuccessPage);

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
<<<<<<< HEAD
	// if (!query.payment_intent && !query.payment_intent_client_secret && !query.redirect_status) {
	// 	return {
	// 		redirect: {
	// 			destination: '/',
	// 			permanent: false,
	// 		},
	// 	};
	// }
=======
	if (!query.payment_intent && !query.payment_intent_client_secret && !query.redirect_status) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}
>>>>>>> 25889e5ed2447fe1262d2b1f9685c2f8c5e8b06a

	return {
		props: {},
	};
};