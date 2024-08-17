import React from 'react'
import RoundedButton from '../roundedButton/RoundedButton'
import { RoundedButtonHover } from "../index"
import { FaRegHeart } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";

function PostCard({ bgColor, timeDuration, blogTitle, blogParagrahp, categoryColor }) {
    return (
        <div className={`${bgColor} ps-4 `}>
            <div className=' p-4 h-96 flex-1 flex flex-col justify-between items-center bg-white  shadow-lg'>
                <div className='w-full flex flex-row justify-between items-center'>
                    <div>
                        <time className='text-Silver me-2'>
                            {timeDuration}
                        </time>
                        <RoundedButton borderWidth="2" textColor="Gray" label='hot' borderColor="EeieBlack" />

                    </div>
                    <RoundedButton borderWidth="0" textColor={categoryColor} label='css' />
                </div>
                <div className='space-y-4'>
                    <h1 className='text-wrap text-xl text-EeieBlack hover:underline lg:text-4xl font-semibold cursor-pointer'>
                        {blogTitle}
                    </h1>
                    <p className='text-Gray text-sm lg:text-base  '>{blogParagrahp}</p>
                </div>
                <div className='flex flex-col lg:flex-row   w-full lg:justify-between lg:items-center'>
                    <RoundedButtonHover label="Read More" borderWidth="1" textColor="Gray" borderColor="LightRed" paddingX="px-6" paddingY="py-2 pb-2" />
                    <div className='flex flex-row justify-between mt-2  items-center space-x-4'>
                        <div className='space-x-2 text-Gray text-xl flex flex-row group  items-center '>
                            <span><FaRegMessage size={18} /></span>
                            <span className='group-hover:text-EeieBlack cursor-pointer'>Response </span>
                        </div>
                        <div className='space-x-2 text-Gray text-xl flex flex-row  items-center group '>
                            <span> <FaRegHeart  size={20}/> </span>
                            <span className='group-hover:text-EeieBlack cursor-pointer' >1221</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PostCard