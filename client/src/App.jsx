
import '../src/style.scss'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import { Routes, Route } from 'react-router-dom';

function App() {
 

  return (
    <>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route  path='/home' element={<Home />} />
    </Routes>
    {/* <Home /> */}
    </>
  )
}

export default App
