import React from 'react'
import NftCard from '../components/hero/NftCard'
import img1 from '../assets/Homepage/NFTcard/Card.png';


const CollectionPage = () => {
  // Generating NFT card data dynamically
  const nftCards = new Array(8).fill(null).map((_, index) => ({
    id: index,
    imageUrl: img1,
    title: "Liquid Wave",
    auctionTimeLeft: `${Math.floor(Math.random() * 10) + 1}h ${Math.floor(Math.random() * 60)}m`,
    currentBid: `${(Math.random() * 5 + 1).toFixed(2)} ETH`,
    minBid: `${(Math.random() * 3 + 0.5).toFixed(2)} ETH`,
  }));
  return (
    <div className='mx-14 '>
      <div className='flex items-center justify-between '>
        <div>

          <h1 className='font-bold'>Collections</h1>
          <p className='text-sm'>Welcome Collections Page</p>
        </div>
        <div className='flex gap-4 items-center'>
          <p>Home</p>

          <p>Saved</p>
        </div>
      </div>
      <div className='mt-10'>
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



      </div>
    </div>
  )
}

export default CollectionPage