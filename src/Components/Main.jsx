import React from "react";

const Main = () => {
  return (
    <div className="bg-[#1a1a1a] text-white pt-20 px-8">
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 max-w-5xl mx-auto flex items-center justify-between gap-6 ">
        <img
          src="/assets/firebase_studio.webp"
          className="bg-black w-12 h-12 p-2 rounded"
          alt="Firebase Studio"
        />
        <div className="flex-1">
          <h2 className="font-semibold text-black text-2xl tracking-wider">
            Introducing Firebase Studio
          </h2>
          <p className="text-medium text-black font-light leading-snug pt-4 tracking-wider">
            Prototype, build, and deploy full-stack, AI apps with our agentic development environment.
            Now with AI-optimized templates, seamless integration with Firebase services, and ability
            to fork workspaces — all designed to make AI-assisted development more powerful.
          </p>
        </div>
        <a
          href="#"
          className="bg-[#ff8f00] text-black font-medium px-6 py-2 rounded-full hover:bg-[#ffa733] transition"
        >
          Get Started
        </a>


      </div>
      <div className="text-center mt-16 pt-14">
  <h1 className="font-bold text-white leading-tight">
    <span className="block text-6xl font-bold md:text-7xl tracking-wider">
      Make your app 
      <img
        src="assets/firebase-icon-logo-png_seeklogo-615938.webp"
        alt="firebase"
        className="w-16 h-16 inline-block align-middle ml-2"
      />
      the best it can be
    </span>
    
    <span className="block text-6xl md:text-7xl font-bold mt-2 tracking-wider pt-4 ">
      with Firebase and generative AI
    </span>
  </h1>

  <p className="text-gray-300 mt-6 max-w-3xl font-thin mx-auto text-3xl tracking-widest">
    Prototype, build & run modern, AI-powered experiences users love with Firebase, 
    a platform designed to support you throughout your app development lifecycle.
  </p>
  <p className="text-gray-300 mt-6 max-w-3xl font-thin mx-auto text-3xl tracking-widest">
    Backed by Google and trusted by millions of businesses around the world.
  </p>
</div>




    </div>
  );
};

export default Main;
