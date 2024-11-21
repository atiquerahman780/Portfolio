import React from 'react'
import { useState } from 'react';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const  handleChange =  (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Convert data to JSON string
      });

      if (!response.ok) {
        throw new Error('Failed to send data');
      }

      const result = await response.json();
      console.log('Data sent successfully:', result);
    } catch (error) {
      console.error('Error:', error.message);
    }

  };
  return (
    <div id='contact' className='bg-gradient-to-r from-pink-500 to-purple-500 text-white'>
      <div className='flex flex-col items-center justify-center'>
      <div className='mt-20 text-4xl md:text-4xl min-[900px]:text-5xl items-center place-content-center flex min-[600px]:p-8'>Contact</div>
      <div className='max-[1048px]:hidden md:text-xl min-[900px]:text-2xl items-center place-content-center flex'>Feel free to Contact me by submitting the form below and I will get back to you as soon as</div>
      <div className='max-[1048px]:hidden md:text-xl min-[900px]:text-2xl items-center place-content-center flex'>possible</div>
      <div className='min-[1048px]:hidden m-8 text-xl' >Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</div>
      </div>
      <div className='p-8 min-[900px]:pl-64 min-[900px]:pr-64'>
      <form 
       onSubmit={handleSubmit} 
      className="min-w-md mx-auto p-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-md shadow-md">
      <div className="">
        <label htmlFor="name" className="block text-sm font-medium ">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
           value={formData.name}
           onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border rounded-md text-black shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium ">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
           value={formData.email}
           onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border rounded-md text-black shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium ">
          Message
        </label>
        <textarea
          id="message"
          name="message"
           value={formData.message}
           onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border rounded-md text-black shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write your message"
          rows="5"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
    </div>
    </div>
  )
}
