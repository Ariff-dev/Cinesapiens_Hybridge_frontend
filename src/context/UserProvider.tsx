import { ReactNode, useState } from 'react'
import { UserContext } from './UserContext'

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [login, setLogin] = useState<boolean>(false)

  return (
    <UserContext.Provider value={{ login, setLogin }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
