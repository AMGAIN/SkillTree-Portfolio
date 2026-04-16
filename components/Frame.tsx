import Image from 'next/image';
import suraj_crop from '@/public/Suraj-crop.png';

import { FaHiking } from "react-icons/fa";
import { IoSchoolOutline } from "react-icons/io5";

const Frame = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center gap-8 bg-gradient-to-br from-gray-100 to-gray-300'>
            {/* Hiking */}
            <div className="group border-4 border-white shadow-xl rounded-full bg-zinc-600 w-40 h-40 relative overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
                
                <div className='h-full flex justify-center items-center transition-opacity duration-300 group-hover:opacity-0'>
                    <FaHiking className='h-20 w-20 text-white'/>
                </div>

                <div className='absolute inset-0 flex items-center justify-center text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    I love to Hike in Nepal's Mountains
                </div>
            </div>
            {/* Profile Image */}
            <div className="group border-4 border-white shadow-2xl bg-gray-300 rounded-full w-[250px] h-[250px] relative overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
                <Image
                    src={suraj_crop}
                    alt="profile"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* subtle overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </div>
            {/* Study */}
            <div className="group border-4 border-white shadow-xl rounded-full bg-zinc-600 w-40 h-40 relative overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
                <div className='h-full flex justify-center items-center transition-opacity duration-300 group-hover:opacity-0'>
                    <IoSchoolOutline className='h-20 w-20 text-white'/>
                </div>
                <div className='absolute inset-0 flex items-center justify-center text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    I am Studing Software Engineering
                </div>
            </div>
        </div>
    )
}
export default Frame;