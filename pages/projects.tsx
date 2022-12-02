import { useRouter } from 'next/router';
import React from 'react'

import ContentNavbar, { ContentProps } from '../components/layout/ContentNavbar';
import PageTitle from '../components/layout/PageTitle';
import { ProjectsContent } from '../types';
import Coding from '../components/Coding';
import DataVizzes from '../components/DataVizzes';

const Projects = () => {
    // Get query ("q") from url
    const router = useRouter();
    const { q } = router.query;

    // Content for the navbar
    const content: ContentProps = {
        content: [
            {
                title: ProjectsContent.coding.title,
                url: `/projects?q=${ProjectsContent.coding.slug}`,
                selected: q === ProjectsContent.coding.slug || q === undefined,
            },
            {
                title: ProjectsContent.data_vizz.title,
                url: `/projects?q=${ProjectsContent.data_vizz.slug}`,
                selected: q === ProjectsContent.data_vizz.slug,
            },
            {
                title: ProjectsContent.animations.title,
                url: `/projects?q=${ProjectsContent.animations.slug}`,
                selected: q === ProjectsContent.animations.slug,
            },
        ]
    }

    const selectedTitle = content.content.find((item) => item.selected)?.title;

    return (
        <>
            <main className="w-screen h-screen overflow-y-auto overscroll-y-auto pb-2">

                {/* Title */}
                <PageTitle title={selectedTitle || ProjectsContent.title} />

                {/* Navbar */}
                <ContentNavbar content={content.content} />

                {/* O experience vai ter que ser o default qnd nao tiver query */}
                {(q === ProjectsContent.coding.slug || q === undefined) && <Coding />}
                {q === ProjectsContent.data_vizz.slug && <DataVizzes />}

                {/* {(q === AboutMeContent.experience.slug || q === undefined) && <Experience />}
                {q === AboutMeContent.tech_skills.slug && <TechSkills />}
                {q === AboutMeContent.frameworks.slug && <Frameworks />}
                {q === AboutMeContent.complementary.slug && <Complementary />} */}



                {/* <TechSkills />
        <Complementary /> */}

            </main>
        </>
    )
}

export default Projects