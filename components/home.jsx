import React from 'react';

export default function Home() {
    return (
        <>
            <main className="lg:relative">
                <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
                <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                    <span className="block xl:inline">DataEngBytes</span>
                    <span className="block text-indigo-600">26th to 27th August, 2021</span>
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                    DataEngBytes is back on again this year and it's going to be even better... 
                    Join us for some incredible talks and some great networking opportunities.
                    </p>
                    <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                        <a href="https://sessionize.com/dataengbytes2021/" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                        Call for Papers
                        </a>
                    </div>
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                        <a href="https://www.meetup.com/Sydney-Data-Engineering-Meetup/" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                        Meetup
                        </a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
                <img className="absolute inset-0 w-full h-full object-cover" src="./images/dataEngMeetupAtlassian.jpeg" alt="" />
                </div>
            </main>

        </>
    )
}

