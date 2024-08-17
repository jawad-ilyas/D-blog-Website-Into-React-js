import React from 'react'

function Container({ children , ...props }) {
  return (
    <div className={`mx-auto w-full container lg:px-20 lg:py-8 `}{...props}>{children}</div>
  )
}

export default Container