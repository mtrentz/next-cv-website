import React from 'react'
import Navbar from "../layout/Navbar"

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className="dark bg-lightPrimary-100 dark:bg-darkPrimary-900 md:flex min-h-screen min-w-screen lg:text-lg 2xl:text-xl text-lightPrimary-900 dark:text-darkPrimary-100 font-sans">
            <Navbar />
            {children}
        </div>
    )
}

export default Layout