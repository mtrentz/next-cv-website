import React from 'react'
import Image from 'next/image';

import Card from './cards/Card'
import CardDouble from './cards/CardDouble';

// Images
import python from "../public/tech_images/python.png"
import golang from "../public/tech_images/golang.png"
import javascript from "../public/tech_images/javascript.png"
import tableau from "../public/tech_images/tableau.png"
import tableauDashboard from "../public/tech_images/tableau_dashboard.png"
import mysql from "../public/tech_images/mysql.png"
import typescript from "../public/tech_images/typescript.png"
import git from "../public/tech_images/git.png"
import docker from "../public/tech_images/docker.png"

const TechSkills = () => {
    // TODO: nginx
    // TODO: github actions


    return (
        <div className="flex flex-row justify-center align-middle">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-4 gap-2">
                <Card
                    cardImage={
                        <Image
                            src={python}
                            alt="python-logo"
                            sizes="9rem"
                            className="h-32 w-32"
                        />
                    }
                    cardTitle="Python"
                    cardDescription="I've been programming in Python for years, it's the language I'm the most comfortable at."
                />
                <Card
                    cardImage={
                        <Image
                            src={golang}
                            alt="golang-logo"
                            sizes="9rem"
                            className="h-32 w-24"
                        />
                    }
                    cardTitle="Golang"
                    cardDescription="Started using Go more than a year ago, mostly as a hobby but also for work."
                />
                <Card
                    cardImage={
                        <Image
                            src={typescript}
                            alt="mypescript-logo"
                            sizes="9rem"
                            className="h-32 w-32 rounded-xl"
                        />
                    }
                    cardTitle="Typescript"
                    cardDescription="Typescript is my go-to language for web development."
                />
                <CardDouble
                    cardImage={
                        <Image
                            src={tableau}
                            alt="tableau-logo"
                            sizes="9rem"
                            className="h-32 w-32"
                        />
                    }
                    cardBigImage={
                        <Image
                            src={tableauDashboard}
                            alt="tableau-dashboard"
                            sizes="13rem"
                            fill={true}
                            className="dark:invert dark:-hue-rotate-180"
                        />
                    }
                    cardTitle="Tableau"
                    cardDescription="I love making data visualizations with Tableau!"
                />
                <Card
                    cardImage={
                        <Image
                            src={mysql}
                            alt="mysql-logo"
                            sizes="9rem"
                            className="h-36 w-48"
                        />
                    }
                    cardTitle="SQL"
                    cardDescription="I've been working daily with SQL for a few years now."
                />
                <Card
                    cardImage={
                        <Image
                            src={javascript}
                            alt="javascript-logo"
                            sizes="9rem"
                            className="h-32 w-32 rounded-xl"
                        />
                    }
                    cardTitle="Javascript"
                    cardDescription="Learned Javascript for web development and animations on p5.js."
                />
                <Card
                    cardImage={
                        <Image
                            src={docker}
                            alt="docker-logo"
                            sizes="9rem"
                            className="h-32 w-48"
                        />
                    }
                    cardTitle="Docker"
                    cardDescription="Almost all my projects are containerized with Docker."
                />
                <Card
                    cardImage={
                        <Image
                            src={git}
                            alt="git-logo"
                            sizes="9rem"
                            className="h-32 w-32"
                        />
                    }
                    cardTitle="Git"
                    cardDescription="I use Git for version control and to collaborate with others."
                />
            </div>
        </div>
    )
}

export default TechSkills