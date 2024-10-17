import './App.css'
import Counter from './Counter'
import Dream from './Dream'
import Friends from './Friends'
import Users from './Users'

function App() {
  const handleClick = () => {
    alert("First Clicked")
  }
  const handleSecondClick = () => {
    alert("Second Clicked")
  }
  const handleThreeClick = (num) => {
    alert(num + 5)
  }
  return (
    <>
      <h3>React Core Concept Part 2</h3>
      <Friends></Friends>
      <Users />
      <Dream></Dream>
      <Counter></Counter>
      <button onClick={handleClick}>First Click</button>
      <button onClick={handleSecondClick}>Second Click</button>
      <button onClick={() => handleThreeClick(3)} >Three Click</button>
      <button onClick={() => alert("Fourth Clicked")} >Fourth Click</button>
    </>
  )
}

export default App
