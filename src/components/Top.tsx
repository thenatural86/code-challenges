import CustomHookComponent from './CustomHookComponent'
import UseContextComponent from './UseContextComponent'
import UseEffectComponent from './UseEffectComponent'
import UseReducerComponent from './UseReducerComponent'
import UseRefComponent from './UseRefComponent'
import UseStateComponent from './UseStateComponent'

export default function Top() {
  return (
    <div>
      <h1>Hooks</h1>
      <h3>UseState</h3>
      <UseStateComponent />
      <h3>UseEffect</h3>
      <UseEffectComponent />
      <h3>UseContext</h3>
      <UseContextComponent />
      <h3>UseReducer</h3>
      <UseReducerComponent />
      <h3>UseRef</h3>
      <UseRefComponent />
      <h3>Custom Hook</h3>
      <CustomHookComponent />
    </div>
  )
}
