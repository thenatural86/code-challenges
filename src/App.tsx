import React, { ReactElement, ReactNode } from 'react'
import './App.css'
import Top from './components/Top'

// import styled from '@emotion/styled'
// import { Name } from "./api";

// You can use regular className from this stylesheet
// import './styles.css'

// interface NameProps {
//   title: string;
//   first: string;
//   last: string;
// }

// You can use Styled Components
// const Wrapper = styled.div`
//   padding: 20px;
//   background-color: #c0cbff;
//   text-align: center;
// `

// conventional props
function Heading({ title }: { title: string }) {
  return <h3>{title}</h3>
}

function HeadingWithContent({
  children,
}: {
  children: ReactNode
}): ReactElement {
  return <h3>{children}</h3>
}

// default props
const defaultContainerProps = {
  heading: <strong>My Heading</strong>,
}

type ContainerProps = { children: ReactNode } & typeof defaultContainerProps

function Container({ heading, children }: ContainerProps): ReactElement {
  return (
    <div>
      <h3>{heading}</h3>
      {children}
    </div>
  )
}

Container.defaultProps = defaultContainerProps

// functional props

function TextWithNumber({
  header,
  children,
}: {
  header: (num: number) => ReactNode
  children: (num: number) => ReactNode
}) {
  const [state, setState] = React.useState<number>(1)

  return (
    <div>
      <h3>{header?.(state)}</h3>
      <div>{children(state)}</div>
      <div>
        <button onClick={() => setState(state + 1)}>Add</button>
      </div>
    </div>
  )
}

// List
function List<ListItem>({
  items,
  render,
}: {
  items: ListItem[]
  render: (item: ListItem) => ReactNode
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  )
}

export default function App() {
  return (
    <div>
      <div className='App'>
        <div>Let's build something fun!</div>
        <Heading title='Hello' />
        <HeadingWithContent children='Hi!' />
        <Container>Foo</Container>
        <TextWithNumber header={(num: number) => <span>Header {num}</span>}>
          {(num: number) => <div>Today's number is {num}</div>}
        </TextWithNumber>
        <List
          items={['Jo', 'Da', 'Ma']}
          render={(item: string) => <div>{item.toLowerCase()}</div>}
        />
      </div>
      <div className='Top'>
        <Top />
      </div>
    </div>
  )
}
