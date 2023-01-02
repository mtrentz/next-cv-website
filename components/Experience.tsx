import Image from 'next/image'
import React from 'react'

// Images
import maxiquim from '../public/experience_imgs/maxiquim.png'
import me from '../public/experience_imgs/me.jpg'
import ufrgs from '../public/experience_imgs/ufrgs.png'

const Experience = () => {
    return (
        <div className="flex flex-row justify-center align-middle my-4">
            <div className="bg-lightSecondary dark:bg-darkPrimary-800 px-4 lg:px-0 rounded-lg shadow-md w-11/12 py-6">

                {/* Top part - Profile Img and Self Description */}
                <div className="flex flex-col items-center justify-center lg:flex-row lg:mx-6">
                    {/* Profile Image */}
                    <div className="flex justify-center mb-4">
                        <div className="rounded-full border border-lightPrimary-300 dark:border-darkPrimary-700 overflow-hidden w-60 h-60 relative">
                            <Image
                                src={me}
                                alt="Profile Picture"
                                fill={true}
                                sizes="15rem"
                            />
                        </div>
                    </div>
                    {/* Profile Text */}
                    <div className="flex flex-col flex-1 justify-justify text-center gap-1">
                        <h2 className="font-semibold text-xl md:hidden">Mateus K. Trentz</h2>
                        <h2 className="font-semibold text-2xl hidden md:block">Mateus Kochhann Trentz</h2>
                        <div className="flex flex-col gap-2 md:self-center md:w-11/12">
                            <p className=" flex-0 leading-normal antialiased">
                                {`I'm a Chemical Engineer who is very passionate about programming and technology in general.
                    I started programming a few years ago doing mostly data science and data analysis,
                    but in recent years I have expanded my skill set to include a wider range of programming languages
                    and technologies, becoming more of an all-around developer.`}
                            </p>
                            <p className=" flex-0 leading-normal antialiased">
                                {`More recently I've turned my
                    attention to web development, which was the field that got me most excited about programming.
                    I'm currently working as a Full Stack Developer at MaxiQuim, a consulting company for the chemical industry in Brazil.`}
                            </p>
                        </div>
                    </div>
                </div>


                {/* Horizontal Separator */}
                <div className="h-2 my-4 flex flex-col justify-center items-center">
                    <div className="bg-lightPrimary-300 dark:bg-darkPrimary-700 w-5/6 h-px"></div>
                </div>

                {/* Bottom Part. Uni and Job title */}
                <div className="md:flex md:flex-row md:justify-around">
                    {/* University Part */}
                    <div className="flex flex-col lg:flex-row md:justify-center md:items-center md:gap-4 md:w-5/12">
                        {/* University Picture */}
                        <div className="flex justify-center my-4">
                            <div className="rounded-full border border-lightPrimary-300 dark:border-darkPrimary-700 overflow-hidden w-48 h-48 my-3 relative">
                                <Image
                                    src={ufrgs}
                                    alt="University Picture"
                                    fill={true}
                                    sizes="12rem"
                                    className="pb-2 pl-2"
                                />
                            </div>
                        </div>

                        {/* University Text */}
                        <div className="w-full flex flex-col items-center">
                            <p className="font-semibold text-center w-8/12 md:w-full">
                                Universidade Federal do Rio Grande do Sul
                            </p>
                            <p className="flex-0 text-center leading-normal antialiased"> Chemical Engineering </p>
                            <p className="flex-0 text-center leading-normal antialiased"> Graduated in 2020 </p>
                        </div>
                    </div>

                    {/* Horizontal separator on mobile, vertical on bigger screens */}
                    <div className="h-2 my-4 flex flex-col justify-center items-center md:w-5 md:flex-none md:pl-3 md:h-52">
                        <div className="bg-lightPrimary-300 dark:bg-darkPrimary-700 w-5/6 h-px md:h-3/4 md:w-px md:transform md:rotate-6"></div>
                    </div>

                    {/* Job Part */}
                    <div className="flex flex-col lg:flex-row md:justify-center md:items-center md:gap-4 md:w-5/12">
                        {/* Job Picture */}
                        <div className="flex justify-center my-4">
                            <div className="rounded-2xl border border-lightPrimary-300 dark:border-darkPrimary-700 overflow-hidden w-48 h-36 my-3 pt-2 relative">
                                <Image
                                    src={maxiquim}
                                    alt="Job Picture"
                                    fill={true}
                                    sizes="13rem"
                                />
                            </div>
                        </div>

                        {/* Job Title */}
                        <div>
                            <p className="font-semibold text-center">MaxiQuim</p>
                            <p className="flex-0 text-center leading-normal antialiased"> Full Stack Developer </p>
                            <p className="flex-0 text-center leading-normal antialiased"> mar/2020 - present </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience