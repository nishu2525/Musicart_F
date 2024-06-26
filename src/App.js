import './App.css';
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ='signup'element={<Signup/>} />
      <Route path ='login'element={<Login/>} />
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
