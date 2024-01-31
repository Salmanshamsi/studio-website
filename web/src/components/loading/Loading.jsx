import React from 'react'
import spinner from '../../assets/studio projects images/favIcon.png'

const Loading = () => {
  return (
    <div className='flex h-screen w-full z-50  inset-0 fixed text-DlightBG-400 text-2xl top-0  justify-center items-center'>
        <div className='absolute bg-darkBG-400 opacity-80 h-full w-full blur-md' ></div>
        <div>
            <img src={spinner} className='h-20 animate-spin' alt="" />
        </div>
    </div>
  )
}

export default Loading