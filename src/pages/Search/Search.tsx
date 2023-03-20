import { useEffect, useState } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { AiOutlineArrowLeft } from 'react-icons/ai'

import { useFilterRestaurants } from "@common/resources/api/restaurant/hooks"

import { Card } from "@components/Card";
import { Page } from "@components/Page";
import { Header } from "@components/Header";
import { Loading } from "@components/Loading"
import { CustomButton } from "@components/CustomButton";

import { 
  SearchTerm, 
  SearchTitle, 
  SearchHeader, 
  SearchContent, 
  SearchContainer, 
} from "./style";

export function Search() {
  const navigate = useNavigate()
  const [search, setSearch] = useState<string>('');
  const [searchParams, setSearchParams] = useSearchParams()
  const { data, isFetching, refetch} = useFilterRestaurants({ search })

  useEffect(() => {
    const value = searchParams.get('q')
    if(value) {
      setSearch(value)
    }
  }, [searchParams])

  useEffect(() => {
    if(search) refetch()
  }, [search])

  return (
    <>
      <Loading open={isFetching} />
      <Header />
      <Page title={`${search.charAt(0).toUpperCase() + search.slice(1)} no iGrain`}>
        
        <SearchContainer className="container">
          <SearchHeader className='container'>
            <CustomButton type="button" onClick={() => navigate(-1)}>
              <AiOutlineArrowLeft size="20"/>
              Voltar
            </CustomButton>
          </SearchHeader>

          <SearchTitle>
            <h4>Buscando por</h4>
            <SearchTerm>{search}</SearchTerm>
          </SearchTitle>

          <SearchContent>
            {!data?.length && (
              <p>Não foram encontrados restaurantes ou pratos com essa busca</p>
            )}

            {data?.map((item, index) => {
              return (
                <Link to={`/restaurant/${item.id}`} key={index}>
                  <Card image={item.image} title={item.name} description={item.description}/>
                </Link>
              ) 
            })}
          </SearchContent>
        </SearchContainer>
      </Page>
    </>
  )
}