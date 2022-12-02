import React from 'react'
import Link from 'next/link'

interface Content {
    title: string
    url: string
    selected: boolean
}

export type ContentProps = {
    content: Content[]
}

const ContentNavbar = ({ content }: ContentProps) => {
    return (
        <nav className="h-10 lg:ml-12 lg:my-4 flex flex-row justify-center lg:justify-start gap-5">
            {/* Loop over content and create a "pill" anchor to navigate */}
            {content.map((item) => (
                <div key={item.title} className="group flex flex-col justify-center">
                    <p className="text-lightPrimary-100 dark:text-darkPrimary-900 group-hover:text-lightAccent-800 dark:group-hover:text-darkAccent-500 pb-1 text-xs text-center transition duration-500 ease-in-out md:text-sm lg:text-base 2xl:text-lg">
                        {item.title}
                    </p>
                    <Link
                        href={item.url}
                        className={`${item.selected ? "bg-lightAccent-800 dark:bg-darkAccent-500" : "bg-lightPrimary-300 dark:bg-darkPrimary-600"} h-2 w-16 md:w-20 lg:w-24 rounded-full`}
                    ></Link>
                </div>
            ))}

        </nav>
    )
}

export default ContentNavbar