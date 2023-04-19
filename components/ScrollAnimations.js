import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollLinkedAnimation = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-2 bg-purple-600 origin-left"
            style={{ scaleX }}
        />
    );
};

export const FadeInWhenVisible = ({ children }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
                delay: 0.3,
                duration: 1,
                type: "spring",
                stiffness: 100
            }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 }
            }}
        >
            {children}
        </motion.div>
    );
};