import Image from 'next/image'
import React from 'react'

// Images
import maxiquim from '../public/experience_imgs/maxiquim.png'
import me from '../public/experience_imgs/me.jpg'
import ufrgs from '../public/experience_imgs/ufrgs.png'

const Experience = () => {
    return (
        <div className="w-full h-full flex justify-center py-4">
            {/* Big Card / Container */}
            <div className="bg-lightSecondary dark:bg-darkPrimary-800 w-[90%] flex flex-col rounded-lg overflow-hidden p-4 lg:h-[70vh] md:justify-around">
                {/* Top part - Profile Img and Self Description */}
                <div className="md:flex md:flex-col md:items-center md:justify-center lg:flex-row">
                    {/* Profile Image */}
                    <div className="flex justify-center lg:w-[30%]">
                        <div className="rounded-full mx-auto border overflow-hidden items-center w-[25vh] h-[25vh] relative">
                            <Image
                                src={me}
                                alt="Profile Picture"
                                fill={true}
                                className="w-32 h-32"
                            />
                        </div>
                    </div>
                    {/* Profile Text */}
                    <div className="py-[2%] flex flex-col flex-1 justify-center text-center md:w-[70%] md:px-[5%]">
                        <h2 className="font-semibold text-lg">Mateus K. Trentz</h2>
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
                    <div className="bg-lightPrimary-300 dark:bg-darkPrimary-700 w-5/6 h-[2px]"></div>
                </div>

                {/* Bottom Part. Uni and Job title */}
                <div className="md:flex md:flex-row md:justify-around">
                    {/* University Part */}
                    <div className="md:w-[45%] md:flex md:flex-col lg:flex-row md:justify-center md:items-center">
                        {/* University Picture */}
                        <div className="rounded-full mx-auto my-3 md:mx-5 border overflow-hidden w-[20vh] h-[20vh] relative ">
                            <Image
                                src={ufrgs}
                                alt="University Picture"
                                fill={true}
                                className="w-32 h-32"
                            />
                        </div>
                        {/* University Text */}
                        {/* Text Part */}
                        <div className="w-full flex flex-col items-center lg:w-[50%]">
                            <p className="font-semibold text-center w-[80%]">
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
                    <div className="md:w-[45%] md:flex md:flex-col lg:flex-row md:justify-center md:items-center">
                        {/* Job Picture */}
                        <div className="rounded-2xl mx-auto my-3 md:mx-5 border overflow-hidden w-[20vh] h-[15] pt-2">
                            <Image
                                src={maxiquim}
                                alt="Job Picture"
                                fill={false}
                                className="w-32 h-32"
                            />
                        </div>
                        {/* Job Title */}
                        <div>
                            <p className="font-semibold text-center">MaxiQuim</p>
                            <p className="flex-0 text-center"> Data Scientist </p>
                            <p className="flex-0 text-center"> mar/2020 - present </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience