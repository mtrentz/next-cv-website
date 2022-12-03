import Link from 'next/link'
import React from 'react'

type Props = {
    title: string
    icon: React.ReactNode
    href: string
    onClick?: () => void
}

const NavbarSubItem = ({ title, icon, href, onClick }: Props) => {
    return (
        <div className="ml-6 my-0.5 lg:my-1 items-center text-md">
            <Link href={href}>
                <button
                    className="flex flex-row flex-nowrap items-center"
                    onClick={onClick}
                >
                    {icon}
                    <span className="ml-1 hover:font-semibold hover:text-lightPrimary-900 hover:dark:text-darkPrimary-50">
                        {title}
                    </span>
                </button>
            </Link>
        </div>
    )
}

export default NavbarSubItem