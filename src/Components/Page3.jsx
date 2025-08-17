import React from 'react'
import Carousel from '../Carousel'
import Card from '../Card';
const slides = [
    { title: "Firebase Studio", img: "assets/firebase_studio.webp" },
    { title: "Firebase AI Logic", img: "assets/firebase-ai-logic.svg" },
    { title: "Genkit", img: "assets/build_genkit_white.svg" },
];
const Page3 = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-12">
            {/* Card Section */}
            <div className="hidden md:flex items-center justify-start w-full px-24 pt-20">
                <div className="bg-gradient-to-br from-blue-500 via-orange-300 to-yellow-400 
         rounded-3xl shadow-lg p-6 flex gap-4 max-w-4xl">
                    {slides.map((slide, index) => (
                        <Card key={index} title={slide.title} img={slide.img} />
                    ))}
                </div>
            </div>


            <div className="flex flex-col items-center p-4 justify-center px-10 md:items-start md:text-left md:px-20">
                <h1 className="font-mono text-base tracking-wider uppercase pb-4 pt-4 md:text-2xl md:font-thin">
                    GENERATIVE AI
                </h1>
                <h2 className="text-xl font-semibold pb-6 md:text-4xl md:tracking-wider">
                    Easily integrate Firebase with Gemini and the latest AI technology from Google
                </h2>
                <button className="rounded-full bg-white font-semibold border-2 border-orange-500 hover:bg-orange-400 hover:text-black px-4 py-1 tracking-wide text-lg">
                    View generative AI options
                </button>
            </div>

            <div className="w-full flex items-center justify-center  pt-1 md:hidden">
                <Carousel slides={slides} />
            </div>
       </div>
      


    )
}

export default Page3
