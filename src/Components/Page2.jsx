import React from 'react'
import { ArrowRight } from "lucide-react";

const items = [
  { logo: "assets/build_app_hosting.svg", title: "App Hosting" },
  { logo: "assets/build_data_connect.svg", title: "Data Connect" },
  { logo: "assets/build_data_connect.svg", title: "Firebase AI Logic client SDKs" },
];

const items2 = [
  { logo: "assets/run_app_distribution.svg", title: "App Distribution" },
  { logo: "assets/run_crashlytics.svg", title: "Crashlytics" },
  { logo: "assets/run_remote_config.svg", title: "Remote Config" },
];

const Page2 = () => {
  return (
    <div className="bg-[#1a1a1a] text-white pt-20 px-8 pb-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        <div className="grid grid-rows-[auto,auto,1fr,auto] h-full">
          <h2 className="font-light text-sm p-2 md:text-2xl md:font-bold">BUILD</h2>
          <h2 className="font-semibold text-lg p-2 md:text-xl tracking-wider">
            Get to market quickly and securely with products that can scale globally
          </h2>
          <h3 className="font-thin text-base p-2 pb-10">
            Build AI-powered experiences into your apps and accelerate app development 
            with managed infrastructure, powered by Google Cloud, so you can focus on what matters most.
          </h3>

          <div className="flex flex-col gap-4 pb-6">
            {items.map((item, i) => (
              <div key={i}>
                <a href="#" className="flex items-center justify-between py-4 px-2 rounded-md transition w-full">
                  <div className="flex items-center gap-4">
                    <img src={item.logo} alt={item.title} className="w-10 h-10" />
                    <h2 className="text-sm font-medium">{item.title}</h2>
                  </div>
                  <ArrowRight className="w-5 h-5" />
                </a>
                {i !== items.length - 1 && (
                  <div className="border-t border-gray-600"></div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-auto flex justify-center md:justify-start">
            <button className="rounded-full font-medium border-2 border-orange-500 hover:bg-orange-500 hover:text-black px-4 py-1">
              View all Build Products
            </button>
          </div>
        </div>


        <div className="grid grid-rows-[auto,auto,1fr,auto] h-full md:border-t md:border-t-0 md:border-l border-gray-700 pl-8">
          <h2 className="font-light text-sm p-2 md:text-2xl md:font-bold">RUN</h2>
          <h2 className="font-semibold text-lg p-2 md:text-xl md:font-semibold p1-2 tracking-wider">
           Run your app with confidence and deliver the best experience for your users
          </h2>
          <h3 className="font-thin text-base p-2 pb-10">
           Launch, monitor, and iterate with AI-assistive tools that help you optimize your app's quality and experience.
          </h3>

          <div className="flex flex-col gap-4 pb-6">
            {items2.map((item, i) => (
              <div key={i}>
                <a href="#" className="flex items-center justify-between py-4 px-2 rounded-md transition w-full">
                  <div className="flex items-center gap-4">
                    <img src={item.logo} alt={item.title} className="w-10 h-10" />
                    <h2 className="text-sm font-medium">{item.title}</h2>
                  </div>
                  <ArrowRight className="w-5 h-5" />
                </a>
                {i !== items2.length - 1 && (
                  <div className="border-t border-gray-600"></div>
                )}
              </div>
            ))}
          </div>

  
          <div className="mt-auto flex justify-center md:justify-start">
            <button className="rounded-full font-medium border-2 border-orange-500 hover:bg-orange-500 hover:text-black px-4 py-1">
              View all Run Products
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page2;
