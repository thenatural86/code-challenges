import './styles.css'
import { useEffect, useState, useCallback } from 'react'

const App = () => {
  const [users, setUsers] = useState([])
  const [nameInput, setNameInput] = useState('')
  const [person, setPerson] = useState([])

  const fetchUsers = useCallback(() => {
    fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((data) => setUsers((users) => [...users, ...data.results]))
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  const content = users.map((user, index) => {
    const { name, picture } = user
    return (
      <div key={index}>
        <h3>{name.first}</h3>
        <img src={picture.thumbnail} alt='' />
      </div>
    )
  })

  const nameInputHandler = (e) => {
    setNameInput(e.target.value)
  }

  const formSubmitHandler = (e) => {
    e.preventDefault()
    setPerson([...person, nameInput])
    setNameInput('')
  }

  return (
    <div className='App'>
      <button onClick={fetchUsers}>Get new User</button>
      <form onSubmit={formSubmitHandler}>
        <input type='text' value={nameInput} onChange={nameInputHandler} />
      </form>
      {person + ' '}
      {users && <div>{content}</div>}
    </div>
  )
}

export default App
