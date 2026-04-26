"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const seobasics = [
  {
    id: 1,
    title: "Reduce Client Components",
    code: `// Use server components by default
export default function Page() {
  return <div>Server Component</div>
}`
  },
  {
    id: 2,
    title: "Use Metadata",
    code: `export const metadata = {
  title: "YatriTech",
  description: "Fleet Monitoring System"
}`
  },
  {
    id: 3,
    title: "Next Image Optimization",
    code: `import Image from "next/image"

<Image src="/img.png" alt="desc" width={400} height={300} />`
  }
]

// Parent animation
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

// Child animation
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
}

const Page = () => {
  const [show, setShow] = useState(true)

  return (
    <div className='p-6 flex flex-col items-center gap-6'>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setShow(!show)}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className='px-6 py-3 rounded-xl text-xl font-semibold bg-zinc-800 text-white shadow-lg'
      >
        Toggle SEO Panel
      </motion.button>

      {/* Animated Box */}
      <AnimatePresence mode="wait">
        {show && (
          <motion.div
            key="box"
            className='w-[700px] bg-gradient-to-br from-blue-500 to-indigo-600 mt-2 rounded-2xl p-6 text-white shadow-2xl'
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -60, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 120 }}
          >

            {/* Title */}
            <h1 className='text-3xl font-bold mb-4'>
              Day 8: SEO Basics
            </h1>

            {/* List */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className='flex flex-col gap-4'
            >
              {seobasics.map((itemData) => (
                <motion.div
                  key={itemData.id}
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  className='bg-white/10 p-4 rounded-xl backdrop-blur-md'
                >
                  <h2 className='text-xl font-semibold mb-2'>
                    {itemData.id}. {itemData.title}
                  </h2>

                  {/* Code Box */}
                  <pre className='bg-black/40 p-3 rounded-lg text-sm overflow-x-auto'>
                    <code>{itemData.code}</code>
                  </pre>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default Page