import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Description = () => {
  return (
    <motion.div 
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Picture Your Thoughts</h1>
        <p className='text-gray-500 mb-8'>Feed the machine your ideas — get back art that speaks volumes.</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg'/>
            <div >
                <h2 className='text-3xl font-medium max-w-lg mb-4'>Text Bloom: the AI-Powered Text to Image Generator</h2>
                <p className='text-gray-600 mb-4'>Bring your ideas to life in seconds — for free. Whether you're creating stunning visuals, unique concepts, or art that’s never been seen before, Text Bloom transforms your words into eye-catching images with just a few clicks.</p>
                <p className='text-gray-600'>Just type a prompt, and watch the magic unfold. From product shots to character designs, surreal concepts to realistic portraits — even the unimaginable becomes visible.</p>
            </div>
        </div>
    </motion.div>
  )
}

export default Description