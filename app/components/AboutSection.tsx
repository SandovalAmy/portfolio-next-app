'use client'
import React, { useTransition, useState }  from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>React.js</li>
                <li>React Native</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Git</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Associate of Science, Kinesiology</li>
                <li>Associate of Science, Small Business Operations</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Code the Dream - Certificate: React.js</li>
                <li>Coursera - Certificate: Introduction to Front-End Development</li>
                <li>Code the Dream - Certificate: HTML, CSS, JavaScript</li>
            </ul>
        )
    },
]

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: React.SetStateAction<string>) => {
    startTransition(() => {
        setTab(id);
    });
  };

  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src='/images/about-image.jpg' alt='laptop' width={500} height={500} />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>Skills</TabButton>
                    <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>Education</TabButton>
                    <TabButton selectTab={() => handleTabChange('certifications')} active={tab === 'certifications'}>Certifications</TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab)?.content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection