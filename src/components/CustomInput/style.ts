import styled, {css} from 'styled-components'

const floatingLabelStyles = css`
  label {
    font-size: 10px;
    top: 6px;
  }
`
const errorStyles = css`
  border-color: #FF0000;
  label {
    color: #FF0000;
  }
`
export interface InputContainer {
  error: boolean
  value: boolean
  disabled?: boolean
  isSelect?: boolean
}

export const InputContainer = styled.div<InputContainer>`
  height: 40px;
  width: 100%;
  display: flex;
  background: #fff;
  padding: 6px 12px;
  position: relative;
  border-radius: 5px;
  align-items: flex-end;
  border: 1px solid var(--primary);
  ${({ disabled }) => disabled && css`
    backgrond: #ccc;
  `}
  input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 13px;
    background: transparent;
    @media (min-width: 768px) {
      font-size: 14px;
    }
  }


  label {
    top: 13px;
    left: 12px;
    color: #666;
    line-height: 1;
    font-size: 14px;
    position: absolute;
    pointer-events: none;
    transition: top .1s linear, font-size .1s linear;
  }
  &:focus-within {
    ${({ isSelect }) => !isSelect && css`
      ${floatingLabelStyles}
      border: 1px solid var(--primary);
      label {
        color: var(--primary);
      }
    `}
    ${({ error }) => error && errorStyles}
  }
  ${({ value }) => Boolean(value) && floatingLabelStyles}
  ${({ error }) => error && errorStyles}
`