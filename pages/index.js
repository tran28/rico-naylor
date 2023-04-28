import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import AnimatedImage from "@/components/AnimatedImage";
import Container from "@/components/Container";
import { HeroContent } from "../content/homeContent"
import { FadeInWhenVisible } from "@/components/ScrollAnimations";
import AnimatedAccordion from "@/components/Accordion";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rico Naylor</title>
        <meta name='description' content='All things real estate with Rico Naylor. Real estate with Rico Naylor podcast.' />
      </Head>
      <main className='flex items-center justify-center w-full min-h-[calc(100vh-140px)]'>
        <Container>
          <Layout className='lg:pt-0'>
            <div className='flex items-center justify-between w-full gap-24 lg:flex-col lg:gap-0'>
              <div className='w-1/2 lg:py-10 sm:w-[90%]'>
                <AnimatedImage src={HeroContent.image} alt='Rico Naylor' className='w-full h-auto rounded-xl shadow-xl' direction='-100'></AnimatedImage>
              </div>
              <div className='w-1/2 flex flex-col items-center self-center gap-6 lg:w-full lg:text-center'>
                <AnimatedText text={HeroContent.heading} className='!text-6xl xl:!text-5xl lg:!text-center lg:!text-5xl md:!text-5xl sm:!text-3xl' />
                {HeroContent.text.map((paragraph, index) => {
                  return (
                    <p key={`${paragraph}-${index}`} className='text-md'>{paragraph}</p>
                  )
                })}
              </div>
            </div>
          </Layout>
        </Container>
      </main>
      <FadeInWhenVisible>
        <main className='flex items-center justify-center w-full bg-secondary_light sm:py-8'>
          <Container>
            <Layout>
              <div className='flex flex-col items-end justify-center w-full gap-12'>
                <AnimatedAccordion />
                <Link href={'/podcast'} className='p-4 bg-light text-purple-700 border-solid border-2 border-purple-700 shadow-[5px_5px_0px_0px_rgba(109,40,217)]' >More at Podcasts</Link>
              </div>
            </Layout>
          </Container>
        </main>
      </FadeInWhenVisible>
    </>
  )
}
