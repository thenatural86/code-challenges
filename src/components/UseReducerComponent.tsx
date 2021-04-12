import { useReducer } from 'react'

const initialState = {
  counter: 100,
}

type ActionTypes =
  | { type: 'increment'; payload: number }
  | { type: 'decrement'; payload: number }

function counterReducer(state: typeof initialState, action: ActionTypes) {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + action.payload }

    case 'decrement':
      return { ...state, counter: state.counter - action.payload }

    default:
      throw new Error('bad action')
  }
}

export default function UseReducerComponent() {
  const [state, dispatch] = useReducer(counterReducer, initialState)

  return (
    <div>
      <div>{state.counter}</div>
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
        Increment
      </button>{' '}
      |
      <button onClick={() => dispatch({ type: 'decrement', payload: 7 })}>
        Decrement
      </button>
    </div>
  )
}
