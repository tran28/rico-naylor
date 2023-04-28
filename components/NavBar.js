import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { bebas_neue } from "@/public/myfonts";
import { BrandLinkedin, Mail } from "tabler-icons-react";
import { motion } from "framer-motion";
import { useState } from "react";

const NavMenu = {
    items: [
        {
            title: 'Home',
            href: '/',
            selectedColor: 'bg-purple-700'
        },
        {
            title: 'Podcast',
            href: '/podcast',
            selectedColor: 'bg-purple-700'
        },
        {
            title: 'About',
            href: '/about',
            selectedColor: 'bg-purple-700'
        },
        {
            title: 'Contact',
            href: '/contact',
            selectedColor: 'bg-purple-700'
        }
    ]
}

const navVariants = {
    hidden: {
        opacity: 0,
        x: '-50%',
        y: '-50%',
        scale: 0
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            ease: 'easeInOut',
            duration: 0.4
        }
    }
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

const CustomMobileLink = ({ href, title, className, selectedColor, toggle }) => {
    const router = useRouter()
    const handleMobileClick = () => {
        toggle()
    }

    return (
        <Link href={href} className={`${className} relative py-0.5 group`} onClick={handleMobileClick}>
            {title}
            <span className={`h-[3px] rounded inline-block w-0 ${selectedColor} absolute left-0 bottom-0 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className={`${bebas_neue.variable} font-bebas w-full px-32 py-16 text-xl flex items-center justify-between relative xl:px-24 lg:px-20 md:px-16 sm:px-12`}>
            <button className='hidden flex-col justify-center items-start lg:flex' onClick={handleClick}>
                <span className={`bg-dark block h-0.5 transition-all duration-300 ease-out rounded-sm ${isOpen ? 'rotate-45 translate-y-1 w-8' : '-translate-y-1 w-4'}`}></span>
                <span className={`bg-dark block h-0.5 transition-all duration-300 ease-out rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100 w-6'}`}></span>
                <span className={`bg-dark block h-0.5 transition-all duration-300 ease-out rounded-sm ${isOpen ? '-rotate-45 -translate-y-1 w-8' : 'translate-y-1 w-8'}`}></span>
            </button>

            <nav className='flex items-center justify-between w-full lg:hidden'>
                <div>
                    {NavMenu.items.map((item, index) => {
                        return (
                            <CustomLink key={`${item}-${index}`} href={item.href} title={item.title} className='mx-4' selectedColor={item.selectedColor} />
                        )
                    })}
                </div>

                <nav className='flex items-center justify-center'>
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
            </nav>

            {isOpen ?
                <motion.nav
                    variants={navVariants}
                    initial='hidden'
                    animate='show'
                    className='z-30 min-w-[70vw] min-h-[50vh] flex flex-col justify-center items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary_light shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'>
                    <div className='flex flex-col items-center my-10'>
                        {NavMenu.items.map((item, index) => {
                            return (
                                <CustomMobileLink key={`${item}-${index}`} toggle={handleClick} href={item.href} title={item.title} className='mx-4 my-2 text-2xl' selectedColor={item.selectedColor} />
                            )
                        })}
                    </div>

                    <nav className='flex items-center justify-center'>
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
                </motion.nav> :
                null}

            <div className='absolute left-[50%] top-6 translate-x-[-50%]'>
                <Logo />
            </div>
        </header >
    )
};
export default NavBar;