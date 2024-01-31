import React from 'react'
import img1 from '../../assets/studio projects images/bn2.jpg'
import img2 from '../../assets/studio projects images/bn3.jpg'
import img3 from '../../assets/studio projects images/bn4.jpg'
import img4 from '../../assets/studio projects images/bn5.jpg'
import img5 from '../../assets/studio projects images/bn6.jpg'

const Gridframe = () => {
  return (
    <table className='md:h-full md:w-3/12 h-auto w-full md:mx-24'>
                   <tbody  className='p-2 items-center md:flex-wrap flex gap-2' >
                        <tr className=' w-full h-full flex gap-1 md:flex-row flex-col' >
                            
                            <td className='h-full w-full' >
                                <img src={img1} alt="grid image" className='bg-contain h-full  w-full rounded-md bg-center ' />
                            </td>
                            <td className='h-full  w-full' >
                                  <img src={img4} alt="grid image" className='bg-contain h-full w-full rounded-md bg-center ' />
                            </td>
                          
                          </tr>
                          <tr className=' w-full h-full p-2' >

                            <td className='h-full w-full ' >
                                <img src={img2} alt="grid image" className='bg-contain h-full w-full rounded-md bg-center ' />
                            </td>
                          
                          </tr>
                          <tr className=' w-full h-full flex gap-1 md:flex-row flex-col' >
                            
                          <td className='h-full w-full' >
                              <img src={img3} alt="grid image" className='bg-contain h-full w-full rounded-md bg-center ' />
                          </td>
                          <td className='h-full w-full' >
                                <img src={img5} alt="grid image" className='bg-contain h-full w-full rounded-md bg-center ' />
                          </td>

                          </tr>
                    </tbody> 
            </table>
  )
}

export default Gridframe