import React from 'react'
import { useState } from 'react';
import { User, Lock, Mail, Save } from 'lucide-react';
import { useTheme } from '../ThemeContext/ThemeContext';


const SettingPage = () => {

  const { theme, toggleTheme } = useTheme();

  const [formData, setFormData] = useState({
    fullName: 'John smith ',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div className='min-h-screen md:px-[70px] px-[20px] mb-20 md:mb-5'>
      <div className={`${theme === "dark" ? "text-white" : "text-black"} flex items-center justify-between`}>

        <div>
          <h1 className='font-bold'>Setting</h1>
          <p className='text-sm'>Welcome Setting Page</p>
        </div>

        <div className='flex gap-4 items-center'>
          <p>Home</p>

          <p>Saved</p>
        </div>
      </div>
      <div className={`${theme === "dark" ? "text-white" : "text-black"} hidden md:block`}>
        <ul className='flex items-center gap-4 mt-8 cursor-pointer '>
          <li>Profile</li>
          <li>Application</li>
          <li>Security</li>
          <li>Activity</li>
          <li>Payment Method</li>
          <li>API</li>
        </ul>
      </div>
      <div className='mt-10'>


        <div className="grid grid-cols-1 justify-between md:grid-cols-2 gap-8   ">
          {/* Profile Section */}
          <div>
            <h1 className={`${theme === "dark" ? "text-white" : "text-black  "}font-bold text-2xl`}>User profile</h1>

            <div className={`  ${theme === "dark" ? "navbar" : "bg-[#FFFFFF]"} mt-6 p-8 rounded-2xl`}>


              <div className="space-y-4 ">
                <label className={`${theme === "dark" ? "text-white" : "text-black"} block mb-2`}>Full Name</label>
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full ${theme === "dark" ? "bg-[#131129] text-white " : "bg-[#FFFFFF]  border-[0.5px] border-[#65646A] text-black"} outline-none rounded-lg py-3 pl-4 pr-4 `}

                  />
                </div>

              </div>

              <div className="flex items-center gap-4 mt-6">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8" />
                </div>

                <h2 className="text-xl font-semibold">{formData.fullName}</h2>
                <p className={`${theme === "dark" ? "text-white" : "text-black"} block text-sm mb-2`}>Welcome Setting Page</p>

              </div>
              <button className="btn-bg text-white mt-6 px-8 py-2 rounded-lg flex items-center gap-2 transition-colors">
                Save
              </button>
            </div>
          </div>

          {/* Security Section */}
          <div>
            <h1 className={`${theme === "dark" ? "text-white" : "text-black  "}font-bold text-2xl`}>Update Profile</h1>

            <div className={`  ${theme === "dark" ? "navbar" : "bg-[#FFFFFF]"} mt-6 p-8 rounded-2xl`}>

              <div className="space-y-4">
                <div>
                  <label className={`${theme === "dark" ? "text-white" : "text-black"} block mb-2`}>Email Address</label>
                  <div className="relative">

                    <input
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full ${theme === "dark" ? "bg-[#131129] text-white " : "bg-[#FFFFFF]  border-[0.5px] border-[#65646A] text-black"} outline-none rounded-lg py-3 pl-4 pr-4 `}

                    />
                  </div>
                </div>

              </div>

              <label className={`${theme === "dark" ? "text-white" : "text-black"} block mb-2`}>Password</label>
              <div className="relative">

                <input
                  type="text"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full ${theme === "dark" ? "bg-[#131129] text-white " : "bg-[#FFFFFF]  border-[0.5px] border-[#65646A] text-black"} outline-none rounded-lg py-3 pl-4 pr-4 `}

                />
              </div>


              <button className="btn-bg md-mt-0 mt-3 text-white px-8 py-2 rounded-lg flex items-center gap-2 transition-colors">
                Save
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* bottom section  */}
      <div className={`${theme === "dark" ? "text-white" : "text-black  "}`}>
        <div className="">
          <div className="grid grid-cols-1 justify-between md:grid-cols-1 gap-8">


            <div >
              <div className='mt-12'>
                <h1 className='font-bold text-xl'>Personal Information</h1>
              </div>
              <div className={`${theme === "dark" ? "navbar" : "bg-[#FFFFFF]"} p-8 rounded-2xl mt-6`}>

                <div className="space-y-4 grid grid-cols-1 justify-between md:grid-cols-2 gap-8">
                  <div>

                    <div>
                      <label className={`${theme === "dark" ? "text-white" : "text-black"} block mb-2`}>Info</label>
                      <div className="relative">

                        <input
                          type="email"
                          className={`w-full ${theme === "dark" ? "bg-[#131129] text-white " : "bg-[#FFFFFF]  border-[0.5px] border-[#65646A] text-black"} outline-none rounded-lg py-3 pl-4 pr-4 `}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={`${theme === "dark" ? "text-white" : "text-black"} block mb-2`}>info</label>
                      <div className="relative">

                        <input
                          type="text"
                          onChange={handleChange}
                          className={`w-full ${theme === "dark" ? "bg-[#131129] text-white " : "bg-[#FFFFFF]  border-[0.5px] border-[#65646A] text-black"} outline-none rounded-lg py-3 pl-4 pr-4 `}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={`${theme === "dark" ? "text-white" : "text-black"} block mb-2`}>info</label>
                      <div className="relative">

                        <input
                          type="text"

                          className={`w-full ${theme === "dark" ? "bg-[#131129] text-white " : "bg-[#FFFFFF]  border-[0.5px] border-[#65646A] text-black"} outline-none rounded-lg py-3 pl-4 pr-4 `}
                        />
                      </div>
                    </div>
                  </div>
                  <div>

                    <div>
                      <label className={`${theme === "dark" ? "text-white" : "text-black"} block mb-2`}>info</label>
                      <div className="relative">

                        <input
                          type="text"
                          onChange={handleChange}
                          className={`w-full ${theme === "dark" ? "bg-[#131129] text-white " : "bg-[#FFFFFF]  border-[0.5px] border-[#65646A] text-black"} outline-none rounded-lg py-3 pl-4 pr-4 `}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={`${theme === "dark" ? "text-white" : "text-black"} block mb-2`}>info</label>
                      <div className="relative">

                        <input
                          type="text"
                          onChange={handleChange}
                          className={`w-full ${theme === "dark" ? "bg-[#131129] text-white " : "bg-[#FFFFFF]  border-[0.5px] border-[#65646A] text-black"} outline-none rounded-lg py-3 pl-4 pr-4 `}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={`${theme === "dark" ? "text-white" : "text-black"} block mb-2`}>Info</label>
                      <div className="relative">

                        <input
                          type="text"
                          onChange={handleChange}
                          className={`w-full ${theme === "dark" ? "bg-[#131129] text-white " : "bg-[#FFFFFF]  border-[0.5px] border-[#65646A] text-black"} outline-none rounded-lg py-3 pl-4 pr-4 `}
                        />
                      </div>
                    </div>
                  </div>

                </div>
                <button className="btn-bg cursor-pointer mt-3 text-white px-8 py-2 rounded-lg flex items-center gap-2  ">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingPage



