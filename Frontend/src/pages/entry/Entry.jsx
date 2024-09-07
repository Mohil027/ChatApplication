import React from 'react'
import Navbar from './Navbar.jsx'
import HeroSection from './HeroSection.jsx'

const Entry = () => {
    return (
        <>
        
        <div className=' mx-auto my-auto border border-gray-500 rounded-lg overflow-hidden bg-orange-950 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-15'>

        

            <Navbar />

            <div className="max-w-7xl mx-auto pt-20 px-6">
                <HeroSection />
                
            </div>

        </div>

        </>



    )
}

export default Entry