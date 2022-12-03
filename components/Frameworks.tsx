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

const Frameworks = () => {
    return (
        <div className="flex flex-row justify-center align-middle">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-4 gap-2">
                <Card
                    cardImage={
                        <Image
                            src={django}
                            alt="django-logo"
                            sizes="8rem"
                            className="h-32 w-32"
                        />
                    }
                    cardTitle="Django"
                    cardDescription="Sit et est esse officia consequat. Anim quis consequat quis laboris eiusmod dolore excepteur et occaecat cupidatat."
                />
                <Card
                    cardImage={
                        <Image
                            src={react}
                            alt="react-logo"
                            sizes="8rem"
                            className="h-32 w-32"
                        />
                    }
                    cardTitle="React"
                    cardDescription="Sit et est esse officia consequat. Anim quis consequat quis laboris eiusmod dolore excepteur et occaecat cupidatat."
                />
                <Card
                    cardImage={
                        <Image
                            src={nextjs}
                            alt="nextJS-logo"
                            sizes="8rem"
                            className="h-32 w-32 dark:invert"
                        />
                    }
                    cardTitle="NextJS"
                    cardDescription="Sit et est esse officia consequat. Anim quis consequat quis laboris eiusmod dolore excepteur et occaecat cupidatat."
                />
                <Card
                    cardImage={
                        <Image
                            src={tailwind}
                            alt="tailwind-logo"
                            sizes="8rem"
                            className="h-32 w-32"
                        />
                    }
                    cardTitle="TailwindCSS"
                    cardDescription="Sit et est esse officia consequat. Anim quis consequat quis laboris eiusmod dolore excepteur et occaecat cupidatat."
                />
                <Card
                    cardImage={
                        <Image
                            src={cypress}
                            alt="cypress-logo"
                            sizes="8rem"
                            className="h-32 w-32"
                        />
                    }
                    cardTitle="Cypress"
                    cardDescription="Sit et est esse officia consequat. Anim quis consequat quis laboris eiusmod dolore excepteur et occaecat cupidatat."
                />
                <Card
                    cardImage={
                        <Image
                            src={pandas}
                            alt="pandas-logo"
                            sizes="8rem"
                            className="h-32 w-24"
                        />
                    }
                    cardTitle="pandas"
                    cardDescription="Sit et est esse officia consequat. Anim quis consequat quis laboris eiusmod dolore excepteur et occaecat cupidatat."
                />
                <Card
                    cardImage={
                        <Image
                            src={p5js}
                            alt="p5js-logo"
                            sizes="8rem"
                            className="h-32 w-32 rounded-lg"
                        />
                    }
                    cardTitle="p5.js"
                    cardDescription="Sit et est esse officia consequat. Anim quis consequat quis laboris eiusmod dolore excepteur et occaecat cupidatat."
                />
                <Card
                    cardImage={
                        <Image
                            src={pytorch}
                            alt="pytorch-logo"
                            sizes="8rem"
                            className="h-32 w-32 rounded-lg"
                        />
                    }
                    cardTitle="Pytorch"
                    cardDescription="Sit et est esse officia consequat. Anim quis consequat quis laboris eiusmod dolore excepteur et occaecat cupidatat."
                />
                <Card
                    cardImage={
                        <Image
                            src={keras}
                            alt="keras-logo"
                            sizes="8rem"
                            className="h-32 w-32 rounded-lg"
                        />
                    }
                    cardTitle="Keras"
                    cardDescription="Sit et est esse officia consequat. Anim quis consequat quis laboris eiusmod dolore excepteur et occaecat cupidatat."
                />
            </div>
        </div>
    )
}

export default Frameworks