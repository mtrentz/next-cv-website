import React from 'react'

type Props = {
    title: string
}

const PageTitle = ({ title }: Props) => {
    return (
        <div className="h-10 mt-4 lg:ml-10 lg:mt-10 flex flex-col justify-center items-center">
            <h1 className="h-fit text-xl md:text-2xl lg:text-3xl font-semibold"> {title} </h1>
        </div>
    )
}

export default PageTitle