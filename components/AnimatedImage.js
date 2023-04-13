import { motion } from "framer-motion";
import Image from "next/image";

const imageVariants = {
    hidden: {
        opacity: 0,
        x: -100
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            ease: 'easeInOut',
            duration: 1.6
        }
    }
}

const AnimatedImage = ({ src, alt, className }) => {
    return (
        <motion.div
            variants={imageVariants}
            initial='hidden'
            animate='show'
        >
            <Image src={src} alt={alt} className={className}></Image>
        </motion.div>
    )
};
export default AnimatedImage;