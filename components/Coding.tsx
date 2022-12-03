import React from 'react'
import Image from 'next/image'

import CardCoding from './cards/CardCoding'
import { TechColored as tech } from './general/TechColoring'

// Images
import chess from '../public/coding_imgs/chess.png'
import tetris from '../public/coding_imgs/tetris.png'
import p5 from '../public/coding_imgs/p5.png'
import bolsa from '../public/coding_imgs/bolsa.png'
import react from '../public/coding_imgs/react.png'
import gov from '../public/coding_imgs/gov.png'
import imgur from '../public/coding_imgs/imgur.png'


interface CodingCardContent {
    title: string
    description: JSX.Element
    image: JSX.Element
    link: string
}

type CodingContent = CodingCardContent[]

const Coding = () => {

    const content: CodingContent = [
        {
            title: "Chess Image Recognizer",
            description: <span>Project that detects a chess board from a screenshot and lets you continue playing the match on Lichess. Coded on {tech.python} with the machine learning model made on {tech.pytorch}, web app built with {tech.django} and distributed with {tech.docker}.</span>,
            link: "https://github.com/mtrentz/Chess-Recognizer-App",
            image: <Image src={chess} alt="Chessboard" fill={true} sizes="14 rem" />,
        },
        {
            title: "Plain Text Tetris",
            description: <span>Website to play Tetris with plain text, using only ASCII characters. Built with {tech.react}, all the logic was coded in {tech.javascript}. Try the game live on <a target="_blank" className="underline text-link-600 hover:text-link-800 visited:text-visited-600" rel="noreferrer" href="https://tetris.mtrentz.com.br">this website</a>.</span>,
            link: "https://github.com/mtrentz/Plain-Text-Tetris",
            image: <Image src={tetris} alt="Tetris" fill={true} sizes="14 rem" />,
        },
        {
            title: "Animations with p5.js",
            description: <span>I&apos;ve made quite a few interactive animations with p5.js, which is a {tech.javascript} library for creative coding.</span>,
            link: "https://github.com/mtrentz/p5_projects",
            image: <Image src={p5} alt="Tetris" fill={true} sizes="14 rem" />,
        },
        {
            title: "Stocks Porftolio Analysis",
            description: <span>One of my first coding projects. Portfolio value tracker using public APIs that generates graphs of value progression, sends emails weekly about earnings. Coded on {tech.python}, mostly using {tech.pandas} and {tech.matplotlib}.</span>,
            link: "https://github.com/mtrentz/Bolsa",
            image: <Image src={bolsa} alt="Tetris" fill={true} sizes="14 rem" />,
        },
        {
            title: "This Website",
            description: <span>Curriculum website built with {tech.react}, {tech.nextjs} and {tech.tailwind} for styling. Deployed with {tech.docker}.</span>,
            link: "https://github.com/mtrentz/Bolsa",
            image: <Image src={react} alt="Tetris" fill={true} sizes="14 rem" />,
        },
        {
            title: "Imgur Text Scraper",
            description: <span>A imgur random image scraper that also detects the text in the image. Built with both {tech.python} and {tech.golang}, using a library called {tech.easyocr} for text detection. Uses {tech.fastapi} and was deployed with {tech.docker}.</span>,
            link: "https://github.com/mtrentz/Imgur-Text-Scraper",
            image: <Image src={imgur} alt="Tetris" fill={true} sizes="14 rem" />,
        },
        {
            title: "Brazillian Companies Federal Revenue Data",
            description: <span>Program that downloads, cleans and imports the federal revenue registration data for all companies in Brazil to a MySQL database in a Docker container. Built with {tech.golang}, working with {tech.docker}.</span>,
            link: "https://github.com/mtrentz/dados-cnpj",
            image: <Image src={gov} alt="Tetris" fill={true} sizes="14 rem" />,
        },
    ]



    return (
        <div className="py-4 flex flex-col items-center justify-center gap-2">
            <div className="bg-lightSecondary dark:bg-darkPrimary-800 w-11/12 rounded-lg py-5 shadow-md px-2">
                {/* Loop over content */}
                {content.map((item, index) => {
                    return (
                        <div key={index}>
                            <CardCoding
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                link={item.link}
                                // It goes from right to left, alternating
                                imageOnLeft={index % 2 === 0 ? true : false}
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

export default Coding