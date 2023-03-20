import styled from "styled-components";

export const CardContainer = styled.div`
  gap: 12px;
  display: flex;
  padding: 20px;
  cursor: pointer;
  align-items: center;
  border-radius: 8px;
  transition: all .2s linear;
  background-color: var(--white);
  box-shadow: 0 2px 8px rgba(0,0,0,.12);

  &:hover {
    transform: scale(1.02);
  }

  img {
    width: 80px;
  }
`
export const Title = styled.p`
  font-weight: 600;
`

export const Description = styled.p`
  font-size: 14px;
`