import React from 'react'
import Image from 'next/image';

import Card from './cards/Card'

// Images
import cypress from "../public/framework_imgs/cypress.png"
import django from "../public/framework_imgs/django.png"
import nextjs from "../public/framework_imgs/nextjs.png"
import react from "../public/framework_imgs/react.png"
import p5js from "../public/framework_imgs/p5js.png"
import pandas from "../public/framework_imgs/pandas.png"
import tailwind from "../public/framework_imgs/tailwind.png"
import keras from "../public/framework_imgs/keras.png"
import pytorch from "../public/framework_imgs/pytorch.png"

interface FrameworkCardContent {
    title: string
    description: string
    image: JSX.Element
}

type FrameworkContent = FrameworkCardContent[]


const Frameworks = () => {

    let content: FrameworkContent = [
        {
            title: "Django",
            description: "This is the framework I'm most comfortable with. I've used it for many projects, both professionally and as a hobby.",
            image: <Image
                src={django}
                alt="django-logo"
                sizes="8rem"
                className="h-32 w-32"
            />,
        },
        {
            title: "React",
            description: "Basically all my frontends are made with React. It's the library I like the most for web development.",
            image: <Image
                src={react}
                alt="react-logo"
                sizes="8rem"
                className="h-32 w-32"
            />
        },
        {
            title: "Next.js",
            description: "I've used Next.js for serious full-stack applications professionally.",
            image: < Image
                src={nextjs}
                alt="nextJS-logo"
                sizes="8rem"
                className="h-32 w-32 dark:invert"
            />
        },
        {
            title: "TailwindCSS",
            description: "Tailwind is by far my favorite way of styling web pages. It's what made me enjoy frontend development.",
            image: <Image
                src={tailwind}
                alt="tailwind-logo"
                sizes="8rem"
                className="h-32 w-32"
            />
        },
        {
            title: "Cypress",
            description: "I've used Cypress for testing my web applications. It's a great tool and incredibly easy to use.",
            image: <Image
                src={cypress}
                alt="cypress-logo"
                sizes="8rem"
                className="h-32 w-32"
            />
        },
        {
            title: "pandas",
            description: "Pandas is my go-to for dealing with data in Python. I've been using it for many years now.",
            image: <Image
                src={pandas}
                alt="pandas-logo"
                sizes="8rem"
                className="h-32 w-24"
            />
        },
        {
            title: "p5.js",
            description: "Making animations with p5.js is definitely the most fun I've had programming. Loved every minute of it.",
            image: <Image
                src={p5js}
                alt="p5js-logo"
                sizes="8rem"
                className="h-32 w-32 rounded-lg"
            />
        },
        {
            title: "Keras",
            description: "Keras makes it very easy to build quick ML models. I've used it professionally for a few projects.",
            image: <Image
                src={keras}
                alt="keras-logo"
                sizes="8rem"
                className="h-32 w-32 rounded-lg"
            />
        },
        {
            title: "Pytorch",
            description: "I've learned Pytorch mostly to learn more in depth about ML. Used only for hobby projects.",
            image: <Image
                src={pytorch}
                alt="pytorch-logo"
                sizes="8rem"
                className="h-32 w-32 rounded-lg"
            />
        },
    ]


    return (
        <div className="flex flex-row justify-center align-middle">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-4 gap-2">
                {/* Loop over content */}
                {content.map((item, index) => (
                    <Card
                        key={index}
                        cardTitle={item.title}
                        cardDescription={item.description}
                        cardImage={item.image}
                    />

                ))}
            </div>
        </div>
    )
}

export default Frameworks