import React from 'react';
import { FaLinkedinIn } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

import "./Footer.css";
function Footer() {
  return (
    <>
      <div className='footer  bg-black w-full  '>
        <div className='w-full pl-40  pt-2 pr-40  flex flex-col'>

          {/* column 1 */}
          <div className='pb-6 pt-7 flex flex-row  h-32 justify-between items-center text-white'>
            <div className='texting text-lg flex-col'><h3>Arun Kumar Verma <br />Assosiate Professor <br />Department of Electrical Engineering </h3></div>
            <div className='flex flex-row space-x-7'>
              <a href=""><FaLinkedinIn className='h-24 w-6 text-white hover:opacity-40' /></a>
              <a href=""><BiLogoGmail className='h-24 w-6 hover:opacity-40' /></a>
              <a href=""><RiFacebookFill className='h-24 w-6 text-white hover:opacity-40' /></a>
              <a href=""><FaTwitter className='h-24 w-6 text-white hover:opacity-40' /></a>
            </div>
          </div>

          {/* column 2   */}
          <div className='linegrey w-full flex-col bg-gray-500'></div>

          {/* column 3 */}
          <div className="text-white w-full h-72 flex justify-between items-center">
            <div className="pt-10 h-72 w-3/6 pl-14 pr-20 flex flex-col justify-start">
              <div className='space-x-32  pb-7  '>
                <Link className='roberto text-base font-normal hover:opacity-40 cursor-pointer texting' to='/'>Home</Link>
                <Link className='roberto text-base pl-2 font-normal hover:opacity-40 cursor-pointer texting' to='/blog'>Blog</Link>
                <Link className='roberto text-base pl-1 font-normal hover:opacity-40 cursor-pointer texting' to='/blog'>Phd/Interns</Link>
               
              </div>
              <div className='space-x-24  pb-7   pt-7  '>
              <Link className='roberto text-base  font-normal hover:opacity-40 cursor-pointer texting' to='/blog'>Publications</Link>
                <Link className='roberto text-base  font-normal hover:opacity-40 cursor-pointer texting' to='/blog'>Contact us</Link>
                <Link className='roberto text-base  font-normal hover:opacity-40 cursor-pointer texting' to='/about'>About Me</Link>
              

              </div>
              <div className='space-x-24  pb-7  pt-7 '>
                <Link className='roberto text-base  font-normal hover:opacity-40 cursor-pointer texting' to='/blog'>Events</Link>
                <Link className='roberto text-base pl-8 font-normal hover:opacity-40 cursor-pointer texting' to='/about'>About Me</Link>
                <Link className='roberto text-base pl-1 font-normal hover:opacity-40 cursor-pointer texting ' to='/blog'>Google Scholor</Link>

              </div>

            </div>
            <div className="h-full border-l border-gray-400"></div>
            <div className="pt-7 h-72 pr-20 w-3/6 pl-14 flex flex-col justify-start">
              <div><p className='texting font-normal text-md pb-4'>If You have any Queries feel free to Ask Here</p></div>
              <div className='flex flex-col pb-2 '><input type='text' placeholder='First Name' className='texting w-full text-base bg-black text-gray-500' />
                <div className='lineone bg-gray-500'></div>
              </div>

              <div className='flex flex-col pb-2'><input type='text' placeholder='Last Name' className='w-full texting text-base bg-black text-gray-500' />
                <div className='lineone bg-gray-500'></div>
              </div>

              <div className='flex flex-col pb-3'><input type="email" placeholder='Email' className='w-full texting text-base bg-black text-gray-500' />
                <div className='lineone bg-gray-500'></div>
              </div>
              <div className='flex flex-col pb-4'><textarea   placeholder='Enter Your Queries here' className='w-full text-base texting h-8 bg-black text-gray-500' />
                <div className='lineone bg-gray-500'></div>
              </div>
              <div>
              <button className='pt-2 pb-2 pl-4 pr-5 text-base border-white border-2 hover:opacity-40 texting text-white'>Submit</button>
              </div>
            </div>
          </div>


          {/* column 4 */}
          <div className='linegrey w-full flex-col bg-gray-500'></div>

          {/* column 5   */}
          <div className='pt-6 h-10  text-center'>
            <p className='text-white texting text-md  '> &copy; Trikor Technologia. All rights reserved. | Designed and developed by Trikor Technologia. </p>
          </div>
        </div>

      </div>
    </>
  );
}

export default Footer;
