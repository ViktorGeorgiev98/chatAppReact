
import '../src/style.scss'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register'
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import AuthGuard from './routerGuards/AuthGuard';
import GuestGuard from './routerGuards/GuestGuard';

function App() {
 

  return (
    <>
    <AuthProvider>
      <Routes>
        <Route element={<GuestGuard />}>
          <Route  path='/home' element={<Home />} />
        </Route>
        <Route element={<AuthGuard />}>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AuthProvider>
    
    </>
  )
}

export default App
