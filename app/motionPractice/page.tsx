"use client"
import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'

const page = () => {
    const [on, setOn] = useState(false);
    return (
        <div className="h-screen flex bg-zinc-200 items-center  justify-evenly">
            <div className='bg-zinc-800 flex flex-col rounded-2xl items-center justify-evenly  w-1/4 h-1/2'>
                <h1 className='text-3xl text-white'>
                    Normal Button Animation:
                </h1>
                <motion.div
                    className="w-50 h-20 rounded-xl text-2xl text-white flex justify-center items-center cursor-pointer"
                    initial={{ opacity: 0, x: 100, backgroundColor: 'green' }}
                    animate={{ opacity: 1, x: 0, }}
                    transition={{ type: 'spring' }}
                    whileHover={{
                        scale: 1.2,
                        backgroundColor: 'blue',
                        transition: { duration: .4 }
                    }}
                    whileTap={{ scale: .8 }}
                >Click me</motion.div>
            </div>
            <div className='bg-zinc-800 flex flex-col rounded-2xl items-center justify-evenly  w-1/4 h-1/2'>
                <h1 className='text-3xl text-white'>Toggle Button:</h1>
                <div
                    onClick={() => setOn(!on)}
                    className={`w-50 h-20 flex items-center rounded-full p-1 cursor-pointer ${on ? "bg-green-500" : "bg-gray-400"
                        }`}
                >
                    <motion.div
                        className="w-17 h-17 bg-white rounded-full"
                        layout
                        animate={{ x: on ? 120 : 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                </div>
            </div>
            <div className='bg-zinc-800 flex flex-col items-center justify-evenly rounded-2xl w-1/4 h-1/2'>
                <h1 className='text-3xl text-white'>
                    Slider example:
                </h1>
                <div className="w-3/4 h-20 bg-gray-300 rounded-full flex items-center">
                    <motion.div
                        className="w-20 h-20 bg-blue-500 rounded-full cursor-pointer"
                        drag="x"
                        dragConstraints={{ left: 0, right: 260 }}
                        whileTap={{ scale: 1.2 }}
                    />
                </div>
            </div>

        </div>
    )
}

export default page