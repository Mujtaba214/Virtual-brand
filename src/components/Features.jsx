import React from 'react';

const Features = () => {
    const cards = [
        {
            id: 1,
            title: "Code Automation",
            description: "Simplify your development process with automated code generation and deployment, saving time"
        },
        {
            id: 2,
            title: "Cloud Integration",
            description: "Seamlessly connect your tools and infrastructure to the cloud, ensuring scalability and reliability for all your projects."
        },
        {
            id: 3,
            title: "Collaborative Workflows",
            description: "Enhance team productivity with real-time collaboration tools and shared virtual environments for streamlined development."
        },
        {
            id: 4,
            title: "AI-Powered Debugging",
            description: "Identify and fix issues faster using advanced AI-driven debugging tools designed for accuracy and speed."
        },
        {
            id: 5,
            title: "Customizable Templates",
            description: "Access a library of pre-built templates to kickstart your project with fully customizable components."
        },
        {
            id: 6,
            title: "Performance Monitoring",
            description: "Track and optimize your application's performance with real-time analytics and insights."
        }
    ];

    return (
        <div className="relative mt-16 min-h-[800px] text-center">
            <h3 className="uppercase font-bold text-orange-700 text-lg">Features</h3>
            <h2 className="w-full text-3xl sm:text-5xl lg:text-6xl mt-8 lg:mt-12 px-10 tracking-wider leading-10">
                Easily Build{' '}
                <span className="bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text">
                    Your Code
                </span>
            </h2>
            <div className="flex flex-wrap justify-center items-center -mx-4">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="w-full sm:w-4/5 lg:w-1/3 mt-16 px-6"
                    >
                        <div className="bg-transparent p-6 sm:px-11 rounded-lg shadow-md hover:shadow-lg border">
                            <h2 className="sm:text-md text-lg font-bold text-white">{card.title}</h2>
                            <p className="text-gray-300 mt-4">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
