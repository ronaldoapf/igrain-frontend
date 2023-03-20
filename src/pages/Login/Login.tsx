import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Logo } from "@components/Logo";
import { useAuth } from "@hooks/useAuth";
import { LoginForm } from "./LoginForm/LoginForm";
import { userLoginFormData } from "./LoginForm/data";
import { LoginBody } from "@common/resources/api/auth/types/request";

import {  CardForm, LoginContainer } from "./style";
import { toast } from "react-toastify";

export function Login() {
  const navigate = useNavigate()
  const { signIn, authenticated } = useAuth()

  useEffect(() => {
    if(authenticated) navigate('/')
  }, [authenticated])

  const onSubmit = useCallback(async (payload: LoginBody) => {
    try {
      await signIn(payload, navigate)
      toast.success("Login realizado com sucesso")
      navigate('/')
    } catch(error: any) {
      toast.error('Usuário ou senha incorretos')
    }
  }, [])

  return (
    <LoginContainer>
      <Logo />
      <CardForm>
        <LoginForm 
          onSubmit={onSubmit}
          initialValues={userLoginFormData} 
        />
      </CardForm>
    </LoginContainer>
  )
}