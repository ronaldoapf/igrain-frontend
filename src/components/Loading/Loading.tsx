import { LoadingContainer } from "./style";
import { SyncLoader } from 'react-spinners' 
import { useEffect } from "react";

export interface LoadingProps {
  title?: string
  open: boolean
}

export function Loading({ open, title = 'Carregando...' }: LoadingProps) {

  if(open) return (
    <LoadingContainer>
      <SyncLoader color="#F5F5F5"/>
      <h1>{title}</h1>
    </LoadingContainer>
  )

  return null
}