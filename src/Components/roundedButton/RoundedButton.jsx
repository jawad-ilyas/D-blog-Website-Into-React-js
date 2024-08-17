import React from 'react'

function RoundedButton({ label = "", borderWidth="1" , borderColor = "black", paddingX = "px-2", paddingY = "py-0", letterCase ="capitalize" ,textColor="white", ...props  }) {
    return (
        <button className={`rounded-full border    border-${borderWidth} pb-0.5  min-w-12  border-${borderColor} ${paddingX} ${paddingY}`} {...props}>
            <span className={`${letterCase} text-${textColor} text-sm`}> {label}</span>
        </button>
    )
}

export default RoundedButton