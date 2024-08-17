import React from 'react'
import { RoundedButtonHoverLink } from "../index"

function LastProjectCard({ title, description, slug, timeDuration }) {
    return (
        <div className='px-8 space-y-4'>
            <h1 className='text-wrap text-EeieBlack  text-xl font-normal cursor-pointer'>
                {title}
            </h1>
            <time className='text-Silver me-2'>
                {timeDuration}
            </time>
            <p className='text-Gray  text-xl pb-4 font-light '>{description}</p>
     
            <RoundedButtonHoverLink className="mt-4" label="Watch Now" textColor="black" paddingX="px-4" paddingY="pb-2 pt-2" textSize='text-lg'/>
        </div>
    )
}

export default LastProjectCard