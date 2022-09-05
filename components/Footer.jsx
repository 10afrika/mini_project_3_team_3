import React from 'react'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Link from 'next/link'



const Footer = () => {
    return (
        <footer id="footer" className=' mx-auto  flex items-center justify-center flex-col lg:first-letter:w-screen text-white sm:w-screen md:w-screen'>
            <div className='flex items-center justify-center py-8 '>
                <Link href='/'>
                    <a role="button">
                        <div className='rounded-full shadow-sm shadow-gray-400 p-4  bg-transparent cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp
                                className='text-black'
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