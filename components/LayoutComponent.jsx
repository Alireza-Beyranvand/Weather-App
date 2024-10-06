

import React from 'react'
import Navbar from './Navbar'

export default function LayoutComponent({ children }) {
    return (
        <>
            <Navbar />
            <div className='mt-3.5'>
                {children}
            </div>
        </>
    )
}
