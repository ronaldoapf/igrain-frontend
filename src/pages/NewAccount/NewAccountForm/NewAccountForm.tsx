import { UserSubscription } from "@common/resources/api/user/types/request";
import { CustomButton } from "@components/CustomButton";
import { CustomInput } from "@components/CustomInput";
import { FormikProvider, Form, useFormik } from "formik";

export interface NewAccountFormProps {
  initialValues: UserSubscription
  onSubmit: (values: UserSubscription) => void
}

export function NewAccountForm({ onSubmit, initialValues }: NewAccountFormProps) {

  const context = useFormik({
    onSubmit,
    initialValues,
  })

  return (
    <FormikProvider value={context}>
      <Form>
        <CustomInput type="text" label="Nome" name="name" />
        <CustomInput type="email" label="E-mail" name="email" />
        <CustomInput type="password" label="Senha" name="password" />
        <CustomButton type="submit">Criar conta</CustomButton>
      </Form>
    </FormikProvider>
  )
}