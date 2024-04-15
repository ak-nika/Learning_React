import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      < Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route/>
      </Routes>
     {/* <div className="content">
      < Home />
     </div> */}
    </div>
  );
}

export default App;