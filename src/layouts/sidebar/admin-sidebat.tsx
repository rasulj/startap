import {
	Box,
	Button,
	Container,
	Divider,
	HStack,
	Icon,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';
import { adminSidebar, language } from 'src/config/constants';
import { DarkLogo, LightLogo } from 'src/icons';
import { SidebarProps } from './sidebar.props';

const AdminSidebar = ({toggle}:SidebarProps) => {
	const { toggleColorMode, colorMode } = useColorMode();
	const { i18n, t } = useTranslation();
	const router = useRouter();

	const onLanguage = (lng: string) => {
		router.replace(router.asPath);
		i18n.changeLanguage(lng);
	};

	return (
		<Box
		zIndex={1001}
		w={{ base: 'full', lg: '300px' }}
		h={'90vh'}
		bg={useColorModeValue('gray.50', 'gray.900')}
		color={useColorModeValue('gray.700', 'gray.200')}
		borderRight={'1px'}
		borderRightColor={useColorModeValue('gray.200', 'gray.700')}
		pos={'fixed'}
		left={{ base: toggle ? 0 : '-100%', lg: 0 }}
		top={'10vh'}
		overflowY={'scroll'}
		css={{
			'&::-webkit-scrollbar': { width: '1px' },
			'&::-webkit-scrollbar-track': { width: '1px' },
			'&::-webkit-scrollbar-thumb': { background: 'transparent' },
		}}
		transition={'all .4s ease'}
		>
			<Container mt={5}>
				
			
				{adminSidebar.map((item, idx) => {
					const active = `/admin/${router.pathname.split('/')[2]}` == `/admin/${item.route}`;
                console.log(item.route)
					return (
						<Link href={`/admin/${item.route}`} key={idx}>
							<Button
								colorScheme={'facebook'}
								variant={active ? 'solid' : 'ghost'}
								w={'full'}
								justifyContent={'flex-start'}
								h={14}
								mt={5}
							>
								<HStack gap={2}>
									<Icon as={item.icon} />
									<Text>{t(item.name, { ns: 'admin' })}</Text>
								</HStack>
							</Button>
						</Link>
					);
				})}
			</Container>
		</Box>
	);
};

export default AdminSidebar;