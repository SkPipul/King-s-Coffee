import { GiBurningBook } from "react-icons/gi";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <div className="footer p-10 bg-[#010B2E] text-neutral-content">
        <div>
          <p className="flex items-center">
            <span className="text-orange-500 text-3xl flex items-center gap-2 font-extrabold">King'S
            </span>
            <span className="text-xl ml-1 font-bold">Coffee</span>
          </p>
          <p>
            King'S Coffee Shop Ltd.
            <br />
            Providing reliable tech since 2000
          </p>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com/sk.pipul.7/">
              <BsFacebook className="text-2xl hover:text-blue-700 hover:bg-white transition-all duration-300 rounded-full border-none"></BsFacebook>
            </a>
            <a href="https://github.com/SkPipul">
              <BsGithub className="text-2xl hover:bg-black transition-all duration-300 rounded-full border-none"></BsGithub>
            </a>
            <a href="https://www.linkedin.com/in/muhammad-shekh-jabedul-islam/">
              <GrLinkedin className="text-2xl hover:text-blue-700 hover:bg-white transition-all duration-300 rounded-full border-none"></GrLinkedin>
            </a>
          </div>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact us</a>
          <a className="link link-hover">All Services</a>
        </div>
      </div>
      <div className="footer footer-center p-4 bg-black text-white">
        <div>
          <p>
            Copyright © 2023 - All right reserved by King'S Coffee Shop
            Ltd
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;