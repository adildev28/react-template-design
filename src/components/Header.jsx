import React from 'react'

const Header = () => {
  return (
    <div className=''>

    <div className='absolute right-0 left-0 top-0 flex justify-between items-center px-20 py-10 font-semibold bg-transparent  text-white '>
    <a href="" className='ml-0'>Logo</a>
    <nav className=' flex justify-center items-center gap-20'>
        <a href="#hero" className='underline hover:text-dark_gray'>Home</a>
        <a href="#projects" className='underline hover:text-dark_gray'>Projects</a>
        <a href="#about" className='underline hover:text-dark_gray'>About Us</a>
        <a href="#contact" className='underline hover:text-dark_gray'>Contact Us</a>
    </nav>
    </div>
    </div>
  )
}

export default Header