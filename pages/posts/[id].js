import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import Link from 'next/link';

const Post = ({ postData }) => {
    return <div>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <main className="my-10 container px-16">
            <Link href="/">
                <a className="flex flex-row text-blue-800 items-center">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <p className="font-bold ml-2">Back</p>
                </a>
            </Link>
            <div className="flex flex-row items-baseline">
                <h3 className='flex-1 text-3xl font-bold my-7'>{postData.title}</h3>
                <p className='italic text-gray-600'>{postData.date}</p>
            </div>
            <hr />
            <div className="mt-6 w-full md:w-10/12 mx-auto text-md text-justify" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </main>
    </div >
};


export default Post;
export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
};
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
};
