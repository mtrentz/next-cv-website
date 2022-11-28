import React, { useContext } from 'react'
import Navbar from "../layout/Navbar"
import ThemeContext from "../../contexts/ThemeContext"

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {

    const { theme } = useContext(ThemeContext)

    return (
        <div className={`${theme === "dark" ? "dark" : "light"}`}>
            <div className={`bg-lightPrimary-100 dark:bg-darkPrimary-900 md:flex min-h-screen min-w-screen lg:text-lg 2xl:text-xl text-lightPrimary-900 dark:text-darkPrimary-200 font-sans transition-colors duration-300`}>
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default Layout