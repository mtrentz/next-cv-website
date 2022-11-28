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

const TechSkills = () => {
    return (
        <div className="flex flex-row justify-center align-middle">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-4 gap-2">
                <Card
                    cardImage={
                        <Image
                            src={python}
                            alt="python-logo"
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
                            className="h-32 w-24"
                        />
                    }
                    cardTitle="Golang"
                    cardDescription="Started using Go more than a year ago, mostly as a hobby but also for work."
                />
                <Card
                    cardImage={
                        <Image
                            src={javascript}
                            alt="javascript-logo"
                            className="h-32 w-56"
                        />
                    }
                    cardTitle="Javascript"
                    cardDescription="Learned Javascript for web development and animations on p5.js."
                />
                {/* <div className="col-span-2"> */}

                <CardDouble
                    cardImage={
                        <Image
                            src={tableau}
                            alt="tableau-logo"
                            className="h-32 w-32"
                        />
                    }
                    cardBigImage={
                        // Tentar meter um fill na img, tem que colocar o pai como absolute ou relative, algo assim
                        <Image
                            src={tableauDashboard}
                            alt="tableau-dashboard"
                            fill={true}
                            // TODO: Tirar e nao tirar
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
                            className="h-36 w-48"
                        />
                    }
                    cardTitle="SQL"
                    cardDescription="I've been working daily with SQL for a few years now."
                />
            </div>


            {/* Extra */}
            {/* Docker */}
            {/* Linux */}
            {/* Git */}

        </div>
    )
}

export default TechSkills