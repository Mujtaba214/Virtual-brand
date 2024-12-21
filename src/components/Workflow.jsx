import React from 'react'
import { CheckCircle2 } from 'lucide-react';

const Workflow = () => {
    const points = [
        {
            title: "Seamless Integration",
            text: "Easily connect tools and systems for a smooth workflow."
        },
        {
            title: "Advanced Analytics",
            text: "Gain valuable insights with real-time data tracking."
        },
        {
            title: "Enhanced Security",
            text: "Protect your data with robust security protocols."
        }
    ];

    return (
        <div className='mt-6 mb-14'>
            <h2 className='text-3xl lg:text-5xl md:text-4xl text-white text-center font-bold tracking-wider'>Accelerate Your <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>Coding WorkFlow</span></h2>
            <div className="my-10 flex flex-wrap justify-center">
                <div className='p-2 w-full lg:w-1/2'>
                    <img className='mt-5 lg:ml-14 text-center lg:h-72 h-80 lg:w-2/3 md:w-2/3 w-full ' src="/public/img.avif" alt="" />
                </div>
                <div className="pt-12 w-full lg:w-1/2">
                    {points.map((e, i) => (
                        <div key={i} className='flex mb-12'>
                            <div className='text-green-500 h-10 w-10 lg:mx-3 mx-1 p-3 justify-center items-center'>
                                <CheckCircle2 />
                            </div>
                            <div className="flex flex-col">
                                <h3 className='text-white text-[20px] font-semibold'>{e.title}</h3>
                                <p className='text-white'>{e.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Workflow