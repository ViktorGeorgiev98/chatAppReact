
import '../src/style.scss'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register'
import { Routes, Route } from 'react-router-dom';

function App() {
 

  return (
    <>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route  path='/home' element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
