import React from "react";
import Btn from "../components/hero/Btn.jsx";
import img from "../assets/Homepage/NFT.png";
import avtar from "../assets/Homepage/Avatar.png";
import img1 from '../assets/Homepage/NFTcard/Card.png';

import NftCard from "../components/hero/NftCard.jsx";

const HomePage = () => {
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
        <>
            {/* Header Section */}
            <div className="mx-14">

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
                                <img src={img} alt="NFT Display" className=""  /> 
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
                <div className="grid grid-cols-4 gap-6 justify-center items-center place-items-center">
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
        </>
    );
};

export default HomePage;
