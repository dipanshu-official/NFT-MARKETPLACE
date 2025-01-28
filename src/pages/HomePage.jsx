import React from 'react'
import Btn from '../components/hero/Btn.jsx'
import img from '../assets/Homepage/NFT.png'
import avtar from '../assets/Homepage/Avatar.png'
import NftCard from '../components/hero/NftCard.jsx'


const HomePage = () => {
    return (
        <>
            <div className='flex gap-10 items-center justify-between mx-10'>
                <div className='backgroundimg rounded-xl'>
                    <div className='px-8 pt-10'>
                        <div className='font-bold w-[250px] text-2xl'>
                            <h1>Discover, Collect, Sell and Create your NFT</h1>
                        </div>
                        <div className='text-sm text-gray-500 mt-6  '>
                            <p>Digital Market place for crypto collectibles and non  fungable tokens</p>
                        </div>
                        <div>
                            <div className='flex gap-2 mt-6'>
                                <Btn color='primary'>
                                    Explore
                                </Btn>
                                <Btn color='danger'>
                                    Create
                                </Btn>
                            </div>
                        </div>
                    </div>


                </div>
                {/* 
            Another section  */}
                <div className=' flex p-4 navbar rounded-xl'>

                    <div className='h-full w-[280px]'>
                        <img src={img} alt="" />
                    </div>
                    <div className='flex-col'>
                        <div className='flex items-center gap-2'>
                            <img src={avtar} alt="" />
                            <h2>John Abraham</h2>
                        </div>
                        <div className='mt-4 font-bold '>
                            <h1>Birghten LQ</h1>
                        </div>

                        <div className='flex gap-4'>
                            <Btn color='primary'>
                                Place a Bid
                            </Btn>
                            <Btn color='danger'>
                                Details
                            </Btn>
                        </div>
                    </div>



                </div>

            </div>

            <div className="flex justify-between items-center px-8 mt-6">
                <h2 className="text-2xl font-bold">Trending Bids</h2>
                <div className="flex space-x-2">
                    <button className="bg-primary px-4 py-1 rounded-full text-sm">All</button>
                    <button className="text-gray-400 hover:text-white px-4 py-1 rounded-full text-sm">Artwork</button>
                    <button className="text-gray-400 hover:text-white px-4 py-1 rounded-full text-sm">Book</button>
                </div>
            </div>

            <div className='px-8 flex gap-4'>
            <NftCard/>
            <NftCard/>
            <NftCard/>
            <NftCard/>
            <NftCard/>
            <NftCard/>
            <NftCard/>
            <NftCard/>
            <NftCard/>
            <NftCard/>

            </div>

        </>
    )
}

export default HomePage