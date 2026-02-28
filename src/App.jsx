import { useState } from "react"

const Button = ({ onclick, text }) => <button onClick = {onclick}>{text}</button>

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad

  if (total === 0) {
    return <p>No feedback given</p>
  }

  const average = (good - bad) / total
  const positivePercentage = (good / total) * 100

  return (
    <table>
      <tbody>
        <StatisticsLine text="Good" value={good} />
        <StatisticsLine text="Neutral" value={neutral} />
        <StatisticsLine text="Bad" value={bad} />
        <StatisticsLine text="All" value={total} />
        <StatisticsLine text="Average" value={average} />
        <StatisticsLine text="Positive" value={positivePercentage.toFixed(2) + "%"} />
      </tbody>
    </table>
  )
}

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
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

  if (good === 0 && neutral === 0 && bad === 0){
    return (
      <>
      <h1>Give feedback</h1>
      <Button onclick={handleGood} text={"Good"}/>
      <Button onclick={handleNeutral} text={"Neutral"}/>
      <Button onclick={handleBad} text={"Bad"}/>
      <h1>Statistics</h1>
      <h3>No feedback given!</h3>
      </>
    )
  }

  return (
    <>
    <h1>Give feedback</h1>
    <Button onclick={handleGood} text={"Good"}/>
    <Button onclick={handleNeutral} text={"Neutral"}/>
    <Button onclick={handleBad} text={"Bad"}/>
    <h1>Statistics</h1>
    <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App