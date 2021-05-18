import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const rowStyle = {
  display: 'flex',
}

const squareStyle = {
  width: '60px',
  height: '60px',
  backgroundColor: '#ddd',
  margin: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  color: 'white',
}

const boardStyle = {
  backgroundColor: '#eee',
  width: '208px',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  border: '3px #eee solid',
}

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
}

const instructionsStyle = {
  marginTop: '5px',
  marginBottom: '5px',
  fontWeight: 'bold',
  fontSize: '16px',
}

const buttonStyle = {
  marginTop: '15px',
  marginBottom: '16px',
  width: '80px',
  height: '40px',
  backgroundColor: '#8acaca',
  color: 'white',
  fontSize: '16px',
}

const Square = ({ value, declareSquare }) => {
  return (
    <div className='square' style={squareStyle} onClick={declareSquare}>
      {value}
    </div>
  )
}

const Board = () => {
  const [squareX, setSquareX] = useState(true)
  const [boardSquares, setBoardSquares] = useState(Array(9).fill(null))

  const clickHandler = (idx) => {
    console.log('yolo')
    const squares = [...boardSquares]
    if (getWinner(boardSquares) || squares[idx]) return

    squares[idx] = squareX ? 'X' : 'O'

    setBoardSquares(squares)
    setSquareX(!squareX)
  }

  const renderSquare = (idx) => {
    return (
      <Square
        value={boardSquares[idx]}
        declareSquare={() => clickHandler(idx)}
      />
    )
  }

  const winner = getWinner(boardSquares)

  return (
    <div style={containerStyle} className='gameBoard'>
      <div id='statusArea' className='status' style={instructionsStyle}>
        Next player: <span>{squareX ? 'X' : 'O'}</span>
      </div>
      <div id='winnerArea' className='winner' style={instructionsStyle}>
        Winner: <span>{winner}</span>
      </div>
      <button
        style={buttonStyle}
        onClick={() => {
          setBoardSquares(Array(9).fill(null))
          setSquareX(true)
        }}
      >
        Reset
      </button>
      <div style={boardStyle}>
        <div className='board-row' style={rowStyle}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className='board-row' style={rowStyle}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className='board-row' style={rowStyle}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  )
}

const getWinner = (squares) => {
  const winningPlays = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < winningPlays.length; i++) {
    const [a, b, c] = winningPlays[i]
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c])
      return squares[a]
  }
  return null
}

const Game = () => {
  return (
    <div className='game'>
      <div className='game-board'>
        <Board />
      </div>
    </div>
  )
}

ReactDOM.render(<Game />, document.getElementById('root'))
