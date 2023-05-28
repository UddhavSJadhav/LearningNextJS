import { GradientBackgroundCon } from '@/components/AllElements'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Learning NextJS</title>
        <meta name="description" content="Learning next.js and typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GradientBackgroundCon></GradientBackgroundCon>
    </>
  )
}
