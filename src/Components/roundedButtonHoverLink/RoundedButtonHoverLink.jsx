import React from 'react'
import { Link } from 'react-router-dom'
Link
function RoundedButtonHoverLink({ className="", label = "", borderWidth="1" , borderColor = "black", paddingX = "px-2", paddingY = "py-0", letterCase ="capitalize" ,textColor="white", textSize="text-sm", props  }) {
    return (
        <Link to="/" className={` ${className}  rounded-full border hover:bg-black group  border-${borderWidth} pb-0.5  min-w-12  border-${borderColor} ${paddingX} ${paddingY}`} {...props}>
            <span className={`${letterCase}  text-${textColor}  group-hover:text-white   ${textSize}`}> {label}</span>
        </Link>
    )
}

export default RoundedButtonHoverLink