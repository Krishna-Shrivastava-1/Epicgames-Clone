import React, { useEffect, useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Bottomsearchnavbar = () => {
  const navigate = useNavigate();
  const [gameData, setGameData] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch all game data only when search query is empty
  useEffect(() => {
    const fetchGameDetails = async () => {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=cc9a75eaf73f455ebb4ed6af9ab446f9&page_size=300`
      );
      const data = await response.json();
      setGameData(data.results); // Store fetched data
    };

    fetchGameDetails();
  }, []); // Runs only on mount

  // Handle search query change and filter games
  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === '') {
      setFilteredGames([]); // Clear filtered games when search is empty
    } else {
      // Filter games based on the search query
      const filtered = gameData.filter((game) =>
        game.name.toLowerCase().includes(query)
      );
      setFilteredGames(filtered);
    }
  };

  return (
    <div className='sticky top-0 z-40' >
      <div className="flex items-center justify-around sticky top-0 z-40 bg-[#101014] w-full p-2 pt-6">
        <div className="flex items-center gap-x-4">
          <div className="bg-[#202024] flex items-center rounded-full text-white hover:bg-[#404044] focus-within:bg-[#404044] w-60  p-2 relative">
            <IoMdSearch className="text-xl text-zinc-500" />
            <input
              type="search"
              placeholder="Search store"
              className="bg-transparent rounded-full text-white border-none outline-none px-2 placeholder:text-zinc-500 placeholder:font-semibold "
              value={searchQuery}
              onChange={handleSearchChange} // Handle input change
            />

            <div className="absolute top-11">
              {searchQuery && filteredGames.length > 0 && (
                <div className="bg-[#202024] w-auto max-h-72 overflow-y-auto resultover mx-auto rounded-lg">
                  <div className="gap-4">
                    {filteredGames.map((game) => (
                      <div
                        onClick={() => navigate(`/game/${game.id}`)}
                        key={game.id}
                        className="game-card flex gap-x-2 items-center justify-around cursor-pointer select-none rounded-md hover:bg-zinc-700 p-2"
                      >
                        <img
                          src={game.background_image}
                          alt={game.name}
                          className="rounded-lg w-20"
                        />
                        <h1 className="text-white mt-2">{game.name}</h1>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Display message when no games match the search query */}
              {searchQuery && filteredGames.length === 0 && (
                <p className="text-white text-center  bg-[#202024] p-3 rounded-md">
                  No games found for {searchQuery}
                </p>
              )}
            </div>
          </div>
          <div className=' items-center hidden md:flex' >
             <h1 className="text-white text-md mx-2 cursor-pointer">Discover</h1>
          <h1 className="text-white text-md mx-2 cursor-pointer">Browse</h1>
          <h1 className="text-white text-md mx-2 cursor-pointer">News</h1>      
          </div>
   
        </div>
        <div className="flex items-center">
          <h1 className="text-white text-md mx-1 cursor-pointer">Wishlist</h1>
          <h1 className="text-white text-md mx-1 cursor-pointer">Cart</h1>
        </div>
      </div>
    </div>
  );
};

export default Bottomsearchnavbar;
