import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { bebas_neue } from "@/public/myfonts";
import { BrandLinkedin, Mail, Moon, Sun } from "tabler-icons-react";
import { motion, useCycle } from "framer-motion";
import UseThemeSwitcher from "./hooks/useThemeSwitcher";

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

const sideVariants = {
    closed: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: -1
        }
    },
    open: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: 1
        }
    }
};

const itemVariants = {
    closed: {
        x: -100,
        opacity: 0
    },
    open: {
        x: 0,
        opacity: 1,
        transition: {
            ease: 'easeInOut',
            duration: 0.4
        }

    }
};

const CustomLink = ({ href, title, className, selectedColor }) => {
    const router = useRouter()
    return (
        <Link
            href={href}
            className={`${className} relative py-0.5 group`}
        >
            {title}
            <span className={`h-[3px] rounded inline-block w-0 ${selectedColor} absolute left-0 bottom-0 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink = ({ href, title, className, selectedColor, variants, onClick }) => {
    const router = useRouter()
    return (
        <motion.div variants={variants}>
            <Link
                href={href}
                className={`${className} relative py-0.5 group`}
                onClick={onClick}
            >
                {title}
                <span className={`h-[3px] rounded inline-block w-0 ${selectedColor} absolute left-0 bottom-0 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
            </Link>
        </motion.div>
    )
}

const NavBar = () => {
    const [isOpen, cycleOpen] = useCycle(false, true)
    const [mode, setMode] = UseThemeSwitcher()

    return (
        <header className={`${bebas_neue.variable} font-bebas w-full px-32 py-12 text-xl flex items-center justify-between relative xl:px-24 lg:px-20 md:px-16 sm:px-12`}>
            <button className='hidden flex-col justify-center items-start z-40 lg:flex' onClick={cycleOpen}>
                <span className={`bg-dark block h-0.5 transition-all duration-300 ease-out dark:bg-light rounded-sm ${isOpen ? 'rotate-45 translate-y-1 w-8' : '-translate-y-1 w-4'}`}></span>
                <span className={`bg-dark block h-0.5 transition-all duration-300 ease-out dark:bg-light rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100 w-6'}`}></span>
                <span className={`bg-dark block h-0.5 transition-all duration-300 ease-out dark:bg-light rounded-sm ${isOpen ? '-rotate-45 -translate-y-1 w-8' : 'translate-y-1 w-8'}`}></span>
            </button>

            <nav className='flex items-center justify-between w-full lg:hidden'>
                <div>
                    {NavMenu.items.map((item, index) => {
                        return (
                            <CustomLink key={`${item}-${index}`} href={item.href} title={item.title} className='mx-4' selectedColor={item.selectedColor} />
                        )
                    })}
                </div>

                <nav className='grid grid-cols-3 items-center'>
                    <motion.a
                        href='https://www.linkedin.com/in/riconaylor/'
                        target={'_blank'}
                        whileHover={{ y: -2, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className='col-span-1 justify-self-end'
                    >
                        <BrandLinkedin
                            size={38}
                            strokeWidth={1.5}
                            color={'#0077B5'}
                        />
                    </motion.a>
                    <motion.a
                        href='mailto:enquiries@riconaylor.com'
                        target={'_blank'}
                        whileHover={{ y: -2, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className='col-span-1 justify-self-center'
                    >
                        <Mail
                            size={38}
                            strokeWidth={1.5}
                            color={'#C71610'}
                        />
                    </motion.a>
                    <motion.div className='grid grid-cols-2 cursor-pointer rounded-3xl col-span-1'
                        intial={{ backgroundColor: mode === 'dark' ? '#fed7aa' : '#ddd6fe' }}
                        animate={{ backgroundColor: mode === 'dark' ? '#ddd6fe' : '#fed7aa', transition: { ease: 'easeInOut', duration: 0.6 } }}
                        onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                    >
                        {mode === 'dark' && (
                            <>
                                <div className='col-span-1 order-1'></div>
                                <motion.div initial={{ opacity: 0.8, x: -20 }} animate={{ opacity: 1, x: 0, transition: { ease: 'easeInOut', duration: 0.6 } }} className={`bg-purple-100 border-[1px] border-purple-700 col-span-1 order-2 rounded-full p-1 m-1`}>
                                    <Moon
                                        size={16}
                                        strokeWidth={1.5}
                                        color={'#7E22CE'}
                                    />
                                </motion.div>
                            </>
                        )}
                        {mode === 'light' && (
                            <motion.div initial={{ opacity: 0.8, x: 20 }} animate={{ opacity: 1, x: 0, transition: { ease: 'easeInOut', duration: 0.6 } }} className={`bg-orange-100 border-[1px] border-orange-700 col-span-1 order-1 rounded-full p-1 m-1`}>
                                <Sun
                                    size={16}
                                    strokeWidth={1.5}
                                    color={'#C2410C'}
                                />
                            </motion.div>
                        )}
                    </motion.div>
                </nav >
            </nav>

            {isOpen ?
                <motion.aside>
                    <motion.nav
                        initial="closed"
                        animate="open"
                        variants={sideVariants}
                        className='z-30 min-w-[100vw] min-h-[100vh] flex flex-col justify-center items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary_light dark:bg-secondary_dark shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'>
                        <motion.div className='flex flex-col items-center justify-around h-[24vh]'>
                            {NavMenu.items.map((item, index) => {
                                return (
                                    <CustomMobileLink
                                        key={`${item}-${index}`}
                                        href={item.href}
                                        title={item.title}
                                        className='text-2xl'
                                        selectedColor={item.selectedColor}
                                        variants={itemVariants}
                                        onClick={cycleOpen}
                                    />
                                )
                            })}
                        </motion.div>

                        <nav className='grid grid-cols-2 items-center'>
                            <div className='flex col-span-1 my-10'>
                                <motion.a
                                    href='https://www.linkedin.com/in/riconaylor/'
                                    target={'_blank'}
                                    whileHover={{ y: -2, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className='mx-1'
                                >
                                    <BrandLinkedin
                                        size={38}
                                        strokeWidth={1.5}
                                        color={'#0077B5'}
                                    />
                                </motion.a>
                                <motion.a
                                    href='mailto:enquiries@riconaylor.com'
                                    target={'_blank'}
                                    whileHover={{ y: -2, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className='mx-1'
                                >
                                    <Mail
                                        size={38}
                                        strokeWidth={1.5}
                                        color={'#C71610'}
                                    />
                                </motion.a>
                            </div>
                            <div className='flex col-span-1 my-10'>
                                <motion.div className='grid grid-cols-2 cursor-pointer rounded-3xl mx-2'
                                    intial={{ backgroundColor: mode === 'dark' ? '#fed7aa' : '#ddd6fe' }}
                                    animate={{ backgroundColor: mode === 'dark' ? '#ddd6fe' : '#fed7aa', transition: { ease: 'easeInOut', duration: 0.6 } }}
                                    onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                                >
                                    {mode === 'dark' && (
                                        <>
                                            <div className='col-span-1 order-1'></div>
                                            <motion.div initial={{ opacity: 0.8, x: -20 }} animate={{ opacity: 1, x: 0, transition: { ease: 'easeInOut', duration: 0.6 } }} className={`bg-purple-100 border-[1px] border-purple-700 col-span-1 order-2 rounded-full p-1 m-1`}>
                                                <Moon
                                                    size={16}
                                                    strokeWidth={1.5}
                                                    color={'#7E22CE'}
                                                />
                                            </motion.div>
                                        </>
                                    )}
                                    {mode === 'light' && (
                                        <motion.div initial={{ opacity: 0.8, x: 20 }} animate={{ opacity: 1, x: 0, transition: { ease: 'easeInOut', duration: 0.6 } }} className={`bg-orange-100 border-[1px] border-orange-700 col-span-1 order-1 rounded-full p-1 m-1`}>
                                            <Sun
                                                size={16}
                                                strokeWidth={1.5}
                                                color={'#C2410C'}
                                            />
                                        </motion.div>
                                    )}
                                </motion.div>
                            </div>
                        </nav >
                    </motion.nav>
                </motion.aside>
                :
                null}

            <div className='absolute left-[50%] top-6 translate-x-[-50%]'>
                <Logo />
            </div>
        </header >
    )
};
export default NavBar;