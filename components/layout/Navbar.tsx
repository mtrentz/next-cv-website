import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

import { FaBars } from "react-icons/fa";
import {
    AiOutlineCloseSquare,
    AiOutlineUser,
    AiOutlinePlayCircle,
} from "react-icons/ai";
import {
    HiOutlineAcademicCap,
    HiOutlineTerminal,
    HiOutlinePuzzle,
    HiOutlineSparkles,
    HiOutlineCode,
    HiOutlineChartBar,
    HiOutlineCog
} from "react-icons/hi";
import { IoLogoTableau, IoLogoLinkedin } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";

import LogoWebsite from '../LogoWebsite';
import NavbarMainItem from './NavbarMainItem';
import NavbarSubItem from './NavbarSubItem';

import { AboutMeContent, ProjectsContent } from '../../types';
import ThemeToggle from './ThemeToggle';


const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null)

    // Tamanho de uma tela de celular pro tailwind
    const tailwindMdSizeInt = 768

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    }

    // Fecha o sidebar quando clicar fora dele
    useEffect(() => {
        function handleClickOutside(event: any) {
            // Check if screen is smaller than md
            if (window.innerWidth < tailwindMdSizeInt) {
                if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                    setShowSidebar(false)
                }
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
        // Colocando o tailwindMdSizeInt como dependência
        // pra deixar o ESLint feliz
    }, [sidebarRef, tailwindMdSizeInt]);



    return (
        <div ref={sidebarRef}>
            {/* Mobile Menu top bar */}
            <div className="bg-lightSecondary dark:bg-darkPrimary-800 shadow-md h-10 flex justify-between md:hidden items-center px-4 py-2">
                <button onClick={toggleSidebar} >
                    <FaBars />
                </button>
                <span>Mateus Kochhann Trentz</span>
                {/* Small Logo */}
                <div className="flex items-center justify-center h-[15%]">
                    <div className="w-7 h-7 rounded-lg overflow-hidden">
                        <Link href="/">
                            <LogoWebsite />
                        </Link>
                    </div>
                </div>
            </div>

            {/* TODO: Colocar onClick={() => (setShowSidebar(false))} em todos os icones da nav */}

            {/* Sidebar */}
            <nav
                className={`bg-lightSecondary dark:bg-darkPrimary-800 h-screen flex flex-col w-52 lg:w-60 lg:px-1 2xl:px-2 absolute inset-y-0 left-0 transform ${showSidebar ? null : "-translate-x-full"
                    } md:relative md:translate-x-0 transition duration-200 ease-in-out z-50 md:pt-4`}
            >
                <div className="h-full">
                    {/* Button Close for Mobile */}
                    <div className="md:hidden flex justify-end w-full pr-1 pt-1">
                        <button onClick={() => (setShowSidebar(false))}>
                            <AiOutlineCloseSquare className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Logo */}
                    <div className="flex items-center justify-center h-[15%]">
                        <div className="w-24 h-24 rounded-lg overflow-hidden">
                            <Link href="/">
                                <LogoWebsite />
                            </Link>
                        </div>
                    </div>

                    {/* Menu */}
                    <div className="flex flex-col mt-4">
                        {/* Toggling the sidebar on non-md screen does nothing. So it works alright */}
                        <NavbarMainItem
                            title={AboutMeContent.title}
                            icon={<AiOutlineUser />}
                            href={`/?q=${AboutMeContent.experience.slug}`}
                            onClick={() => (setShowSidebar(false))}
                        />
                        <NavbarSubItem
                            title={AboutMeContent.experience.title}
                            icon={<HiOutlineAcademicCap />}
                            href={`/?q=${AboutMeContent.experience.slug}`}
                            onClick={() => (setShowSidebar(false))}
                        />
                        <NavbarSubItem
                            title={AboutMeContent.tech_skills.title}
                            icon={<HiOutlineTerminal />}
                            href={`/?q=${AboutMeContent.tech_skills.slug}`}
                            onClick={() => (setShowSidebar(false))}
                        />
                        <NavbarSubItem
                            title={AboutMeContent.frameworks.title}
                            icon={<HiOutlineCog />}
                            href={`/?q=${AboutMeContent.frameworks.slug}`}
                            onClick={() => (setShowSidebar(false))}
                        />
                        <NavbarSubItem
                            title={AboutMeContent.complementary.title}
                            icon={<HiOutlinePuzzle />}
                            href={`/?q=${AboutMeContent.complementary.slug}`}
                            onClick={() => (setShowSidebar(false))}
                        />

                        <NavbarMainItem
                            title={ProjectsContent.title}
                            icon={<HiOutlineSparkles />}
                            href={`/projects?q=${ProjectsContent.coding.slug}`}
                            onClick={() => (setShowSidebar(false))}
                        />
                        <NavbarSubItem
                            title={ProjectsContent.coding.title}
                            icon={<HiOutlineCode />}
                            href={`/projects?q=${ProjectsContent.coding.slug}`}
                            onClick={() => (setShowSidebar(false))}
                        />
                        <NavbarSubItem
                            title={ProjectsContent.animations.title}
                            icon={<AiOutlinePlayCircle />}
                            href={`/projects?q=${ProjectsContent.animations.slug}`}
                            onClick={() => (setShowSidebar(false))}
                        />
                        <NavbarSubItem
                            title={ProjectsContent.data_vizz.title}
                            icon={<HiOutlineChartBar />}
                            href={`/projects?q=${ProjectsContent.data_vizz.slug}`}
                            onClick={() => (setShowSidebar(false))}
                        />
                    </div>
                    {/* <DownloadCVBtn cv="/MATEUS_TRENTZ_CV.pdf" /> */}
                </div>


                {/* Toggle theme */}
                <ThemeToggle />

                {/* socials */}
                <div className="h-24 flex-grow-0 mb-3">
                    <p className="mb-2 ml-4 font-medium">Find me on</p>
                    <div className="flex flex-row justify-center gap-3 items-center">
                        <a
                            href="https://github.com/mtrentz"
                            target="_blank"
                            rel="noreferrer"
                            title="Link to my GitHub"
                        >
                            <FaGithubSquare className="w-10 h-10 text-lightPrimary-700 dark:text-darkPrimary-200 hover:animate-wiggle" />
                        </a>
                        <a
                            href="https://public.tableau.com/app/profile/mtrentz"
                            target="_blank"
                            rel="noreferrer"
                            title="Link to my Tableau Public"
                        >
                            <IoLogoTableau className="w-9 h-9 bg-lightPrimary-700 text-lightSecondary dark:bg-darkPrimary-200 dark:text-darkSecondary rounded-[4px] p-[2px] hover:animate-wiggle" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mtrentz/"
                            target="_blank"
                            rel="noreferrer"
                            title="Link to my LinkedIn"
                        >
                            <IoLogoLinkedin className="w-10 h-10 text-lightPrimary-700 dark:text-darkPrimary-200 hover:animate-wiggle" />
                        </a>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar