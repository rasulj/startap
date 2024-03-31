import {
	Avatar,
	Box,
	Button,
	Flex,
	HStack,
	Icon,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import { DarkLogo, LightLogo } from 'src/icons';
import {  IoIosLogOut} from 'react-icons/io';
import { BiMenuAltLeft, BiUserCircle } from 'react-icons/bi';
import Link from 'next/link';
import { HeaderProps } from './header.props';
import { language } from 'src/config/constants';
import { useTranslation } from 'react-i18next';
import { TbFileSettings,  } from 'react-icons/tb';
import { useRouter } from 'next/router';
import { AiOutlineLogin } from 'react-icons/ai';
import { useAuth } from 'src/hooks/useAuth';
import { useActions } from 'src/hooks/useActions';

const Header = ({ onToggle }: HeaderProps) => {
	const { toggleColorMode, colorMode } = useColorMode();
	const { i18n, t } = useTranslation();
	const { logout} = useActions()
	const router = useRouter();
 const { user }= useAuth()
	const onLanguage = (lng: string) => {
		router.replace(router.asPath);
		i18n.changeLanguage(lng);
	};
const logoutHandler = () => {
		logout();
		router.push('/auth');
	};
	return (
		<Box
			zIndex={1001}
			w={'full'}
			h={'10vh'}
			px={10}
			borderBottom={'1px'}
			pos={'fixed'}
			top={0}
			left={0}
			right={0}
			bg={useColorModeValue('gray.50', 'gray.900')}
			color={useColorModeValue('gray.700', 'gray.200')}
			borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
		>
			<Flex h={'full'} justify={'space-between'} align={'center'}>
				<HStack>
					<Icon
						as={BiMenuAltLeft}
						onClick={onToggle}
						w={6}
						h={6}
						cursor={'pointer'}
					/>
					<Link href={'/'}>
						{colorMode === 'light' ? <DarkLogo /> : <LightLogo />}
					</Link>
				</HStack>
				<HStack>
				
				{user ? (
						<Menu>
							<MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
								<Avatar backgroundColor={'facebook.500'} />
							</MenuButton>
							<MenuList p={0} m={0}>
								<MenuItem
									h={14}
								//	onClick={() => router.push('/setting')}
									fontWeight={'bold'}
									icon={<TbFileSettings fontSize={17} />}
								>
									Settings
								</MenuItem>
								<MenuItem
									h={14}
									onClick={logoutHandler}
									fontWeight={'bold'}
									icon={<IoIosLogOut fontSize={17} />}
								>
									Logout
								</MenuItem>
							</MenuList>
						</Menu>
					) : (
						<>
							<Button
								display={{ base: 'none', md: 'flex' }}
								rightIcon={<BiUserCircle />}
								onClick={() => router.push('/auth')}
								colorScheme={'facebook'}
							>
								{t('login', { ns: 'layout' })}
							</Button>
							<IconButton
								display={{ base: 'flex', md: 'none' }}
								aria-label='login'
								onClick={() => router.push('/auth')}
								icon={<AiOutlineLogin />}
								colorScheme={'facebook'}
								variant={'outline'}
							/>
						</>
					)}
				</HStack>
			</Flex>
		</Box>
	);
};

export default Header;