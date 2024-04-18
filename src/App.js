import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Create from './Components/Create';
import BlogDetails from './Components/BlogDetails';

function App() {
  return (
    <div className="App">
      < Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/><Route/>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/blogs/:id' element={<BlogDetails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;