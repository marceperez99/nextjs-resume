import Head from "next/head";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import TimeLine from "../components/timeline";
import education from "../content/education.json";
import projects from "../content/projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home({ allPostsData, education, projects }) {
  console.log(projects);
  return (
    <div className=" container mx-auto h-screen px-4">
      <Head>
        <title>Marcelo Perez</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="md:max-w-6xl md:m-auto content-center">

        <h1 className="flow-root text-4xl  text-center pt-8 font-bold">
          Marcelo Perez
        </h1>
        <p className="flow-root italic text-center pb-8">
          Junior Full-Stack Developer
        </p>
        <img
          className="flow-root mx-auto w-5/12 mb-8 md:w-1/6"
          src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Blue03&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light"
        />
        <p className="mx-auto text-justify md:w-4/6  md:text-center text-gray-700">
          22 year old Software Engineer Student based on Paraguay. Tech enthusiast
          trying to keep up with the industry. Currently working as a Full-Stack
          Developer, focusing on Hybrid Mobile Development with React Native
        </p>

        <div className="w-10/12 md:w-1/4 mx-auto pt-4">

          <a href="mailto:mnperez99@gmail.com" className='flex text-gray-900 hover:text-blue-900'>
            <FontAwesomeIcon className='mr-3' icon={faEnvelope} />
          mnperez99@gmail.com
        </a>
          <a href="https://www.linkedin.com/in/marceloperez99" className='flex text-gray-900 hover:text-blue-900'>
            <FontAwesomeIcon className='mr-3' icon={faLinkedin} />
          LinkedIn
        </a>
          <a className='flex text-gray-900 hover:text-blue-900'>
            <FontAwesomeIcon className='mr-3' icon={faGithub} />
          Github
        </a>
        </div>
        <hr className="mx-10 my-5" />
        <p className="text-5xl my-10">Education</p>
        <div className="flex">
          <div className="hidden md:block">
            <img width="200" height="200" src="../public/images/education.svg" />
          </div>
          <div className="flex-1 p-5">
            <TimeLine
              leftTimeLine
              list={education.map((item) => ({
                title: item.study,
                subTitle: item.school,
                time: item.period,
              }))}
            />
          </div>
        </div>
        <hr className="m-10" />
        <p className="text-5xl my-10 text-left md:text-right">Projects</p>
        <div className="flex">
          <div className="flex-1 p-5">
            <TimeLine
              rightTimeline
              list={projects.map((item) => ({
                title: item.name,
                subTitle: item.description,
              }))}
            />
          </div>
          <div className="hidden md:block">
            <img
              className=""
              width="200"
              height="200"
              src="../public/images/projects.svg"
            />
          </div>
        </div>
        <hr className="m-10" />
        <p className="text-center text-3xl">My Blog</p>
        <div className="grid grid-cols-1 gap-5 mt-7">
          {allPostsData.map(({ id, title, date }) => (
            <Link key={id} href={`/posts/${id}`}>
              <div
                className="flex flex-row p-5 rounded-md shadow-md border hover:bg-gray-100 "
              >
                <p className=" flex-1 text-lg font-bold justify-center">{title}</p>
                <div className="flex content-center justify-center ">
                  <p className="text-right text-sm italic">{date}</p>
                </div>
              </div>
            </Link>

          ))}
        </div>
      </main>
      <footer>
        <p className="text-gray-600 text-center pb-5 pt-10">
          This site was generated with Next.JS.
        Checkout the source code at <a href='#' className="text-blue-800 font-bold">Github</a></p>
      </footer>
    </div>
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
