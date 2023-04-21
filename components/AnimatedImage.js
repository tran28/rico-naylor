import { motion } from "framer-motion";
import Image from "next/image";

const imageVariants = {
    hidden_left: {
        opacity: 0,
        x: -100
    },
    hidden_right: {
        opacity: 0,
        x: 100
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

const AnimatedImage = ({ src, alt, className, from }) => {
    return (
        <motion.div
            variants={imageVariants}
            initial={from === 'left' ? 'hidden_left' : 'hidden_right'}
            animate='show'
        >
            <Image src={src} alt={alt} width="0" height="0" sizes="100vw" priority className={className}></Image>
        </motion.div>
    )
};
export default AnimatedImage;