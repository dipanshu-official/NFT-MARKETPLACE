import React from 'react'
import avtar from "../assets/Homepage/Avatar.png";
import tick from '../assets/Profile/tick.png'
import lock from '../assets/Profile/lock.png'
import { UnFollowButton } from '../components/UnFollowButton';
import image from '../assets/Homepage/NFTcard/Card.png';
import Card from '../components/hero/Card';



const ProfilePage = () => {
  const Cards = new Array(4).fill(null).map((_, index) => ({
    id: index,
    imageUrl: image,
    title: "Liquid Wave",
    img: avtar,

  }));

  return (
    <div className='max-w-screen-2xl mx-auto md:px-[70px] px-[20px]'>


      <div className='flex  items-center justify-between '>
        <div>

          <h1 className='font-bold'>Saved Items</h1>
          <p className='text-sm'>Welcome Saved Page</p>
        </div>
        <div className='flex gap-4 items-center'>
          <p>Home</p>

          <p>Saved</p>
        </div>
      </div>
      <div className='mt-5 flex flex-col lg:flex-row gap-5'>
        <div className='navbar p-4 rounded-xl'>
          <div>
            <img src={avtar} alt='' />
          </div>
          <div className='flex flex-col mt-2'>
            <h1 className='font-bold'>Welcome, John Smith</h1>
            <p className='text-sm   '>
              Looks like you are not verified yet. Verify yourself to use the full potential of Xtrader.
            </p>
          </div>
          <div className='mt-6 flex gap-5 items-center'>
            <div className='bg-[#50BB25] rounded-full w-8 h-8 flex items-center justify-center'>
              <img src={tick} alt='' />
            </div>
            <p className='text-[#6F4FF2]'>Verify account</p>
          </div>
          <div className='mt-6 flex gap-5 items-center'>
            <div className='bg-[#6F4FF2] rounded-full w-8 h-8 flex items-center justify-center'>
              <img src={lock} alt='' />
            </div>
            <p className='text-[#6F4FF2]'>Two-factor Authentication (2FA)</p>
          </div>
        </div>
        <div className='mt-14'>
          <h1 className='font-bold text-xl mt-2'>Following</h1>
          <div className='flex items-center justify-center mt-2'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
              {Array(4).fill().map((_, index) => (
                <UnFollowButton key={index} name='Papaya' itemCount={60} imageUrl={avtar} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Profile page end here  */}
      <div className='mt-4'>
        <h1 className='font-bold ml-2 text-xl'>My bought</h1>
        <div className="grid md:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          {Cards.map((card) => (
            <Card
              key={card.id}
              imageUrl={card.imageUrl}
              title={card.title}
              img={card.img}

            />
          ))}
        </div>
      </div>
      {/* Card section end here  */}
      <div className='mt-4'>
        <h1 className='font-bold ml-2 text-xl'>My Collection</h1>
        <div className="grid md:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          {Cards.map((card) => (
            <Card
              key={card.id}
              imageUrl={card.imageUrl}
              title={card.title}
              img={card.img}

            />
          ))}
        </div>
      </div>


    </div>



  )
}

export default ProfilePage