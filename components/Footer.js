import { useRouter } from "next/router";
import Layout from "./Layout";
import Link from "next/link";
import { cormorant } from "@/public/myfonts";


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
        <footer className={`${cormorant.variable} font-cormorant w-full px-32 py-8 text-base flex items-center justify-between border border-t-dark`}>
            <span>© 2023 All Rights Reserved.</span>
            <div>
                <nav>
                    <FooterLink href='/terms' title='Terms of Use' className='mr-4' selectedColor='bg-black' />
                    <FooterLink href='/privacy' title='Privacy Policy' className='mx-4' selectedColor='bg-black' />
                </nav>
            </div>
        </footer>
    )
};
export default Footer;