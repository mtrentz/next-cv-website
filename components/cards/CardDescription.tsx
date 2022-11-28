import React from 'react'

type Props = {
    cardTitle: string
    cardDescription: string
}

const CardDescription = ({ cardTitle, cardDescription }: Props) => {
    return (
        <div className="flex flex-col justify-center align-middle gap-1">
            {/* Title */}
            <p className="text-center font-semibold px-2"> {cardTitle} </p>
            {/* Description */}
            <p className="text-sm text-center px-3 lg:text-base 2xl:text-lg">
                {cardDescription}
            </p>
        </div>
    )
}

export default CardDescription