/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image';
import TextAnimation from './TextAnimation';

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>Hello, I'm{" "}
                    </span> 
                    <br></br>
                <TextAnimation />
                </h1>
                <p className='text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl'>
                I am a first-generation Mexican American woman with a passion for fostering diversity and inclusion in the tech industry. My mission is to be a driving force in eradicating the gender gap and amplifying the presence of Latinx and queer voices.
                </p>
                <div>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Hire Me</button>
                    <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download Resume</span>
                    </button>
                </div>
            </div>
            <div className='col-span-5 place-self-center'>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative'>
                    <Image
                        src='/images/hero-image.png'
                        alt='hero image'
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    </section>
  );
};

export default HeroSection