import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { Route, Routes, BrowserRouter as Router, Switch } from 'react-router-dom';
import Create from './Components/Create';

function App() {
  return (
    <div className="App">
      < Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/><Route/>
        <Route path='/create' element={<Create/>}></Route>
      </Routes>
    </div>
  );
}

export default App;