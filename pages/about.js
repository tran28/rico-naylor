import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import { bebas_neue } from "@/public/myfonts";
import { AboutContent } from "@/content/aboutContent";
import Container from "@/components/Container";
import Image from "next/image";
import Experience from "@/components/Experience";
import AnimatedImage from "@/components/AnimatedImage";
import Education from "@/components/Education";

export default function About() {
    return (
        <>
            <Head>
                <title>About Rico Naylor</title>
                <meta name='description' content='Rico Naylor about information.' />
            </Head>
            <main className='flex w-full flex-col justify-center items-center'>
                <Container>
                    <Layout>
                        <div className='grid w-full grid-cols-8 gap-24 items-center lg:gap-12 sm:gap-8'>
                            <div className='col-span-5 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                                <h1 className={`${bebas_neue.variable} font-bebas mb-4 text-6xl font-bold uppercase sm:text-5xl`}>Your <span className='text-purple-700'>Real Estate Partner</span></h1>
                                {AboutContent.text.map((paragraph, index) => {
                                    return (
                                        <p key={`${paragraph}-${index}`} className='font-medium my-2'>{paragraph}</p>
                                    )
                                })
                                }
                            </div>
                            <div className='col-span-3 relative h-max xl:col-span-4 md:order-1 md:col-span-8 md:px-24 sm:px-8 sm:pb-8'>
                                <AnimatedImage src={AboutContent.image} alt='Rico Naylor' className='w-full h-auto rounded-full shadow-xl' direction='100'></AnimatedImage>
                            </div>
                        </div>
                        <Experience />
                    </Layout>
                </Container>
            </main>
            <main className='flex w-full flex-col justify-center items-center bg-secondary_light'>
                <Container>
                    <Layout>

                    </Layout>
                </Container>
            </main>
            <main className='flex w-full flex-col justify-center items-center'>
                <Container>
                    <Layout>
                        <Education />
                    </Layout>
                </Container>
            </main>
        </>
    )
}