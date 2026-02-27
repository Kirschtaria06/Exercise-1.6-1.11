import { useState } from "react"

const Button = ({ onclick, text }) => <button onClick = {onclick}>{text}</button>

const Statistics = ({ good, neutral, bad}) => {
    const total = good + neutral + bad
    let average = (good - bad) / total;
    let positivePercentage = (good / total) * 100
    if (Number.isNaN(average) && Number.isNaN(positivePercentage)){
      average = 0
      positivePercentage = 0
    }
    return (
      <>
      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {total}</p>
      <p>Average: {average}</p>
      <p>Positive Percentage: {positivePercentage.toFixed(2) + "%"}</p>
      </>
    )
}
const App = () => {
  const [feedback, setFeedback] = useState({good: 0, neutral: 0, bad: 0})
  const { good, neutral, bad } = feedback

  const handleGood = () => {
    setFeedback({...feedback, good: good + 1})
  }
  const handleNeutral = () => {
    setFeedback({...feedback, neutral: neutral + 1})
  }
  const handleBad = () => {
    setFeedback({...feedback, bad: bad + 1})
  }

  return (
    <>
    <h1>Give feedback</h1>
    <Button onclick={handleGood} text={"Good"}/>
    <Button onclick={handleNeutral} text={"Neutral"}/>
    <Button onclick={handleBad} text={"Bad"}/>
    <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App