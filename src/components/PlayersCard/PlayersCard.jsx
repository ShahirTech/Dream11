import { useEffect, useState } from 'react';

const PlayersCard = ({ onSelect }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('/players.json') 
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data);
      });
  }, []);

  return (
    <>
      {players.map((player) => (
        <div key={player.name} className="card bg-[#1313131A] lg:w-[420px] shadow-xl border-2 border-[#E7FE29] mb-4">
          <figure className="px-4 pt-5 h-80 lg:h-96">
            <img
              src={player.image}
              alt={player.name}
              className="rounded-xl h-full w-full"
            />
          </figure>
          <div className="text-left px-6 pt-6 pb-3">
            <h2 className="card-title">
              <i className="fa-duotone fa-solid fa-user"></i> {player.name}
            </h2>
          </div>
          <div className="flex justify-between items-center pb-3 px-6">
            <h2 className="">
              <i className="fa-duotone fa-solid fa-flag"></i> {player.country}
            </h2>
            <p className="bg-[#1313130D] px-3 py-2 rounded-lg">{player.category}</p>
          </div>
          <span className="border-b border-[#c9c98a] w-[90%] mx-auto"></span>
          <div className="flex justify-between items-center px-6 py-3 font-semibold">
            <p>Rating</p>
            <p>{player.rating}/100</p>
          </div>
          <div className="flex justify-between items-center px-6">
            <p className="font-semibold">{player.style}</p>
            <p className="text-[#131313B3]">{player.style}</p>
          </div>
          <div className="px-6 pt-3 pb-6">
            <div className="flex flex-col gap-2 lg:flex-row w-full items-center justify-between">
              <p className="font-semibold">Price: ${player.price.toLocaleString()}</p>
              <button 
                className="btn w-full lg:w-fit bg-white border border-[#E7FE29] shadow-inner" 
                onClick={() => onSelect(player)} // Handle player selection
              >
                Choose Player
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PlayersCard;