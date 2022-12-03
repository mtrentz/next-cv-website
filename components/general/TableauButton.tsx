import React from 'react'
import { IoLogoTableau } from "react-icons/io5";

type Props = {
    link: string
}

const TableauButton = ({ link }: Props) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="w-32 h-9 m-auto mb-2 bg-lightPrimary-200 dark:bg-darkPrimary-700 hover:bg-lightPrimary-100 hover:dark:bg-darkPrimary-600 hover:border rounded-full flex flex-row items-center justify-center mt-4 lg:w-52 lg:h-10 2xl:w-56 2xl:h-11"
        >
            <IoLogoTableau className="w-5 h-5" />
            <div className="px-2 font-medium">Tableau</div>
        </a>
    )
}

export default TableauButton