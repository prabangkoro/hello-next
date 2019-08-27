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
    <Link href={`/post?title=${props.title}`}>
      <a>
        {props.title}
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
        <PostLink title='Hello Nuxt.js' />
        <PostLink title='Learn Next.js is awesome' />
        <PostLink title='Deploy apps with Zeit' />
      </ul>
    </Layout>
  )
}

export default Blog
