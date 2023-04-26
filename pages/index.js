import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import AnimatedImage from "@/components/AnimatedImage";
import Container from "@/components/Container";
import { HeroContent } from "../content/homeContent"
import { FadeInWhenVisible } from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rico Naylor</title>
        <meta name='description' content='All things real estate with Rico Naylor. Real estate with Rico Naylor podcast.' />
      </Head>
      <main className='flex items-center justify-center w-full min-h-[calc(100vh-140px)]'>
        <Container>
          <Layout>
            <div className='flex items-center justify-between w-full gap-24'>
              <div className='w-1/2'>
                <AnimatedImage src={HeroContent.image} alt='Rico Naylor' className='w-full h-auto rounded-xl shadow-xl' direction='-100'></AnimatedImage>
              </div>
              <div className='w-1/2 flex flex-col items-center self-center gap-6'>
                <AnimatedText text={HeroContent.heading} className='text-6xl' />
                <p className='text-lg'>{HeroContent.text}</p>
              </div>
            </div>
          </Layout>
        </Container>
      </main>
      <FadeInWhenVisible>
        <main className='flex items-center justify-center w-full min-h-[calc(100vh-100px)] bg-secondary_light'>
          <Container>
            <Layout>
              <div className='flex items-center justify-between w-full gap-24'>
                <div className='w-1/3 flex flex-col items-center self-center gap-6'>
                  <AnimatedText text='Episode 1' className='text-4xl' />
                  <p className='text-lg'>{HeroContent.text}</p>
                </div>
                <div className='w-1/3 flex flex-col items-center self-center gap-6'>
                  <AnimatedText text='Episode 2' className='text-4xl' />
                  <p className='text-lg'>{HeroContent.text}</p>
                </div>
                <div className='w-1/3 flex flex-col items-center self-center gap-6'>
                  <AnimatedText text='Coming Soon' className='text-4xl' />
                  <p className='text-lg'>{HeroContent.text}</p>
                </div>
              </div>
            </Layout>
          </Container>
        </main>
      </FadeInWhenVisible>
    </>
  )
}
