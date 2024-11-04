import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PlayersCard from "../PlayersCard/PlayersCard";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const Main = ({ coinBalance, setCoinBalance }) => {
  const [view, setView] = useState('available');
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setLoading(false);
    };
    loadData();
  }, []);

  const handleSelectPlayer = (player) => {
    if (selectedPlayers.some(selected => selected.name === player.name)) {
      toast.error(`${player.name} is already selected.`);
      return;
    }

    if (selectedPlayers.length < 6) {
      if (coinBalance >= player.price) {
        setSelectedPlayers(prev => [...prev, player]);
        setCoinBalance(prev => prev - player.price);
        toast.success(`${player.name} selected successfully!`);
      } else {
        toast.error("Not enough coins to select this player.");
      }
    } else {
      toast.error("You can only select up to 6 players.");
    }
  };

  const handleRemovePlayer = (playerName) => {
    const updatedPlayers = selectedPlayers.filter(player => player.name !== playerName);
    const removedPlayer = selectedPlayers.find(player => player.name === playerName);

    setSelectedPlayers(updatedPlayers);
    setCoinBalance(prev => prev + (removedPlayer ? removedPlayer.price : 0));
    toast.success(`${playerName} removed successfully!`);
  };

  const handleAddMorePlayers = () => {
    setView('available');
  };

  return (
    <main className="w-[85%] mx-auto my-28">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <span className="loading loading-spinner w-12 bg-[#E7FE29]"></span>
        </div>
      ) : (
        <>
          <div className="flex flex-col md:flex-row space-y-2 justify-between items-center pb-12 px-3">
            <h2 className="lg:text-2xl font-bold">
              {view === 'available' ? 'Available Players' : `Selected Players (${selectedPlayers.length}/6)`}
            </h2>
            <div className="join grid grid-cols-2">
              <button
                className={`join-item btn ${view === 'available' ? 'bg-[#E7FE29]' : 'text-[#13131399]'}`}
                onClick={() => setView('available')}
              >
                Available
              </button>
              <button
                className={`join-item btn ${view === 'selected' ? 'bg-[#E7FE29]' : 'text-[#13131399]'}`}
                onClick={() => setView('selected')}
              >
                Selected ({selectedPlayers.length})
              </button>
            </div>
          </div>
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-center mb-12">
            {view === 'available' && <PlayersCard onSelect={handleSelectPlayer} />}
          </section>
          <section className="grid grid-cols-1 justify-center items-center gap-0 w-full">
            {view === 'selected' && <SelectedPlayers players={selectedPlayers} onRemove={handleRemovePlayer} />}
          </section>
          {view === 'selected' && (
            <div className='border border-gray-900 p-1 rounded-2xl w-fit mt-4 mb-96'>
              <button className='btn bg-[#E7FE29] rounded-xl' onClick={handleAddMorePlayers}>
                Add More Players
              </button>
            </div>
          )}
        </>
      )}
    </main>
  );
};

export default Main;