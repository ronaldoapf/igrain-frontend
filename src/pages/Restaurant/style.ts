import styled from "styled-components";

export const RestaurantContainer = styled.div`
  padding-top: 20px;
`

export const RestaurantHeader = styled.div`
  margin-bottom: 20px;

  button {
    gap: 10px;
    display: flex;
    align-items: center;
    justify-items: center;
  }
`

export const RestaurantInfo = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px #eaeaea solid;

  img {
    width: 100px;
  }
`

export const RestaurantContent = styled.div`
  padding-top: 20px;
`

export const Label = styled.p`
  margin-bottom: 20px;
`

export const Dishes = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`