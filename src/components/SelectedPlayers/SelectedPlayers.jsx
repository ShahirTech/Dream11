const SelectedPlayers = ({ players, onRemove }) => {
  const handleRemove = (playerName) => {
    onRemove(playerName); // Remove the player
  };

  if (players.length === 0) {
    return <div className="text-center text-lg">No players selected. Please choose some players!</div>;
  }

  return (
    <>
      {players.map((player) => (
        <div key={player.name} className="h-32 w-full border rounded-2xl flex justify-between items-center px-7 bg-[#1313131A] shadow-xl mb-12">
          <div className="flex items-center gap-6">
            <img className="border w-20 h-20 rounded-2xl" src={player.image} alt={player.name} />
            <div>
              <h2 className="font-semibold text-2xl">{player.name}</h2>
              <p className="text-[#13131399]">{player.category}</p>
              <p className="text-[#13131399]">Price: ${player.price.toLocaleString()}</p>
            </div>
          </div>
          <button 
            className="btn bg-transparent" 
            onClick={() => handleRemove(player.name)} 
            aria-label={`Remove ${player.name}`}
          >
            <i className="text-[#ff0000] fa-solid fa-trash-xmark fa-xl"></i>
          </button>
        </div>
      ))}
    </>
  );
};

export default SelectedPlayers; 