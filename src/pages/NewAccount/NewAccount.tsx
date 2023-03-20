import { useCreateUser } from "@common/resources/api/user/hooks";
import { UserSubscription } from "@common/resources/api/user/types/request";
import { CustomButton } from "@components/CustomButton";
import { Logo } from "@components/Logo";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { userDataSubscription } from "./data";
import { NewAccountForm } from "./NewAccountForm/NewAccountForm";
import { CardForm, NewAccountContainer, NewAccountHeader } from "./style";

export function NewAccount() {
  const navigate = useNavigate()
  const { mutateAsync } = useCreateUser()

  const onSubmit = (values: UserSubscription) => {
    mutateAsync(values).then(success => {
      navigate('/login')
    })
  }

  return (
    <NewAccountContainer>
      <Logo />
      <CardForm>
        <CustomButton type="button" onClick={() => navigate('/login')}>
          <AiOutlineArrowLeft size="20"/>
          Voltar
        </CustomButton>
        <NewAccountForm 
          onSubmit={onSubmit}
          initialValues={userDataSubscription} 
        />
      </CardForm>
    </NewAccountContainer>
  )
}