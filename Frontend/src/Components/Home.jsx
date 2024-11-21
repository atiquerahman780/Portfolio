import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

export default function Home() {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetch('http://localhost:3000/') // api for the get request
  //   .then(response => response.json())
  //   .then(data => setData(data));
  // }, []);
  
  return (
    <div id='home' className=' h-svh  flex-col md:pt-48 bg-gradient-to-r from-purple-500 to-pink-500 pt-32 text-white' >
      <div className='max-[600px]:hidden text-4xl md:text-4xl min-[900px]:text-5xl items-center place-content-center flex min-[600px]:p-8'>Hey, I'm Atique ur Rahman</div>
      <div className='min-[600px]:hidden text-4xl items-center place-content-center flex'>Hey, I'm </div>
      <div className='min-[600px]:hidden text-4xl items-center place-content-center flex'>Atique ur Rahman</div>
      <div className='max-[600px]:hidden md:text-xl min-[900px]:text-2xl items-center place-content-center flex'>A Result-Oriented Web Developer building and managing Websites and Web</div>
      <div className='max-[600px]:hidden md:text-xl min-[900px]:text-2xl items-center place-content-center flex'>Applications that leads to the success of the overall product</div>
      <div className='min-[600px]:hidden m-8 text-xl' >A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</div>
      <div className='md:text-2xl items-center place-content-center flex'>
        <Link to="projects" smooth={true} duration={1000} className="ml-8 mr-8 cursor-pointer">
         <button  className='bg-red-500 pt-2 pb-2 m-8 pl-16 pr-16 rounded-md'>Projects</button>
         </Link>
        
        </div>
    </div>
  )
}
