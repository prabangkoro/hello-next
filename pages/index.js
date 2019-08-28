import Layout from '../components/Layout'
import Link from 'next/link';

const Index = () => {
  return (
    <Layout>
      <p>
        Hello Next.js
      </p>
    </Layout>
  )
}

const PostLink = props => (
  <li>
    <Link href={`/p/[id]`} as={`/p/${props.id}`}>
      <a>
        {props.id}
      </a>
    </Link>
  </li>
)

const Blog = () => {
  return (
    <Layout>
      <h1>
        My Blog
      </h1>
      <ul>
        <PostLink id="hello-nextjs" />
        <PostLink id="learn-nextjs" />
        <PostLink id="deploy-nextjs" />
      </ul>
    </Layout>
  )
}

export default Blog
