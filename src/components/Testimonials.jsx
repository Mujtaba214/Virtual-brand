import React from 'react'

const Testimonials = () => {
    const testimonials = [
        {
            text: "This tool has completely transformed the way we collaborate and work on projects. Highly recommended!",
            name: "John Doe",
            profession: "Software Engineer"
        },
        {
            text: "Amazing service! The seamless integration with our existing systems made the transition effortless.",
            name: "Jane Smith",
            profession: "Product Manager"
        },
        {
            text: "The performance insights we gained from this platform have helped optimize our entire workflow.",
            name: "Michael Johnson",
            profession: "Data Scientist"
        },
        {
            text: "I’ve been using this for months now, and I can’t imagine going back. It’s intuitive and effective.",
            name: "Emily Davis",
            profession: "UX/UI Designer"
        },
        {
            text: "Exceptional customer support and a truly useful product. It makes my job so much easier.",
            name: "James Brown",
            profession: "Project Manager"
        },
        {
            text: "A game-changer for our team! We’re more productive than ever, thanks to this tool.",
            name: "Olivia Wilson",
            profession: "Marketing Specialist"
        }
    ];

    return (
        <div className='mt-1 mb-4'>
            <h2 className='text-2xl lg:text-5xl md:text-4xl tracking-wider text-center px-4'>What People are saying</h2>
            <div className="flex flex-wrap justify-center">
                {testimonials.map((e,i)=>(
                    <div className='w-full sm:w-1/2 lg:w-1/3 mt-16' key={i}>
                        <div className=" text-white border border-red-100 mx-2 lg:p-8 p-4 rounded-lg border-spacing-3 tracking-wider">
                            <p>{e.text}</p>
                            <h5 className='pt-4 text-orange-600 font-semibold'>{e.name}</h5>
                            <h6 >{ e.profession}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials