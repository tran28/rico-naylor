import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { cormorant } from "@/public/myfonts";
import { BrandLinkedin, Mail } from "tabler-icons-react";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className, selectedColor }) => {
    const router = useRouter()
    return (
        <Link href={href} className={`${className} relative py-0.5 group`}>
            {title}
            <span className={`h-[3px] rounded inline-block w-0 ${selectedColor} absolute left-0 bottom-0 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {
    return (
        <header className={`${cormorant.variable} font-cormorant w-full px-32 py-8 font-semibold text-xl flex items-center justify-between`}>
            <nav>
                <CustomLink href='/' title='Home' className='mr-4' selectedColor='bg-violet-700' />
                <CustomLink href='/podcast' title='Podcast' className='mx-4' selectedColor='bg-red-700' />
                <CustomLink href='/about' title='About' className='mx-4' selectedColor='bg-green-700' />
                <CustomLink href='/contact' title='Contact' className='ml-4' selectedColor='bg-orange-700' />
            </nav>

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>

            <nav className='flex items-center justify-center flex-wrap'>
                <motion.a
                    href='https://www.linkedin.com/in/riconaylor/'
                    target={'_blank'}
                    whileHover={{ y: -2, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className='w-10 mr-3'>
                    <BrandLinkedin
                        className='w-full h-auto'
                        size={48}
                        strokeWidth={1.5}
                        color={'#0077B5'}
                    />
                </motion.a>
                <motion.a
                    href='mailto:enquiries@riconaylor.com'
                    target={'_blank'}
                    whileHover={{ y: -2, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className='w-10 mr-3'>
                    <Mail
                        className='w-full h-auto'
                        size={48}
                        strokeWidth={1.5}
                        color={'#C71610'}
                    />
                </motion.a>
            </nav >
        </header >
    )
};
export default NavBar;