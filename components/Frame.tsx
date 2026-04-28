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
    { desc: "I started my hiking with JamaCho ", img: FaHiking },
    { desc: "The highest altitude I have reached is 4", img: FaHiking }
];
const eduData = [
    { desc: "I had done my Scooling from Srijana Gyan Sagar School ", img: IoSchoolOutline },
    { desc: "I am currently studying in Everest Engineering College", img: IoSchoolOutline }
]

const Frame = () => {
    const [toggle, setToggle] = useState(true);

    return (
        <div className='min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-100 to-gray-200'>

            <div className='relative w-[650px] h-[650px] flex items-center justify-center'>

                {/* Center Profile */}
                <div
                    onClick={() => setToggle(!toggle)}
                    className="group absolute z-50 w-[220px] h-[220px] rounded-full overflow-hidden border-4 border-white shadow-xl cursor-pointer transition-transform duration-300 hover:scale-105"
                >
                    <Image
                        src={suraj_crop}
                        alt="profile"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>

                {/* Helper for cards */}
                {[
                    { data: catagory1, position: "top-[10%] left-[50%] -translate-x-1/2 flex gap-10" },
                    { data: catagory2, position: "bottom-[10%] left-[50%] -translate-x-1/2 flex gap-10" },
                    { data: hikeData, position: "left-[5%] top-1/2 -translate-y-1/2 flex flex-col gap-10" },
                    { data: eduData, position: "right-[5%] top-1/2 -translate-y-1/2 flex flex-col gap-10" },
                ].map((group, idx) => (
                    <div
                        key={idx}
                        className={`absolute ${group.position} transition-all duration-500 ${toggle
                            ? "opacity-0 scale-90 pointer-events-none"
                            : "opacity-100 scale-100"
                            }`}
                    >
                        {group.data.map((item, index) => {
                            const Icon = item.img;
                            return (
                                <div
                                    key={index}
                                    className="group w-32 h-32 rounded-full bg-white shadow-md flex items-center justify-center relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl"
                                >
                                    {/* Icon */}
                                    <div className='flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0'>
                                        <Icon className='text-gray-700 w-10 h-10' />
                                    </div>

                                    {/* Hover Text */}
                                    <div className='absolute inset-0 flex items-center justify-center text-center text-sm px-3 text-gray-700 opacity-0 group-hover:opacity-100 transition duration-300'>
                                        {item.desc}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Frame;