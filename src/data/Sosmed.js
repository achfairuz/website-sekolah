import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Sosmed = [
  {
    id: 1,
    name: "Facebook",
    icon: <FaFacebook className='w-6 h-6' />,
    url: "https://facebook.com",
  },
  {
    id: 2,
    name: "Instagram",
    icon: <FaInstagram className='w-6 h-6' />,
    url: "https://instagram.com",
  },
  {
    id: 3,
    name: "Twitter",
    icon: <FaTwitter className='w-6 h-6' />,
    url: "https://twitter.com",
  },
  {
    id: 4,
    name: "LinkedIn",
    icon: <FaLinkedin className='w-6 h-6' />,
    url: "https://linkedin.com",
  },
  {
    id: 5,
    name: "YouTube",
    icon: <FaYoutube className='w-6 h-6' />,
    url: "https://youtube.com",
  },
];

export default Sosmed;
