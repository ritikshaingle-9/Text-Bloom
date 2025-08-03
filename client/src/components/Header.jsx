import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { delay, motion } from "motion/react"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const {user,setShowLogin} = useContext(AppContext)
   const navigate = useNavigate()

    const onClickHandler = ()=>{
      if(user){
         navigate('/result')
      }else{
        setShowLogin(true)
      }
    }
    
  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-20'
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}

    >
      <motion.div className="inline-flex items-center gap-2 px-6 py-1 rounded-full border border-none bg-white/80 text-[#8C1C13] shadow-inner backdrop-blur-sm "

        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p>Best text to image generator</p>
        <img src={assets.star_icon} alt="" />
      </motion.div>

      <motion.h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>From words to  <span style={{ color: '#8C1C13' }} initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 2 }}>
      wow
</span>
,in seconds.</motion.h1>

      <motion.p className='text-center max-w-xl mx-auto mt-5'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}>Text goes in. Art comes out. Pure magic, powered by AI.</motion.p>

      <motion.button 
        onClick={onClickHandler}
        className='sm:text-lg text-white bg-[#8C1C13] w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }}>Create Image
        <img className='h-6' src={assets.star_group} alt="" />
      </motion.button>

      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:1,duration:1}}
      className='flex flex-wrap justify-center mt-16 gap-3'>
        {Array(6).fill('').map((item, index) => (
          <motion.img 
          whileHover={{scale:1.05,duration:0.1}}
          className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' src={index % 2 == 0 ? assets.sample_img_2 : assets.sample_img_1} alt="" key={index} width={70} />
        ))}
      </motion.div>

      <motion.p 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:1.2, duration:0.8}}
      className='mt-2 text-neutral-600'>Generated images from inkmagine</motion.p>
    </motion.div>
  )
}

export default Header