import { getPosts } from '../lib/posts'
import Layout from "../components/layout";
import Link from 'next/link'
import Date from '../components/date'

const IndexPage = (props) => (
  <Layout home>
      <ul>
    {props.posts.map(post => (
      <li key={post.id}>
        <Link href={`/blog/${post.slug}`}>
          <a><img src={post.feature_image} />
          {post.title}</a>
        </Link>
        <Date dateString={post.published_at} />

      </li>
    ))}
  </ul>
  </Layout>
);


export default IndexPage;



export async function getStaticProps(context) {
  const posts = await getPosts()

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts },
    revalidate: 10
  }
}
