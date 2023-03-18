import { useState } from 'react'

const Button = ({text, onButtonClick}) => {
  return (
    <>
      <button onClick={onButtonClick}>{text}</button>
    </>
  )
}

const ButtonList = ({ pickRandom, vote }) => {
  return (
    <>
      <Button text="vote" onButtonClick={vote} />
      <Button text="next anecdote" onButtonClick={pickRandom} />
    </>
  )
}

const PopularAnecdote = ({anecdotes, points}) => {

  const popularPoints = Math.max(...points);
  const popularAnecdote = anecdotes[points.indexOf(popularPoints)];

  if (!popularPoints) {
    return (
      <section>
      <div>
        No votes have been cast yet!
      </div>
    </section>      
    )
  }
  
  return (
    <section>
      <div>
        {popularAnecdote}
        <br />
        has {popularPoints} points
      </div>
    </section>
  )
}

const CurrentAnecdote = ({anecdotes, points, selected}) => {
  return (
    <>
      <div>
        {anecdotes[selected]}
        <br />
        has {points[selected]} points
      </div>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)

  const pickRandom = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const vote = () => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      
      <section>
        <CurrentAnecdote anecdotes={anecdotes} points={points} selected={selected}/>
        <ButtonList pickRandom={pickRandom} vote={vote} />
      </section>

      <h1>Anecdote with most votes</h1>

      <PopularAnecdote anecdotes={anecdotes} points={points} />
    </div>
  )
}

export default App