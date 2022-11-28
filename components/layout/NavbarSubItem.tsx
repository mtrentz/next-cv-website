import Link from 'next/link'
import React from 'react'

type Props = {
    title: string
    icon: React.ReactNode
    href: string
}

const NavbarSubItem = ({ title, icon, href }: Props) => {
    return (
        <div className="ml-6 my-0.5 lg:my-1 items-center text-md">
            <Link href={href}>
                <div
                    className="flex flex-row flex-nowrap items-center"
                >
                    {icon}
                    <span className="ml-1 hover:font-semibold hover:text-lightPrimary-900">
                        {title}
                    </span>
                </div>
            </Link>
        </div>
    )
}

export default NavbarSubItem