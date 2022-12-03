import React from 'react'
import GithubButton from '../general/GithubButton'

type Props = {
    title: string
    // description is a jsx element since I want to have colored spans
    description: JSX.Element
    image: JSX.Element
    link: string
}


const CardAnimation = ({ title, description, image, link }: Props) => {
    return (
        <div
            className="w-full flex flex-col px-2 lg:flex-row-reverse"
        >
            {/* Image Part */}
            <div className="flex justify-center py-1 lg:w-1/3">
                <div
                    className="w-56 h-56 rounded-md mx-auto border border-lightPrimary-300 dark:border-darkPrimary-700 overflow-hidden items-center relative"
                >
                    {image}
                </div>
            </div>

            <div className="w-11/12 flex flex-col justify-center items-between m-auto">
                <p className="text-center h-1/5 font-semibold">{title}</p>
                <p className="text-center h-4/5">{description}</p>
                <GithubButton link={link} />
            </div>
        </div>
    )
}

export default CardAnimation