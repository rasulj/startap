import {
	AiFillAmazonCircle,
	AiOutlineDashboard,
	AiOutlineDollar,
	AiOutlineUnorderedList,
} from 'react-icons/ai';
import { CiViewList } from 'react-icons/ci';
import {
	FaApplePay,
	FaBookReader,
	FaChalkboardTeacher,
	FaDraftingCompass,
	FaFirstdraft,
	FaListAlt,
	FaQuestionCircle,
	FaUserGraduate,
} from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { ImBooks } from 'react-icons/im';
import { MdImportContacts, MdOutlineContactMail, MdOutlineCreateNewFolder } from 'react-icons/md';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import { SiAmd, SiCisco, SiLogitech, SiSpotify } from 'react-icons/si';
import {
	AnnouncementIcons,
	CodingIcons,
	DesignIcons,
	EngIcons,
	FinishRightIcon,
	LaptopIcons,
	OnlineCourseIcon,
	OnlineLearningIcon,
	OnlineStudentIcon,
	PersonIcons,
	PrintIcons,
	RightLineIcon,
	RusIcons,
	TeachVal1Icon,
	TeachVal2Icon,
	TeachVal3Icon,
	
	UzbIcons,
} from 'src/icons';
import TurkIcon from 'src/icons/turk';
import { CourseType } from 'src/interfaces/course.interface';

export const courseCategory = [
	'Front-End',
	'Back-End',
	'Full-Stack',
	'Mobile Application',
	'Web Design',
	'Graphic Design',
];

export const courseLevel = ['Beginner', 'Intermediate', 'Expert'];

export const navigation = [
	{
		title: 'sidebar_title_1',
		links: [
			{
				label: 'sidebar_title_1_explore',
				route: '/',
				icon: AiOutlineDashboard,
			},
			{
				label: 'sidebar_title_1_courses',
				route: '/courses',
				icon: CiViewList,
			},
			{
				label: 'sidebar_title_1_books',
				route: '/books',
				icon: FaBookReader,
			},
			{
				label: 'sidebar_title_1_articles',
				route: '/articles',
				icon: MdImportContacts,
			},
		],
	},
	{
		title: 'sidebar_title_2',
		links: [
			{
				label: 'sidebar_title_2_about',
				route: '/about',
				icon: FaDraftingCompass,
			},
			{
				label: 'sidebar_title_2_contact',
				route: '/contact',
				icon: MdOutlineContactMail,
			},
			{
				label: 'sidebar_title_2_pricing',
				route: '/pricing',
				icon: AiOutlineDollar,
			},
			{
				label: 'sidebar_title_2_faq',
				route: '/faq',
				icon: FaQuestionCircle,
			},
		],
	},
];

export const categories = [
	{
		name: 'design_category',
		id: 1,
		icon: DesignIcons,
	},
	{
		name: 'sales_marketing_category',
		id: 2,
		icon: AnnouncementIcons,
	},
	{
		name: 'development_it_category',
		id: 3,
		icon: CodingIcons,
	},
	{
		name: 'engineering_architecture_category',
		id: 4,
		icon: PrintIcons,
	},
	{
		name: 'personl_development_category',
		id: 5,
		icon: PersonIcons,
	},
	{
		name: 'finance_accounting_category',
		id: 6,
		icon: LaptopIcons,
	},
];

export const trustedCompeny = [
	AiFillAmazonCircle,
	SiAmd,
	SiCisco,
	FaApplePay,
	SiLogitech,
	SiSpotify,
];

export const language = [
	{ nativeLng: 'English', lng: 'en', icon: EngIcons },
	{ nativeLng: "O'zbek", lng: 'uz', icon: UzbIcons },
	{ nativeLng: 'Türkçe', lng: 'tr', icon: TurkIcon },
	{ nativeLng: 'Русский', lng: 'ru', icon: RusIcons },
];

export const howItWorks = [
	{ title: 'how_it_works_first_step', icon: OnlineCourseIcon },
	{ title: '', icon: RightLineIcon },
	{ title: 'how_it_works_second_step', icon: OnlineLearningIcon },
	{ title: '', icon: FinishRightIcon },
	{ title: 'how_it_works_third_step', icon: OnlineStudentIcon },
];

export const coursesFilter = [
	{
		title: 'filter_category_title',
		id: 'category',
		categoryList: courseCategory.map(c => ({ name: c, id: c })),
	},
	{
		title: 'fitler_rating_title',
		id: 'rating',
		categoryList: [
			{ name: 'fitler_rating_item_1', id: '4.5' },
			{ name: 'fitler_rating_item_2', id: '4' },
			{ name: 'fitler_rating_item_3', id: '3.5' },
			{ name: 'fitler_rating_item_4', id: '3' },
		],
	},
	{
		title: 'filter_language_title',
		id: 'language',
		categoryList: [
			{ name: 'filter_language_item_1', id: 'en' },
			{ name: 'filter_language_item_2', id: 'ru' },
			{ name: 'filter_language_item_3', id: 'uz' },
			{ name: 'filter_language_item_4', id: 'tr' },
		],
	},
	{
		title: 'filter_level_title',
		id: 'level',
		categoryList: courseLevel.map(c => ({ name: c, id: c })),
	},
];



export const createBooksCategory = [
	'programming',
	'design',
	'business',
	'history',
	'writing',
	'lifestyle',
];

