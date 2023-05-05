import { PlayerPlay, ArrowBarRight } from 'tabler-icons-react';
import ReadMoreLess from './ReadMoreLess';

const Episode = () => {
    return (
        <>
            <div className='flex w-full items-center justify-between rounded-2xl border-2 border-[rgba(109,40,217)] shadow-[5px_5px_0px_0px_rgba(109,40,217)] my-20'>
                <div className='grid grid-cols-6'>
                    <div className='flex flex-col items-center justify-center col-span-1 row-span-2 lg:col-span-2 lg:order-3 lg:items-end lg:px-8'>
                        <div className='p-4 rounded-full border-2 border-purple-700 dark:border-purple-500 cursor-pointer'>
                            <PlayerPlay size={48} strokeWidth={2} color='#7e22ce' className='lg:max-h-[24px] lg:max-w-[24px]' />
                        </div>
                    </div>
                    <div className='flex items-center justify-start col-span-5 pt-10 pb-2 pr-10 lg:col-span-6 lg:order-1 lg:pl-10'>
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-lg'>Ep. xx</h3>
                            <h2 className='text-2xl font-semibold text-purple-700 dark:text-purple-500'>Lorem Ipsum</h2>
                            <ReadMoreLess
                                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
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
        </>
    );
};
export default Episode;