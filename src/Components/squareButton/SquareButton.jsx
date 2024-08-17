import React from 'react'

function SquareButton({ label = "", borderWidth="1" , borderColor = "black", paddingX = "px-1", paddingY = "py-0", letterCase ="capitalize" ,textColor="white", ...props  }) {
    return (
        <button className={`rounded border hover:bg-Gray  group   border-${borderWidth} pb-0.5  min-w-6  border-${borderColor} ${paddingX} ${paddingY}`} {...props}>
            <span className={`${letterCase} text-${textColor} group-hover:text-white text-sm`}> {label}</span>
        </button>
    )
}

export default SquareButton