export const booksCategory = [
	{
		label: 'filter_all_category',
		id: 'all-categories',
	},
	{
		label: 'filter_programmin',
		id: 'programming',
	},
	{
		label: 'filter_design',
		id: 'design',
	},
	{
		label: 'filter_business',
		id: 'business',
	},
	{
		label: 'filter_history',
		id: 'history',
	},
	{
		label: 'filter_writing',
		id: 'writing',
	},
	{
		label: 'filter_lifestyle',
		id: 'lifestyle',
	},
];

export const faq = [
	{
		question: 'faq_question_1',
		answer: 'faq_answer_1',
	},
	{
		question: 'faq_question_2',
		answer: 'faq_answer_2',
	},
	{
		question: 'faq_question_3',
		answer: 'faq_answer_3',
	},
	{
		question: 'faq_question_4',
		answer: 'faq_answer_4',
	},
	{
		question: 'faq_question_5',
		answer: 'faq_answer_5',
	},
	{
		question: 'faq_question_6',
		answer: 'faq_answer_6',
	},
	{
		question: 'faq_question_7',
		answer: 'faq_answer_7',
	},
];

export const avatars = [
	{
		name: 'Ryan Florence',
		url: 'https://bit.ly/ryan-florence',
	},
	{
		name: 'Segun Adebayo',
		url: 'https://bit.ly/sage-adebayo',
	},
	{
		name: 'Kent Dodds',
		url: 'https://bit.ly/kent-c-dodds',
	},
	{
		name: 'Prosper Otemuyiwa',
		url: 'https://bit.ly/prosper-baba',
	},
	{
		name: 'Christian Nwamba',
		url: 'https://bit.ly/code-beast',
	},
];

export const voiceLanguages = [
	{
		language: 'en',
		codes: 'en-US',
		voiceUrl: 'Google US English',
	},
	{
		language: 'tr',
		codes: 'tr-TR',
		voiceUrl: 'Yelda',
	},
	{
		language: 'ru',
		codes: 'ru-RU',
		voiceUrl: 'Milena',
	},
];

export const teachValues = [
	{
		title: 'teach_your_way',
		description: 'teach_your_way_description',
		icon: TeachVal1Icon,
	},
	{
		title: 'inspire_learners',
		description: 'inspire_learners_ddescription',
		icon: TeachVal2Icon,
	},
	{
		title: 'get_rewarded',
		description: 'get_rewarded_description',
		icon: TeachVal3Icon,
	},
];

export const instructorSidebar = [
	{
		name: 'sidebar_students',
		icon: FaUserGraduate,
		route: 'students',
	},
	{
		name: 'sidebar_courses',
		icon: FaListAlt,
		route: 'courses',
	},
	{
		name: 'sidebar_create_course',
		icon: MdOutlineCreateNewFolder,
		route: 'create-course',
	},
	{
		name: 'sidebar_edit_courses',
		icon: FiEdit,
		route: 'edit-courses',
	},
	{
		name: 'sidebar_draft_courses',
		icon: FaFirstdraft,
		route: 'draft-courses',
	},
	{
		name: 'sidebar_revenue',
		icon: RiMoneyDollarBoxLine,
		route: 'revenue',
	},
];

export const courseusers = [
	{
		id: 1,
		email: 'ab@gmail.com',
		fullName: 'Samar Badriddinov',
		year: 2022,
		userGain: 100,
	},
	{
		id: 2,
		email: 'ab@gmail.com',
		fullName: 'Osman Ali',
		year: 2022,
		userGain: 450,
	},
	{
		id: 3,
		year: 2023,
		fullName: 'Shox Abdulloh',
		email: 'ab@gmail.com',
		userGain: 550,
	},
	{
		id: 4,
		year: 2023,
		fullName: 'Abdulaziz Alimov',
		email: 'ab@gmail.com',
		userGain: 1000,
	},
	{
		id: 5,
		year: 2023,
		fullName: 'Yusuf Khamdamov',
		email: 'ab@gmail.com',
		userGain: 1500,
	},
];

export const instructorUsers = [
	{
		id: 1,
		email: 'ab@gmail.com',
		fullName: 'Samar Badriddinov',
		job: 'Software Engineer',
		socialMedia: 'https://youtube.com',
	},
	{
		id: 2,
		email: 'ab@gmail.com',
		fullName: 'Osman Ali',
		job: 'JavaScript developer',
		socialMedia: 'https://youtube.com',
	},
	{
		id: 3,
		email: 'ab@gmail.com',
		fullName: 'Shox Abdulloh',
		job: 'ReactJS developer',
		socialMedia: 'https://youtube.com',
	},
	{
		id: 4,
		fullName: 'Abdulaziz Alimov',
		email: 'ab@gmail.com',
		job: 'Software Engineer',
		socialMedia: 'https://youtube.com',
	},
	{
		id: 5,
		fullName: 'Yusuf Khamdamov',
		email: 'ab@gmail.com',
		job: 'Backend Engineer',
		socialMedia: 'https://youtube.com',
	},
];

export const coursePrice = [0 ,10, 20, 30, 40, 50];

export const courseLng = ['en', 'uz', 'ru', 'tr'];

export const adminSidebar = [
	{
		name: 'user_section_title',
		icon: FaUserGraduate,
		route: 'users',
	},
	{
		name: 'instructors_section_title',
		icon: FaChalkboardTeacher,
		route: 'instructors',
	},
	{
		name: 'courses_section_title',
		icon: AiOutlineUnorderedList,
		route: 'courses',
	},
	{
		name: 'books_section_title',
		icon: ImBooks,
		route: 'books',
	},
];