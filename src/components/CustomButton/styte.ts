import styled from "styled-components";

export const ButtonContainer = styled.button`
  
  color: #fff;
  display: flex;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  padding: 10px 30px;
  flex-direction: row;
  align-items: center;
  background-color: #85be38;
  border: solid #85be38 0px;
  transition: .3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

  &:hover{
    border: none;
    color: #85be38;
    padding: 10px 30px;
    background-color: #ffffff;
    transform: translateY(-0px);
  }
`