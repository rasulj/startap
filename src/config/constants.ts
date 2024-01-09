import { AiOutlineDashboard, AiOutlineDollar } from 'react-icons/ai';
import { FaBookReader, FaDraftingCompass, FaQuestionCircle } from 'react-icons/fa';
import { CiViewList } from 'react-icons/ci';
import { MdImportContacts, MdOutlineContactMail } from 'react-icons/md';
import { AnnouncementIcons, CodingIcons, DesignIcons, LaptopIcons, PersonIcons, PrintIcons } from 'src/icons';

export const navigation = [
	{
		title: 'General',
		links: [
			{
				label: 'Explore',
				route: '/',
				icon: AiOutlineDashboard,
			},
			{
				label: 'Courses',
				route: '/courses',
				icon: CiViewList,
			},
			{
				label: 'Books',
				route: '/books',
				icon: FaBookReader,
			},
			{
				label: 'Articles',
				route: '/articles',
				icon: MdImportContacts,
			},
		],
	},
	{
		title: 'Pages',
		links: [
			{
				label: 'About',
				route: '/about',
				icon: FaDraftingCompass,
			},
			{
				label: 'Contact',
				route: '/contact',
				icon: MdOutlineContactMail,
			},
			{
				label: 'Pricing',
				route: '/pricing',
				icon: AiOutlineDollar,
			},
			{
				label: 'FAQ',
				route: '/faq',
				icon: FaQuestionCircle,
			},
		],
	},
];
export const categories = [
	{
		name: 'Createive Design',
		id: 1,
		icon: DesignIcons,
	},
	{
		name: 'Sales Marketing',
		id: 2,
		icon: AnnouncementIcons,
	},
	{
		name: 'Development IT',
		id: 3,
		icon: CodingIcons,
	},
	{
		name: 'Engineering Architecture',
		id: 4,
		icon: PrintIcons,
	},
	{
		name: 'Personl Development',
		id: 5,
		icon: PersonIcons,
	},
	{
		name: 'Finance Accounting',
		id: 6,
		icon: LaptopIcons,
	},
];
export const responsive = {
  superLargeDesktop: {
   
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};