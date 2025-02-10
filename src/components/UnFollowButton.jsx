import React from 'react'
import { useTheme } from '../ThemeContext/ThemeContext'

export function UnFollowButton({ name, itemCount, imageUrl }) {  
      const { theme, toggleTheme } = useTheme(); // Now properly inside function body

    return (
        <div className=" rounded-xl  flex items-center justify-between  ">
            <div className={`${theme==="dark" ? "navbar":"bg-white"} flex items-center gap-3  px-4 py-3 rounded-xl`} >
                <img
                    src={imageUrl}
                    alt={`${name}'s profile`}
                    className="w-10 h-10 rounded-full object-cover"
                />
                <div className='flex items-center justify-between w-[230px]'>
                    <div>

                        <h3 className={`${theme==="dark" ? "text-white" : "text-black"} font-semibold`}>{name}</h3>
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