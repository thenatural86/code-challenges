import UserContext, { UserState } from '../store'
import { useContext, useState } from 'react'

function ConsumerComponent() {
  const user = useContext(UserContext)

  return (
    <div>
      <div>First: {user.firstName}</div>
      <div>Last: {user.lastName}</div>
    </div>
  )
}

export default function UseContextComponent() {
  const [user, setUser] = useState<UserState>({
    firstName: 'Tony',
    lastName: 'Tiger',
  })

  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <button
        onClick={() => setUser({ firstName: 'Philip', lastName: 'Smalls ' })}
      >
        Change Context
      </button>
    </UserContext.Provider>
  )
}
