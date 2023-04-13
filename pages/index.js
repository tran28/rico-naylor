import Head from "next/head";
import Image from "next/image";
import ProfilePic from "../public/rico-naylor-pfp.png"
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Container from "@/components/Container";

export default function Home() {
  const heroHeading = 'Navigating the world of real estate.'
  const heroText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  return (
    <>
      <Head>
        <title>Rico Naylor</title>
        <meta name='description' content='All things real estate with Rico Naylor.' />
      </Head>
      <main className='flex items-center justify-center text-dark w-full min-h-screen'>
        <Container>
          <Layout className='pt-0'>
            <div className='flex items-center justify-between w-full gap-24'>
              <div className='w-1/2'>
                <Image src={ProfilePic} alt='Rico Naylor' className='w-full h-auto rounded-xl shadow-xl'></Image>
              </div>
              <div className='w-1/2 flex flex-col items-center self-center gap-6'>
                <AnimatedText text={heroHeading} className='text-6xl' />
                <p className='text-lg'>{heroText}</p>
              </div>
            </div>
          </Layout>
        </Container>
      </main>
    </>
  )
}
