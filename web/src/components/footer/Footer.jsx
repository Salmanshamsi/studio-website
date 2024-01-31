import React from 'react'

const Footer = () => {
  return (
    <div className='bg-lightBG-200 text-center font-custom flex justify-center flex-col items-center gap-8 p-3 pb-10 z-50'>
      <h1>LET’s connect with us by subscribing our news letter</h1>
      <div className='flex md:flex-row flex-col md:gap-0 gap-5 items-center' >
        <input type="text" name="subscriber" placeholder='Type your Email Here' className='h-10 md:w-72 w-56 pl-5 rounded-lg shadow-lg bg-lightBG-200 me-2'  id="" />
        <button className="transition ease-in-out delay-150 bg-darkBG-400 hover:-translate-y-1 hover:scale-110 hover:bg-yellowText-200 text-lightBG-200 md:w-max w-full p-2 rounded-md  duration-300">
                subscribe
        </button>
    </div>
        <div>
        <ul className='flex gap-10' >
          <li className="fa-brands fa-square-facebook fa-xl "></li>
          <li className="fa-brands fa-square-x-twitter fa-xl" ></li>
          <li className="fa-brands fa-square-instagram fa-xl" ></li>
        </ul>
        </div>
    </div>
  )
}

export default Footer;