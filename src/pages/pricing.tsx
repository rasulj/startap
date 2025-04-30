<<<<<<< HEAD
import { GetServerSideProps } from 'next';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { ProductsType } from 'src/interfaces/constants.interface';
import { withLayout } from 'src/layouts/layout'
import Seo from 'src/layouts/seo/seo';
import { PricingPageComponent } from 'src/page-component'
import { PaymentService } from 'src/services/payment.service';

const Pricing = ({ products }) => {
=======
import React from 'react'
import { useTranslation } from 'react-i18next';
import { withLayout } from 'src/layouts/layout'
import Seo from 'src/layouts/seo/seo';
import { PricingPageComponent } from 'src/page-component'

const Pricing = () => {
>>>>>>> 25889e5ed2447fe1262d2b1f9685c2f8c5e8b06a
  
   	const { t } = useTranslation();

	return (
		<Seo
			metaTitle={
				`Sammi | ${t('pricing_page_title', { ns: 'seo' })}` ||
				'Sammi | Pricing Package'
			}
			metaDescription={
				`Sammi | ${t('pricing_page_description', { ns: 'seo' })}` ||
				'The best package for using and doing lesson on sammi academy'
			}
		>
<<<<<<< HEAD
			<PricingPageComponent products={products}/>
=======
			<PricingPageComponent />
>>>>>>> 25889e5ed2447fe1262d2b1f9685c2f8c5e8b06a
		</Seo>
  )
}

<<<<<<< HEAD
export default withLayout(Pricing)

 export const getServerSideProps: GetServerSideProps<PricingPageType> = async () => {
 	const products = await PaymentService.productList();
 
 	return {
 		props: { products },
 	};
 };
 
 interface PricingPageType extends Record<string, unknown> {
 	products: ProductsType[];
 }
=======
export default withLayout(Pricing)
>>>>>>> 25889e5ed2447fe1262d2b1f9685c2f8c5e8b06a
