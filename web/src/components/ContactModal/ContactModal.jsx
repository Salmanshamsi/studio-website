import React, { useState } from 'react';
import mapImg from '../../assets/studio projects images/map.png'

const ContactModal = ({isOpen, setisOpen}) => {

  const divStyle = {
    backgroundImage: `url('${mapImg}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div  className="fixed inset-0 bg-darkBG-400 opacity-60 blur-xl"></div>
      <div  className="relative  bg-lightBG-200 rounded-lg shadow-lg p-10 font-custom">
        <button
          onClick={(e)=>{
            e.preventDefault();
            setisOpen(false);
          }}
          className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
        <form action="#">
          <div className="mb-1 flex md:flex-row flex-col gap-3">
            <div className='w-full'>
                <label
                htmlFor="email"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                Your email
                </label>
                <input
                type="email"
                id="email"
                className="w-full px-4 py-2.5 bg-gray-50 bg-DlightBG-400 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required=""
                />
            </div>
            <div className='w-full'>
            <label
                htmlFor="subject"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                Subject
                </label>
                <input
                type="text"
                id="subject"
                className="block p-3 w-full bg-DlightBG-400 text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required=""
                />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full px-4 bg-DlightBG-400 py-2.5 bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Leave a comment..."
              defaultValue={""}
            />
          </div>
          <button
            type="submit"
            className="w-full my-5 py-3 px-5 text-sm font-medium text-lightBG-200 bg-darkBG-400 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactModal;
