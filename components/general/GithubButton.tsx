import React from 'react'
import { VscGithubInverted } from "react-icons/vsc";

type Props = {
    link: string
}

const GithubButton = ({ link }: Props) => {
    return (
        <a
            href={link}
            className="w-48 h-9 m-auto bg-lightPrimary-200 dark:bg-darkPrimary-700 hover:bg-lightPrimary-100 hover:dark:bg-darkPrimary-600 hover:border rounded-full flex flex-row items-center justify-center mt-4 lg:w-52 lg:h-10 2xl:w-56 2xl:h-11"
        >
            <div className="px-2 font-medium">Code on Github</div>
            <VscGithubInverted />
        </a>
    )
}

export default GithubButton