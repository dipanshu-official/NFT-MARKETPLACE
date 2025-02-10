import React from 'react';
import { useTheme } from '../../ThemeContext/ThemeContext.jsx';

const Card = ({ imageUrl, title, img }) => {
  const { theme } = useTheme();

  return (
    <div className={`max-w-lg mx-auto gap-5 p-4 rounded-2xl overflow-hidden shadow-lg 
      ${theme === "dark" ? "navbar" : "bg-white"}`}>

      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full object-cover rounded-2xl"
        />
      </div>

      <div className="flex md:gap-10 gap-4">
        <h3 className={`${theme === "dark" ? "text-white" : "text-black"} mt-2 font-bold`}>
          {title}
        </h3>
        <div className='relative bottom-6'>
          <img src={img} alt="Card thumbnail"  />
        </div>
      </div>
    </div>
  );
};

export default Card;
