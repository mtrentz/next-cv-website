import { useRouter } from 'next/router';

import { AboutMeContent } from '../types';

import ContentNavbar, { ContentProps } from '../components/layout/ContentNavbar';
import Complementary from '../components/Complementary';
import TechSkills from '../components/TechSkills';
import PageTitle from '../components/layout/PageTitle';
import Frameworks from '../components/Frameworks';
import Experience from '../components/Experience';

export default function Home() {

  // Get query ("q") from url
  const router = useRouter();
  const { q } = router.query;

  // Content for the navbar
  const content: ContentProps = {
    content: [
      {
        title: AboutMeContent.experience.title,
        url: `/?q=${AboutMeContent.experience.slug}`,
        selected: q === AboutMeContent.experience.slug || q === undefined,
      },
      {
        title: AboutMeContent.tech_skills.title,
        url: `/?q=${AboutMeContent.tech_skills.slug}`,
        selected: q === AboutMeContent.tech_skills.slug,
      },
      {
        title: AboutMeContent.frameworks.title,
        url: `/?q=${AboutMeContent.frameworks.slug}`,
        selected: q === AboutMeContent.frameworks.slug,
      },
      {
        title: AboutMeContent.complementary.title,
        url: `/?q=${AboutMeContent.complementary.slug}`,
        selected: q === AboutMeContent.complementary.slug,
      }
    ]
  }

  const selectedTitle = content.content.find((item) => item.selected)?.title;

  return (
    <>
      <main className="w-screen h-screen overflow-y-auto overscroll-y-auto pb-2">

        {/* Title */}
        <PageTitle title={selectedTitle || AboutMeContent.title} />

        {/* Navbar */}
        <ContentNavbar content={content.content} />

        {/* O experience vai ter que ser o default qnd nao tiver query */}
        {(q === AboutMeContent.experience.slug || q === undefined) && <Experience />}

        {q === AboutMeContent.tech_skills.slug && <TechSkills />}
        {q === AboutMeContent.frameworks.slug && <Frameworks />}
        {q === AboutMeContent.complementary.slug && <Complementary />}

      </main>
    </>
  )
}
