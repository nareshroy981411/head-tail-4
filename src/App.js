
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import HeadTail from './components/HeadTail';
import Demo from './components/Demo';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/HeadTail' element={<HeadTail/>}></Route>
      <Route path='/Demo' element={<Demo/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
