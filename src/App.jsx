import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {
  const [coinBalance, setCoinBalance] = useState(0); 

  return (
    <div>
      <Header coinBalance={coinBalance} setCoinBalance={setCoinBalance} />
      <Main coinBalance={coinBalance} setCoinBalance={setCoinBalance} />
      <Footer />
      <ToastContainer 
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;