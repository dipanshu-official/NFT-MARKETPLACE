import React from "react";
import Btn from "../components/hero/Btn.jsx";
import img from "../assets/Homepage/NFT.png";
import avtar from "../assets/Homepage/Avatar.png";
import image from '../assets/Homepage/NFTcard/Card.png';
import img1 from '../assets/Dashboard/Artwork.png'
import img2 from '../assets/Dashboard/Note.png'
import img3 from '../assets/Dashboard/wallet.png'
import img4 from '../assets/Dashboard/chart.png'
import img5 from '../assets/Dashboard/Chart.png'
import avtar2 from '../assets/Dashboard/Avatar.png'
import { FollowButton } from '../components/FollowButton'
import nft1 from '../assets/Dashboard/TrendingBids/NFT.png'
import nft2 from '../assets/Dashboard/TrendingBids/NFT2.png'
import nft3 from '../assets/Dashboard/TrendingBids/NFT3.png'
import nft4 from '../assets/Dashboard/TrendingBids/NFT4.png'
import nft5 from '../assets/Dashboard/TrendingBids/NFT5.png'
import dp from '../assets/Dashboard/TrendingBids/avatar.png'
import { X } from 'lucide-react';
import { useTheme } from "../ThemeContext/ThemeContext.jsx";




const BidPage = () => {
  const { theme, toggleTheme } = useTheme();

  const nftData = [
    {
      title: "Cute Cube Cool",
      creator: "John Abraham",
      profile: nft1,
      price: "0.0025 ETH",
      bidPrice: "0.0025 ETH",
      timeLeft: "2 Hours 1 min 30s"
    },
    {
      title: "Liquid Wave",
      creator: "John Abraham",
      profile: nft2,
      price: "0.0025 ETH",
      bidPrice: "0.0025 ETH",
      timeLeft: "2 Hours 1 min 30s"
    },
    {
      title: "Cute Cube Cool",
      creator: "John Abraham",
      profile: nft3,

      price: "0.0025 ETH",
      bidPrice: "0.0025 ETH",
      timeLeft: "2 Hours 1 min 30s"
    },
    {
      title: "Cute Cube Cool",
      creator: "John Abraham",
      profile: nft4,

      price: "0.0025 ETH",
      bidPrice: "0.0025 ETH",
      timeLeft: "2 Hours 1 min 30s"
    },
    {
      title: "Cute Cube Cool",
      creator: "John Abraham",
      profile: nft5,

      price: "0.0025 ETH",
      bidPrice: "0.0025 ETH",
      timeLeft: "2 Hours 1 min 30s"
    }
  ]

  const iteams = [
    {

      icon: img1,
      data: "24K",
      name: "Artworks",
      percent: "+168.001%",
      bgcolor: "#6F4FF2",
    },
    {

      icon: img2,
      data: "89",
      name: "Auction",
      percent: "+168.001%"
    },
    {

      icon: img3,
      data: "82K",
      name: "Creaters",
      percent: "+168.001%"
    },
    {

      icon: img3,
      data: "82K",
      name: "Creaters",
      percent: "+168.001%"
    },
  ]
  return (
    <div className='max-w-screen-2xl mb-20                                         mx-auto md:px-[70px] px-[20px]'>
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className={`${theme === "dark" ? "text-white" : "text-black"} text-2xl font-bold`}>
            Bids
          </h1>
          <p className={`${theme === "dark" ? "text-white" : "text-black"} text-sm mt-1`}>
            Welcome Bids Page
          </p>
        </div>
        <div className="flex items-center gap-4">
          <p className="hover:opacity-80 cursor-pointer">Home</p>
          <p className="hover:opacity-80 cursor-pointer">Saved</p>
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {iteams.map((item, index) => (
          <div
            key={index}
            className={`
              ${theme === "dark" ? "navbar" : "bg-white"}
              flex items-center gap-3 md:gap-
              p-4 md:p-4
              rounded-2xl
            `}
          >
            <div className="bg-[#6F4FF2] rounded-full p-2 md:p-3 flex-shrink-0">
              <img
                src={item.icon }
                alt=""
                className="w-8 h-8  md:h-10 object-contain"
              />
            </div>

            <div className="flex-grow min-w-0">
              <h1 className={`
                ${theme === "dark" ? "text-white" : "text-black"}
                font-bold text-lg md:text-xl lg:text-2xl
                truncate
              `}>
                {item.data}
              </h1>
              <p className="text-sm text-[#68676E]">Artworks</p>
            </div>

            <div className="flex-shrink-0">
              <h3 className="text-[#DC3546] text-sm md:text-base">+168.001%</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h1 className="font-bold text-xl mb-4">Active Bids</h1>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] border-separate border-spacing-y-2">
            <thead className="text-white">
              <tr>
                <th className="p-3 text-left">
                  <input type="checkbox" className="w-5 h-5 cursor-pointer" />
                </th>
                <th className={`${theme === "dark" ? "text-white" : "text-black"} p-3 text-left`}>Item List</th>
                <th className={`${theme === "dark" ? "text-white" : "text-black"} p-3 text-left`}>Open Price</th>
                <th className={`${theme === "dark" ? "text-white" : "text-black"} p-3 text-left`}>Your Offer</th>
                <th className={`${theme === "dark" ? "text-white" : "text-black"} p-3 text-left`}>Recent Offer</th>
                <th className={`${theme === "dark" ? "text-white" : "text-black"} p-3 text-left`}>Time Left</th>
                <th className={`${theme === "dark" ? "text-white" : "text-black"} p-3 text-left`}>Action</th>
              </tr>
            </thead>
            <tbody>
              {nftData.map((nft, index) => (
                <tr key={index} className={`${theme === "dark" ? "navbar" : "bg-white"} border border-gray-300 rounded-3xl w-fix shadow-md overflow-hidden`}>
                  <td className="p-3 rounded-l-lg">
                    <input type="checkbox" className="w-5 h-5 cursor-pointer" />
                  </td>
                  <td className="p-3 flex items-center space-x-3">
                    <img src={nft.profile} alt={nft.title} className="w-12 h-12 rounded-lg object-cover" />
                    <div>
                      <h3 className={`${theme === "dark" ? "text-white" : "text-black"} font-semibold`}>{nft.title}</h3>
                      <p className="text-gray-400 text-sm">{nft.creator}</p>
                    </div>
                  </td>
                  <td className={`${theme === "dark" ? "text-white" : "text-black"} p-3 font-medium`}>{nft.price}</td>
                  <td className={`${theme === "dark" ? "text-white" : "text-black"} p-3 font-medium`}>{nft.bidPrice}</td>
                  <td className="p-3 flex items-center space-x-3">
                    <img src={dp} alt="Bidder" className="w-8 h-8 rounded-full" />
                    <p className={`${theme === "dark" ? "text-white" : "text-black"} font-medium`}>{nft.bidPrice}</p>
                  </td>
                  <td className={`${theme === "dark" ? "text-white" : "text-black"} p-3 font-medium`}>{nft.timeLeft}</td>
                  <td className="p-3 rounded-r-lg">
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <X size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default BidPage