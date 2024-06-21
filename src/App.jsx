
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from './components/LoginPage'
import { SignupPage } from './components/SignupPage'
import { MovieLandingPage } from './components/MovieLandingPage'
import { WatchList } from './components/WatchList'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { auth } from './config/firebase'
import { useEffect, useState } from 'react'

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    })
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/search' element={user ? <MovieLandingPage /> : <Navigate to='/' />} />
          <Route path='/watchlist' element={user ? <WatchList /> : <Navigate to='/' />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App