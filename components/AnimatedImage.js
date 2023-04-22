import { motion } from "framer-motion";
import Image from "next/image";

const imageVariants = {
    hidden: (direction) => ({
        opacity: 0,
        x: direction
    }),
    show: {
        opacity: 1,
        x: 0,
        transition: {
            ease: 'easeInOut',
            duration: 1.6
        }
    }
}

const AnimatedImage = ({ src, alt, className, direction }) => {
    return (
        <motion.div
            custom={direction}
            variants={imageVariants}
            initial='hidden'
            animate='show'
        >
            <Image src={src} alt={alt} width="0" height="0" sizes="100vw" priority={true} className={className}></Image>
        </motion.div>
    )
};
export default AnimatedImage;