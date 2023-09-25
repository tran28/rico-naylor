import Head from "next/head";
import Logo from "./Logo";
import { nunito } from '@/public/myfonts'
import SnowfallAnimation from "./SnowfallAnimation";
import { useRef } from "react";

export default function Maintenance({ setMaintenanceMode }) {
    const inputRef = useRef();

    const handleAccess = (e) => {
        e.preventDefault();
        const inputValue = inputRef.current.value;
        if (inputValue === process.env.ADMIN_ACCESS_CODE) {
            setMaintenanceMode(false);
        } else {
            inputRef.current.value = "";
        }
    }

    return (
        <>
            <Head>
                <title>Rico Naylor</title>
                <meta name='description' content='All things real estate with Rico Naylor. Real estate with Rico Naylor podcast.' />
            </Head>
            <main className={`${nunito.variable} font-nunito bg-light text-dark stroke-dark w-full min-h-screen`}>
                <SnowfallAnimation />
                <main className='flex items-center justify-center w-full h-full absolute top-0 left-0 z-10'>
                    <div className='flex flex-col items-center justify-center px-[10vw] py-[15vh] shadow-2xl backdrop-blur-md bg-opacity-40 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] gap-10'>
                        <div className='flex items-center justify-center'>
                            <Logo />
                        </div>
                        <h1 className='!font-extralight !text-2xl text-center xl:!text-2xl md:!text-xl sm:!text-lg'>Psst, something new is coming!</h1>
                        <form onSubmit={handleAccess} className='flex items-center'>
                            <input
                                type="text"
                                ref={inputRef}
                                className='px-4 py-2 border border-black rounded-l-2xl w-32'
                                placeholder='Admin Code'
                            />
                            <button type='submit' className='p-2 bg-black text-white border border-black rounded-r-2xl'>Enter</button>
                        </form>
                    </div>
                </main>
            </main >
        </>
    )
}