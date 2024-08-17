import React from 'react';
import { RoundedButton } from '../index';

function CategoryCard({ bg = "", label = "Leveling Up in CSS", buttonText = "category", date = "January 18, 2022",  borderWidth = "1" }) {
   

    return (
        <div className="bg-white border p-2 flex-1">
            <div div className="relative p-4 bg-[url(${bg})] w-full h-72 flex flex-col justify-between items-start group" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div>
                    <h1 className="mb-2 text-white font-medium">{label}</h1>
                    <RoundedButton borderWidth={borderWidth}  label={buttonText} borderColor={"white"} />
                </div>
                <div>
                    <time className='text-white'>{date}</time>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
            </div >
        </div >
    );
}

export default CategoryCard;
