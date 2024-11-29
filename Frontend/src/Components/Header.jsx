import React from 'react'
import image from '../assets/download.svg'
import { Link } from "react-scroll";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='sticky top-0 flex justify-between place-items-center bg-gray-300 h-16 '>
      <div>
        {/* <img className="w-16 h-16 rounded-full inline ml-4 md:ml-8" src={image} alt="profile Image" /> */}
        <span className='ml-4 font-medium text-xl '>Atique Ur Rahman</span>
      </div>
      <div className='hidden md:flex'> 
        <Link 
        to="home"
        smooth={true} 
        duration={1000} 
        className="ml-8 mr-8 cursor-pointer"
      >
        HOME
      </Link>
        <Link 
        to="about"
        smooth={true} 
        duration={1000} 
        className="ml-8 mr-8 cursor-pointer"
      >
        ABOUT
      </Link>
      <Link 
        to='projects'
        smooth={true} 
        duration={1000} 
        className="ml-8 mr-8 cursor-pointer"
      >
        PROJECTS
      </Link>
      <Link 
        to='contact'
        smooth={true} 
        duration={1000} 
        className="ml-8 mr-8 cursor-pointer"
      >
        CONTACT
      </Link> 
      </div>
      <button onClick={toggleSidebar} className='text-3xl md:hidden text-2xl ml-8 mr-8'>☰</button>

      {/* Sidebar */}  
      <div
        className={`fixed top-0 right-0 w-64 bg-gray-200 shadow-lg transform   ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          className="absolute top-4 right-4 text-xl"
          onClick={toggleSidebar}
        >
          ✕
        </button>
        <div className="mt-10 flex flex-col items-center">
        <Link 
        to='home'
        smooth={true} 
        duration={1000} 
        
      >
        <button className="m-2 p-2 bg-gray-300 rounded-md w-48">
            Home
          </button>
      </Link> 
      <Link 
        to="about"
        smooth={true} 
        duration={1000} 
      >
        <button className="m-2 p-2 bg-gray-300 rounded-md w-48">
            About
          </button>
      </Link>
          
          <Link 
        to='projects'
        smooth={true} 
        duration={1000} 
      >
        <button className="m-2 p-2 bg-gray-300 rounded-md w-48">
            Projects
          </button>
      </Link>
          
          <Link 
        to='contact'
        smooth={true} 
        duration={1000} 
      >
        <button className="m-2 p-2 bg-gray-300 rounded-md w-48">
            Contact
          </button>
      </Link>
          
        </div>
      </div>

      <div className="fixed bottom-4 right-4">
      <button
        onClick={() => window.open("https://wa.me/+923022663141", "_blank")}
        className="bg-green-500 rounded-full p-4 shadow-lg hover:bg-green-600 transition duration-300"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.478A11.868 11.868 0 0012 0C5.373 0 0 5.373 0 12c0 2.134.555 4.204 1.608 6.04L0 24l5.999-1.585A11.925 11.925 0 0012 24c6.627 0 12-5.373 12-12 0-3.213-1.254-6.227-3.48-8.522zM12 21.75c-1.743 0-3.467-.446-5-1.333l-.36-.203-3.56.939.927-3.485-.232-.372C2.137 15.656 1.5 13.842 1.5 12c0-5.799 4.701-10.5 10.5-10.5 2.798 0 5.426 1.09 7.396 3.072A10.44 10.44 0 0122.5 12c0 5.799-4.701 10.5-10.5 10.5z" />
          <path d="M17.224 14.396l-2.318-.674a1.176 1.176 0 00-1.144.228l-.327.297a8.376 8.376 0 01-3.133-3.118l.31-.335c.272-.293.366-.715.248-1.104l-.719-2.303c-.191-.614-.834-1.002-1.501-.913l-2.336.32c-.702.1-1.246.673-1.252 1.378-.034 4.321 3.507 9.06 8.002 10.243.773.203 1.572.234 2.345.094.732-.129 1.346-.694 1.501-1.388l.544-2.394c.155-.685-.25-1.374-.933-1.58z" />
        </svg>
      </button>
    </div>
    </div>
  )
}
