import { QueryClient } from "@tanstack/react-query";
import { api } from "..";
import { LoginBody } from "./types/request";
import { LoginResponse } from "./types/response";

const prefix = '/auth'

export const AuthApi = {
  async login(body: LoginBody): Promise<LoginResponse>{
    const { data } = await api.post(`${prefix}`, body)
    return data
  }
}

export const queryClient = new QueryClient()
