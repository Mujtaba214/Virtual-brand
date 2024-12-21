import React from 'react'

const HeroSection = () => {
    return (
        <>
            <div className="flex flex-col items-center mt-6 lg:mt-20 ">
                <h1 className="text-4xl sm:text-3xl lg:text-6xl text-center tracking-wide ">
                    Virtual Build Tools <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text' >for developers</span>
                </h1>
                <p className=' text-center max-w-4xl p-4 tracking-wider ' >
                    Virtual Brand empowers businesses to establish a seamless online presence designed for the digital age. By blending creativity with technology, we provide innovative, virtual-first branding solutions that elevate your reach and connect you with your audience.</p>
                <div className="flex flex-col md:flex-row lg:flex-row gap-4">
                    <button className="lg:px-6 md:px-5 px-4 py-3 text-white bg-gradient-to-r from-orange-500 to-red-800 rounded-md hover:bg-white hover:text-black hover:border hover:border-black">
                        Start for free
                    </button>
                    <button className="lg:px-4 md:px-6 px-3 py-3 rounded-md border">
                        Documentation
                    </button>
                </div>

            </div>
        </>
    )
}

export default HeroSection