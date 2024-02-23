
import { FormControl, FormErrorMessage, FormLabel, Input, InputGroup,  } from "@chakra-ui/react"
import { TextFieldProps } from "./text-field.props"
import {FieldHookConfig, useField,ErrorMessage} from 'formik'

const TextField = ({label,type, children, placeholder,disabled, ...props}:TextFieldProps & FieldHookConfig<string>) => {
  const [field, meta,] = useField(props)

  return (
   	<FormControl mt={15} isRequired isInvalid={!!meta.touched && !!meta.error}>
					<FormLabel>{label}</FormLabel>
					<InputGroup >
						<Input focusBorderColor='facebook.500' type={type} placeholder={placeholder} h={14} disabled={disabled} {...field}/>
						{children}
					</InputGroup>
                    <FormErrorMessage>
                        <ErrorMessage name={field.name} />
                    </FormErrorMessage>
				</FormControl>
  )
}

export default  TextField 