import React from 'react';


const Card = ({
  
  imageUrl,
  title,
  img
  
}) => {
  return (
    <div className="max-w-lg mx-auto gap-5 navbar p-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
      <div className="relative ">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full  object-cover  rounded-2xl"
        />
      </div>
      
      <div className="flex  md:gap-10 gap-4">
        <h3 className="text-white mt-2 font-bold ">{title}</h3>
        <div className='relative bottom-6'>
            <img src={img} alt="" className='' />
        </div>
    
        
        
        
       
      </div>
    </div>
  );
};
export default Card;                                       