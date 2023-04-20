import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const giveGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
    console.log('clicked good')
  }
  const giveNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }
  const giveBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }
  return (
    <div>
      <h1>Anna palautetta</h1>
      <Button
        handleClick={giveGood}
        text="Good" />
      <Button
        handleClick={giveNeutral}
        text="Neutral" />
      <Button
        handleClick={giveBad}
        text="Bad" />
      <h1>Tilastot</h1>
      <Stats
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
      />
    </div>
  )
}

const Stats = ({ good, neutral, bad, total }) => {
  return (
    <div>
      <p>Hyviä {good}</p>
      <p>Neutraaleita {neutral}</p>
      <p>Huonoja {bad}</p>
      <p>Total {total}</p>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

export default App