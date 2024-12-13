import React, { useEffect, useState } from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import Slider from 'react-slick';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useNavigate } from 'react-router-dom';
// import { FaRegStar } from "react-icons/fa";
const Gamecard = ({ title }) => {
    const navigate = useNavigate()
    const [gametag, setgametag] = useState([])
    const [loading, setloading] = useState(true)
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [ 
            {
                breakpoint: 768,  // For smaller devices (like mobile)
                settings: {
                    slidesToShow: 2,  // Show 2 slides on mobile devices
                    slidesToScroll: 2,
                },
            },
        ],

    };
    const fetchgame = async () => {
        const response = await fetch(`https://api.rawg.io/api/games?key=cc9a75eaf73f455ebb4ed6af9ab446f9&page_size=160`)
        const data = await response.json()
        // console.log(data.results)
        setgametag(data.results)
        setloading(false)
        console.log(gametag)
    }
    useEffect(() => {
        fetchgame()
    }, [])

    return (
        <div>
            <div className='flex flex-col items-start justify-around' >
                <div className='flex items-center    p-3 group mt-6  gap-x-4' >
                    <h1 className='text-white font-extrabold text-xl cursor-pointer pl-3' >{title} </h1>
                    <MdArrowForwardIos className='text-white cursor-pointer text-lg translate-y-[2px] group-hover:translate-x-2 transition-all duration-300' />
                </div>
                <div className='w-full flex items-center justify-around' >
                    <Slider className='min-w-[300px] w-[85%]' {...settings}>
                        {loading ? (
                            // Skeleton Loader for each item
                            [...Array(5)].map((_, index) => (
                                <div key={index} className='w-full cursor-pointer p-3'>
                                    <Skeleton baseColor="#252525" // Change to your desired background color
                                        highlightColor="#020202" height={150} width="100%" />
                                    <Skeleton baseColor="#252525" // Change to your desired background color
                                        highlightColor="#020202" width="80%" height={20} className="mt-2" />
                                    <Skeleton baseColor="#252525" // Change to your desired background color
                                        highlightColor="#020202" width="50%" height={15} className="mt-2" />
                                </div>
                            ))
                        ) : (
                            // Actual content after data is loaded
                            gametag.map(({ id, name, rating, background_image}) => (
                                <div onClick={()=> navigate(`/game/${id}`) } className='w-full cursor-pointer p-3' key={id}>
                                    <img className='rounded-lg hover:brightness-110 transition-all duration-300' src={background_image} alt="" />
                                    <h1 className='text-white'>{name}</h1>
                                    <p className='text-white'>{rating}</p>
                                </div>
                            ))
                        )}
                    </Slider>
                    {/* <Slider className='min-w-[400px] w-[90%]' {...settings}>
                        {
                            gametag.map(({ id, name, rating, background_image }) => (
                                <div className='w-full cursor-pointer  p-3 ' key={id} >
                                    <img className='rounded-lg  hover:brightness-110 transition-all duration-300' src={background_image} alt="" />
                                    <h1 className='text-white' >{name}</h1>
                                    <p className='text-white' >{rating}</p>
                                   
                                </div>
                            ))
                        }
                    </Slider> */}


                </div>

            </div>
        </div>

    )
}

export default Gamecard
