import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';

const handleClick = () => {
  window.scrollTo(0, 0);
};


const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>HelixCure is dedicated to providing high-quality healthcare with a patient-first approach. Equipped with modern medical technology and a team of experienced doctors, we ensure comprehensive medical care across various specialties.</p>
        </div>

<div>
  <p className='text-xl font-medium mb-5'>COMPANY</p>
  <ul className='flex flex-col gap-2 text-gray-600'>
    <li>
      <Link to='/' onClick={handleClick} className='hover:text-black'>Home</Link>
    </li>
    <li>
      <Link to='/about' onClick={handleClick} className='hover:text-black'>About Us</Link>
    </li>
    <li>
      <Link to='/contact' onClick={handleClick} className='hover:text-black'>Contact Us</Link>
    </li>
    <li>
      <Link to='/privacy-policy' onClick={handleClick} className='hover:text-black'>Privacy Policy</Link>
    </li>
  </ul>
</div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91 80 1234 5678</li>
            <li>helixcure@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @ HelixCure.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
