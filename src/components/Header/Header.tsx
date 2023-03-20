import { useAuth } from '@hooks/useAuth'
import { BiExit } from 'react-icons/bi'

import { Logo } from '../Logo'
import { HeaderContainer } from './style'

export function Header() {
  const { signOut } = useAuth()
  return (
    <HeaderContainer>
      <Logo />
      <button type="button" onClick={signOut}>
        <BiExit size={30} />
      </button>
    </HeaderContainer>
  )
}