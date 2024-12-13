import React from 'react'
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <div className='bg-[#202020] w-full p-6' >
                <div className='flex items-center gap-x-4' >
                    <IoLogoFacebook className='text-[#ccc] text-4xl cursor-pointer transition-all duration-500 hover:text-sky-600' />
                    <FaTwitter className='text-[#ccc] text-4xl cursor-pointer transition-all duration-500 hover:text-sky-600' />
                   
                    <a href="https://youtuubbe.netlify.app/" target='_blank' > <FaYoutube className='text-[#ccc] text-4xl cursor-pointer transition-all duration-500 hover:text-sky-600' /></a>
                    <FaLinkedin  className='text-[#ccc] text-4xl cursor-pointer transition-all duration-500 hover:text-sky-600' />
                </div>
                <div className='mt-5' >
                    <div>
                        <h2 className='text-zinc-600 font-extrabold' >Resources</h2>
                    </div>
                    <div className='flex items-center flex-wrap gap-x-8' >

                        <div className='text-zinc-300' >
                            <p className='hover:text-[#007aff] transition-all duration-500 cursor-pointer' >Support-A-Creator</p>
                            <p className='hover:text-[#007aff] transition-all duration-500 cursor-pointer' > Distribute on Epic Games </p>
                            <p className='hover:text-[#007aff] transition-all duration-500 cursor-pointer' > Careers </p>
                            <p className='hover:text-[#007aff] transition-all duration-500 cursor-pointer' > Company </p>
                        </div>
                        <div className='text-zinc-300' >
                            <p className='hover:text-[#007aff] transition-all duration-500 cursor-pointer' >Fan Art Policy</p>
                            <p className='hover:text-[#007aff] transition-all duration-500 cursor-pointer' > UX Research </p>
                            <p className='hover:text-[#007aff] transition-all duration-500 cursor-pointer' > Store EULA </p>

                        </div>
                        <div className='text-zinc-300' >
                            <p className='hover:text-[#007aff] transition-all duration-500 cursor-pointer' >Fan Art Policy</p>
                            <p className='hover:text-[#007aff] transition-all duration-500 cursor-pointer' > UX Research </p>
                            <p className='hover:text-[#007aff] transition-all duration-500 cursor-pointer' > Store EULA </p>

                        </div>
                    </div>
                    <div className='mt-4' >
                        <div>
                            <h2 className='text-zinc-600 font-extrabold' >Made By Epic Games</h2>
                        </div>
                        <div className='flex items-center flex-wrap gap-x-8' >

                            <div className='text-zinc-300' >
                                <p className='hover:text-[#007aff] transition-all duration-500 cursor-pointer' >Battle Breakers</p>
                                <p className='hover:text-[#007aff] transition-all duration-500 cursor-pointer' > Fortnite </p>
                                <p className='hover:text-[#007aff] transition-all duration-500 cursor-pointer' > Careers </p>
                                <p className='hover:text-[#007aff] transition-all duration-500 cursor-pointer' > Infinity Blade </p>
                            </div>
                            <div className='text-zinc-300' >
                                <p className='hover:text-[#007aff] transition-all duration-500 cursor-pointer' >Robo Recall</p>
                                <p className='hover:text-[#007aff] transition-all duration-500 cursor-pointer' > Shadow Complex </p>
                                <p className='hover:text-[#007aff] transition-all duration-500 cursor-pointer' > Unreal Tournament </p>

                            </div>

                        </div>
                    </div>
                </div>
                <div className='w-full h-[0.5px] bg-zinc-700 my-3' ></div>
                <div>
                    <p className='text-zinc-600 text-sm text-balance w-[90%]' >
                        © 2024, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of Epic Games, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners.
                    </p>
                    <p className='text-zinc-600 text-sm  md:w-[65%] w-[85%]' >
                        Our websites may contain links to other sites and resources provided by third parties. These links are provided for your convenience only. Epic Games has no control over the contents of those sites or resources, and accepts no responsibility for them or for any loss or damage that may arise from your use of them.
                    </p>
                </div>

                <div className='flex items-center flex-wrap gap-x-8' >

                    <div className='text-zinc-300 grid grid-rows-3 place-items-center  md:flex items-center my-10 gap-x-8 w-full' >
                        <p className='hover:text-[#007aff] transition-all duration-500 cursor-pointer text-sm mx-2 ' >Terms of Service</p>
                        <p className='hover:text-[#007aff] transition-all duration-500 cursor-pointer text-sm mx-2 ' >Privacy Policy </p>
                        <p className='hover:text-[#007aff] transition-all duration-500 cursor-pointer text-sm  mx-2' > Store Refund Policy </p>

                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Footer
