import { BrandApplePodcast, X, ArrowBarRight } from 'tabler-icons-react';
import ReadMoreLess from './ReadMoreLess';
import AudioPlayer from './AudioPlayer';
import { useEffect, useState } from 'react';

const Episode = ({ index, playingEpisodeIndex, setPlayingEpisodeIndex, title, episode, date, url, text }) => {
    const [isShown, setIsShown] = useState(false)
    const [playing, setPlaying] = useState(false)
    const handleClick = (e) => {
        if (playing) {
            setPlayingEpisodeIndex(null);
        } else {
            setPlayingEpisodeIndex(index);
        }
    }

    useEffect(() => {
        setIsShown (index === playingEpisodeIndex)
        setPlaying(index === playingEpisodeIndex);
    }, [playingEpisodeIndex]);

    return (
        <>
            <div className='flex w-full items-center justify-between rounded-2xl border-2 border-[rgba(109,40,217)] shadow-[5px_5px_0px_0px_rgba(109,40,217)] my-20'>
                <div className='grid grid-cols-6'>
                    <div className='flex flex-col items-center justify-center col-span-1 row-span-2 lg:col-span-2 lg:order-3 lg:items-end lg:px-8'>
                        <div className='p-4 rounded-full border-2 border-purple-700 dark:border-purple-500 cursor-pointer' onClick={handleClick}>
                            {playing ?
                                <X size={48} strokeWidth={2} className=' stroke-purple-700 dark:stroke-purple-500 lg:max-h-[24px] lg:max-w-[24px]' /> :
                                <BrandApplePodcast size={48} strokeWidth={2} className='stroke-purple-700 dark:stroke-purple-500 lg:max-h-[24px] lg:max-w-[24px]' />}
                        </div>
                    </div>
                    <div className='flex items-center justify-start col-span-5 pt-10 pb-2 pr-10 lg:col-span-6 lg:order-1 lg:pl-10'>
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-lg'>{`Ep. ${episode}`}</h3>
                            <h2 className='text-2xl font-semibold text-purple-700 dark:text-purple-500'>{title}</h2>
                            <ReadMoreLess
                                text={text}
                                limit={160}
                            />
                        </div>
                    </div>
                    <div className='flex items-center justify-end col-span-5 pb-10 pt-2 px-10 lg:col-span-4 lg:order-2 lg:justify-start lg:pt-10'>
                        <div className='flex border-2 border-purple-700 dark:border-purple-500 px-4 py-2 rounded gap-2 cursor-pointer'>
                            <button className='text-purple-700 dark:text-purple-500'>Explore</button>
                            <ArrowBarRight size={24} strokeWidth={1.2} color='#7e22ce' />
                        </div>
                    </div>
                </div>
            </div>
            <AudioPlayer
                isShown={isShown}
                src={url}
                playing={playing}
                setPlaying={setPlaying}
                setPlayingEpisode={setPlayingEpisodeIndex}
            />
        </>
    );
};
export default Episode;