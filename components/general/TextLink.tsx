import Link from 'next/link'
import React from 'react'

type Props = {
    href: string
    text: string
    openOnCurrentWindow?: boolean
}

const TextLink = ({ href, text, openOnCurrentWindow }: Props) => {
    return (
        <Link
            target={openOnCurrentWindow ? '_self' : '_blank'}
            rel="noreferrer"
            className="underline text-link-600 hover:text-link-800 visited:text-visited-600"
            href={href}>
            {text}
        </Link>
    )
}

export default TextLink