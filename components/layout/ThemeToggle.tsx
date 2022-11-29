import React, { useContext } from 'react'

import { BsMoonStars, BsSun } from 'react-icons/bs'
import ThemeContext from '../../contexts/ThemeContext'

const ThemeToggle = () => {

    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <button className="ml-4 my-0.5 lg:my-1 items-center" onClick={toggleTheme}>
            <div className="flex flex-row flex-nowrap items-center">
                {theme === 'dark' ? <BsSun /> : <BsMoonStars />}
                <span className="ml-1 hover:font-semibold hover:text-lightPrimary-900 hover:dark:text-darkPrimary-50">
                    Alterar tema
                </span>
            </div>
        </button>
    )
}

export default ThemeToggle