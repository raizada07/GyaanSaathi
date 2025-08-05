import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-10 shadow-inner">
      <h2 className="text-center text-gray-800 text-lg font-bold">Connect With Us</h2>
      <div className="flex justify-center gap-6 mt-4 text-blue-600 text-2xl">
        <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="hover:text-blue-800 transition" />
        </a>
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-600 transition" />
        </a>
        <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="hover:text-green-600 transition" />
        </a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-500 transition" />
        </a>
      </div>
      <p className="text-center text-gray-500 mt-4 text-sm">© 2025 GyaanSaathi. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
