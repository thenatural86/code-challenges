import React, { useEffect, useState } from 'react'

export default function App() {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch('https://randomuser.me/api/')
      .then((resp) => resp.json())
      .then((data) => {
        setUsers([...users, ...data.results])
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(users)

  return (
    <div className='App'>
      <div>
        {users &&
          users.map((user, index) => {
            return (
              <div key={index}>
                <h5>{user.name.first}</h5>
                <img src={user.picture.thumbnail} alt='' />
              </div>
            )
          })}
      </div>
      <button onClick={() => fetchData()}>Add User</button>
    </div>
  )
}
