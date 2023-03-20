import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 0 20px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: var(--text-color);
  background-color: var(--primary);
`

export const CardForm = styled.div`
  width: 100%;
  margin-top: 5px;
  max-width: 450px;
  border-radius: 5px;
  padding: 20px 20px;
  background-color: var(--gray);

  button {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`