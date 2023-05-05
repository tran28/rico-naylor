import { BrandApple, BrandSpotify } from 'tabler-icons-react';

const Podcatcher = () => {
    return (
        <>
            <div className='flex gap-10 md:gap-2'>
                <div className='flex border-2 border-[#852dc4] p-2 cursor-pointer rounded-2xl shadow-lg shadow-[#852dc4]/10'>
                    <div>
                        <BrandApple size={64} strokeWidth={1.2} color='#852dc4' className='md:max-h-[52px] md:max-w-[52px]' />
                    </div>
                    <div className='flex flex-col justify-end py-1 px-2'>
                        <p className='text-sm'>Listen on</p>
                        <p className='text-xl text-[#852dc4] font-semibold md:text-lg'>Podcasts</p>
                    </div>
                </div>
                <div className='flex border-2 border-[#1bb954] p-2 cursor-pointer rounded-2xl shadow-lg shadow-[#1bb954]/10'>
                    <div>
                        <BrandSpotify size={64} strokeWidth={1.2} color='#1bb954' className='md:max-h-[52px] md:max-w-[52px]' />
                    </div>
                    <div className='flex flex-col justify-end py-1 px-2'>
                        <p className='text-sm'>Listen on</p>
                        <p className='text-xl text-[#1bb954] font-semibold md:text-lg'>Spotify</p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Podcatcher;