import {
	Box,
	Button,
	Checkbox,
	FormControl,
	FormLabel,
	Heading,
	HStack,
	Icon,
	Input,
	InputGroup,
	InputRightElement,
	Stack,
	Text,
	Toast,
	useColorModeValue,
	useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { LoginProps } from './login.props';
import { useActions } from 'src/hooks/useActions';
import { Form, Formik } from 'formik';
import TextField from '../text-filed/text-filed';
import { AuthValidation } from 'src/validations/auth.validation';
import { InterfaceEmailAndPassword } from 'src/store/user/user.interface';
import ErrorAlert from '../error-alert/error-alert';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { useRouter } from 'next/router';

const Login = ({ onNavigateStateComponent }: LoginProps) => {
	const [show, setShow] = useState<boolean>(false);

	const { t } = useTranslation();
    const {error ,isLoading} = useTypedSelector( state => state.user)
	const toggleShow = () => setShow(prev => !prev);
 const { login ,clearError} = useActions()

 const router = useRouter()
  
 const toast = useToast()

	const onSubmit = (formData:InterfaceEmailAndPassword)=>{

        login({email:formData.email , password:formData.password ,callback:()=>{		
		toast({title: `${t('successfully_logged', { ns: 'global' })}`,status:'info',isClosable:true ,position:'top-right'})
		router.push('/')
		}})
	

	}
	return (
		<Stack spacing={4}>
			<Heading
				color={useColorModeValue('gray.900', 'gray.200')}
				lineHeight={1.1}
				fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
			>
				{t('login_title', { ns: 'global' })}
				<Text as={'span'} bgGradient='linear(to-r, gray.400,facebook.400)' bgClip='text'>
					!
				</Text>
			</Heading>
			<Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
				{t('login_description', { ns: 'global' })}
			</Text>
			<Formik initialValues={{email:'' ,password:''}} onSubmit={onSubmit} validationSchema={AuthValidation.login}>
				<Form>
						<>{error && <ErrorAlert title={error as string} clearHandler={clearError} />}</>
					<TextField name='email' label={t('login_input_email_label', { ns: 'global' })} type='email'  placeholder={'info@sammi.ac'}/>
					<TextField name='password' label={t('login_input_password_label', { ns: 'global' })} type={!show ? 'password' : 'text'}   placeholder={'******'}>
						<InputRightElement pt={4}>
						<Icon as={!show ? AiOutlineEye : AiOutlineEyeInvisible} cursor={'pointer'} onClick={toggleShow} />
					</InputRightElement>
					</TextField>
	  			    <HStack justify={'space-between'} my={5}>
				<Checkbox colorScheme={'facebook'}>{t('auth_remember_me', { ns: 'global' })}</Checkbox>
				
					<Box as={'a'} color={'teal.500'} _hover={{ textDecoration: 'underline' }} 
					onClick={()=> onNavigateStateComponent('account-recovery')}>
						{t('auth_forgot_password', { ns: 'global' }) }
					</Box>
			
	      			</HStack>
					<Button
						w={'full'}
						bgGradient='linear(to-r, facebook.400,gray.400)'
							color={'white'}
						_hover={{ bgGradient: 'linear(to-r, facebook.500,gray.500)', boxShadow: 'xl' }}
							h={14}
							type='submit'
							isLoading={isLoading}
							loadingText={`${t('loading', { ns: 'global' })}`}
						>
				{t('login_btn', { ns: 'global' })}
			</Button>
				</Form>
			</Formik>
		
			<Text>
				{t('login_not_account_yet', { ns: 'global' })}{' '}
				<Box
					as={'span'}
					onClick={() => onNavigateStateComponent('register')}
					color={'teal.500'}
					cursor={'pointer'}
					_hover={{ textDecoration: 'underline' }}
				>
					{t('login_redirect_to_register', { ns: 'global' })}
				</Box>
			</Text>
		</Stack>
	);
};
export default Login;