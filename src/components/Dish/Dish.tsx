import { Description } from "@components/Card/ style"
import { DishContainer, DishImage, DishName, UnitPrice } from "./style"

export interface DishProps {
  name: string
  image: string
  unitPrice: number
  description?: string
}

export function Dish({ name, image, unitPrice, description }: DishProps ) {
  return (
    <DishContainer>
      <div>
        <DishName>{name}</DishName>
        <Description>{description}</Description>
        <UnitPrice>R${unitPrice},00</UnitPrice>
      </div>
      <DishImage src={image} />
    </DishContainer>
  )
}