import React from 'react'
import image from '../assets/Untitled design.png'

export default function Projects() {
  return (
    <div id='projects' className='bg-gradient-to-r from-purple-500 to-pink-500 text-white'>
      <div className='flex flex-col items-center justify-center'>
      <div className='mt-24 text-4xl md:text-4xl min-[900px]:text-5xl items-center place-content-center flex min-[600px]:p-8'>Projects</div>
      <div className='max-[1048px]:hidden md:text-xl min-[900px]:text-2xl items-center place-content-center flex'>Here you will find some of the personal and clients projects that I created with each project</div>
      <div className='max-[1048px]:hidden md:text-xl min-[900px]:text-2xl items-center place-content-center flex'>containing its own case study</div>
      <div className='min-[1048px]:hidden m-8 text-xl' >Here you will find some of the personal and clients projects that I created with each project containing its own case study</div>
      </div>
      <div className='min-[1048px]:flex justify-around pt-12 pb-24 pl-48 pr-48 max-[1048px]:pl-8 max-[1048px]:pr-8 min-[1048px]:space-x-8 '>
        
      <div>
        <img src={image} alt="image" />
        
      </div>
      <div>
      <div className='text-2xl mb-3'>AL-NOOR</div>
      <div>Al-Noor is an online app for selling a single product. I developed the frontend using React and the backend with Node.js and MongoDB. The application offers an excellent user experience.</div>
      
      <button onClick={() => window.open("https://posti.shop/", "_blank")} className='bg-red-500 pt-2 pb-2 mt-8 pl-8 pr-8 rounded-md'>Visit</button>
      </div>
      </div>
    </div>
  )
}
