import React, { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Loginpage from './Pages/Loginpage/Loginpage';
import Homepage from './Pages/Homepage/Homepage'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase/Firebase';
import Gamepage from './Pages/Gamepage/Gamepage';


const App = () => {
//   const fetchgames = async () => {
//     try {
//         const response = await fetch(`https://api.rawg.io/api/games?key=cc9a75eaf73f455ebb4ed6af9ab446f9`)
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }
// useEffect(() => {
//     fetchgames()
// }, [])

const navigate = useNavigate()
const location = useLocation()
useEffect(() => {
const unsub = onAuthStateChanged(auth, (user)=>{
  if(user){
    if(location.pathname === '/'){
      navigate('/home')
    }
  }else{
    if (location.pathname !== '/') {
      navigate('/')
    }
  }
})
return () => unsub()
}, [navigate ,location.pathname])

  return (
 
    <div>
     <ToastContainer/> 
     <Routes>
      <Route path='/' element={<Loginpage/>} />
      <Route  path='/home' element={<Homepage/>} />
      <Route  path='/game/:id' element={<Gamepage/>} />
      </Routes> 
    </div>
  )
}

export default App
