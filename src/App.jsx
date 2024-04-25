import './global.css';
import { Post } from './Post';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <Header />     
      <Post author="teste" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cupiditate eligendi quidem veritatis alias quibusdam possimus nobis pariatur deserunt autem ea quis architecto nisi, distinctio esse ex corporis commodi ipsum." />
    </>
  )
}

export default App
