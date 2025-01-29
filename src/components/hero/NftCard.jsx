import React from 'react';
import imageUrl from '../../assets/Homepage/NFTcard/Card.png';
const NftCard = ({
  imageUrl,
  title,
  auctionTimeLeft,
  currentBid,
  minBid
}) => {
  return (
    <div className="w-[280px] navbar p-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
      <div className="relative ">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-[200px] object-cover rounded-t-2xl"
        />
      </div>
      
      <div className="">
        <h3 className="text-white text-xl font-semibold mb-4">{title}</h3>
        
        <div className="flex justify-between mb-3">
          <div className="text-gray-400 text-sm">Auction time</div>
          <div className="text-white text-sm">{auctionTimeLeft}</div>
        </div>
        
        <div className="flex justify-between mb-4">
          <div>
            <div className="text-gray-400 text-sm">Current Bid</div>
            <div className="text-[#9b87f5] font-medium">{currentBid}</div>
          </div>
          <div className="text-right">
            <div className="text-gray-400 text-sm">Min Bid</div>
            <div className="text-[#9b87f5] font-medium">{minBid}</div>
          </div>
        </div>
        
        <button className="w-full btn-bg  text-white font-medium py-2 px- rounded-xl transition-colors duration-200">
          Place a Bid
        </button>
      </div>
    </div>
  );
};
export default NftCard;