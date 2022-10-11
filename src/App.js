import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails'



function App() {

  return (
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/post/:postId" element={<PostDetails/>}/>
      </Routes>
  );
}

export default App;
