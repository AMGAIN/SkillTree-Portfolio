"use client"
import React from 'react'
import { useState } from 'react'
import { motion, Reorder } from 'framer-motion'

const data = [
    { id:1, name: "Suraj" },
    { id:2, name: "Pujan" },
    { id:3, name: "Sujan" },
    { id:4, name: "Sagar" },
    { id:5, name: "Nabin" }
]

const page = () => {
    const [order, setOrder] = useState(data);
    return (
        <div className='p-10'>
            <motion.div className='h-10 w-full'
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3 }}
            >
                this is the header
            </motion.div>
            <Reorder.Group
            className='flex flex-col gap-5'
            axis='y'
            values={order}
            onReorder={setOrder}
            >
                {
                    order.map((item) => {
                        return (
                            <Reorder.Item className='border rounded-xl p-3' key={item.id} value={item}>
                                {item.name}
                            </Reorder.Item>
                        )
                    })
                }
            </Reorder.Group>
        </div>
    )
}

export default page