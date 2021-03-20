import { getPosts } from "../lib/posts";
import Layout from "../components/layout";
import Link from "next/link";
import Date from "../components/date";

const IndexPage = (props) => (
  <Layout home>
    <ul>
      {props.posts.map((post) => (
        <li key={post.id} className="pb-10 border-b border-gray-300">
          <Link href={`/blog/${post.slug}`}>
            <a>
              <h3 className="text-2xl sm:text-4xl tracking-tighter font-black pt-4 pb-6">
                {post.title}
              </h3>
              <div className="py-4">
                <img src={post.feature_image} />
              </div>
              <p className="text-xl">{post.excerpt}</p>
              <p className="italic text-gray-600 text-lg sm:text-xl second-font">
                <Date dateString={post.published_at} />
              </p>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

export default IndexPage;

export async function getStaticProps(context) {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
    revalidate: 10,
  };
}
