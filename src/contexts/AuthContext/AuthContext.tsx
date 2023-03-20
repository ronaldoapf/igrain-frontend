import { createContext, useCallback, useEffect, useState } from "react";
import { NavigateFunction } from "react-router-dom";

import { User } from "@common/resources/types";
import { AuthApi } from "@common/resources/api/auth";
import { LoginBody } from "@common/resources/api/auth/types/request";
import { LoginResponse } from "@common/resources/api/auth/types/response";

import { AuthProviderProps, AuthProviderType } from "./types";
import { interceptorHandler } from "@common/resources/api/interceptorHandler";

const AuthContext = createContext<AuthProviderType>({ } as AuthProviderType)

export function AuthProvider({ children }: AuthProviderProps) {
  const [authenticated, setAuthenticated] = useState(false)
  const [userData, setUserData] = useState<User | null>(null)

  useEffect(() => {
    const user = localStorage.getItem('@iGrainUser');
    if(user) {
      setAuthenticated(true)
      interceptorHandler.setTokenInterceptor()
      setUserData(JSON.parse(user));
    }
    }, []);

  const signIn = useCallback(async(payload: LoginBody, navigate: NavigateFunction): Promise<LoginResponse> => {
    const { token, user } = await AuthApi.login(payload)
    localStorage.setItem('@iGrainToken', token)
    localStorage.setItem('@iGrainUser', JSON.stringify(user))
    interceptorHandler.setTokenInterceptor()
    setAuthenticated(true)
    navigate('/')
    return { token, user }
  }, [])

  const signOut = useCallback(async (): Promise<void> => {
    localStorage.removeItem('@iGrainToken')
    localStorage.removeItem('@iGrainUser')
    interceptorHandler.removeTokenInterceptor()
    setAuthenticated(false)
    setUserData(null)
  }, [])

  return (
    <AuthContext.Provider value={{ signIn, signOut, userData, authenticated: authenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext }