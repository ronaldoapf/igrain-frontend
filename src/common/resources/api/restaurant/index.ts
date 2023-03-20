import { Restaurant, Restaurants } from "@common/resources/types";
import { api } from "..";

const prefix = '/restaurant'

export interface QueryParamsRestaurants {
  search?: string
}

export const RestaurantApi = {
  async listAllRestaurants(search?: QueryParamsRestaurants): Promise<Restaurants>{
    const { data } = await api.get(`${prefix}`, { params: search })
    return data
  },

  async getRestaurantsById(id: String): Promise<Restaurant>{
    const { data } = await api.get(`${prefix}/${id}`)
    return data
  },
}
