import Container from "@/components/Container";
import Episode from "@/components/Episode";
import Layout from "@/components/Layout";
import Podcatcher from "@/components/Podcatcher";
import { PodcastContent } from "@/content/podcastContent";
import Head from "next/head";
import { useState } from "react";


export default function Podcast() {
    const [playingEpisodeIndex, setPlayingEpisodeIndex] = useState(null);

    return (
        <>
            <Head>
                <title>Podcast | Rico Naylor</title>
                <meta name='description' content='Real Estate with Rico - podcast hosted by Rico Naylor.' />
            </Head>
            <main className='flex items-center justify-center w-full min-h-[calc(100vh-140px)]'>
                <Container>
                    <Layout className='pt-10'>
                        <div className='flex items-center flex-col justify-between w-full gap-24 lg:flex-col'>
                            <div className='grid grid-cols-2 gap-20'>
                                <div className='flex flex-col items-start justify-center gap-10 col-span-2 lg:gap-5'>
                                    <div className='flex flex-col gap-2'>
                                        <h2 className='text-2xl italic'>New Episode</h2>
                                        <h2 className='text-4xl font-semibold'>Real Estate with Rico</h2>
                                    </div>
                                    <h3 className='text-lg'>A podcast about...</h3>
                                    <Podcatcher />
                                </div>
                            </div>
                        </div>
                    </Layout>
                </Container>
            </main>
            <main className='flex items-center justify-center w-full bg-secondary_light dark:bg-secondary_dark'>
                <Container>
                    <Layout>
                        {PodcastContent.map((podcast, index) => {
                            return (
                                <Episode
                                    key={`${podcast}-${index}`}
                                    index={index}
                                    playingEpisodeIndex={playingEpisodeIndex}
                                    setPlayingEpisodeIndex={setPlayingEpisodeIndex}
                                    title={podcast.title}
                                    episode={podcast.episode}
                                    date={podcast.date}
                                    url={podcast.url}
                                />
                            )
                        })}
                    </Layout>
                </Container>
            </main>
        </>
    )
}