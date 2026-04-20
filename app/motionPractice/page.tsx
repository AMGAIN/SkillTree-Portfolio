"use client"
import React from 'react'
import { useState } from 'react'
import { motion, Reorder } from 'framer-motion'

const initialItems = [
    { id: 1, text: "Write Notes", color: "#FF6B6B" },
    { id: 2, text: "Wake up", color: "#4ECDC4" },
    { id: 3, text: "Play Games", color: "#45B7D1" },
    { id: 4, text: "Study for Exam", color: "#96CEB4" },
    { id: 5, text: "Go to College", color: "#FFEAA7" },
];

const page = () => {
    const [on, setOn] = useState(false);
    const [items, setItems] = useState(initialItems);

    return (
        <div className="border h-screen bg-zinc-200 overflow-y-auto">
            <div className='border w-full flex bg-zinc-200 items-center justify-evenly flex-wrap gap-4 p-4'>
                {/* Section 1: Normal Button Animation */}
                <div className='bg-zinc-800 flex flex-col rounded-2xl items-center justify-evenly w-80 h-64'>
                    <h1 className='text-3xl text-white text-center px-4'>
                        Normal Button Animation:
                    </h1>
                    <motion.div
                        className="w-40 h-20 rounded-xl text-2xl text-white flex justify-center items-center cursor-pointer"
                        initial={{ opacity: 0, x: 100, backgroundColor: 'green' }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: 'spring' }}
                        whileHover={{
                            scale: 1.2,
                            backgroundColor: 'blue',
                            transition: { duration: 0.4 }
                        }}
                        whileTap={{ scale: 0.8 }}
                    >Click me</motion.div>
                </div>

                {/* Section 2: Toggle Button */}
                <div className='bg-zinc-800 flex flex-col rounded-2xl items-center justify-evenly w-80 h-64'>
                    <h1 className='text-3xl text-white text-center'>Toggle Button:</h1>
                    <div
                        onClick={() => setOn(!on)}
                        className={`w-40 h-20 flex items-center rounded-full p-1 cursor-pointer ${on ? "bg-green-500" : "bg-gray-400"}`}
                    >
                        <motion.div
                            className="w-16 h-16 bg-white rounded-full"
                            layout
                            animate={{ x: on ? 88 : 0 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                    </div>
                </div>

                {/* Section 3: Slider example */}
                <div className='bg-zinc-800 flex flex-col items-center justify-evenly rounded-2xl w-80 h-64'>
                    <h1 className='text-3xl text-white text-center'>
                        Slider example:
                    </h1>
                    <div className="w-64 h-16 bg-gray-300 rounded-full flex items-center px-2">
                        <motion.div
                            className="w-12 h-12 bg-blue-500 rounded-full cursor-pointer"
                            drag="x"
                            dragConstraints={{ left: 0, right: 200 }}
                            whileTap={{ scale: 1.2 }}
                            dragElastic={0.1}
                        />
                    </div>
                </div>
                <div className='border'>
                </div>
            </div>
            <div className='flex justify-center gap-100 h-full items-center'>
                <h1 className='text-2xl'>
                DAY-7: 
                </h1>
                <div className='bg-zinc-800 flex flex-col items-center justify-evenly rounded-2xl w-96 h-auto min-h-96 p-6'>
                    <h1 className='text-3xl text-white text-center mb-4'>
                        Drag to Sort List:
                    </h1>

                    {/* Reorder.Group must wrap all Reorder.Items */}
                    <Reorder.Group
                        axis="y"
                        values={items}
                        onReorder={setItems}
                        className="w-full space-y-3"
                    >
                        {items.map((item) => (
                            <Reorder.Item
                                key={item.id}
                                value={item}
                                id={String(item.id)}
                                dragListener={true}
                                whileDrag={{
                                    scale: 1.02,
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                                    cursor: "grabbing",
                                    zIndex: 10,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 30,
                                }}
                                className="bg-white rounded-xl p-4 cursor-grab active:cursor-grabbing"
                                style={{
                                    backgroundColor: item.color,
                                    touchAction: "none",
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="text-slate-700 opacity-50">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6ZM12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8ZM12 14C13.1 14 14 14.9 14 16C14 17.1 13.1 18 12 18C10.9 18 10 17.1 10 16C10 14.9 10.9 14 12 14Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-slate-800 font-medium text-lg">
                                        {item.text}
                                    </span>
                                </div>
                            </Reorder.Item>
                        ))}
                    </Reorder.Group>

                    <p className="text-slate-300 text-sm text-center mt-4">
                        Drag cards up/down to reorder
                    </p>
                </div>
            </div>
        </div>
    )
}

export default page