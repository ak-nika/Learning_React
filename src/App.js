import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Create from './Components/Create';
import BlogDetails from './Components/BlogDetails';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div className="App">
      < Navbar />
      <Routes>
        <Route path='/' element={<Home />}/><Route/>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/blogs/:id' element={<BlogDetails />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;