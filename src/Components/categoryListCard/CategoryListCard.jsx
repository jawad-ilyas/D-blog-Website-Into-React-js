import React from 'react'

function CategoryListCard({ title }) {
    return (
        <div className=''>

            <div className='px-8 py-6 hover:bg-LightBg'>
                <h1 className='text-xl text-Gray'>{title}</h1>
            </div>
        </div>
    )
}

export default CategoryListCard