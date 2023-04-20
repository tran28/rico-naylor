import { motion } from "framer-motion";

const quote = {
    initial: {
    },
    animate: {
        transition: {
            delay: 0.5,
            staggerChildren: 0.1
        }
    }
}

const singleWord = {
    initial: {
        opacity: 0,
        y: 50
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
}

const AnimatedText = ({ text, className }) => {
    return (
        <div className={`w-full mx-auto py-2 flex items-center justify-center overflow-hidden`}>
            <motion.h1 className={`${className} inline-block w-full font-bold capitalize`}
                variants={quote}
                initial='initial'
                animate='animate'>
                {text.split(' ').map((word, index) =>
                    <motion.span key={`${word}-${index}`} className='inline-block'
                        variants={singleWord}>
                        {word}&nbsp;
                    </motion.span>
                )}
            </motion.h1>
        </div>
    );
};
export default AnimatedText;