import { GetServerSideProps } from 'next';
import { ArticleType } from 'src/interfaces/article.interface';
import { Language } from 'src/interfaces/constants.interface';
import { withLayout } from 'src/layousts/layout';
import Seo from 'src/layousts/seo/seo';
import { ArticlePageComponent } from 'src/page-component';
import { Articles } from 'src/services/articel.service';



const ArticlePage = ({ articles }: ArticlesPageProps) => {

	return <Seo metaTitle={'Sammi | Articles'} >
		<ArticlePageComponent artciles={articles} />
	</Seo>
	
};

export default withLayout(ArticlePage);

export const getServerSideProps: GetServerSideProps<ArticlesPageProps> = async ({ req }) => {
	const lng: Language = req.cookies.i18next as Language;
	const articles = await Articles.getArtciles(lng);

	return {
		props: {
			articles,
		},
	};
};

interface ArticlesPageProps extends Record<string, unknown> {
	articles: ArticleType[];
}