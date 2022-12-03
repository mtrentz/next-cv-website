import React from 'react'
import Image from 'next/image';

import CardAnimation from './cards/CardAnimation';
import TextLink from './general/TextLink';

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
            description: <span>Inspired by a <TextLink href="https://www.reddit.com/r/Art/comments/lck88p/441_me_digital_2021/" text="digital art on reddit" />, it&apos;s a very beautiful pyramid scheme that follows your mouse on the screen. You can try it yourself on <TextLink href="https://editor.p5js.org/mtrentz/sketches/nGLS11___" text="p5.js editor" />.</span>,
            image: <Image src={pyramids} alt="Pyramids" fill={true} sizes="14 rem" priority={true} />,
            link: "https://github.com/mtrentz/p5_projects/tree/master/piramides",
        },
        {
            title: "Spinning Cube",
            description: <span>A dark cube spinning in the void of space.</span>,
            image: <Image src={rotate_cube} alt="Spinning Cube" fill={true} sizes="14 rem" />,
            link: "https://github.com/mtrentz/p5_projects/tree/master/rotate_3d_cube",
        },
        {
            title: "Clock Spirograph",
            description: <span>Replicating the animation from a <TextLink href="https://www.reddit.com/r/woahdude/comments/r4uhbk/the_geometry_of_clock_hands/" text="reddit post" />, it works kinda like a spirograph but draws lines between the clock hands every so often, for a very mesmerizing effect!</span>,
            image: <Image src={clock} alt="Clock" fill={true} sizes="14 rem" />,
            link: "https://github.com/mtrentz/p5_projects/tree/master/clock_spirograph"
        },
        {
            title: "Spiraling Circles",
            description: <span>Colorful circles that spawn from the center of the screen and move out in a spiraling pattern.</span>,
            image: <Image src={spirals} alt="Circle Spiraling" fill={true} sizes="14 rem" />,
            link: "https://github.com/mtrentz/p5_projects/tree/master/circle_spiral",
        },
        {
            title: "Stepping Stripes",
            description: <span>Groups of stripes that moves synchronously, stepping towards the next position. Alternating directions at every cycle.</span>,
            image: <Image src={stepping_stripes} alt="Stepping Striples" fill={true} sizes="14 rem" />,
            link: "https://github.com/mtrentz/p5_projects/tree/master/stepping_stripes",
        },
        {
            title: "Pulsing Circles",
            description: <span>A set of circles composed of even smaller circles that expand and contract in a pulsing pattern and change color. </span>,
            image: <Image src={circle_pulse} alt="Pulsing Circles" fill={true} sizes="14 rem" />,
            link: "https://github.com/mtrentz/p5_projects/tree/master/dotted_circle_pulse",
        },
        {
            title: "Tetris",
            description: <span> Not much to say about this one, it&apos;s a tetris game with all the core features made on p5.js. Play it yourself on <TextLink href="https://editor.p5js.org/mtrentz/sketches/MJYBwt9AQ" text="p5.js editor" />.</span>,
            image: <Image src={tetris} alt="tetris" fill={true} sizes="14 rem" />,
            link: "https://github.com/mtrentz/p5_projects/tree/master/tetris",
        },
        {
            title: "Minesweeper",
            description: <span>Even less to say about this one, it&apos;s a very basic implementation of a minesweeper game with all the common features.</span>,
            image: <Image src={minesweeper} alt="minsesweeper" fill={true} sizes="14 rem" />,
            link: "https://github.com/mtrentz/p5_projects/tree/master/minesweeper",
        },
        {
            title: "Orbits",
            description: <span>Groups of spinning circles that gives a pretty cool effect! Try it yourself on <TextLink href="https://editor.p5js.org/mtrentz/sketches/veOB1qfgj" text="p5.js editor" />.</span>,
            image: <Image src={orbits} alt="orbits" fill={true} sizes="14 rem" />,
            link: "https://github.com/mtrentz/p5_projects/tree/master/orbitas",
        },
        {
            title: "Sticks",
            description: <span>Probably one of my first animations, it&apos;s sticks that are created on mouse click and rotate.</span>,
            image: <Image src={sticks} alt="sticks" fill={true} sizes="14 rem" />,
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