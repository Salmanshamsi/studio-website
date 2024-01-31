import React from 'react'
import banner from "../../assets/studio projects images/banner.png"

const Hero = () => {
  return (
    <div className='flex bg-lightBG-200 md:flex-row flex-col-reverse mt-0 md:mt-16' >
        {/* hero card */}

        <div className=' h-auto w-full flex flex-col gap-4 md:text-left text-center justify-center md:p-20 p-6 font-custom'>
            <h1 className='font-bold text-2xl md:text-3xl' >
                PAKISTAN’S LARGEST INDUSTRIAL FILM’s
                 SHOOTING STUDIO’s<span className='text-yellowText-200 text-4xl' >.</span>
            </h1>
            <p className='text-lg md:text-2xl'>
                We have been the Go to rental House for all premium productions.
                shamsis Studio Strives its self on having the best technical teams trained and educated
                on the latest and greatest equipment.
            </p>
              <button className="transition ease-in-out delay-150 bg-darkBG-400 hover:-translate-y-1 hover:scale-110 hover:bg-yellowText-200 text-lightBG-200 md:w-max w-full p-2 rounded-md  duration-300">
                book now
              </button>
        </div>

        {/* hero image */}

        <div className='h-auto w-full flex items-center justify-center '>
        <img src={banner} alt="banner" className='bg-cover  bg-center h-96  w-auto'/>
          </div>

    </div>
  )
}

export default Hero