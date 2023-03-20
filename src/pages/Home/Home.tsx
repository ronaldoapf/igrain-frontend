import { BaseSyntheticEvent, useCallback, useEffect, useState } from "react"
import { createSearchParams, Link, useNavigate } from "react-router-dom"
import { BsDatabaseX } from 'react-icons/bs'

import { Hero } from "@components/Hero"
import { Page } from "@components/Page"
import { Card } from "@components/Card"
import { useAuth } from "@hooks/useAuth"
import { Header } from "@components/Header"
import { Loading } from "@components/Loading"
import { useListRestaurants } from "@common/resources/api/restaurant/hooks"
import { 
  Restaurants, 
  HomeContainer, 
  HeaderSection, 
  RestaurantContent, 
} from "./style"
import { CustomError } from "@components/CustomError"


export function Home() {
  const navigate = useNavigate()
  const { authenticated } = useAuth()
  const { data: restaurants, error, isLoading, refetch } = useListRestaurants()
  const [inputText, setInputText] = useState('')

  useEffect(() => {
    if(!authenticated) navigate('/login')
  }, [authenticated])
  
  const onChangeInputEvent = (event: BaseSyntheticEvent) => {
    setInputText(event.target.value)
  }

  const onSubmitFormEvent = async (event: BaseSyntheticEvent) => {
    event.preventDefault()
    navigate({
      pathname: 'search',
      search: createSearchParams({
        q: inputText
    }).toString()      
    })
  }

  if(error) return <CustomError handleRetry={refetch} /> 

  return (
    <Page title="iGrain">
      <Header />
      <Loading open={isLoading} />
      <HomeContainer>
        <Hero
          inputText={inputText}
          onSubmitFormEvent={onSubmitFormEvent}
          onChangeInputEvent={onChangeInputEvent}
        />
        <Restaurants className="container">
          <HeaderSection>Lojas</HeaderSection>
          {restaurants?.length === 0 ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center", flexDirection: 'column', gap: '10px' }}>
              <BsDatabaseX size={30} />
              <h1>Não foi possível carregar os restaurantes</h1>
            </div>            
          ) : (
            <RestaurantContent>
              {restaurants?.map(item => {
                return (
                  <Link to={`restaurant/${item.id}`} key={item.id}>
                    <Card 
                      image={item.image} 
                      title={item.name} 
                      description={item.description} 
                    />
                  </Link>
                )
              })}
            </RestaurantContent>
          )}
        </Restaurants>
      </HomeContainer>
    </Page>
  )
}