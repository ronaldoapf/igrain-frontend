import { useQuery } from "@tanstack/react-query";
import { QueryParamsRestaurants, RestaurantApi } from ".";

export function useListRestaurants() {
  return useQuery(['restaurants'], async () => RestaurantApi.listAllRestaurants(), { 
    retry: false
  })
}

export function useFilterRestaurants(query: QueryParamsRestaurants) {
  return useQuery(['restaurants'], async () => RestaurantApi.listAllRestaurants(query), {
    enabled: false
  })
}

export function useGetRestaurant(id: string) {
  return useQuery(['restaurant', id], async () => RestaurantApi.getRestaurantsById(id), {
    enabled: false
  })
}