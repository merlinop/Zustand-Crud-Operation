import Head from 'next/head'
import Blog from '../components/Blog'



export default function Home() {
  return (
    <div className='relative'>
      <Head>
        <title>Simple Blog</title>
        <meta name="description" content="Hand written" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Blog />
      </main>
    </div>
  )
}
