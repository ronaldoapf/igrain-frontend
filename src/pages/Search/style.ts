import styled from "styled-components";

export const SearchContainer = styled.div`
  padding-top: 40px;  
`

export const SearchHeader = styled.div`
  width: 100%;
  display: flex;
   
  
  button {
    margin-bottom: 20px;
  }
`

export const SearchTitle = styled.div`
  gap: 5px;
  display: flex;
  margin-bottom: 20px;
`

export const SearchTerm = styled.p`
  color: var(--primary);
`

export const SearchContent = styled.div`

  gap: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px){ 
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px){ 
    grid-template-columns: repeat(3, 1fr);
  }
`

