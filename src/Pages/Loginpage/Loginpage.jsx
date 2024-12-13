import React, { useState } from 'react'
import epiclogo from '../../assets/epiclogo.png'
import { useNavigate } from 'react-router-dom'
import { signin, signup } from '../../Firebase/Firebase'
const Loginpage = () => {
    const [silog, setsilog] = useState('SignUp')
    const navigate = useNavigate()
    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const handlesubmit = async (e)=>{
        e.preventDefault()
        try {
            if (silog === 'SignUp') {
                await signup(username ,email ,password)
                navigate('/home')
            }else{
                await signin(email ,password)
                navigate('/home')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='w-full h-screen flex items-center justify-center bg-[#121212]' >
            <div className='w-96 h-auto bg-[#202020] p-3 rounded-lg flex items-center justify-center flex-col' >
                <div className="logo mb-7"><img className='w-16' src={epiclogo} alt="" /></div>
                <div className='w-full' >
                    <h1 className='font-extrabold text-white text-xl text-center m-2' > {silog} </h1>
                    <form onSubmit={handlesubmit} >
                        <div className='relative group p-2  ' >
                            {
                                silog === 'SignUp' ? <input onChange={(e)=> setusername(e.target.value)} required className='border w-full border-zinc-700 rounded-sm transition-all duration-300 p-1 text-white hover:border-white bg-transparent  outline-none px-2 placeholder:text-zinc-500 focus-within:placeholder-transparent' placeholder='Username' type="text" />
                                    :
                                    null
                            }

                            <div className='absolute top-1 select-none pointer-events-none left-[15px] opacity-0  group-focus-within:opacity-100 group-focus-within:translate-y-[-20px] group-focus-within:text-sm transition-all duration-300 text-md ' ><h2 className='text-zinc-500' >Username</h2></div>
                        </div>
                        <div className='relative group p-2 my-4' >
                            <input onChange={(e)=> setemail(e.target.value)} required className='border w-full border-zinc-700 rounded-sm transition-all duration-300 p-1 text-white hover:border-white bg-transparent  outline-none px-2 placeholder:text-zinc-500 focus-within:placeholder-transparent' placeholder='Email' type="email" />
                            <div className='absolute top-1 select-none pointer-events-none left-[15px] opacity-0  group-focus-within:opacity-100 group-focus-within:translate-y-[-20px] group-focus-within:text-sm transition-all duration-300 text-md' ><h2 className='text-zinc-500' >Email</h2></div>
                        </div>
                        <div className='relative group p-2' >
                            <input onChange={(e)=> setpassword(e.target.value)} required className='border w-full border-zinc-700 rounded-sm transition-all duration-300 p-1 text-white hover:border-white bg-transparent  outline-none px-2 placeholder:text-zinc-500 focus-within:placeholder-transparent' placeholder='Password' type="password" />
                            <div className='absolute top-1 select-none pointer-events-none left-[15px] opacity-0  group-focus-within:opacity-100 group-focus-within:translate-y-[-20px] group-focus-within:text-sm transition-all duration-300 text-md' ><h2 className='text-zinc-500' >Password</h2></div>
                        </div>
                        <button  className='text-white text-lg font-semibold w-full my-3 text-center bg-sky-700 rounded-lg p-2 hover:bg-sky-600' type="submit">{silog === 'SignUp' ? 'SignUp' : 'Sign In'}</button>
                    </form>
                    {
                        silog === 'SignUp' ? <p className='text-zinc-300 text-center m-3' >Already have an account? <span onClick={() => setsilog('Sign In')} className='text-zinc-400 cursor-pointer select-none underline font-semibold hover:no-underline' >Sign In</span> </p> :
                            <p className='text-zinc-300 text-center m-3' >Create an account? <span onClick={() => setsilog('SignUp')} className='text-zinc-400 cursor-pointer select-none underline font-semibold hover:no-underline' >SignUp</span> </p>
                    }

                </div>
            </div>
        </div>
    )
}

export default Loginpage
