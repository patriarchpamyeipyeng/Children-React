import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildComponent from './ChildComponent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ChildComponent>
      My name is Paul
    </ChildComponent>
    </>
    )
}

export default App
