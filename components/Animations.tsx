import React from 'react'
import Image from 'next/image';

import CardAnimation from './cards/CardAnimation';

// Gifs
import spirals from "../public/animation_gifs/spirals.gif"
import rotate_cube from "../public/animation_gifs/rotate_cube.gif"
import pyramids from "../public/animation_gifs/pyramids.gif"
import circle_pulse from "../public/animation_gifs/circle_pulse.gif"
import clock from "../public/animation_gifs/clock.gif"
import minesweeper from "../public/animation_gifs/minesweeper.gif"
import orbits from "../public/animation_gifs/orbits.gif"
import stepping_stripes from "../public/animation_gifs/stepping_stripes.gif"
import sticks from "../public/animation_gifs/sticks.gif"
import tetris from "../public/animation_gifs/tetris.gif"

interface AnimationCardContent {
    title: string
    description: JSX.Element
    image: JSX.Element
    link: string
}

type AnimationContent = AnimationCardContent[]

const Animations = () => {

    let content: AnimationContent = [
        {
            title: "Mouse-following Pyramids",
            description: <span>Inspired by a digital art on reddit, it&apos;s a very beautiful pyramid scheme that follows your mouse on the screen.</span>,
            image: <Image src={pyramids} alt="Pyramids" layout="fill" />,
            link: "https://github.com/mtrentz/p5_projects/tree/master/piramides",
        },
        {
            title: "Rotating Cube",
            description: <span>Consectetur dolor do minim reprehenderit sunt reprehenderit ipsum ea amet culpa do et. Nisi ex dolore cillum ex. Nostrud esse fugiat do amet ex quis cupidatat aliquip. Laboris magna deserunt nulla quis nostrud incididunt proident te</span>,
            image: <Image src={rotate_cube} alt="Rotate Cube" layout="fill" />,
            link: "https://github.com/mtrentz/p5_projects/tree/master/rotate_3d_cube",
        },
        {
            title: "Clock Spirograph",
            description: <span>Replicating the animation from a reddit post, it works kinda like a spirograph but draws lines between the clock hands every so often, for a very mesmerizing effect!</span>,
            image: <Image src={clock} alt="Clock" layout="fill" />,
            link: "https://github.com/mtrentz/p5_projects/tree/master/clock_spirograph"
        },
        {
            title: "Spiraling Circles",
            description: <span>Consectetur dolor do minim reprehenderit sunt reprehenderit ipsum ea amet culpa do et. Nisi ex dolore cillum ex. Nostrud esse fugiat do amet ex quis cupidatat aliquip. Laboris magna deserunt nulla quis nostrud incididunt proident te</span>,
            image: <Image src={spirals} alt="Circle Spiraling" layout="fill" />,
            link: "https://github.com/mtrentz/p5_projects/tree/master/circle_spiral",
        },
        {
            title: "Stepping Stripes",
            description: <span>Consectetur dolor do minim reprehenderit sunt reprehenderit ipsum ea amet culpa do et. Nisi ex dolore cillum ex. Nostrud esse fugiat do amet ex quis cupidatat aliquip. Laboris magna deserunt nulla quis nostrud incididunt proident te</span>,
            image: <Image src={stepping_stripes} alt="Stepping Striples" layout="fill" />,
            link: "https://github.com/mtrentz/p5_projects/tree/master/stepping_stripes",
        },
        {
            title: "Pulsing Circles",
            description: <span>Consectetur dolor do minim reprehenderit sunt reprehenderit ipsum ea amet culpa do et. Nisi ex dolore cillum ex. Nostrud esse fugiat do amet ex quis cupidatat aliquip. Laboris magna deserunt nulla quis nostrud incididunt proident te</span>,
            image: <Image src={circle_pulse} alt="Pulsing Circles" layout="fill" />,
            link: "https://github.com/mtrentz/p5_projects/tree/master/dotted_circle_pulse",
        },
        {
            title: "Tetris",
            description: <span>Consectetur dolor do minim reprehenderit sunt reprehenderit ipsum ea amet culpa do et. Nisi ex dolore cillum ex. Nostrud esse fugiat do amet ex quis cupidatat aliquip. Laboris magna deserunt nulla quis nostrud incididunt proident te</span>,
            image: <Image src={tetris} alt="tetris" layout="fill" />,
            link: "https://github.com/mtrentz/p5_projects/tree/master/tetris",
        },
        {
            title: "Minesweeper",
            description: <span>Consectetur dolor do minim reprehenderit sunt reprehenderit ipsum ea amet culpa do et. Nisi ex dolore cillum ex. Nostrud esse fugiat do amet ex quis cupidatat aliquip. Laboris magna deserunt nulla quis nostrud incididunt proident te</span>,
            image: <Image src={minesweeper} alt="minsesweeper" layout="fill" />,
            link: "https://github.com/mtrentz/p5_projects/tree/master/minesweeper",
        },
        {
            title: "Orbits",
            description: <span>Consectetur dolor do minim reprehenderit sunt reprehenderit ipsum ea amet culpa do et. Nisi ex dolore cillum ex. Nostrud esse fugiat do amet ex quis cupidatat aliquip. Laboris magna deserunt nulla quis nostrud incididunt proident te</span>,
            image: <Image src={orbits} alt="orbits" layout="fill" />,
            link: "https://github.com/mtrentz/p5_projects/tree/master/orbitas",
        },
        {
            title: "Sticks",
            description: <span>Consectetur dolor do minim reprehenderit sunt reprehenderit ipsum ea amet culpa do et. Nisi ex dolore cillum ex. Nostrud esse fugiat do amet ex quis cupidatat aliquip. Laboris magna deserunt nulla quis nostrud incididunt proident te</span>,
            image: <Image src={sticks} alt="sticks" layout="fill" />,
            link: "https://github.com/mtrentz/p5_projects/tree/master/sticks",
        },
    ]

    return (
        <div className="py-4 flex flex-col items-center justify-center gap-2">
            <div className="bg-lightSecondary dark:bg-darkPrimary-800 w-11/12 rounded-lg py-5 shadow-md px-2">
                {/* Loop over content */}
                {content.map((item, index) => {
                    return (
                        <div key={index}>
                            <CardAnimation
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                link={item.link}
                            />
                            {/* If index is not last, return also a separator */}
                            {index !== content.length - 1 ?
                                <div className="h-5 flex flex-col justify-center items-center">
                                    <div className="bg-lightPrimary-300 dark:bg-darkPrimary-700 w-11/12 h-px"></div>
                                </div>
                                : null}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Animations