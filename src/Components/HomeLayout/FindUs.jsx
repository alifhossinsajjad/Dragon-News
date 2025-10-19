import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const FindUs = () => {
    const socials = [
    {
      name: "Facebook",
      icon: <FaFacebookF className="text-blue-600 text-lg" />,
      link: "https://facebook.com",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="text-sky-500 text-lg" />,
      link: "https://twitter.com",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-pink-500 text-lg" />,
      link: "https://instagram.com",
    },
  ];
    return (
        <div>
             <div className="card bg-base-100 ">
      <div>
        <h2 className="text-lg font-semibold mb-3 text-gray-800">Find Us On</h2>
        <div className="flex flex-col w-full">
          {socials.map((s, idx) => (
            <a
              key={idx}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-gray-200 rounded-lg py-2 px-3 hover:bg-gray-100 transition"
            >
              <div className="bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full">
                {s.icon}
              </div>
              <span className="text-gray-700 font-medium">{s.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
        </div>
    );
};

export default FindUs;