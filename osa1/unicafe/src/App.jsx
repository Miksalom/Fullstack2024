import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const Statistics = (props) => {

  const sum = props.good + props.neutral + props.bad
  const average = (props.good - props.bad) / sum
  const positive = (props.good/sum)*100 + " %"
  if (sum === 0){
    return (
      <div>
        <h2>Statistics</h2>
        No feedback given
      </div>
    )
  }
  return(
    <div>
      <h2>Statistics</h2>
      <StatisticLine text='good' value={props.good} />
      <StatisticLine text='neutral' value={props.neutral} />
      <StatisticLine text='bad' value={props.bad} />
      <StatisticLine text='all' value={sum} />
      <StatisticLine text='average' value={average} />
      <StatisticLine text='positive' value={positive} />
    </div>
  )
}
const StatisticLine = ({text, value}) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
     
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increseGood = () =>{
    return(
      setGood(good + 1)
    )
  }
  const increseNeutral = () =>{
    return(
      setNeutral(neutral + 1)
    )
  }
  const increseBad = () =>{
    return(
      setBad(bad + 1)
    )
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={increseGood} text='Good'/>
      <Button handleClick={increseNeutral} text='Neutral'/>
      <Button handleClick={increseBad} text='Bad'/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}


export default App