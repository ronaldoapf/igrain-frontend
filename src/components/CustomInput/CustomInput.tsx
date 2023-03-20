import { useField } from 'formik';
import { memo, useRef } from 'react';
import { InputContainer } from './style';

export interface CustomInputProps {
  type?: string
	name: string
	label?: string
	value?: string
	error?: boolean
	disabled?: boolean
	isSelect?: boolean
	placeholder?: string
	onChange?: () => void
  icon?: React.ReactNode
  props?: any
}

const _CustomInput = ({
	type,
	name,
	icon: IconComponent,
	value,
	label,
	error,
	disabled,
	onChange,
	isSelect,
  ...props
}: CustomInputProps) => {
  
  const [field, meta] = useField(name)
  const errorText = meta.error && meta.touched ? meta.error : ''

  return (
    <>
      <InputContainer 
        value={meta.value} 
        disabled={disabled}
        error={!!meta.error} 
      >
        <label>{label}</label>
        <input {...field} type={type} {...props} />
        {/* {IconComponent && <IconComponent />} */}
      </InputContainer>
      {errorText ? <small style={{color: 'red'}}>{errorText}</small> : null}
    </>
  )
};


export const CustomInput = memo(_CustomInput);


