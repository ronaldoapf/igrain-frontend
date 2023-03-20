import { api } from "..";
import { UserSubscription } from "./types/request";
import { UserSubscriptionResponse } from "./types/response";

const prefix = '/user'

export const UserApi = {
  async createUser(body: UserSubscription): Promise<UserSubscriptionResponse>{
    const { data } = await api.post(`${prefix}`, body)
    return data
  },
}
