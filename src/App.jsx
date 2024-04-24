import './global.css';
import { Post } from './Post';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <Header />     
      <Post content="teste" />
    </>
  )
}

export default App
