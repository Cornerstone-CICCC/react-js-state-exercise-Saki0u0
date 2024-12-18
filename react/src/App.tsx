import { useState } from 'react'
import './App.css'
import CounterBtn from "./components/CounterBtn"

function App() {

  const [count, setCounter] = useState(0)
  const [isLight,setIsLight] = useState<boolean>(false)
  const [lottoNumbers,setLottoNumbers] = useState<number[]>([])

  const handleCounter = () => {
    setCounter(count => count + 1)
  }

  const handleLight = () => {
    setIsLight(!isLight)
  }

  const generateLottoNumbers = () => {
    const numbers: number[] = [];
    while (numbers.length < 7) {
      const randomNumber = Math.floor(Math.random() * 50) + 1; 
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    setLottoNumbers(numbers); 
  };

  return (
    <>
      <div style = {{ backgroundColor: isLight ? 'white' : 'black', 
        color: isLight ? 'black' : 'white', width:"100px", height:"100px",display: "flex",
        justifyContent: "center",
        alignItems: "center"}}>
      <button onClick={()=>handleLight()}>{isLight ? "on" : "off"}</button>
      </div>

     <div>
      {lottoNumbers.length > 0
          ? lottoNumbers.join(", ")
          : "Click the button to generate numbers!"}
      </div>
      <button onClick={generateLottoNumbers}>Generate Lotto Numbers</button>
      
      <p>{count}</p>
      <CounterBtn onIncrement={handleCounter} />
    </>
  )
}

export default App
