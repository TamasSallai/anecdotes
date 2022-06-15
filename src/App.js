import { useState } from "react"

function App() {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ]

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const randomizeIndex = () => {
    const randomIndex = Math.floor(Math.random() * 7)
    setSelectedIndex(randomIndex)
  }

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selectedIndex] += 1
    setVotes(newVotes)
  }

  const calculateTopVoted = () => {
    return votes.reduce((largestIndex, currentIndex, index, array) => {
      currentIndex = index
      return array[currentIndex] > array[largestIndex]
        ? currentIndex
        : largestIndex
    }, 0)
  }

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selectedIndex]}</p>
        <p>has {votes[selectedIndex]} votes</p>
        <button onClick={handleVote}>vote</button>
        <button onClick={randomizeIndex}>next anecdote</button>
      </div>

      <div>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[calculateTopVoted()]}</p>
      </div>
    </div>
  )
}

export default App
