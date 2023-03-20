import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AiOutlineArrowLeft } from "react-icons/ai"

import { useGetRestaurant } from "@common/resources/api/restaurant/hooks"

import { Page } from "@components/Page"
import { Dish } from "@components/Dish"
import { Header } from "@components/Header"
import { Loading } from "@components/Loading"
import { CustomButton } from "@components/CustomButton"

import { 
  Label, 
  Dishes,
  RestaurantInfo, 
  RestaurantHeader, 
  RestaurantContent, 
  RestaurantContainer, 
} from "./style"

export function Restaurant() {
  const { id } = useParams() 
  const navigate = useNavigate()
  
  const { data, isFetching, refetch } = useGetRestaurant(id as string)
  
  useEffect(() => {
    if(id) refetch()
  }, [id])

  return (
    <>
      <Loading open={isFetching} />
      <Header />
      <Page title={`${data?.name} :: iGrain`}>
        <RestaurantContainer className="container">
          <RestaurantHeader>
            <CustomButton type="button" onClick={() => navigate(-1)}>
              <AiOutlineArrowLeft size="20"/>
              Voltar
            </CustomButton>
          </RestaurantHeader>

          <RestaurantInfo>
            <img src={data?.image} />
            <h1>{data?.name}</h1>
          </RestaurantInfo>

          <RestaurantContent>
            <Label>Cardápio</Label>
            <Dishes>
              {data?.dishes?.map(item => {
                return (
                  <Dish 
                    key={item.id} 
                    name={item.name} 
                    image={item.image} 
                    unitPrice={item.unitPrice} 
                    description={item.description} 
                  />
                )
              })}
            </Dishes>

          </RestaurantContent>          
        </RestaurantContainer>
      </Page>
    </>
  )
}

