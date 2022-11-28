import React from 'react'
import CardDescription from './CardDescription'

type Props = {
    cardTitle: string
    cardDescription: string
    cardImage: JSX.Element
}

const Card = ({ cardTitle, cardDescription, cardImage }: Props) => {
    return (
        <div className="bg-lightSecondary dark:bg-darkPrimary-800 max-w-sm rounded-lg shadow-md">
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
    )
}

export default Card