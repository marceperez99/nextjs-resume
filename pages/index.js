import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import education from "../content/education.json";
import projects from "../content/projects.json";
import Stack from "../components/Stack";
import PersonalInfo from "../components/PersonalInfo";
import PersonalProjects from "../components/PersonalProjects";
import EducationInfo from "../components/EducationInfo";

export default function Home({}) {
  return (
    <>
      <Head>
        <title>Marcelo Perez</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="md:snap-y md:snap-mandatory h-screen w-screen overflow-scroll">
        <div className="snap-start flex md:w-screen md:h-screen  justify-center">
          <PersonalInfo />
        </div>
        <div className="snap-start flex bg-white md:w-screen md:h-screen ">
          <Stack />
        </div>
        <div className="snap-start flex  md:w-screen md:h-screen justify-center">
          <PersonalProjects />
        </div>
        <div className="snap-start flex md:w-screen md:h-screen">
          <EducationInfo />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
      education,
      projects,
    },
  };
}
