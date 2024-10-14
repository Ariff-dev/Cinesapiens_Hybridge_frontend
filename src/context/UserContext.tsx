import { createContext } from 'react'
interface UserContextInterface {
  login: boolean
  setLogin: (login: boolean) => void
}

export const UserContext = createContext<UserContextInterface>({
  login: false,
  setLogin: () => {},
})
