import { useRouter } from "next/router";
import Link from "next/link";
import { bebas_neue } from "@/public/myfonts";


const FooterLink = ({ href, title, className, selectedColor }) => {
    const router = useRouter()
    return (
        <Link href={href} className={`${className} relative py-0.5 group`}>
            {title}
            <span className={`h-[2px] rounded inline-block w-0 ${selectedColor} absolute left-0 bottom-0 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    )
}

const Footer = () => {
    return (
        <footer className={`${bebas_neue.variable} font-bebas w-full px-32 py-8 text-base flex items-center justify-between xl:px-24 lg:px-16 md:flex-col`}>
            <span className='px-1 text-dark/60 dark:text-white/60 md:pb-4'>© 2023 All Rights Reserved</span>

            <div>
                <nav className='flex items-center md:flex-col'>
                    <FooterLink href='/terms' title='Terms of Use' className='mx-4' selectedColor='bg-dark' />
                    <FooterLink href='/privacy' title='Privacy Policy' className='mx-4' selectedColor='bg-dark' />
                </nav>
            </div>
        </footer>
    )
};
export default Footer;