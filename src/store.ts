import { createContext } from 'react'

const initialState = {
  firstName: '',
  lastName: '',
}

export type UserState = typeof initialState

const context = createContext<typeof initialState>(initialState)

export default context
