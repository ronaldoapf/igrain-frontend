import { CardContainer, Description, Title } from "./ style";

export interface CardProps {
  image: string
  title: string
  description: string
}

export function Card({ image, title, description }: CardProps) {
  return (
    <CardContainer>
      <img src={image}/>
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
    </CardContainer>
  )
}