import Image from 'next/image'
import React from 'react'

// Images
import maxiquim from '../public/experience_imgs/maxiquim.png'
import me from '../public/experience_imgs/me.jpg'
import ufrgs from '../public/experience_imgs/ufrgs.png'

const Experience = () => {
    return (
        <div className="flex flex-row justify-center align-middle lg:h-4/6 my-4 lg:my-7">
            {/* Big Card / Container */}
            <div className="bg-lightSecondary dark:bg-darkPrimary-800 w-11/12 flex flex-col rounded-lg overflow-hidden p-4 md:justify-around">
                {/* Top part - Profile Img and Self Description */}
                <div className="md:flex md:flex-col md:items-center md:justify-center lg:flex-row">
                    {/* Profile Image */}
                    <div className="flex justify-center">
                        <div className="rounded-full mx-auto border border-lightPrimary-300 dark:border-darkPrimary-700 overflow-hidden items-center w-60 h-60 relative">
                            <Image
                                src={me}
                                alt="Profile Picture"
                                fill={true}
                                sizes="15rem"
                            />
                        </div>
                    </div>
                    {/* Profile Text */}
                    <div className="py-[2%] flex flex-col flex-1 justify-center text-center md:w-[70%] md:px-[5%]">
                        <h2 className="font-semibold text-lg md:hidden">Mateus K. Trentz</h2>
                        <h2 className="font-semibold text-lg hidden md:block">Mateus Kochhann Trentz</h2>
                        <p className=" flex-0 leading-normal">
                            {`I'm a Chemical Engineer who is very passionate about Tech and
                            Data. I love programming and I've been doing it for a few years
                            now. I currently work as a Data Scientist at MaxiQuim, which is a
                            consulting company for the chemical industry in Brazil, where I
                            live.`}
                        </p>
                    </div>
                </div>

                {/* Horizontal Separator */}
                <div className="h-5 flex flex-col justify-center items-center">
                    <div className="bg-lightPrimary-300 dark:bg-darkPrimary-700 w-5/6 h-px"></div>
                </div>

                {/* Bottom Part. Uni and Job title */}
                <div className="md:flex md:flex-row md:justify-around">
                    {/* University Part */}
                    <div className="md:flex md:flex-col lg:flex-row md:justify-center md:items-center">
                        {/* University Picture */}
                        <div className="rounded-full mx-auto my-3 md:mx-5 border border-lightPrimary-300 dark:border-darkPrimary-700 overflow-hidden w-48 h-48 relative">
                            <Image
                                src={ufrgs}
                                alt="University Picture"
                                fill={true}
                                sizes="12rem"
                                className="pb-2 pl-2"
                            />
                        </div>
                        {/* University Text */}
                        {/* Text Part */}
                        <div className="w-full flex flex-col items-center lg:w-1/2">
                            <p className="font-semibold text-center">
                                Universidade Federal do Rio Grande do Sul
                            </p>
                            <p className="flex-0 text-center"> Chemical Engineering </p>
                            <p className="flex-0 text-center"> Graduated in 2020 </p>
                        </div>
                    </div>

                    {/* Horizontal separator on mobile, vertical on bigger screens */}
                    <div className="h-5 flex flex-col justify-center items-center md:w-5 md:flex-none md:pl-3 md:h-52">
                        <div className="bg-lightPrimary-300 dark:bg-darkPrimary-700 w-5/6 h-[2px] md:h-3/4 md:w-[2px] md:transform md:rotate-[5deg]"></div>
                    </div>

                    {/* Job Part */}
                    <div className="md:flex md:flex-col lg:flex-row md:justify-center md:items-center">
                        {/* Job Picture */}
                        <div className="rounded-2xl mx-auto my-3 md:mx-5 border border-lightPrimary-300 dark:border-darkPrimary-700 overflow-hidden w-48 h-36 pt-2 relative">
                            <Image
                                src={maxiquim}
                                alt="Job Picture"
                                fill={true}
                                sizes="13rem"
                            // className="w-32 h-32"
                            />
                        </div>
                        {/* Job Title */}
                        <div>
                            <p className="font-semibold text-center">MaxiQuim</p>
                            <p className="flex-0 text-center"> Developer </p>
                            <p className="flex-0 text-center"> mar/2020 - present </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience