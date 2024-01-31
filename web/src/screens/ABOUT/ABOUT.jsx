import React from 'react'
import Gridframe from '../../components/GridFrame/Gridframe'


const ABOUT = () => {
  return (
    <>
      <div className='bg-DlightBG-400 h-auto md:mt-16 flex items-center flex-col md:flex-row'>
      <h1 className='font-custom font-bold text-5xl mt-0 md:hidden' >EXPLORE WHO WE ARE.</h1>
            <Gridframe/>
        <div className='flex justify-center items-center  md:h-auto md:w-6/12 w-full h-auto flex-col gap-8 md:gap-3' >
            <h1 className='font-custom font-bold  text-3xl lg:text-5xl mt-0 md:block hidden' >EXPLORE WHO WE ARE.</h1>
            <h1 className='font-custom font-bold text-3xl lg:text-5xl text-center text-yellowText-200' >The Industy Standard Since 2000.</h1>
            <p className='font-custom text-lg lg:text-2xl text-center' >
              shamsi’s Studio  has been working with the Pakistani Commerical, Film and TV Industry for the past 20 years .
              We have been the Go to rental House for all premium productions .shamsi’s  Studio Strives its self on having the best technical teams trained and educated on the latest and greatest equipment,
              We aim to continue to bring in the latest and greatest technology to always dance the industry as a whole.
              Studio Spaces . Lights , Cameras And lenses with the Largest Inventory of Accessories
            </p>
        </div>
      </div>
    </>
  )
}

export default ABOUT
