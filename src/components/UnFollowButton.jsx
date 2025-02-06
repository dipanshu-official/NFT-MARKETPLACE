import React from 'react'

export function UnFollowButton({ name, itemCount, imageUrl }) {
    return (
        <div className=" rounded-xl  flex items-center justify-between  ">
            <div className="flex items-center gap-3 navbar px-4 py-3 rounded-xl">
                <img
                    src={imageUrl}
                    alt={`${name}'s profile`}
                    className="w-10 h-10 rounded-full object-cover"
                />
                <div className='flex items-center justify-between w-[230px]'>
                    <div>

                        <h3 className="text-white font-semibold">{name}</h3>
                        <p className="text-gray-400 text-sm">{itemCount} Items</p>
                    </div>
                    <div>
                    <button className="  my-auto text-white px-2 cursor-pointer rounded-lg outline-none bg-[#DC3546] font-medium">
                        <p>unfollow</p>
                    </button>   
                    </div>
                </div>
            </div>
        </div>
    );
}