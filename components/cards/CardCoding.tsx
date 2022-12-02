import React from 'react'
import GithubButton from '../general/GithubButton'

type Props = {
    title: string
    // description is a jsx element since I want to have colored spans
    description: JSX.Element
    image: JSX.Element
    imageOnLeft: boolean
    link: string
}


const CardCoding = ({ title, description, image, imageOnLeft, link }: Props) => {
    return (
        <div
            className={`w-full flex flex-col px-2 lg:flex-row ${imageOnLeft ? null : "lg:flex-row-reverse"}`}
        >
            {/* Image Part */}
            <div className="flex justify-center py-1 lg:w-[30%]">
                <a
                    href={link}
                    className="w-[25vh] h-[25vh] rounded-full mx-auto border border-lightPrimary-300 dark:border-darkPrimary-700 overflow-hidden items-center relative"
                >
                    {image}
                </a>
            </div>

            <div className="w-[90%] flex flex-col justify-center items-between m-auto">
                <p className="text-center h-[20%] font-semibold">{title}</p>
                <p className="text-center h-[80%]">{description}</p>
                <GithubButton link={link} />
            </div>
        </div>
    )
}

export default CardCoding