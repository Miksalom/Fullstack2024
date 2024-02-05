import { useState } from 'react'
const Button = ({handleClick, text}) =>{
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const alkuPisteet = Array(anecdotes.length).fill(0)
  const [selected, setSelected] = useState(0)
  const [pisteet, setPisteet] = useState(alkuPisteet)

  const randomIndex = () =>{
    return Math.floor(Math.random()* anecdotes.length)
  }

  const handleNextAnecdoteClick = () => setSelected(randomIndex())

  const handlePisteetClick = () => {
    const copy = [...pisteet]
    copy[selected] +=1
    setPisteet(copy)
  }
  const getMax = (props) => {
    const maxPisteet = Math.max(...props)
    return props.indexOf(maxPisteet)
  }
  const maxPisteetIndex = getMax(pisteet)
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {pisteet[selected]} votes </div>
      <Button handleClick={handlePisteetClick} text='vote' /> 
      <Button handleClick={handleNextAnecdoteClick} text='next anecdote' />

      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[maxPisteetIndex]}</div> 
      <div>has {pisteet[maxPisteetIndex]} votes</div>
    </div>
  )

}

export default App