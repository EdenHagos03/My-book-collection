import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Movies from './components/Movies';
import Books from './components/Books'
import Webs from './components/Webs'
import NewForm from './components/NewForm';
import NewBook from './components/NewBook'

function App() {
  return (
    
    <div>
{/* 
    <ul>
      <li>  <a href='/Books'>Books</a></li>
      <li>  <a href='/Movies'>Movies</a></li>
      <li>  <a href='/Webs'>Webs</a></li>
      <li>  <a href='/Finance'>Finance</a></li>
    </ul>

    <Home></Home> */}

       <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/movies' element={<Movies></Movies>}></Route>
          <Route path='/Books' element={<Books></Books>}></Route>
          <Route path='/webs' element={<Webs></Webs>}></Route>
          <Route path='/newMovie' element={<NewForm></NewForm>}></Route>
          <Route path='/newbook' element={<NewBook></NewBook>}></Route>
       </Routes>
    </div>

  );
}

export default App;

