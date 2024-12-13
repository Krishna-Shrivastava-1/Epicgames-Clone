import React, { useEffect, useState } from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Bottomsearchnavbar from '../../Component/Bottomsearchnavbar/Bottomsearchnavbar'
import Slider from "react-slick";
import { IoAddCircleOutline } from "react-icons/io5";
import Gamecard from '../../Component/Gamecards/Gamecard';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Component/Footer/Footer';
const Homepage = () => {
  const navigate = useNavigate()
  const [gamedata, setgamedata] = useState([])
  const [loading, setloading] = useState(true)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 2000
  };
  const fetchgames = async () => {
    try {
      const response = await fetch(`https://api.rawg.io/api/games?key=cc9a75eaf73f455ebb4ed6af9ab446f9`)
      const data = await response.json()
      console.log(data.results)
      setgamedata(data.results)
      // console.log(gamedata)
      setloading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchgames()
  }, [])
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='sticky top-0 z-40' >
        <Bottomsearchnavbar />
      </div>
      <div className='flex w-full items-center justify-center ' >
        <Slider className='min-w-[300px] w-[60%]' {...settings}>

          {loading ? (
            // Skeleton Loader for each item
            [...Array(5)].map((_, index) => (
              <div key={index} className='w-full cursor-pointer p-3'>
                <Skeleton baseColor="#252525"
                  highlightColor="#020202" height={400} width="100%" />
                <Skeleton baseColor="#252525"
                  highlightColor="#020202" width="80%" height={20} className="mt-2" />
                <Skeleton baseColor="#252525"
                  highlightColor="#020202" width="50%" height={15} className="mt-2" />
              </div>
            ))
          ) : (
            gamedata.slice(0, 5).map(({ id, name, background_image, }) => (
              <div key={id} className='relative' >
                <img className='w-full rounded-xl brightness-50 hover:brightness-75 transition-all duration-500 ' src={background_image} alt="" />
                <div className='absolute bottom-6 left-6' >
                  <h1 className='text-white font-extrabold text-xl my-9 ' >{name}</h1>
                  <div className=' flex gap-x-3' >

                    <h1 onClick={()=> navigate(`/game/${id}`)} className='p-2 md:px-10 bg-white rounded-lg cursor-pointer whitespace-nowrap ' >Play Now</h1>
                    <h1 className='p-2  flex items-center text-white gap-x-2  rounded-lg cursor-pointer hover:bg-white hover:bg-opacity-20 ' ><IoAddCircleOutline className='text-xl' />Add to Wishlist</h1>
                  </div>
                </div>

              </div>
            ))
          )

          }

        </Slider>


      </div>


      <div>
        <Gamecard title='Discover Something New' />
      </div>
      <div>
        <Gamecard title='Epic Saving Spotlight ' />
      </div>
      <div className='grid grid-cols-2 md:flex items-center justify-around p-4' >
        {
          loading ? (
            [Array(5)].map((_, index) => (
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
            gamedata.slice(14, 18).map(({ id, name, rating, background_image }) => (
              <div onClick={()=> navigate(`/game/${id}`) } className='w-full cursor-pointer p-3' key={id}>
                <img className='rounded-lg hover:brightness-110 transition-all duration-300' src={background_image} alt="" />
                <h1 className='text-white '>{name}</h1>
                <p className='text-white'>{rating}</p>
              </div>
            ))
          )

        }
      </div>

      <div>
        <Gamecard title='Top New Releases ' />
      </div>
      <div className='grid grid-cols-2 md:flex items-center justify-around p-4 ' >
        {
          loading ? (
            [Array(5)].map((_, index) => (
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
            gamedata.slice(8, 12).map(({ id, name, rating, background_image  }) => (
              <div onClick={()=> navigate(`/game/${id}`) }  className='w-full cursor-pointer p-3' key={id}>
                <img className='rounded-lg hover:brightness-110 transition-all duration-300' src={background_image} alt="" />
                <h1 className='text-white'>{name}</h1>
                <p className='text-white'>{rating}</p>

              </div>
            ))
          )

        }
      </div>

<div>
  <Footer/>
</div>

    </div>
  )
}

export default Homepage
