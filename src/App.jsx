import { useState } from 'react'
import './styles.css';
import { Post } from './Post';
import { Header } from './components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Post content="teste" />
    </>
  )
}

export default App
