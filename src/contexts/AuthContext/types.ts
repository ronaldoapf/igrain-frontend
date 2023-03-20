import { NavigateFunction } from "react-router-dom"

import { User } from "@common/resources/types"
import { LoginBody } from "@common/resources/api/auth/types/request"
import { LoginResponse } from "@common/resources/api/auth/types/response"

export interface AuthProviderProps {
  children: React.ReactNode
}

export interface UserInfoProps {
  name: string
  email: string
  username: string
}

export interface AuthProviderType {
  userData: User | null
  authenticated: boolean
  signOut: () => Promise<void>
  signIn: (payload: LoginBody, navigate: NavigateFunction) => Promise<LoginResponse>
}