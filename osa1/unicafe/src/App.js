import React, { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td> <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.good === 0 & props.neutral === 0 & props.bad === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={props.good+props.neutral+props.bad} />
      <StatisticLine text="average" value={(props.good-props.bad)/(props.good+props.neutral+props.bad)} />
      <StatisticLine text="positive" value={props.good/(props.good+props.neutral+props.bad)*100+" %"} />
      </table>
    </div>
    )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Button = (props) => {
    if (props.onclick === "good") {
      return (
        <button onClick={() => setGood(good + 1)}>good</button>
      )
    } else if (props.onclick === "neutral") {
      return (
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      )
    } else if (props.onclick === "bad") {
      return (
        <button onClick={() => setBad(bad + 1)}>bad</button>
      )
    }

  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onclick="good" />
      <Button onclick="neutral" />
      <Button onclick="bad" />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App