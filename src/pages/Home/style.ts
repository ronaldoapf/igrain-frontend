import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-bottom: 20px;
  background-color: var(--white);
`

export const SearchResponse = styled.section`
  width: 100%;
  display: flex;
  max-height: 300px;
  overflow: auto;
  padding: 40px 0;
  background-color: var(--primary);

  h2{
    text-align: center;
    margin-bottom: 20px;
  }
`

export const Restaurants = styled.section`
  display: flex;
  padding-top: 20px;
  flex-direction: column;

  h2 {
    margin-bottom: 20px;
  }
`

export const HeaderSection = styled.h2`
  margin-bottom: 20px;
`
export const RestaurantContent = styled.div`

  gap: 20px;
  display: flex;
  flex-direction: column;

  @media(min-width: 768px) {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(2, 1fr);
  }
`