import { Link } from 'react-router-dom';
import { socialicons } from "../utils/helpers";
import QrCode from "../images/qrcode.png";
import Discord from "../assets/socials/discord.svg"
const Footer = () => {
  return (
    <footer className="relative pt-40 pb-12 text-white">
      <div className="container flex flex-wrap items-start justify-between gap-10 mx-auto max-sm:flex-col max-sm:items-center">
        <div className="flex flex-col w-full gap-10 sm:w-auto max-sm:items-center">
          <Link to="/">
          
             <h1 className="text-2xl font-extrabold text-center sm:text-left text-[#ab88fb] "> CaptionGine </h1> 
             
          </Link>

          <div className="flex flex-col items-start gap-y-6 max-sm:items-center">
            <img
              src={QrCode}
              alt="QR Code"
              className="hidden p-4 bg-[#403054] transition-transform duration-300 md:block w-28 h-28 rounded-2xl hover:rotate-6"
            />

            <Link
              to="#"
              target="_blank"
              className="relative flex items-center justify-start hidden px-6 py-4 transition-all duration-300 bg-[#403054] gap-x-5 rounded-3xl md:flex hover:scale-105"
            >
              <img src={Discord} alt="Discord Icon" className="w-5 h-5" />
              <span className="text-base font-normal text-[#d6d0e0]">
                Join our Discord community
              </span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-4 auto-rows-auto w-full sm:w-1/2 max-w-[24rem] max-sm:text-center">
          <div className="flex flex-col gap-y-4">
            <h4 className="text-lg font-medium transition-colors duration-300 text-[#ab88fb]  hover:text-purple-300">
              Company
            </h4>
            <div className="flex flex-col gap-y-4">
              <Link
                to="/about"
                className="transition-colors duration-300 hover:text-purple-300"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="transition-colors duration-300 hover:text-purple-300"
              >
                Contact
              </Link>
              <Link
                to="/ai-creator-program"
                className="transition-colors duration-300 hover:text-purple-300"
              >
                AI Creator Program
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-y-4">
            <h4 className="text-lg font-medium transition-colors duration-300 text-[#ab88fb]  hover:text-purple-300">
              Tools
            </h4>
            <div className="flex flex-col gap-y-4">
              <Link
                to="/online-video-editor"
                className="transition-colors duration-300 hover:text-purple-300"
              >
                Online Video Editor
              </Link>
              <Link
                to="/add-subtitles"
                className="transition-colors duration-300 hover:text-purple-300"
              >
                Add Subtitles
              </Link>
              <Link
                to="/api"
                className="transition-colors duration-300 hover:text-purple-300"
              >
                API
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container flex items-center justify-between mx-auto mt-7 max-sm:flex-col max-sm:items-center">
        <ul className="flex items-center gap-x-6 max-sm:justify-center max-sm:mb-4">
          {socialicons.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center transition-transform duration-300 hover:rotate-x-180 hover:scale-125  "
            >
              <img
                src={item.iconUrl}
                width={25}
                height={20}
                alt={item.title}
                className="transition-opacity duration-300 hover:opacity-80 " 
              />
            </a>
          ))}
        </ul>

        <div className="flex items-center gap-x-20 max-sm:mt-4 max-sm:text-center">
          <p className="transition-colors duration-300 hover:text-purple-300">
            Privacy Policy
          </p>
          <p className="transition-colors duration-300 hover:text-purple-300">
            Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


