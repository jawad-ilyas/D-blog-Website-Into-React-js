import React from 'react'
import DummyUser from "../../assets/dummyUser.webp"
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { FiDownload } from "react-icons/fi";
import { FiSend } from "react-icons/fi";

function ProfileCard() {

  return (
    <div className='w-full shadow-md  h-[450px] pt-6'>
      <img src={DummyUser} className='size-32 mx-auto object-cover ' />
      <h1 className='text-center text-EeieBlack mt-4 text-xl'>Bill Gates</h1>
      <div>
        <h3 className='text-center text-Gray text-lg'>Front-End Developer</h3>
        <h3 className='text-center text-Gray text-lg' >Microsoft Company</h3>
      </div>
      {/* socail media icons */}
      <div className='flex items-center justify-center  space-x-1 mt-2'>
        <FaSquareXTwitter className='text-Gray hover:text-EeieBlack duration-200 delay-100 transition-all cursor-pointer' size={30} />
        <FaSquareGithub className='text-Gray hover:text-EeieBlack duration-200 delay-100 transition-all cursor-pointer' size={30} />
        <IoLogoLinkedin className='text-Gray hover:text-EeieBlack duration-200 delay-100 transition-all cursor-pointer' size={33} />

      </div>
      {/* cv section */}
      <div className='border-t border-Gray/20 px-10 mt-4 pt-4 pb-2 flex flex-row justify-start items-censter space-x-2'>
        <span><FiDownload className='text-Gray/20 hover:text-EeieBlack duration-200 delay-100 transition-all cursor-pointer' size={30} /></span>
        <h5 className='text-Gray/60 text-xl'>Download My Cv</h5>
      </div>
      <div className='border-t border-Gray/20 px-10 mt-4 pt-4 pb-2 flex flex-row justify-start items-center space-x-2'>
        <span><FiSend className='text-Gray/20 hover:text-EeieBlack duration-200 delay-100 transition-all cursor-pointer' size={30} /></span>
        <h5 className='text-Gray/60 text-xl'>Write Message</h5>
      </div>
    </div>
  )
}

export default ProfileCard