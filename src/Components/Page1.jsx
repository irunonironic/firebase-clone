import React from "react";
import { ArrowRight } from "lucide-react";
const Page1 = () => {
  return (
    <div className="bg-[#1a1a1a] text-white pt-20 px-8">
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 max-w-5xl mx-auto flex items-center justify-between gap-6 flex flex-col md:flex-row">
        <img
          src="/assets/firebase_studio.webp"
          className=" bg-black w-12 h-12 p-2 rounded mx-auto md:mx-0"
          alt="Firebase Studio"
        />
        <div className="flex-1 text-left md:text-left">
          <h2 className="font-medium text-black text-2xl tracking-wider">
            Introducing Firebase Studio
          </h2>
          <p className="text-medium text-black font-light leading-snug pt-6 tracking-wider ">
            Prototype, build, and deploy full-stack, AI apps with our agentic development environment.
            Now with AI-optimized templates, seamless integration with Firebase services, and ability
            to fork workspaces — all designed to make AI-assisted development more powerful.
          </p>
        </div>
        <a
          href="#"
          className="bg-[#ffb833] text-black font-semibold px-6 py-2 rounded-full hover:bg-[#ffa533] transition mx-auto md:mx-0"
        >
          Get Started
        </a>


      </div>
      <div className="text-center mt-16 pt-14">
  <h1 className="font-bold text-white leading-tight">
    <span className="block text-4xl font-semibold md:text-7xl tracking-wider">
      Make your app 
      <img
        src="assets/firebase-icon-logo-png_seeklogo-615938.webp"
        alt="firebase"
        className="w-16 h-16 inline-block align-middle ml-2"
      />
      the best it can be
    </span>
    
    <span className="block text-4xl md:text-7xl font-semibold mt-2 tracking-wider pt-4 ">
      with Firebase and generative AI
    </span>
  </h1>

  <p className="text-gray-300 mt-6 max-w-3xl md:text-4xl font-light mx-auto text-xl tracking-widest pt-10">
    Prototype, build & run modern, AI-powered experiences users love with Firebase, 
    a platform designed to support you throughout your app development lifecycle.
  </p>
  <p className="text-gray-300 mt-6 max-w-3xl md:text-4xl font-light mx-auto text-xl tracking-widest">
    Backed by Google and trusted by millions of businesses around the world.
  </p>
<div className="flex items-center gap-4 pt-6 md:flex md:items-center md:justify-center pb-8">
  <button className="rounded rounded-full font-medium border border-2 border-orange-500  hover:bg-orange-500 hover:text-black p-4 md:p-2" >Get started in console</button>
  <a
  href="#"
  className="text-white text-lg font-medium tracking-wide flex items-center gap-1  md:mt-0 hover:underline p-4 "
>
  Try Firebase Studio
  <ArrowRight className="w-4 h-4" />
</a>
</div>
</div>




    </div>
  );
};

export default Page1;
