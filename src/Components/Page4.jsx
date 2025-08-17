import React from 'react'

const Page4 = () => {
  return (
    <div className="flex flex-col items-center text-center p-4 justify-center px-10 md:items-center md:text-center md:px-20">
      <h1 className="font-mono text-base tracking-wider uppercase pb-4 pt-14 md:text-2xl md:font-light">
        MORE GOOGLE AND THIRD-PARTY INTEGRATIONS
      </h1>
      <h2 className="text-xl font-semibold pt-4 pb-6 md:text-4xl md:tracking-wider">
        Easily integrate Firebase with your team's favorite tools.
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-5 bg-gray-50">
        <div className="flex flex-col items-center justify-center p-4">
          <img src="assets/flutter.png" alt="Flutter" className="w-14 h-14" />
          <span className="mt-2 text-sm text-gray-700 pt-4 hover:underline text-center">Flutter</span>
        </div>
        
        <div className="flex flex-col items-center justify-center p-4">
          <img src="assets/google-ads.svg" alt="Google ads" className="w-14 h-14" />
          <span className="mt-2 text-sm text-gray-700 pt-4 hover:underline text-center">Google Ads</span>
        </div>
        
        <div className="flex flex-col items-center justify-center p-4">
          <img src="assets/ad-mob.svg" alt="admob" className="w-14 h-14" />
          <span className="mt-2 text-sm text-gray-700 pt-4 hover:underline text-center">AdMob</span>
        </div>
        
        <div className="flex flex-col items-center justify-center p-4">
          <img src="assets/google-marketing-platform.svg" alt="Google Marketing Platform" className="w-14 h-14" />
          <span className="mt-2 text-sm text-gray-700 pt-4 hover:underline text-center">Google Marketing Platform</span>
        </div>
        
        <div className="flex flex-col items-center justify-center p-4">
          <img src="/assets/playstore (1).png" alt="Google Play" className="w-14 h-14" />
          <span className="mt-2 text-sm text-gray-700 pt-4 hover:underline text-center">Google Play</span>
        </div>
        
        <div className="flex flex-col items-center justify-center p-4">
          <img src="assets/datastudio.svg" alt="Data Studio" className="w-14 h-14" />
          <span className="mt-2 text-sm text-gray-700 pt-4 hover:underline text-center">Data Studio</span>
        </div>
        
        <div className="flex flex-col items-center justify-center p-4">
          <img src="assets/bigquery.svg" alt="BigQuery" className="w-14 h-14" />
          <span className="mt-2 text-sm text-gray-700 pt-4 hover:underline text-center">BigQuery</span>
        </div>
        
        <div className="flex flex-col items-center justify-center p-4">
          <img src="assets/slack (1).png" alt="Slack" className="w-14 h-14" />
          <span className="mt-2 text-sm text-gray-700 pt-4 hover:underline text-center">Slack</span>
        </div>
        
        <div className="flex flex-col items-center justify-center p-4">
          <img src="assets/jira.svg" alt="Jira" className="w-14 h-14" />
          <span className="mt-2 text-sm text-gray-700 pt-4 hover:underline text-center">Jira</span>
        </div>
        
        <div className="flex flex-col items-center justify-center p-4">
          <img src="assets/android-studio.png" alt="Android" className="w-14 h-14" />
          <span className="mt-2 text-sm text-gray-700 pt-4 hover:underline text-center">Android</span>
        </div>
      </div>
    </div>
  )
}

export default Page4