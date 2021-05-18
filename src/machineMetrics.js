import './styles.css'
import { useState, useEffect } from 'react'

const App = () => {
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const [displayComments, setDisplayComments] = useState(null)

  const fetchPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const showComments = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((response) => response.json())
      .then((data) => setComments(data))
    if (id === displayComments) {
      setDisplayComments(null)
    } else {
      setDisplayComments(id)
    }
  }

  console.log(comments)

  let commentList = comments.map((comment) => {
    const { id, name, email, body } = comment
    return (
      <div key={id}>
        <p>{name}</p>
        <p>{email}</p>
        <p>{body}</p>
      </div>
    )
  })

  let content = posts.map((post) => {
    const { id, title, body } = post
    return (
      <div key={id} className='container'>
        <div className='card'>
          <h4 className='title'>{title}</h4>
          <p className='body'>{body}</p>
          <button onClick={() => showComments(id)}>Show Comments</button>
          {displayComments === id && commentList}
        </div>
      </div>
    )
  })

  return <div className='App'>{content}</div>
}

export default App
