import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Change Me</title>
        <meta name="description" content="Next.js starter template with typescript & tailwindCSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="justify-center font-extrabold text-center text-7xl mx-10 px-5">
        <h1>
          Front-end Starter Template with Next.js ,Typescript ,tailwindCSS!
        </h1>
        </div>
        

        <p className="justify-center font-extrabold text-center text-2xl ">
          Get started by editing{' '}
          <code>pages/index.tsx</code>
        </p>

        
      </main>

    </div>
  )
}

export default Home
