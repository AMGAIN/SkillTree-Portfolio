"use client"
import Image from 'next/image';
import suraj_crop from '@/public/Suraj-crop.png';
import { useState } from 'react';

import { FaHiking } from "react-icons/fa";
import { IoSchoolOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { GiTalk } from "react-icons/gi";

const catagory1 = [
    { topic: "Hiking", img: FaHiking, desc: "I love to Hike in Nepal's Mountains" },
    { topic: "Education", img: IoSchoolOutline, desc: "I am Studing Software Engineering" },
];
const catagory2 = [
    { topic: "Coding", img: FaCode, desc: "I love do full stack development" },
    { topic: "Talking", img: GiTalk, desc: "I like to Talk with Friends, as therapy" },
]
const hikeData = [
    { desc: "I started my hiking with JamaCho ", img: FaHiking},
    { desc: "The highest altitude I have reached is 4", img: FaHiking}
];
const eduData = [
    { desc: "I had done my Scooling from Srijana Gyan Sagar School ", img: IoSchoolOutline},
    { desc: "I am currently studying in Everest Engineering College", img: IoSchoolOutline}
]

const Frame = () => {
    const [toggle, setToggle] = useState(true);
    const clicked = () => {
        setToggle(!toggle);
        console.log("Clicked")
    }
    return (
        <div className='border flex justify-center bg-gradient-to-br from-gray-100 to-gray-300'>
            <div className='h-[80vh] w-[645px] z-50 relative flex justify-center items-center gap-8 bg-gradient-to-br from-gray-100 to-gray-300'>

                {/* Profile Image */}
                <div onClick={clicked} className="group border-4 border-white shadow-2xl bg-gray-300 rounded-full w-[250px] h-[250px] relative overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer z-50">
                    <Image
                        src={suraj_crop}
                        alt="profile"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* subtle overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300">
                    </div>
                </div>
                {/* Study */}
                <div className={`rounded-full flex absolute gap-80 transition-all duration-500 z-45 ${toggle ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"}`}>
                    <div className='absolute bg-gray-400 top-1/3 left-[16%] h-1/3 w-2/3'></div>
                    {
                        catagory1.map((item, index) => {
                            const Icon = item.img;
                            return (
                                <div key={index} className={`group border-4 border-white shadow-xl rounded-full bg-zinc-600 w-40 h-40 relative overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer `}>

                                    <div className='h-full flex justify-center items-center transition-opacity duration-300 group-hover:opacity-0'>
                                        <Icon className='h-20 w-20 text-white' />
                                    </div>

                                    <div className='absolute inset-0 flex items-center justify-center text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                        {item.desc}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={`rounded-full flex flex-col absolute gap-80  transition-all duration-500 ${toggle ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"}`}>
                    <div className='absolute bg-gray-400 top-[16%] left-1/3 h-2/3 w-1/3'></div>
                    {
                        catagory2.map((item, index) => {
                            const Icon = item.img;
                            return (
                                <div key={index} className="border group border-4 border-white shadow-xl rounded-full bg-zinc-600 w-40 h-40 relative overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">

                                    <div className='h-full flex justify-center items-center transition-opacity duration-300 group-hover:opacity-0'>
                                        <Icon className='h-20 w-20 text-white' />
                                    </div>

                                    <div className='absolute inset-0 flex items-center justify-center text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                        {item.desc}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={`flex flex-col left-0 absolute gap-80 transition-all duration-500 ${toggle ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"}`}>
                    <div className='absolute bg-gray-400 top-[16%] left-1/3 h-2/3 w-1/3'></div>
                    {
                        hikeData.map((item, index) => {
                            const Icon = item.img;
                            return (
                                <div key={index} className="border group border-4 border-white shadow-xl rounded-full bg-zinc-600 w-40 h-40 relative overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">

                                    <div className='h-full flex justify-center items-center transition-opacity duration-300 group-hover:opacity-0'>
                                        <Icon className='h-20 w-20 text-white' />
                                    </div>

                                    <div className='absolute inset-0 flex items-center justify-center text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                        {item.desc}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={`flex flex-col right-0 absolute gap-80 transition-all duration-500 ${toggle ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"}`}>
                    <div className='absolute bg-gray-400 top-[16%] left-1/3 h-1/2-50 w-1/3'></div>
                    <div className='absolute bg-gray-400 top-[16%] left-1/3 h-2/3 w-1/3'></div>

                    {
                        eduData.map((item, index) => { 
                            const Icon = item.img;
                            return (
                                <div key={index} className="border group border-4 border-white shadow-xl rounded-full bg-zinc-600 w-40 h-40 relative overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">

                                    <div className='h-full flex justify-center items-center transition-opacity duration-300 group-hover:opacity-0'>
                                        <Icon className='h-20 w-20 text-white' />
                                    </div>

                                    <div className='absolute inset-0 flex items-center justify-center text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                        {item.desc}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}
export default Frame;