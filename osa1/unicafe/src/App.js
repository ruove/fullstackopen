import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [counter, setCounter] = useState(0)
  const [sum, setSum] = useState(0)

  const giveGood = () => {
    setGood(good + 1)
    setCounter(counter + 1)
    setSum(sum + 1)
    console.log('clicked good')
  }
  const giveNeutral = () => {
    setNeutral(neutral + 1)
    setCounter(counter + 1)
    console.log('clicked neutral')
  }
  const giveBad = () => {
    setBad(bad + 1)
    setCounter(counter + 1)
    setSum(sum - 1)
    console.log('clicked bad')
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
        counter={counter}/>
      <Average
        sum={sum}
        counter={counter}/>
      <Positives 
        good={good}
        counter={counter}/>
    </div>
  )
}

const Stats = ({ good, neutral, bad, counter }) => {
  return (
    <div>
      <p>Hyviä {good}</p>
      <p>Neutraaleita {neutral}</p>
      <p>Huonoja {bad}</p>
      <p>Kaikki {counter}</p>
    </div>
  )
}

const Average = ({ sum, counter }) => {
  if (counter === 0) {
    return <p>Ei palautteita</p>
  }
  return (
    <p>Keskiarvo {sum / counter}</p>
  )
}

const Positives = ({ good, counter }) => {
  return (
    <p>Positiiviset {good / counter * 100} %</p>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

export default App