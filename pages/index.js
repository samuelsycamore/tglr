import { getPosts } from '../lib/posts'
import Link from 'next/link';

const IndexPage = (props) => (
  <ul>
    {props.posts.map(post => (
      <li key={post.id}>
        <Link href={`/${post.slug}`}>
          <a>
          <img src={post.feature_image} />
          {post.title}</a>
        </Link>
      </li>
    ))}
  </ul>
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
    props: { posts }
  }
}
