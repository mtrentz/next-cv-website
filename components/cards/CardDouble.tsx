import React from 'react'
import CardDescription from './CardDescription'

type Props = {
    cardTitle: string
    cardDescription: string
    cardImage: JSX.Element
    cardBigImage: JSX.Element
}

const CardDouble = ({ cardTitle, cardDescription, cardImage, cardBigImage }: Props) => {
    return (
        <div className="col-span-1 lg:col-span-2 flex flex-row bg-lightSecondary dark:bg-darkPrimary-800 rounded-lg shadow-md overflow-hidden">
            <div className="rounded-r-xl">
                {/* Image Part */}
                <div className="flex flex-row justify-center my-4">
                    {cardImage}
                </div>

                {/* Text Part */}
                <div className="pb-5">
                    <CardDescription
                        cardTitle={cardTitle}
                        cardDescription={cardDescription}
                    />
                </div>
            </div>
            <div className="relative w-full h-full flex flex-row">
                {/* This is to simmulate a rounded corner of the logo and description part with the image on the bottom of it */}
                <div className="bg-lightSecondary dark:bg-darkPrimary-800 w-2 rounded-r-xl z-50"></div>
                {cardBigImage}
            </div>
        </div>
    )
}

export default CardDouble