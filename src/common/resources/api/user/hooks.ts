import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { UserApi } from ".";
import { UserSubscription } from "./types/request";

export function useCreateUser() {
  return useMutation(async (body: UserSubscription) => UserApi.createUser(body), {
    onSuccess() {
      toast.success('Usuário criado com sucesso, faça login')
    },
    onError() {
      toast.success('Não foi possível criar o seu usuário, tente novamente mais tarde.')
    }
  })
}