import React from 'react'

// Images
import anp from '../public/dashboard_imgs/anp.png'
import pe from '../public/dashboard_imgs/pe.png'
import balanca from '../public/dashboard_imgs/balanca.png'
import recuperadores from '../public/dashboard_imgs/recuperadores.png'
import spotify from '../public/dashboard_imgs/spotify.png'
import Image from 'next/image'
import TableauButton from './general/TableauButton'

interface DataVizzCardContent {
    title: string
    description: string
    image: JSX.Element
    link: string
}

type DataVizzContent = DataVizzCardContent[]

const DataVizzes = () => {

    const content: DataVizzContent = [
        {
            title: "Plastic Recyclers",
            description:
                "Location and inauguration date of all plastic recyclers in Brazil.",
            image: <Image src={recuperadores} alt="Tableau Dashboard" fill={true} sizes="50vw" priority={true} />,
            link: "https://public.tableau.com/views/RecicladoresdePlsticonoBrasil/EstabelecimentosRecuperadores2?:language=en-US&:display_count=n&:origin=viz_share_link",
        },
        {
            title: "My Spotify",
            description: "Analysis of my spotify listening habits. Top artists and genres.",
            image: <Image src={spotify} alt="Tableau Dashboard" fill={true} sizes="50vw" />,
            link: "https://public.tableau.com/views/MySpotifyAnalysis/Home?:language=en-US&:display_count=n&:origin=viz_share_link",
        },
        {
            title: "Polyethylene in S.A.",
            description: "General data of production, consumption and exports of Polyethylene in South America.",
            image: <Image src={pe} alt="Tableau Dashboard" fill={true} sizes="50vw" />,
            link: "https://public.tableau.com/views/PolyethyleneinSouthAmerica/Capacity?:language=en-US&:display_count=n&:origin=viz_share_link",
        },
        {
            title: "Energy Production",
            description: "General data of petroleum and its derivates produced in Brazil.",
            image: <Image src={anp} alt="Tableau Dashboard" fill={true} sizes="50vw" />,
            link: "https://public.tableau.com/views/DadosBrasilEnergia/ProjeoVendadeGasolinaCporestado?:language=en-US&:display_count=n&:origin=viz_share_link",
        },
        {
            title: "Plastic Data",
            description: "Brazil's import and export data of the most common plastics.",
            image: <Image src={balanca} alt="Tableau Dashboard" fill={true} sizes="50vw" />,
            link: "https://public.tableau.com/views/BalanaComercialBrasileiraresinas/BalanaComercial?:language=en-US&:display_count=n&:origin=viz_share_link",
        },
    ];

    return (
        <div className="w-full py-5 items-center flex flex-col justify-start gap-4">
            {content.map((vizData, id) => (
                // Card
                <div
                    key={id}
                    className="bg-lightSecondary dark:bg-darkPrimary-800 w-11/12 h-64 md:h-60 lg:h-56 rounded-xl flex flex-row overflow-hidden shadow-lg"
                >
                    {/* Text Part */}
                    <div className=" w-1/2 p-5 overflow-auto py-2 flex flex-col object-center justify-center">
                        {/* Title */}
                        <div className="h-1/3 flex items-center justify-center">
                            <p className="font-semibold text-center"> {vizData.title} </p>
                        </div>
                        {/* Description */}
                        <div className="flex flex-col justify-center mt-1">
                            <p className="text-center">{vizData.description}</p>
                            {/* Button to Tableau Public */}
                            <TableauButton link={vizData.link} />
                        </div>
                    </div>

                    {/* Image Part */}
                    <a
                        href={vizData.link}
                        className="w-1/2 -space-x-1 z-10 flex flex-row"
                    >
                        <div className="h-full w-full flex flex-grow opacity-80 relative">
                            {vizData.image}
                        </div>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default DataVizzes