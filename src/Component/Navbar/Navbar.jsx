import React from 'react'
import logo from '../../assets/epiclogo.png'
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { logout } from '../../Firebase/Firebase';

const Navbar = () => {
  const navigate  = useNavigate()
  return (
    <div>
      <div className='flex items-center justify-around' >
        <div className="logo flex items-center gap-x-3 ">
          <div className='flex items-center relative group  w-20' >
            <img className='w-16' src={logo} alt="" />
            <div>
              <IoIosArrowDown className='text-white group-hover:rotate-180 transition-all duration-300' />
            </div>
            <div className='absolute top-[65px] left-[20px] z-50 md:w-[450px] h-auto  rounded-lg bg-[#27272b9a] hidden group-hover:flex border-zinc-700 border md:flex-wrap min-w-[320px] backdrop-blur-lg' >
              <div className='flex flex-col justify-between  border-r border-zinc-700 p-3' >
                <div className='text-white m-2 p-2'>
                  <h1 className='font-extrabold  text-xl ' >Play</h1>
                  <h1 className='cursor-pointer hover:bg-zinc-600 p-1  rounded-lg transition-all duration-200 ' >Fortnite</h1>
                  <h1 className='cursor-pointer hover:bg-zinc-600 p-1  rounded-lg transition-all duration-200 ' >Rocket League</h1>
                  <h1 className='cursor-pointer hover:bg-zinc-600 p-1  rounded-lg transition-all duration-200 ' >Fall Guys</h1>
                </div>
                <div className='text-white m-2 p-2'>
                  <h1 className='font-extrabold  text-xl' >Discover</h1>
                  <h1 className=' hover:bg-zinc-600 p-1  rounded-lg transition-all duration-200 cursor-pointer' >Epic Games Store</h1>
                  <h1 className=' hover:bg-zinc-600 p-1  rounded-lg transition-all duration-200 cursor-pointer' >Sketchfab</h1>
                  <h1 className=' hover:bg-zinc-600 p-1  rounded-lg transition-all duration-200 cursor-pointer' >ArtStation</h1>
                </div>
              </div>

              <div className='text-white m-2 p-3' >
                <h1 className='text-xl font-extrabold' >Create</h1>
                <h1 className=' hover:bg-zinc-600 p-1  rounded-lg transition-all duration-200 cursor-pointer' >Unreal Engine</h1>
                <h1 className=' hover:bg-zinc-600 p-1  rounded-lg transition-all duration-200 cursor-pointer' >Create in Fortnite</h1>
                <h1 className=' hover:bg-zinc-600 p-1  rounded-lg transition-all duration-200 cursor-pointer' >MetaHuman</h1>
                <h1 className=' hover:bg-zinc-600 p-1  rounded-lg transition-all duration-200 cursor-pointer' >Twinmotion</h1>
                <h1 className=' hover:bg-zinc-600 p-1  rounded-lg transition-all duration-200 cursor-pointer' >RealityScan</h1>
                <h1 className=' hover:bg-zinc-600 p-1  rounded-lg transition-all duration-200 cursor-pointer' >RealityCapture</h1>
                <h1 className=' hover:bg-zinc-600 p-1  rounded-lg transition-all duration-200 cursor-pointer' >Epic Online Services</h1>
                <h1 className=' hover:bg-zinc-600 p-1  rounded-lg transition-all duration-200 cursor-pointer' >Publish on Epic Games Store</h1>
                <h1 className=' hover:bg-zinc-600 p-1  rounded-lg transition-all duration-200 cursor-pointer' >Kids Web Services</h1>
                <h1 className=' hover:bg-zinc-600 p-1  rounded-lg transition-all duration-200 cursor-pointer' >Developer Community</h1>
              </div>
            </div>

          </div>


          <div className='flex gap-x-2' >
            <h1 onClick={()=> navigate('/home')} className='text-white text-xl mx-1 font-semibold cursor-pointer hover:text-zinc-300' >Store</h1>
            <h1 className='text-white text-xl mx-1 font-semibold cursor-pointer hover:text-zinc-300' >Support</h1>
            {/* <h1 className='text-white text-xl mx-1 font-semibold cursor-pointer hover:text-zinc-300' >Distribute</h1> */}
          </div>
        </div>

        <div>
          <h1 onClick={logout} className='text-white text-xl font-semibold cursor-pointer hover:text-zinc-300' >Signout</h1>
        </div>
      </div>


    </div>
  )
}

export default Navbar
