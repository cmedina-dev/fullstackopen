import { useState } from 'react'

const Button = ({text, func}) => {
  return (
    <>
      <button onClick={func}>{text}</button>
    </>
  )
}

const Stat = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (!good && !neutral && !bad) {
    return (
      <>
        No feedback given
      </>
    )
  }
  else {
    const sum = good + neutral + bad;
    const average = (good - bad) / sum;
    const positivePercent = (good / sum) * 100;

    return (
      <table>
        <tbody>
          <Stat text="good" value={good}/>
          <Stat text="neutral" value={neutral} />
          <Stat text="bad" value={bad} />
          <Stat text="all" value={sum} />
          <Stat text="average" value={average} />
          <Stat text="positive" value={positivePercent + "%"} />
        </tbody>
      </table>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGood = () => { setGood(good + 1); }
  const handleNeutral = () => { setNeutral(neutral + 1); }
  const handleBad = () => { setBad(bad + 1); }

  return (
    <div>
      <h1>
        give feedback
      </h1>

      <Button text="good" func={handleGood}/> 
      <Button text="neutral" func={handleNeutral}/> 
      <Button text="bad" func={handleBad}/>

      <h1>
        statistics
      </h1>

      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

export default App