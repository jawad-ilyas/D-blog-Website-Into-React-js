import React from 'react'

function RoundedButtonHover({ label = "", borderWidth="1" , borderColor = "black", paddingX = "px-2", paddingY = "py-0", letterCase ="capitalize" ,textColor="white", textSize="text-sm", props  }) {
    return (
        <button className={`rounded-full border hover:bg-black group  border-${borderWidth} pb-0.5  min-w-12  border-${borderColor} ${paddingX} ${paddingY}`} {...props}>
            <span className={`${letterCase} text-${textColor}  group-hover:text-white   ${textSize}`}> {label}</span>
        </button>
    )
}

export default RoundedButtonHover