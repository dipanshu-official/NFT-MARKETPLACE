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
import nft1 from '../assets/Dashboard/TrendingBids/NFT.png'
import nft2 from '../assets/Dashboard/TrendingBids/NFT2.png'
import nft3 from '../assets/Dashboard/TrendingBids/NFT3.png'
import nft4 from '../assets/Dashboard/TrendingBids/NFT4.png'
import nft5 from '../assets/Dashboard/TrendingBids/NFT5.png'
import dp from '../assets/Dashboard/TrendingBids/avatar.png'


import { FollowButton } from '../components/FollowButton'
import { X } from 'lucide-react';

import NftCard from "../components/hero/NftCard.jsx";
import { useTheme } from "../ThemeContext/ThemeContext.jsx";
import Chart from "../components/Chart.jsx";

const Dashboard = () => {
  const { theme, toggleTheme } = useTheme();
  // Generating NFT card data dynamically
  const nftCards = new Array(8).fill(null).map((_, index) => ({
    id: index,
    imageUrl: image,
    title: "Liquid Wave",
    auctionTimeLeft: `${Math.floor(Math.random() * 10) + 1}h ${Math.floor(Math.random() * 60)}m`,
    currentBid: `${(Math.random() * 5 + 1).toFixed(2)} ETH`,
    minBid: `${(Math.random() * 3 + 0.5).toFixed(2)} ETH`,
  }));


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
  ]
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

  const notifications = [
    {
      id: 1,
      username: "Papaya",
      action: "Purchase by you for",
      amount: "0.05 ETH",
      timestamp: "12 mins ago",
      avatar: avtar
    },
    {
      id: 2,
      username: "Papaya",
      action: "0.06ETH Received",
      timestamp: "12 mins ago",
      avatar: avtar
    },
    {
      id: 3,
      username: "Papaya",
      action: "Started Following you",
      timestamp: "12 mins ago",
      avatar: avtar
    },
    {
      id: 4,
      username: "Papaya",
      action: "Has been sold by",
      amount: "12.75ETH",
      timestamp: "12 mins ago",
      avatar: avtar
    },
    {
      id: 5,
      username: "Papaya",
      action: "Purchase by you for",
      amount: "0.05 ETH",
      timestamp: "12 mins ago",
      avatar: avtar
    }
  ];



  return (
    <>
      {/* Header Section */}
      <div className="min-h-screen md:px-[70px] px-[20px]">

        <div className=" grid md:grid-cols-2 grid-cols-1 items-center gap-8  ">
          <div className="backgroundimg rounded-xl p-6">
            <div className=" ">
              <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-xs sm:max-w-sm md:max-w-md">
                Discover, Collect, Sell and Create your NFT
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-white mt-3 max-w-xs sm:max-w-sm">
                Digital Marketplace for crypto collectibles and non-fungible tokens
              </p>
              <div className="flex  gap-3 mt-5">
                <Btn color="primary">Explore</Btn>
                <Btn color="danger">Create</Btn>
              </div>
            </div>
          </div>


          {/* NFT Showcase Section */}
          <div className="w-full">
            <div
              className={`flex flex-col sm:flex-row  w-full ${theme === "dark" ? "navbar" : "bg-white"
                } md:h-[228px] h-auto gap-4 p-6 rounded-xl`}
            >


              {/* Image Section */}
              <div className="w-full sm:w-auto flex justify-center">
                <img src={img} alt="NFT Display" className="w-auto rounded-2xl h-full   object-cover" />
              </div>


              {/* Content Section */}
              <div className="flex flex-col justify-center  w-full">
                {/* Creator Info */}
                <div className="flex items-center gap-2">
                  <img src={avtar} alt="Creator Avatar" className="w-8 h-8 rounded-full" />
                  <h2 className={`${theme === "dark" ? "text-white" : "text-black"} text-sm sm:text-base font-semibold`}>John Abraham</h2>
                </div>

                {/* NFT Title */}
                <div className="mt-3 font-bold">
                  <h1 className={`${theme === "dark" ? "text-white" : "text-black"} text-lg sm:text-xl`}>Brighten LQ</h1>
                </div>

                {/* Buttons */}
                <div className="flex  justify-center sm:justify-start mt-5 gap-4">
                  <Btn color="primary">Place</Btn>
                  <Btn color="danger">Details</Btn>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Trending Bids Section */}
        < div className="flex justify-between items-center  mt-6 mb-8" >
          <h2 className={`${theme === "dark" ? "text-white" : "text-black"} md:text-2xl text-lg font-bold`}>Trending Bids</h2>
          <div className="flex ">
            <button className={`${theme === "dark" ? "text-white" : "text-black"} hover:bg-btn px-1 py-1 rounded-full text-xs`}>All</button>
            <button className={`${theme === "dark" ? "text-white" : "text-black"} hover:bg-btn px-1 py-1 rounded-full text-xs`}>Artwork</button>
            <button className={`${theme === "dark" ? "text-white" : "text-black"} hover:bg-btn px-1 py-1 rounded-full text-xs`}>Book</button>
          </div>
        </div >

        {/* NFT Cards Section */}
        <div className="grid md:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-6 ">
          {nftCards.map((card) => (
            <NftCard
              key={card.id}
              imageUrl={card.imageUrl}
              title={card.title}
              auctionTimeLeft={card.auctionTimeLeft}
              currentBid={card.currentBid}
              minBid={card.minBid}
            />
          ))}
        </div>


        <div className='flex flex-col md:flex-row justify-around items-start gap-5 md:gap-10 mt-8 w-full'>
          <div className='w-full md:w-auto'>
            <h1 className={`${theme === "dark" ? "text-white" : "text-black"}  font-bold`}>Trending Bids</h1>
            {iteams.map((item, index) => (
              <div key={index} className={`${theme === "dark" ? "navbar" : "bg-white"} flex flex-wrap md:flex-nowrap gap-3 md:gap-5 py-3 md:py-4 rounded-2xl mt-5 px-4 md:px-6 items-center`} >
                <div className='bg-[#6F4FF2] rounded-full flex items-center p-4 md:p-6'>
                  <img src={img1} alt="" className='w-full h-full object-contain' />
                </div>
                <div className='flex-col items-center justify-center'>
                  <h1 className={`${theme === "dark" ? "text-white" : "text-black"} font-bold text-xl md:text-2xl`}>{item.data}</h1>
                  <p className='text-sm text-[#68676E]'>Artworks</p>
                </div>
                <h3 className='ml-auto text-[#DC3546]'>+168.001%</h3>
              </div>
            ))}
          </div>

          <div className='w-full md:w-auto'>
            <div>
              <h1 className={`${theme === "dark" ? "text-white" : "text-black"}  font-bold`}>ETH Price</h1>
              <div className='navbar rounded-2xl mt-5'>
                <Chart/>
              </div>
            </div>
          </div>

          <div className='w-full md:w-auto'>
            <div>
              <h1 className={`${theme === "dark" ? "text-white" : "text-black"}  font-bold`}>Statistics</h1>
              <div className='navbar rounded-2xl mt-5'>
                <img src={img5} alt="" className='w-full px-3 md:px-5 pt-2 md:pt-3 pb-8 md:pb-12 object-contain' />
              </div>
            </div>
          </div>
        </div>


        {/* Notification section */}


        <div className="flex mt-6 flex-col md:flex-row items-start justify-start gap-4 md:gap-6">
          {/* Recent Activity Section */}
          <div className="w-full md:w-auto md:max-w-md rounded-xl  overflow-hidden">
            <div className="p-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <h2 className={`${theme === "dark" ? "text-white" : "text-black"} text-lg font-semibold`}>Recent Activity</h2>
              </div>
              <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                See more
              </button>
            </div>

            <div className={`${theme === "dark" ? "navbar" : "bg-white"} mt-5 rounded-2xl`}>
              {notifications.map((notification) => (
                <div key={notification.id} className="flex items-center space-x-4 p-3 md:p-4">
                  <img
                    src={notification.avatar}
                    alt={notification.username}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className={`${theme === "dark" ? "text-white" : "text-black"} text-sm`}>
                      <span className="font-medium">{notification.username}</span>
                      {' '}{notification.action}{''}
                      {notification.amount && (
                        <span className="text-purple-400">{notification.amount}</span>
                      )}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {notification.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Creators Section */}
          <div className='flex flex-col gap-4 md:gap-6 w-full md:w-auto mt-4'>
            <h1 className={`${theme === "dark" ? "text-white" : "text-black"} text-lg font-bold  md:text-xl mt-2`}>Top Creators</h1>
            <div className="flex items-center justify-center w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 w-full">
                {Array(8).fill().map((_, index) => (
                  <FollowButton
                    key={index}
                    name="Papaya"
                    itemCount={60}
                    imageUrl={avtar}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* trending bids section Here  */}


        <div className="mt-6 md:mb-0 mb-25">
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
                  <tr key={index} className={`${theme === "dark" ? "navbar" : "bg-white"} border border-gray-300 rounded-3xl  shadow-md overflow-hidden`}>
                    <td className="p-3 rounded-l-lg">
                      <input type="checkbox" className="w-5 h-5 cursor-pointer" />
                    </td>
                    <td className="p-3 flex items-center justify-center space-x-3">
                      <img src={nft.profile} alt={nft.title} className="w-16 h-12 rounded- object-cover" />
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
                      <button className="text-white hover:text-gray-400  font-bold transition-colors">
                        <X size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>


      </div>
    </>
  );
};

export default Dashboard;
