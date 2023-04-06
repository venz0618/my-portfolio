import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import Github from '../assets/github.png'
import ReactImg from '../assets/react.png'
import MySQL from '../assets/mysql.png'
import Laravel from '../assets/laravel.png'
import Tailwind from '../assets/tailwind.png'
const Skills = () => {
  return (
    <div name='skill' className='w-full h-screen bg-[#0a192f]  text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-3xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4 '>These are technologies that I've worked with</p>
            </div>
            <div  className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4 uppercase'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                    <p className='my-4 uppercase'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                    <p className='my-4 uppercase '>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt="HTML icon" />
                    <p className='my-4 uppercase'>Github</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                    <p className='my-4 uppercase'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={MySQL} alt="HTML icon" />
                    <p className='my-4 uppercase'>MySQL</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Laravel} alt="HTML icon" />
                    <p className='my-4 uppercase'>Laravel</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                    <p className='my-4 uppercase'>Tailwind</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills