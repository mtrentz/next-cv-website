import Link from 'next/link'
import React from 'react'
import { HiOutlineDocumentDownload } from 'react-icons/hi'

const DownloadCVButton = () => {
    return (
        <div className="ml-4 my-0.5 lg:my-1 items-center">
            <a href="/MATEUS_TRENTZ_CV.pdf" download>
                <div className="flex flex-row flex-nowrap items-center">
                    <HiOutlineDocumentDownload />

                    <span className="ml-1 hover:font-semibold hover:text-lightPrimary-900 hover:dark:text-darkPrimary-50">
                        Download CV
                    </span>
                </div>
            </a>
        </div>


    )
}

export default DownloadCVButton