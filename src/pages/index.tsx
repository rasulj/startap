  import React from 'react'
import { useTranslation } from 'react-i18next'
import { withLayout } from 'src/layousts/layout'
import Seo from 'src/layousts/seo/seo'
import { HomePageComponent } from 'src/page-component'
  
  const Home = () => {
 	const { t } = useTranslation();

	return (
		<Seo
			metaTitle={`Sammi | ${t('main_page_title', { ns: 'seo' })}`}
			metaDescription={`${t('main_page_description', { ns: 'seo' })}`}
		>
			<HomePageComponent />
		</Seo>
	);
  }
  
  export default withLayout(Home)