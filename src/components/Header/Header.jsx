import { toast } from 'react-toastify';
import logo from "../../assets/logo.png";
import coin from "../../assets/coin.png";
import bg from "../../assets/bg-shadow.png";
import banner from "../../assets/banner-main.png";

const Header = ({ coinBalance, setCoinBalance }) => {
  const handleClaimFreeCredit = () => {
    setCoinBalance(coinBalance + 100000000);
    toast.success("Claimed 100,000,000 coins!"); //toast
  };

  return (
    <header>
      <nav className="fixed top-0 left-0 right-0 backdrop-blur w-full z-[1] bg-[#ffffff3f]">
        <section className="py-6">
          <figure className="flex justify-between items-center w-[85%] mx-auto">
            <img src={logo} alt="Company Logo" />
            <div className="flex justify-center items-center gap-12">
              <ul className="flex justify-center items-center gap-12 text-[#131313B3]">
                <li><a href="#">Home</a></li>
                <li><a href="#">Fixture</a></li>
                <li><a href="#">Teams</a></li>
                <li><a href="#">Schedules</a></li>
              </ul>
              <aside className="flex justify-center items-center gap-2 font-semibold border rounded-xl px-5 py-3 bg-white">
                <p>{coinBalance} Coins</p>
                <img src={coin} alt="Coin Balance" />
              </aside>
            </div>
          </figure>
        </section>
      </nav>
      <section
        className="bg-black bg-cover bg-center min-h-[400px] lg:flex flex-col items-center gap-12 rounded-[38px] py-12 mb-24 mt-32 mx-auto w-[85%] text-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <img src={banner} alt="Dream Team Banner" />
        <div>
          <h1 className="text-4xl font-bold pb-4 text-white">Assemble Your Ultimate Dream 11 Cricket Team</h1>
          <h3 className="text-2xl text-[#FFFFFFB3] font-medium">Beyond Boundaries Beyond Limits</h3>
        </div>
        <div className="border-2 border-[#E7FE29] rounded-2xl p-[6px]">
          <button 
            className="btn bg-[#E7FE29] shadow-inner font-bold px-6 border-none" 
            onClick={handleClaimFreeCredit}
          >
            Claim Free Credit
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;