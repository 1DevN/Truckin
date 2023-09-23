import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import YourComponent from '../src/YourComponent'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Login/>}/>
        <Route path='/test' element={<Home/>}/>
        <Route path='/*' element={<Home/>}/>
        <Route path='/signup' element={<YourComponent/>}/>

      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
