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

import NftCard from "../components/hero/NftCard.jsx";

const Dashboard = () => {
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
      <div className="md:mx-14 sm:mx-8 mx-4 ">

        <div className="flex  items-center justify-between gap-12  ">
          <div className="backgroundimg  rounded-xl">
            <div className=" pt-7 pl-8">
              <h1 className="font-bold w-[250px] text-2xl">
                Discover, Collect, Sell and Create your NFT
              </h1>
              <p className="text-xs text-gray-500 mt-3 ">
                Digital Marketplace for crypto collectibles and non-fungible tokens
              </p>
              <div className="flex gap-2 mt-5">
                <Btn color="primary">Explore</Btn>
                <Btn color="danger">Create</Btn>
              </div>
            </div>
          </div>


          {/* NFT Showcase Section */}
          <div className="">

            <div className="flex items-center navbar w-[500px]  h-[200px] gap-4 p-4   rounded-xl">
              <div className="p-4 w-auto">
                <img src={img} alt="NFT Display" className="" />
              </div>
              <div className="flex-col items-start">
                <div className="flex items-center gap-2">
                  <img src={avtar} alt="Creator Avatar" />
                  <h2>John Abraham</h2>
                </div>
                <div className="mt-4 font-bold">
                  <h1>Brighten LQ</h1>
                </div>
                <div className="flex mt-5 gap-4 ">
                  <Btn color="primary" >Place</Btn>
                  <Btn color="danger">Details</Btn>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Trending Bids Section */}
        < div className="flex justify-between items-center  mt-6 mb-8" >
          <h2 className="text-2xl font-bold">Trending Bids</h2>
          <div className="flex ">
            <button className="px-2 py-1 rounded-full text-sm">All</button>
            <button className="text-white hover:bg-btn px-2 py-1 rounded-full text-sm">Artwork</button>
            <button className="text-white hover:bg-btn px-2 py-1 rounded-full text-sm">Book</button>
          </div>
        </div >

        {/* NFT Cards Section */}
        <div className="grid md:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-6 justify-center items-center place-items-center">
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


        <div className=' flex justify-around items-start gap-10 mt-8'>
          <div>
            <h1 className='font-bold'>Trending Bids</h1>
            {
              iteams.map((item, index) => (
                <div className='navbar flex gap-5 py-4 rounded-2xl mt-5 px-6 items-center' >

                  <div className='  bg-[#6F4FF2] rounded-full flex items-center p-6'>
                    <img src={img1} alt="" />
                  </div>
                  <div className='flex-col items-center justify-center'>
                    <h1 className='font-bold text-2xl'>{item.data}</h1>
                    <p className='text-sm text-[#68676E]'> Artworks</p>
                  </div>
                  <h3>+168.001%</h3>
                </div>
              ))
            }


          </div>

          <div>
            <div>
              <h1 className='font-bold'>ETH Price</h1>
              <div className='navbar rounded-2xl mt-5 '>
                <img src={img4} alt="" className='p-4' />
              </div>
            </div>
          </div>
          <div>
            <div>
              <h1 className='font-bold'>Statistics</h1>
              <div className='navbar rounded-2xl mt-5'>
                <img src={img5} alt="" className='px-5 pt-3 pb-12' />
              </div>
            </div>
          </div>


        </div>


        {/* Notification section */}


        <div className="  flex items-center justify-start gap-6   p-4">
          <div className="w-full max-w-md  rounded-xl shadow-lg overflow-hidden">
            <div className="p-4  flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <h2 className="text-lg font-semibold text-white">Recent Activity</h2>
              </div>
              <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                See more
              </button>
            </div>

            <div className=" navbar mt-5 rounded-2xl">
              {notifications.map((notification) => (
                <div key={notification.id} className="flex items-center space-x-4 p-4 ">
                  <img
                    src={notification.avatar}
                    alt={notification.username}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-200">
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
          {/* Top Creaters */}

          <div className='flex flex-col gap-6'>
            <h1 className='font-bold text-xl mt-2'> Top Creators</h1>
            <div className="flex items-center justify-center  ">

              <div className="grid grid-cols-2 gap-8 " >
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

      </div>
    </>
  );
};

export default Dashboard;
