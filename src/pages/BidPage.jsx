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

 const BidPage = () => {

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
    <div className='max-w-screen-2xl mx-auto px-[70px]'>
      <div className='flex items-center justify-between '>
        <div>

          <h1 className='font-bold'>Bids</h1>
          <p className='text-sm'>Welcome Bids Page</p>
        </div>
        <div className='flex gap-4 items-center'>
          <p>Home</p>

          <p>Saved</p>
        </div>
      </div>
      <div className="flex  justify-around items-center " >
        {
          iteams.map((item, index) => (
            <div key={index} className='navbar flex  gap-5 py-4 rounded-2xl mt-5 px-6 pr-15  items-center' >

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
    </div>
  );
};

export default BidPage