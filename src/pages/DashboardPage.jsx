import React from 'react'
import img1 from '../assets/Dashboard/Artwork.png'
import img2 from '../assets/Dashboard/Note.png'
import img3 from '../assets/Dashboard/wallet.png'
import img4 from '../assets/Dashboard/chart.png'
import img5 from '../assets/Dashboard/Chart.png'
import { Bell } from 'lucide-react';
const DashboardPage = () => {
  const iteams = [
    {

      icon: img1,
      data: "24K",
      name: "Artworks",
      percent: "+168.001%",
      bgcolor: "#6F4FF2",
    },
    {

      icon: img1,
      data: "89",
      name: "Auction",
      percent: "+168.001%"
    },
    {

      icon: img1,
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
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
    },
    {
      id: 2,
      username: "Papaya",
      action: "0.06ETH Received",
      timestamp: "12 mins ago",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
    },
    {
      id: 3,
      username: "Papaya",
      action: "Started Following you",
      timestamp: "12 mins ago",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
    },
    {
      id: 4,
      username: "Papaya",
      action: "Has been sold by",
      amount: "12.75ETH",
      timestamp: "12 mins ago",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
    },
    {
      id: 5,
      username: "Papaya",
      action: "Purchase by you for",
      amount: "0.05 ETH",
      timestamp: "12 mins ago",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
    }
  ];
  return (
    <div className='mx-16'>

      <div className=' flex justify-around items-start gap-10'>
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


      <div className="  flex items-center justify-start p-4">
        <div className="w-full max-w-md  rounded-xl shadow-lg overflow-hidden">
          <div className="p-4  flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <h2 className="text-lg font-semibold text-white">Recent Activity</h2>
            </div>
            <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
              See more
            </button>
          </div>

          <div className="divide-y divide-gray-700 navbar mt-5 rounded-2xl">
            {notifications.map((notification) => (
              <div key={notification.id} className="flex items-center space-x-4 p-4 hover:bg-gray-700/50 transition-colors">
                <img
                  src={notification.avatar}
                  alt={notification.username}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-200">
                    <span className="font-medium">{notification.username}</span>
                    {' '}{notification.action}{' '}
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
      </div>
    </div>
  )
}

export default DashboardPage