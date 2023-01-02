import React from 'react'

const DownloadCVButton = () => {
    return (
        <a
            href="/MATEUS_TRENTZ_CV.pdf"
            download
            className="text-center text-lightSecondary bg-lightAccent-900 hover:bg-lightAccent-800 font-medium rounded-lg text-base mx-2 mb-2 py-2 dark:bg-darkAccent-800 dark:hover:bg-darkAccent-700 dark:border-darkAccent-700"
        >
            Download my CV
        </a>


    )
}

export default DownloadCVButton