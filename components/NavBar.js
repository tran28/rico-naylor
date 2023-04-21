import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { bebas_neue } from "@/public/myfonts";
import { BrandLinkedin, Mail } from "tabler-icons-react";
import { motion } from "framer-motion";

const NavMenu = {
    items: [
        {
            title: 'Home',
            href: '/',
            selectedColor: 'bg-violet-600'
        },
        {
            title: 'Podcast',
            href: '/podcast',
            selectedColor: 'bg-red-600'
        },
        {
            title: 'About',
            href: '/about',
            selectedColor: 'bg-green-600'
        },
        {
            title: 'Contact',
            href: '/contact',
            selectedColor: 'bg-orange-600'
        }
    ]
}

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
        <header className={`${bebas_neue.variable} font-bebas w-full px-32 py-12 text-xl flex items-center justify-between`}>
            <nav>
                {NavMenu.items.map((item, index) => {
                    return (
                        <CustomLink key={`${item}-${index}`} href={item.href} title={item.title} className='mx-4' selectedColor={item.selectedColor} />
                    )
                })}
            </nav>
            <div className='absolute left-[50%] top-6 translate-x-[-50%]'>
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