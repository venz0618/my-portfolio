import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/6a2c6990-2188-474b-8180-f79f1cc9d359"  className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-2 pt-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - venz_0618@gmail.com</p>
            </div>
            <input className='p-2 bg-[#ccd6f6] rounded-md' type="text" placeholder='Name' name="name" id="name" />
            <input className='my-4 p-2 bg-[#ccd6f6] rounded-md' type="email" placeholder='Email' name="email" id="email" />
            <textarea className='p-2 bg-[#ccd6f6] rounded-md' name="message" id="message" rows="10" ></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact