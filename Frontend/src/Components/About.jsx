import React from 'react'
import { Link } from 'react-scroll'

export default function About() {
  return (
    <div id='about' className='bg-gradient-to-r from-pink-500 to-purple-500 text-white'>
      <div className='flex flex-col items-center justify-center'>
      <div className='mt-24 text-4xl md:text-4xl min-[900px]:text-5xl items-center place-content-center flex min-[600px]:p-8'>About Me</div>
      <div className='max-[1048px]:hidden md:text-xl min-[900px]:text-2xl items-center place-content-center flex'>Here you will find more information about me, what I do, and my current skills mostly in terms</div>
      <div className='max-[1048px]:hidden md:text-xl min-[900px]:text-2xl items-center place-content-center flex'>Applications that leads to the success of the overall product</div>
      <div className='min-[1048px]:hidden m-8 text-xl' >Here you will find more information about me, what I do, and my current skills mostly in terms Applications that leads to the success of the overall product</div>
      </div>
      <div className='min-[1048px]:flex justify-around pt-12 pb-24 pl-48 pr-48 max-[1048px]:pl-8 max-[1048px]:pr-8 min-[1048px]:space-x-8 '>
        <div>
      <div className='text-2xl mb-3'>Get To Know Me!</div>
      <div>I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</div>
      <div>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a className='text-blue-800 font-bold' href="https://www.linkedin.com/in/atique-ur-rahman-a25824226/">Linkedin</a> where I post useful content related to Web Development and Programming</div>
      <div>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</div>
      <Link to="contact" smooth={true} duration={1000} className="ml-8 mr-8 cursor-pointer">
      <button className='bg-red-500 pt-2 pb-2 mt-8 pl-8 pr-8 rounded-md'>Contact</button>
         </Link>
      
      </div>
      <div>
        <div className='text-2xl mb-4 max-[1048px]:pt-8'>My Skills</div>
        <div className='text-xl'>
         <span className=' bg-red-500 pl-2 pr-2  rounded-md'>HTML</span> <span className=' bg-red-500 pl-2 pr-2  rounded-md'>CSS</span> <span className=' bg-red-500 pl-2 pr-2  rounded-md'>Javascript</span> <span className=' bg-red-500 pl-2 pr-2  rounded-md'>Git</span> <span className=' bg-red-500 pl-2 pr-2 rounded-md'>GitHub</span> <span className=' bg-red-500 pl-2 pr-2 rounded-md'>React</span> <span className=' bg-red-500 pl-2 pr-2 rounded-md'>Redux</span> <span className=' bg-red-500 pl-2 pr-2 rounded-md'>Node</span> <span className=' bg-red-500 pl-2 pr-2  rounded-md'>Express</span> <span className=' bg-red-500 pl-2 pr-2  rounded-md'>MongoDB</span> <span className=' bg-red-500 pl-2 pr-2  rounded-md'>vite</span> <span className=' bg-red-500 pl-2 pr-2  rounded-md'>Parcel</span> <span className=' bg-red-500 pl-2 pr-2  rounded-md'>EC2 Instance</span> <span className=' bg-red-500 pl-2 pr-2  rounded-md'>Hosting</span> <span className=' bg-red-500 pl-2 pr-2  rounded-md'>Domain</span> <span className=' bg-red-500 pl-2 pr-2  rounded-md'>Payment_Gateway</span> <span className=' bg-red-500 pl-2 pr-2 rounded-md'>Tailwind</span> 
        </div>
        
      </div>
      </div>
    </div>
  )
}
