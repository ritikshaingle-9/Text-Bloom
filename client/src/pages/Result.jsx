import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'

const Result = () => {

  const [image, setImage] = useState(assets.sample_img_1)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')

  const { generateImage } = useContext(AppContext)

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)

    if (input) {
      const image = await generateImage(input)
      if (image) {
        setIsImageLoaded(true)
        setImage(image)
      }
    }

    setLoading(false)
  }

  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={onSubmitHandler}
      className='flex flex-col justify-center items-center min-h-[90vh] px-4'
    >

      {/* Image section */}
      <div className='relative mt-[-100px]'>
        <img
          src={image}
          alt=""
          className='w-72 sm:w-80 rounded-xl mx-auto shadow-md'
        />
        <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'}`} />
      </div>

      {loading && <p className='mt-2 text-sm text-gray-600'>Loading...</p>}

      {/* Generate input and button */}
      {!isImageLoaded && (
        <div className='flex w-full max-w-xl bg-[#B44A42] text-white text-md mt-10 px-4 py-2 rounded-xl'>
          <input
            onChange={e => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder='Describe what you want to generate'
            className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-white'
          />
          <button
            type='submit'
            className='bg-white text-black px-10 sm:px-16 py-2 rounded-md hover:bg-[#3F3636] hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#8C1C13]'
          >
            Generate
          </button>
        </div>
      )}

      {/* Action buttons after generation */}
      {isImageLoaded && (
        <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
          <p
            onClick={() => { setIsImageLoaded(false); setInput(''); }}
            className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer hover:bg-zinc-100'
          >
            Generate Another
          </p>
          <a
            href={image}
            download
            className='bg-[#8C1C13] px-10 py-3 rounded-full cursor-pointer hover:bg-zinc-800'
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  )
}

export default Result
