import styled from "styled-components";

export const NewAccountContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: var(--primary);
`

export const NewAccountHeader = styled.div`
  width: 100%;
`

export const CardForm = styled.div`
  width: 100%;
  margin-top: 5px;
  max-width: 450px;
  border-radius: 5px;
  padding: 20px 20px;
  background-color: var(--gray); 

  button {
    gap: 10px;
    display: flex;
    margin-bottom: 10px;
    align-items: center;
  }

  form {
    gap: 10px;
    display: flex;
    flex-direction: column;

    button {
      width: 100%;
      align-items: center;
      justify-content: center;
    }
  }
`