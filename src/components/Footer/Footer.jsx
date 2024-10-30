import bg from "../../assets/bg-shadow.png";
import logo from "../../assets/logo-footer.png";
const Footer = () => {
  return (
    <>
      <footer className="footer bg-[#06091A] flex flex-col items-center mt-[300px] relative pt-72">
        <section className="absolute bottom-[600px] md:bottom-[310px] border-2 p-4 border-yellow-50 rounded-3xl mb-24 mt-32 mx-auto w-[85%]">
          <div
            className="bg-white bg-cover bg-center lg:min-h-[400px] lg:flex flex-col items-center gap-12 py-28 rounded-3xl w-full mx-auto text-center border"
            style={{
              backgroundImage: `url(${bg})`,
            }}
          >
            <div>
              <h1 className="text-3xl text-[#131313] px-4 font-bold pb-5">
                Subscribe to our Newsletter
              </h1>
              <p className="text-xl text-[#131313B3] font-medium px-4 pb-2">
                Get the latest updates and news right in your inbox!
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center md:pt-5 lg:pt-0 justify-center gap-1 lg:gap-4">
              <label className="input input-bordered flex items-center gap-2 md:w-[420px] lg:w-[480px]">
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter your email"
                />
              </label>
              <button className="btn w-56 md:w-fit  btn-primary bg-gradient-to-r from-yellow-300 shadow-inner text-black to-pink-500 join-item border-none">
                Subscribe
              </button>
            </div>
          </div>
        </section>
        <img src={logo} alt="" />
        <section className="footer lg:w-[85%] mx-auto justify-between items-center text-base-content px-10 pb-10 space-y-5">
          <nav className="text-[#FFFFFF99] w-72 md:w-56 lg:w-72">
            <h6 className="font-bold text-white">About Us</h6>
            <p className="">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </nav>
          <nav className="text-[#FFFFFF99]">
            <h6 className="font-bold text-white">Quick Links</h6>
            <ul className="list-disc pl-5">
              <li>
                <a className="link link-hover">Home</a>
              </li>
              <li>
                <a className="link link-hover">Service</a>
              </li>
              <li>
                <a className="link link-hover">About us</a>
              </li>
              <li>
                <a className="link link-hover">Contact</a>
              </li>
            </ul>
          </nav>
          <nav>
            <h6 className="font-bold text-white">Subscribe</h6>
            <p className="text-[#FFFFFF99] w-72">
              Subscribe to our newsletter for the latest updates.
            </p>
            <fieldset className="form-control">
              <div className="join">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input w-44 lg:w-56 input-bordered join-item"
                />
                <button className="btn btn-primary bg-gradient-to-r from-yellow-300 shadow-inner text-black to-pink-500 join-item border-none">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </nav>
        </section>
      </footer>
      <footer className="bg-[#06091A]  text-center px-10 pt-14 pb-8">
        <p className="text-[#FFFFFF99]">@2024 ShahirTech All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Footer;