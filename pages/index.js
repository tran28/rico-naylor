import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import AnimatedImage from "@/components/AnimatedImage";
import Container from "@/components/Container";
import { HeroContent } from "../content/homeContent"

export default function Home() {
  return (
    <>
      <Head>
        <title>Rico Naylor</title>
        <meta name='description' content='All things real estate with Rico Naylor. Real estate with Rico Naylor podcast.' />
      </Head>
      <main className='flex items-center justify-center text-dark w-full min-h-screen'>
        <Container>
          <Layout className='pt-0'>
            <div className='flex items-center justify-between w-full gap-24'>
              <div className='w-1/2'>
                <AnimatedImage src={HeroContent.image} alt='Rico Naylor' className='w-full h-auto rounded-xl shadow-xl'></AnimatedImage>
              </div>
              <div className='w-1/2 flex flex-col items-center self-center gap-6'>
                <AnimatedText text={HeroContent.heading} className='text-6xl' />
                <p className='text-lg'>{HeroContent.text}</p>
              </div>
            </div>
          </Layout>
        </Container>
      </main>
    </>
  )
}
