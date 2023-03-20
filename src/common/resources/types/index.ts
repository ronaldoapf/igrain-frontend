export interface User {
  id: string
  name: string
  email: string
}

export interface Restaurant {
  id: string
  name: string
  image: string
  dishes?: Dishes
  description: string
}

export interface Dish {
  id: string
  name: string
  image: string
  unitPrice: number
  description?: string
  restaurantId: string
  restaurant: Restaurant
}

export type Dishes = Array<Dish>
export type Restaurants = Array<Restaurant>
