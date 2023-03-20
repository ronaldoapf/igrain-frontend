import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

const useAuth = () => {
  const data = useContext(AuthContext)
  if(!data) {
    throw Error('AuthContext must be used within AuthProvider')
  }
  return data
}

export { useAuth }