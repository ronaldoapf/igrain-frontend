import { CustomButton } from "@components/CustomButton";
import apiError from '@assets/apiError.svg'

import { CustomErrorContainer } from "./style";

export interface CustomErrorProps {
  handleRetry: () => void
}


export function CustomError({ handleRetry }: CustomErrorProps) {

 
  
  return (
    <CustomErrorContainer className="container">
      <p>
        API ERROR
      </p>
      <p>
        Aconteceu algum erro com a conexão à API
      </p>
      <img src={apiError} alt="404" />

      <CustomButton type="button" onClick={handleRetry}>
        Tentar Novamente
      </CustomButton>
    </CustomErrorContainer>

  )
}