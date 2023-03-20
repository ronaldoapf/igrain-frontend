import { FormikProvider, Form, useFormik } from "formik";
import { Link } from "react-router-dom";

import { CustomButton } from "@components/CustomButton";
import { CustomInput } from "@components/CustomInput";
import { LoginBody } from "@common/resources/api/auth/types/request";

import { ButtonContainer } from "./style";

export interface LoginFormProps {
  initialValues: LoginBody
  onSubmit: (payload: LoginBody) => void
}

export function LoginForm({ initialValues, onSubmit }: LoginFormProps) {
  const context = useFormik<LoginBody>({
    onSubmit,
    initialValues,
  })
  
  return (
    <FormikProvider value={context}>
      <Form style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <CustomInput type="email" label="E-mail" name="email" />
        <CustomInput type="password" label="Senha" name="password" />
        <ButtonContainer>
          <CustomButton type="submit">Entrar</CustomButton>
          <Link to="/signup">Criar conta</Link>
        </ButtonContainer>
      </Form>
    </FormikProvider>
  )
}