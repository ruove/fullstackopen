import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setCounter] = useState(0)
  const [sum, setSum] = useState(0)

  const giveGood = () => {
    setGood(good + 1)
    setCounter(total + 1)
    setSum(sum + 1)
    console.log('clicked good')
  }
  const giveNeutral = () => {
    setNeutral(neutral + 1)
    setCounter(total + 1)
    console.log('clicked neutral')
  }
  const giveBad = () => {
    setBad(bad + 1)
    setCounter(total + 1)
    setSum(sum - 1)
    console.log('clicked bad')
  }

  return (
    <div>
      <h1>Let's have feedback</h1>
      <Button
        handleClick={giveGood}
        text="Good" />
      <Button
        handleClick={giveNeutral}
        text="Neutral" />
      <Button
        handleClick={giveBad}
        text="Bad" />
      <h1>Statistics</h1>
      <Stats
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        sum={sum} />
    </div>
  )
}

const Stats = ({ good, neutral, bad, total, sum }) => {
  if (total === 0) {
    return (
      <div>
        <p>No feedback yet</p>
      </div>
    )
  }

  return (
    <div>
      <table>
      <StatisticsLine text="Good" value={good} />
      <StatisticsLine text="Neutral" value={neutral} />
      <StatisticsLine text="Bad" value={bad} />
      <StatisticsLine text="Total" value={total} />
      <StatisticsLine text="Average" value={<Average sum={sum} total={total} />} />
      <StatisticsLine text="Positives" value={<Positives good={good} total={total} />} />
      </table>
    </div>
  )
}

const StatisticsLine = ({text, value}) => {
  return (
    <tr>     
      <td>{text}:</td>
      <td>{value}</td>
    </tr>
  )
}

const Average = ({ sum, total }) => {
  if (total === 0) {
    return <p>Ei palautteita</p>
  }
  return (
    <>{(sum / total).toFixed(2)}</>
  )
}

const Positives = ({ good, total }) => {
  if (total === 0) {
    return <p>Ei palautteita</p>
  }
  return (
    <>{(good / total * 100).toFixed(2)} %</>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

export default App