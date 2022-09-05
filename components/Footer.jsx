import React from 'react'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Link from 'next/link'



const Footer = () => {
    return (
        <footer id="footer" className='flex items-center justify-center flex-col bg-[#395CB0]  w-screen text-white sm:w-screen md:w-screen'>
            <div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0  md:justify-center lg:justify-center py-3'>
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400 md:text-center lg:text-center">© 2022 App. All Rights Reserved.
                </span>
            </div>
            <div className='flex items-center justify-center py-8 '>
                <Link href='/'>
                    <a role="button">
                        <div className='rounded-full shadow-sm shadow-gray-400 p-4  bg-transparent cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp
                                className='text-white'
                                size={15}
                            />
                        </div>
                    </a>
                </Link>
            </div>
        </footer>

    )
}

export default Footer