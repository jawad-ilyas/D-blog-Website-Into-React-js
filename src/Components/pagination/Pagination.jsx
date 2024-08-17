import React from 'react'
import { RoundedButtonHover ,  SquareButton } from "../index"
function Pagination() {
  return (
    <div className='w-full flex flex-row justify-between items-center'>
          <RoundedButtonHover label='Back' textColor='EeieBlack' paddingX="px-6" paddingY='pt-1 pb-2' textSize="text-md" / >
          <div className='lg:space-x-4 space-x-1 '>
              <SquareButton label='1' textColor='EeieBlack' />
              <SquareButton label='2' textColor='EeieBlack' />
              <SquareButton label='3' textColor='EeieBlack' />
         
          </div>
          <RoundedButtonHover label='Next' textColor='EeieBlack' paddingX="px-6" paddingY='pt-1 pb-2' textSize="text-md" / >
    </div>
  )
}

export default Pagination