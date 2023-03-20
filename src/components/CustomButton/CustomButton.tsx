import { ButtonContainer } from "./styte";

export interface CustomButtonProps {
  type: "button" | "reset" | "submit" | undefined
  children: string | React.ReactNode
  onClick?: () => void
}

export function CustomButton({ children, type, onClick }: CustomButtonProps) {
  return (
    <ButtonContainer type={type} onClick={onClick}>
      {children}
    </ButtonContainer>
  )
}