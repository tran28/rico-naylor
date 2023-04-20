import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import { bebas_neue } from "@/public/myfonts";
import { AboutContent } from "@/content/aboutContent";
import Container from "@/components/Container";
import Image from "next/image";
import Experience from "@/components/Experience";

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
                        <div className='grid w-full grid-cols-8 gap-24'>
                            <div className='col-span-5 flex flex-col items-start justify-start'>
                                <h1 className={`${bebas_neue.variable} font-bebas mb-4 text-6xl font-bold uppercase text-dark`}>Your <span className='text-purple-700'>Real Estate Partner</span></h1>
                                {AboutContent.text.map((paragraph, index) => {
                                    return (
                                        <p key={`${paragraph}-${index}`} className='font-medium my-2'>{paragraph}</p>
                                    )
                                })
                                }
                            </div>
                            <div className='col-span-3 relative h-max'>
                                <Image src={AboutContent.image} alt='Rico Naylor' width="0" height="0" sizes="100vw" className='w-full h-auto rounded-full shadow-md shadow-purple-700/60'></Image>
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
                        <Experience />
                    </Layout>
                </Container>
            </main>
        </>
    )
}