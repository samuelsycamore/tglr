// pages/posts/[slug].js
import Layout from "../../components/layout";
import Date from "../../components/date";
import { getSinglePost, getPosts } from "../../lib/posts";

// PostPage page component
const PostPage = (props) => {
  // Render post title and content in the page from props
  return (
    <Layout>
      <div>
        <h1 className="text-3xl sm:text-5xl tracking-tighter font-black py-4 text-center">
          {props.post.title}
        </h1>
        <p className="text-center italic text-gray-600 text-lg sm:text-xl second-font">
          <Date dateString={props.post.published_at} />
        </p>
        <div
          className="blogPost"
          dangerouslySetInnerHTML={{ __html: props.post.html }}
        />
      </div>
    </Layout>
  );
};

export default PostPage;

export async function getStaticPaths() {
  const posts = await getPosts();

  // Get the paths we want to create based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: false };
}

// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API
export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
    revalidate: 10,
  };
}
