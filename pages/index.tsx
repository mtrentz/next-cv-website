import Head from 'next/head';
import { useRouter } from 'next/router';

import { AboutMeContent } from '../types';

import ContentNavbar, { ContentProps } from '../components/layout/ContentNavbar';
import Complementary from '../components/Complementary';
import TechSkills from '../components/TechSkills';
import PageTitle from '../components/layout/PageTitle';

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
        selected: q === AboutMeContent.experience.slug,
      },
      {
        title: AboutMeContent.tech_skills.title,
        url: `/?q=${AboutMeContent.tech_skills.slug}`,
        selected: q === AboutMeContent.tech_skills.slug,
      },
      {
        title: AboutMeContent.complementary.title,
        url: `/?q=${AboutMeContent.complementary.slug}`,
        selected: q === AboutMeContent.complementary.slug,
      }
    ]
  }

  return (
    <>
      <Head>
        <title>Mateus K Trentz</title>
      </Head>

      <main className="w-screen">

        {/* Title */}
        <PageTitle title={AboutMeContent.title} />

        {/* Navbar */}
        <ContentNavbar content={content.content} />

        {/* O experience vai ter que ser o default qnd nao tiver query */}
        {q === AboutMeContent.tech_skills.slug && <TechSkills />}
        {q === AboutMeContent.complementary.slug && <Complementary />}



        {/* <TechSkills />
        <Complementary /> */}

      </main>
    </>
  )
}
