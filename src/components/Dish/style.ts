import styled from "styled-components";

export const DishContainer = styled.div`
  width: 100%;
  height: 200px ;
  display: flex;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px #eaeaea solid;

  &:hover {
    transform: scale(1.02);
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const DishName = styled.h3`
`

export const Description = styled.span`
  width: 50%;
  color: var(--text-color);
`

export const UnitPrice = styled.span`
  color: var(--primary);
`

export const DishImage = styled.img`
  width: 140px;
  object-fit: contain;
`