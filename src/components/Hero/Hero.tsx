import { CustomButton } from "@components/CustomButton";
import { BaseSyntheticEvent, useState } from "react";

import { IoIosRestaurant } from 'react-icons/io'
import { Container, HeroContainer, SearchForm, SearchInput } from "./style";

export interface HeroProps {
  inputText: string
  onSubmitFormEvent: (event: BaseSyntheticEvent) => void
  onChangeInputEvent: (event: BaseSyntheticEvent) => void
}

export function Hero({ inputText, onChangeInputEvent, onSubmitFormEvent }: HeroProps) {
  
  return (
    <HeroContainer>
      <Container className="container">
        <h2>O que você precisa está aqui</h2>
        <p>Acesse seus restaurantes favoritos</p>
        <SearchForm onSubmit={onSubmitFormEvent}>
          <SearchInput>
            <IoIosRestaurant />
            <input 
              value={inputText}
              onChange={onChangeInputEvent}
              placeholder="Nome do restaurante ou prato" 
            />
          </SearchInput>
          <CustomButton type="submit">
            Buscar
          </CustomButton>
        </SearchForm>
      </Container>
    </HeroContainer>
  )  
}