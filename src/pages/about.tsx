import { useTranslation } from "react-i18next"
import { withLayout } from "src/layousts/layout"
import Seo from "src/layousts/seo/seo"
import { AboutPageComponent } from "src/page-component"


const About = () => {
  const{t}= useTranslation()
  return (
  	<Seo
			metaTitle={
				`Sammi | ${t('about_page_title', { ns: 'seo' })}` || 'Sammi | About us'
			}
			metaDescription={
				`Sammi | ${t('about_page_description', { ns: 'seo' })}` ||
				'Main information about sammi platform'
			}
		>
			<AboutPageComponent />
		</Seo>
  )
}

export default withLayout(About) 