'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Loading = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-indigo-600'>
      {/* Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='bg-white/10 backdrop-blur-lg rounded-3xl shadow-lg p-8 flex flex-col items-center'
      >
        {/* Animated Loader */}
        <div className='relative'>
          <div className='animate-spin rounded-full h-20 w-20 border-t-4 border-blue-300'></div>
          <div className='absolute top-0 left-0 h-20 w-20 rounded-full border-4 border-transparent border-t-white animate-spin-slow'></div>
        </div>

        {/* Text */}
        <p className='mt-6 text-white text-lg font-semibold'>
          Preparing your dashboard...
        </p>
      </motion.div>
    </div>
  )
}

export default Loading
