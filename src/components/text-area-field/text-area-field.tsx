import { FormControl, FormErrorMessage, FormLabel, Input, InputGroup, Textarea,  } from "@chakra-ui/react"

import {FieldHookConfig, useField,} from 'formik'
import { useTranslation } from "react-i18next"
import { TextAreaFieldProps} from "./text-area.props"

const TextAreaField = ({label, placeholder,resize, height,...props}:TextAreaFieldProps& FieldHookConfig<string>) => {
  const [field, meta,] = useField(props)
  const {t} = useTranslation()
  return (


        	<FormControl mt={15} isRequired isInvalid={!!meta.touched && !!meta.error}>
							<FormLabel>{label}</FormLabel>
							<Textarea  height={150}  placeholder={placeholder} resize={resize} h={height} {...field} />
                             <FormErrorMessage>{t(`${meta.error}`, { ns: 'global' })}</FormErrorMessage>
					   	</FormControl>

  )
}

export default  TextAreaField