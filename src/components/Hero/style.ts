import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100%;
  display: flex;
  padding: 50px 0;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #EAEAEA;
`

export const SearchForm = styled.form`
  gap: 10px;  
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  button {
    gap: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 768px) {
    width: auto;
    flex-direction: row;

    button {
      width: auto;
    }
  }
`

export const Container = styled.div`
  gap: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const SearchInput = styled.div`
  width: 100%;
  height: 41px;
  display: flex;
  padding-left: 10px;
  border-radius: 5px;
  align-items: center;
  border: 1px transparent solid;
  background-color: var(--white);

  svg {
    font-size: 26px;
    color: var(--primary);
  }

  input { 
    width: 100%;
    border: none;
    outline: none;
    padding-left: 10px;
    border-radius: 5px;
    color: var(--primary);
    transition: ease-in-out .2s;
  }

  &:focus-within {
    border: 1px var(--primary) solid;
  }

  @media (min-width: 768px) {
   width: 400px; 
  }
`
