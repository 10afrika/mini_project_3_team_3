import React from 'react'
import MainImage from '../public/assets/main-image.png'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className="relative f mt-40 ml-25 md:ml-10 sm:mx-auto">
            <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
                <div className="flex flex-1 flex-col items-center lg:items-start">
                    <h2 className="text-black text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                        A Simple Weather Application
                    </h2>
                    <p className="text-gray-400 text-lg text-center lg:text-left sm:text-center mb-6 text-md">
                        Welcome to this simple weather application where you can view your daily weather reports along with your weekly forecasts for your city.
                        You can even see some insights about your city. So scroll down and take a look.

                    </p>

                </div>
                <div className="flex justify-center rounded-md flex-1 mb-10 md:mb-16 lg:mb-0 mr-[-70px]">
                    <Image className="" src={MainImage} width={400} height={400} alt="" />
                </div>
            </div>

        </section>

    )
}

export default Hero