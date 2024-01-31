import React, { useState } from 'react'
import logo from '../../assets/studio projects images/logo.png'
import menuicon from '../../assets/studio projects images/menu.png'
import { Link } from 'react-router-dom';


const Navbar = ({setContactModal}) => {
  const [width,setwidth] = useState("w-12");
  const [icon,seticon] = useState('visible');
  const [mobileMenu,setmobileMenu] = useState('hidden');
 
  return (
    <>
      <div className='w-full h-16 hidden md:flex bg-lightBG-200 fixed top-0 drop-shadow-sm  z-40' >
      <div className='mx-16 flex items-center'>
            <img src={logo} alt="logo" className='h-16 w-44 bg-cover bg-center'  />
      </div>
      <ul className='flex  drop-shadow-lg text-lg w-full h-full items-center justify-end pr-11 gap-7' >
      <li className='transition duration-100 hover:-translate-y-1' ><Link to={'/'} >Home</Link></li>
      <li className='transition duration-100 hover:-translate-y-1' ><Link to={'/about'} >About</Link></li>
      <li className='transition duration-100 hover:-translate-y-1' >Services</li>
      <li className='transition duration-100 hover:-translate-y-1' ><button onClick={(e)=>{
          e.preventDefault();
          setContactModal(true);
        }} >contact</button></li>
      </ul>
      </div>

    {/* mobile screen menu */}

    <div className='h-16 w-full fixed bottom-4 flex items-center md:hidden' >
        <button 
        onClick={(e)=>{
          e.preventDefault();
          if(width === 'w-12'){
            setwidth('w-full');
            seticon('hidden');
            setmobileMenu('visible');
          }else{
            setwidth('w-12');
            seticon('visible');
            setmobileMenu('hidden')
          }

        }}
        className={`rounded-full h-12 ${width} m-2 bg-darkBG-400 p-2 flex justify-center items-center shadow-lg transform transition-all duration-300`} >
              <img src={menuicon} className={`bg-cover bg-center ${icon} h-7 w-7 transform transition-all duration-300`} alt="icon" />
              
                <ul className={` ${mobileMenu} flex text-DlightBG-400 sm:gap-12 items-center justify-center gap-7`} >
                  <li><Link className='fa-solid fa-house fa-xl' to={'/'} ></Link></li>
                  <li><Link className='fa-solid fa-circle-info fa-xl' to={'/about'} ></Link></li>
                  <li className='fa-solid fa-briefcase fa-xl' ></li>
                  <li><button
                    className='fa-solid fa-user fa-xl '
                    onClick={(e)=>{
                      e.preventDefault();
                      setContactModal(true);
                    }}>
                 </button></li>
                </ul>
        
        </button>
    </div>

    </>
  )
}

export default Navbar