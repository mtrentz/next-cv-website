import React from 'react'
import Image from 'next/image';

import Card from './cards/Card'
import CardDouble from './cards/CardDouble';

import dtu from "../public/complementary_imgs/dtu.png"
import sduPhoto from "../public/complementary_imgs/sdu_pic.png"
import sdu from "../public/complementary_imgs/sdu.png"
import unibio from "../public/complementary_imgs/unibio.png"

const Complementary = () => {
    return (
        <div className="flex flex-row justify-center align-middle">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-4 gap-2">
                <Card
                    cardImage={
                        <Image
                            src={unibio}
                            alt="unibio-logo"
                            className="h-36 w-36"
                        />
                    }
                    cardTitle="Unibio - Denmark"
                    cardDescription="Five months full-time internship at a chemical plant."
                />
                <CardDouble
                    cardImage={
                        <Image
                            src={sdu}
                            alt="sdu-logo"
                            className="h-32 w-56"
                        />
                    }
                    cardBigImage={
                        <Image
                            src={sduPhoto}
                            alt="sdu-photo"
                            fill={true}
                            className="object-cover opacity-80"
                        />
                    }
                    cardTitle="Syddansk Universitet"
                    cardDescription="Two semesters in Denmark studying Chemical Engineering."
                />
                <Card
                    cardImage={
                        <Image
                            src={dtu}
                            alt="dtu-logo"
                            className="h-40 w-40"
                        />
                    }
                    cardTitle="TU Dortmund"
                    cardDescription="Three months summer course in Germany studying Chemical Engineering."
                />

                {/* TODO: Udemy + Alura? */}
            </div>
        </div>
    )
}

export default Complementary