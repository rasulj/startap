
import {
	Box,
	Button,
	Checkbox,
	Flex,
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
	useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useShowPassword } from 'src/hooks/useShowPassword';
import { RegisterProps } from './register.props';
import { useDispatch, useSelector } from 'react-redux';
import { allActions } from 'src/store/root.action';
import { useActions } from 'src/hooks/useActions';
import { Form, Formik } from 'formik';
import TextField from '../text-field/text-field';
import { InterfaceEmailAndPassword } from 'src/store/user/user.interface';
import { AuthValidation } from 'src/validations/auth.validation';
import ErrorAlert from '../error-alert/error-alert';
import { useState } from 'react';
import { RootState } from 'src/store/store';
import { useTypedSelector } from 'src/hooks/useTypedSelector';

const Register = ({ onNavigateStateComponent }: RegisterProps) => {
	const { show, toggleShow, showConfirm, toggleShowConfirm } = useShowPassword();
	const { t } = useTranslation();
 const {register}= useActions()
const {error , isLoading}= useTypedSelector(state => state.user)

 const onSubmit = (formData:InterfaceEmailAndPassword)=>{
 register({email:formData.email , password:formData.password})
 
}
	return (
		<Stack spacing={4}>
			<Heading
				color={useColorModeValue('gray.900', 'gray.200')}
				lineHeight={1.1}
				fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
			>
				{t('register_title', { ns: 'global' })}
				<Text as={'span'} bgGradient='linear(to-r, gray.400,facebook.400)' bgClip='text'>
					!
				</Text>
			</Heading>
			<Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
				{t('register_description', { ns: 'global' })}
			</Text>
			
			<Formik onSubmit={onSubmit} initialValues={{email:'' ,password:'' ,confirmPassword: ''}}  validationSchema={AuthValidation.register()}>
				<Form>
				<>{error && <ErrorAlert title={error as string} />}</>
					
					
					<TextField name='email' type='text' label={t('login_input_email_label', { ns: 'global' })} />
	                 	<Flex gap={4} >
							<TextField name='password' type={!show ? 'password' : 'text'} 
							label={t('login_input_password_label', { ns: 'global' })}
							placeholder={'****'}
							>
								<InputRightElement pt={4}>
							<Icon as={!show ? AiOutlineEye : AiOutlineEyeInvisible} cursor={'pointer'} onClick={toggleShow} />
						    </InputRightElement>
							</TextField>
							<TextField  name='confirmPassword' type={!showConfirm ? 'password' : 'text'} 
							label={t('register_input_confirm_password_label', { ns: 'global' })}
							placeholder={'****'}
							>
								<InputRightElement pt={4}>
							<Icon as={!show ? AiOutlineEye : AiOutlineEyeInvisible} cursor={'pointer'} onClick={toggleShowConfirm} />
						    </InputRightElement>
							</TextField>
						</Flex>	
							<HStack justify={'space-between'}my={5}>
				<Checkbox colorScheme={'facebook'}>{t('auth_remember_me', { ns: 'global' })}</Checkbox>
				<Link href={'/account-recovery'}>
					<Box as={'a'} color={'teal.500'} _hover={{ textDecoration: 'underline' }}>
						{t('auth_forgot_password', { ns: 'global' })}
					</Box>
				</Link>
			</HStack>
			<Button
		    	type='submit'
				w={'full'}
				bgGradient='linear(to-r, facebook.400,gray.400)'
				color={'white'}
				_hover={{ bgGradient: 'linear(to-r, facebook.500,gray.500)', boxShadow: 'xl' }}
				h={14}	
				isLoading={isLoading}
				loadingText={'Loading...'}
			>
				{t('register_btn', { ns: 'global' })}
			</Button>
				</Form>
			</Formik>
			<Text>
				{t('register_already_have_account', { ns: 'global' })}{' '}
				<Box
					as={'span'}
					onClick={() => onNavigateStateComponent('login')}
					color={'teal.500'}
					cursor={'pointer'}
					_hover={{ textDecoration: 'underline' }}
				>
					{t('register_redirect_to_login', { ns: 'global' })}
				</Box>
			</Text>
		</Stack>
	);
};

export default Register;