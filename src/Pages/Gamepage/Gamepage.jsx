import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Bottomsearchnavbar from '../../Component/Bottomsearchnavbar/Bottomsearchnavbar';
import { FaStar } from 'react-icons/fa';
import Gamecard from '../../Component/Gamecards/Gamecard';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { FiShare2 } from "react-icons/fi";
import Footer from '../../Component/Footer/Footer';
const GamePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [gameData, setGameData] = useState(null);
    const [bgColor, setBgColor] = useState('');
    const [isLoading, setIsLoading] = useState(true);  // Loading state

    const handleShare = async () => {
        if (navigator.share) {
          try {
            await navigator.share({
              title: document.title,
              text: 'Check out this page!',
              url: window.location.href, // Current page URL
            });
            console.log('Content shared successfully!');
          } catch (error) {
            console.error('Error sharing:', error);
          }
        } else {
          alert('Sharing is not supported in this browser.');
        }
      };
    // Function to generate a random color
    const getRandomColor = () => {
        const randomColor = `rgb(${Math.floor(Math.random() * 130)}, ${Math.floor(Math.random() * 130)}, ${Math.floor(Math.random() * 130)})`;
        return randomColor;
    };

    useEffect(() => {
        setBgColor(getRandomColor()); // Set random color
    }, [id]);

    useEffect(() => {
        const fetchGameDetails = async () => {
            setIsLoading(true);  // Set loading state true
            const response = await fetch(`https://api.rawg.io/api/games/${id}?key=cc9a75eaf73f455ebb4ed6af9ab446f9`);
            const data = await response.json();
            setGameData(data);
            setIsLoading(false);  // Set loading state false once data is fetched
        };

        fetchGameDetails();
    }, [id]);
    // console.log(gameData.developers)
    if (isLoading) {
        return (
            <div>
                <Navbar />
                <div className='sticky top-0 z-40' >
                    <Bottomsearchnavbar />
                </div>



                <div className="flex w-full justify-around p-3 items-center">
                    <div className="flex justify-around items-center p-3">
                        <div className="flex items-center flex-col">
                            <Skeleton width={200} height={50} baseColor="#252525" highlightColor="#020202" />
                            <div className="flex items-center mt-2">
                                {[...Array(5)].map((_, index) => (
                                    <Skeleton
                                        key={index}
                                        circle
                                        width={24}
                                        height={24}
                                        baseColor="#252525"
                                        highlightColor="#020202"
                                    />
                                ))}
                                <Skeleton width={50} baseColor="#252525" highlightColor="#020202" />
                            </div>
                            <Skeleton width="40%" height={200} baseColor="#252525" highlightColor="#020202" />
                            <Skeleton width={150} height={40} baseColor="#252525" highlightColor="#020202" style={{ marginTop: '20px' }} />
                        </div>
                        <Skeleton width="30%" height={200} baseColor="#252525" highlightColor="#020202" />
                    </div>
                </div>
                <div className="w-full flex items-center justify-around">
                    <div className="w-[80%]">
                        <Skeleton count={5} baseColor="#252525" highlightColor="#020202" />
                    </div>
                </div>
            </div>
        );
    }

    const maxRating = 5;

    return (
        <div>
            <Navbar />
            <Bottomsearchnavbar />
            <div className="flex w-full justify-around p-3 items-center">
                <div className="flex justify-around items-center p-3">
                    <div className="flex items-center flex-col">
                        <h1 className="text-white text-4xl font-extrabold text-balance">{gameData.name}</h1>
                        <div className="flex items-center mt-2">
                            {[...Array(maxRating)].map((_, index) => {
                                const fillPercentage = Math.min(1, Math.max(0, gameData.rating - index)) * 100;
                                return (
                                    <div key={index} className="relative w-6 h-6 text-zinc-600 ">
                                        <FaStar className="absolute top-0 left-0 text-zinc-600" />
                                        <div
                                            className="absolute top-0 left-0 text-white overflow-hidden"
                                            style={{ width: `${fillPercentage}%` }}
                                        >
                                            <FaStar />
                                        </div>
                                    </div>
                                );
                            })}
                            <p className="text-white">{gameData.rating}</p>
                        </div>
                        <img className="w-[40%] min-w-80 rounded-xl" src={gameData.background_image} alt={gameData.name} />
                        <div  >
                            <div className='flex items-center justify-between w-full m-3' >
                                <h1 className='text-zinc-400' >Developer</h1>
                                {
                                    gameData.developers.map(({ id, name }) => (
                                        <div key={id} >

                                            <h2 className='text-white' >{name}</h2>
                                        </div>
                                    ))
                                }
                            </div>
                            <div
                                style={{ backgroundColor: bgColor, boxShadow: `0px 4px 10px ${bgColor}` }}
                                className="text-white cursor-pointer p-1 rounded-xl px-3 hover:brightness-125 hover:shadow shadow-md my-5"
                            >

                                <a href={gameData.website} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap font-semibold">
                                    <h1 className="text-center">Download the game</h1>
                                </a>

                            </div>
                        </div>
                    </div>
                    {/* <div className="w-[30%]">
                        <img className="rounded-lg w-full my-4" src={gameData.background_image_additional} alt="" />
                    </div> */}
                </div>
            </div>
            <div className="w-full flex items-center justify-around">
                <div className="w-[80%]">
                    <p className="text-white">{gameData.description_raw}</p>
                    <div>
                        <div className='text-white flex items-center gap-x-4 my-2' >
                            <h1 className='text-md text-zinc-400 font-semibold' >Genres</h1>
                            {
                                gameData.genres.map(({ id, name }) => (
                                    <div className='bg-zinc-700 p-1 px-2 text-md rounded-md cursor-pointer hover:bg-zinc-600' key={id}>
                                        <h1  >{name}</h1>


                                    </div>
                                ))
                            }
                        </div>

                        <div className='text-white flex items-center flex-wrap gap-x-4 my-2' >
                            <h1 className='text-md text-zinc-400 font-semibold' >Released on:</h1>
                            {
                                gameData.platforms.map(({ id, platform }) => (
                                    <div className='bg-zinc-700 p-1 px-2 text-md rounded-md cursor-pointer hover:bg-zinc-600 m-1 w-auto' key={id}>
                                        <h1  >{platform.name}</h1>
                                        <p> {platform.released_at}</p>

                                    </div>
                                ))
                            }
                        </div>
                        <div  onClick={handleShare} className='w-36 flex items-center justify-center font-semibold text-white px-3 p-1 rounded-lg cursor-pointer select-none hover:bg-zinc-700 bg-zinc-800 gap-x-2' >
                        <FiShare2 className='text-lg' />
                            <h1  > Share</h1>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <Gamecard title="Related Games" onClick={() => setIsLoading(true)} />
            </div>
            <div>
                <Footer/>
            </div>

        </div>
    );
};

export default GamePage;
