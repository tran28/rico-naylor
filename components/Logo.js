import { motion } from 'framer-motion';

const svgVariants = {
    hidden: {
        scale: 0.6
    },
    visible: {
        scale: 1,
        transition: { duration: 1.5 }
    }
}

const pathVariants = {
    hidden: {
        pathLength: 0,
        opacity: 0,
    },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
            duration: 2,
            ease: 'easeInOut'
        }
    }
}

const Logo = () => {
    return (
        <motion.svg
            className='h-auto w-40 outline-0'
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-10 -5 275 145"
            variants={svgVariants}
            initial='hidden'
            animate='visible'
        >
            <motion.path
                fill='none'
                d="M73.54,107.15a1.54,1.54,0,0,0-.86.25,8.1,8.1,0,0,0-1.43,1.31,7.59,7.59,0,0,1-2.78,2.11,8,8,0,0,1-5.87-.22c-4.35-1.81-7.78-6.11-10.78-9.89L50.46,99c-5.14-6.5-9.77-13.36-14.67-20l-1-1.41c-1-1.12-1.79-2.29-2.65-3.42a11.26,11.26,0,0,1-2.06-3.4c1.48-.86,3.11-1.52,4.62-2.33s3-1.66,4.44-2.55a83.93,83.93,0,0,0,8.11-5.65A69.08,69.08,0,0,0,60.18,47a59.32,59.32,0,0,0,8.21-15.61,54.84,54.84,0,0,0,1.74-6.17c1.48-6.74.19-13.07-3.63-17.83A20,20,0,0,0,50.69.13a25.51,25.51,0,0,0-5.57.63c-10.3,2.29-17.3,11.47-20.49,19.3C22,26.49,20.69,33.62,19.82,39.73c-.62,4-1.45,8-2.25,11.87-.49,2.38-1,4.84-1.45,7.27-.5,2.17-1.53,3.07-3.49,3.07a7.74,7.74,0,0,1-1.1-.06A17.83,17.83,0,0,0,9,61.7,24.39,24.39,0,0,0,5.58,62a5.14,5.14,0,0,0-3.36,2.38,3.85,3.85,0,0,0,0,3.22c.82,1.77,3.11,3.35,6.62,4.57s3,4.22,2.65,5.67L9.39,87c-1.62,6.93-3,12.81-4.1,18-.43,2-.88,3.95-1.33,5.93-1.48,6.58-3,13.38-4,20.12a5.42,5.42,0,0,0,0,.57H0a1.18,1.18,0,0,0,.31-.28h0c2.1-2.37,2.79-5.7,3.45-8.92v-.12c.77-3.6,1.69-7.21,2.57-10.69.62-2.44,1.26-5,1.84-7.43C9.8,97.06,11.68,89,12.81,80.88L13,79.79c.67-5,.95-5.33,6.13-6.77l.25-.07a11.28,11.28,0,0,1,3-.44c3.6,0,6.36,2.12,8.59,4.73,2.45,2.87,4.47,6,6.71,9.06,4.57,5.8,8.88,11.71,13.62,17.19l.71.82c3.65,4.24,7.79,9,13.45,9.13h.26a9.37,9.37,0,0,0,8.34-5,1.74,1.74,0,0,0,.21-1.07C74.09,107.17,73.67,107.15,73.54,107.15ZM13.93,67.66c-.75,1.87-1.09,2.72-2,2.72h-.21A17.34,17.34,0,0,1,7,68.89l-.24-.12c-.79-.38-2.27-1.09-2.11-2.77.09-.82.61-2.18,3.05-2.18a14.35,14.35,0,0,1,1.61.12l.52.06,4.11.4,1.41.14-.6,1.28C14.44,66.39,14.18,67,13.93,67.66ZM21,70.37l-4.3.6-1.44.21.33-1.42.6-2.6.29-1.28,1.16.62,3.7,2L24.06,70Zm2.11-3c-.89-.55-1.79-1.12-2.68-1.69L17.82,64c-1.72-1.08.38-6.36.67-7.07.75-3,1.31-5.58,1.77-8.16l.21-1.32c.51-2.77,1.05-5.64,1.66-8.42,1.73-8,4.09-17.24,8.39-24.65C35.66,5.57,42.68,1.09,51.39,1.08a26.47,26.47,0,0,1,3.33.21A15.65,15.65,0,0,1,66.33,8.12a14.05,14.05,0,0,1,2.16,5.61c1.94,10.92-4.7,24.9-11,33.54C51.15,56.07,42,63.08,30.28,68.1a7.27,7.27,0,0,1-7.15-.68Z"
                transform="translate(0.05 -0.01)"
                variants={pathVariants}
                strokeWidth='5'
            />
            <motion.path
                fill='none'
                // d="M178.3,122c5.6-27,11.3-54.1,16.9-81.1c1.8-8.7,3.6-17.3,6.1-25.8c0.6-2.2,1.8-7.3,4.5-7.9c0.9-0.2,1.8,0.3,2.4,1 c1.6,1.9,2.1,5,2.7,7.3c9.4,35.9,10.7,44.9,10.7,44.9c4.5,29.7,7.6,43,8.5,46.5c1.5,6.4,3.3,12.7,5,18.9c1.7-9.4,2.6-19.1,3.9-28.6 c1.1-7.8,2.2-15.7,3.3-23.5c1.1-7.7,2.2-15.3,3.3-23c1.9-13.2,4.8-26.5,5.8-39.8c0.1-2-0.3-3.9-0.4-5.9c-0.1-1.4,0.5-3,1.8-3.4 c0.2-0.1,0.4-0.1,0.5,0c0.3,0.1,0.5,0.5,0.5,0.9c0.8,5.3-0.5,11.2-1.3,16.4c-0.8,5.6-1.8,11.2-2.7,16.7c-2,12.2-3.7,24.5-5.3,36.8 c-1,8.3-2.9,16.5-4.2,24.8c-0.4,2.6-5,32.4-4.4,32.5c-0.2,0-0.3-0.1-0.4-0.3c-2.2-2.6-3.5-5.9-4.1-9.3c-0.9-5-2-10.1-3.3-15 c-0.8-3-1.9-5.9-2.5-8.9c-1.1-5.7-2-11.5-3.1-17.3c-0.2-1.1-0.4-2.2-0.6-3.3c-4.1-21.2-8.3-42.3-13.3-63.4c-0.1-0.4-0.2-0.9-0.6-1.1 c-0.3-0.1-0.6-0.2-0.8-0.1c-2.7,0.2-3.3,5.1-3.9,7c-5.7,19.7-9.7,40.1-14.3,60.2c0,0.1,0,0.2-0.1,0.3 C186,93.1,182.6,107.7,178.3,122z M256.1,82.7c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S256.7,82.7,256.1,82.7z M203.3,157.1  M258.9,51.1 M271.4,112.6 M212.9,23.1 M224.6,65.8 M266.7,15"
                d="M235.26,109.17c-1.06-.89-1-2.51-.78-3.88L240.22,64c1.63-11.72,3.25-23.63,1.53-35.34a4.93,4.93,0,0,0-1.41-3.28A4.56,4.56,0,0,0,236.5,25c-5.92,1.34-10.85,5.54-14.34,10.54S216.4,46.15,214,51.73c-3.68,8.66-7.71,17.17-11.78,25.66-6.54,13.67-13.2,27.31-18.67,41.46-1.37,3.54-2.63,7.1-3.85,10.69-.31.91-.75,3.72-2,3.55s-1.17-2-1.12-2.81c.22-3.91,1.76-8.15,2.58-12l2.58-12c6.85-31.74,14.17-63.42,20.54-95.26.58-2.7,1.11-5.71-.34-8-.49-.79-1.21-1.72-.73-2.52a1.42,1.42,0,0,1,2-.15c.06.05.1.1.15.15a3.92,3.92,0,0,1,.81,2.3c1.09,10.05-1.73,20.06-4.35,29.83q-10.71,39.93-17.4,80.8l25.13-54.6c5.86-12.75,12.19-26.07,23.58-34.26,2.63-1.9,6.18-3.49,9-1.87a7.85,7.85,0,0,1,3.12,4.37c2.18,6.11,1.54,12.82.84,19.27q-3.19,29.35-7.24,58.6a7.14,7.14,0,0,1-1.54,4.2Zm20.88-26.49a1,1,0,1,0,1,1A1,1,0,0,0,256.14,82.68Z"
                transform="translate(0.05 -0.01)"
                variants={pathVariants}
                strokeWidth='5'
            />
            <motion.path
                fill='none'
                d="M152.56,67a.39.39,0,0,0-.25-.25h-.06a2.54,2.54,0,0,0-.55.1,6.39,6.39,0,0,0-2.29,2c-.19.22-.37.44-.57.65a18.23,18.23,0,0,1-9.61,5.6c-.4.1-3,.31-4.55.42l-1.55.12.53-1.46a16.15,16.15,0,0,0,.38-9.7,5.46,5.46,0,0,0-1.58-3,3.84,3.84,0,0,0-2.3-.8,3.18,3.18,0,0,0-1.54.39,10.94,10.94,0,0,0-2.16,1.8v0h0a25.29,25.29,0,0,1-3.59,2.58c-.67.42-1.35.85-2,1.34a12.8,12.8,0,0,0-3.15,3.61c-.33.48-.66,1-1,1.47q-1.5,2.1-3,4.46c-3.67,5.56-7.46,11.32-13.89,13.77a6,6,0,0,1-2.46.56,4.29,4.29,0,0,1-3.63-1.91c-2.31-3.34-2.17-7.91-1.48-11.73a26.83,26.83,0,0,1,5-12.08,2.69,2.69,0,0,1,2.22-1.28c1.35.18,1.89,1.84,2,3a16.84,16.84,0,0,0,.4,2.91s.93-.81,1-.92a4,4,0,0,0,.36-1.86,22.15,22.15,0,0,0-.34-3.15c-.2-1.36-1.11-2-2.71-2h-.32c-2.15.09-3.43,1.51-4.76,3.22-2.9,3.59-5.41,7.59-8.63,11A80.29,80.29,0,0,1,77,84a5.34,5.34,0,0,1-2.28,1.14A2.47,2.47,0,0,1,72,83.73a6.18,6.18,0,0,1-.46-1.94,28.61,28.61,0,0,1,.33-8c.42-2.39,1.39-4.71,1.2-7.17,0-.51-.31-1.15-.81-1.08a.76.76,0,0,0-.45.29A4.15,4.15,0,0,0,71,67.49,43.1,43.1,0,0,0,69.33,76c-.22,2.64-.44,5.94.59,8.45a4.39,4.39,0,0,0,1.61,2c1.83,1.19,3.94.41,5.69-.5a32.68,32.68,0,0,0,6.6-4.78c1.36-1.22,2.64-2.91,4.41-3.57.7-.26.69-.18.91.54.17.56.31,1.14.43,1.72.24,1.15.41,2.33.55,3.5.1.79.2,1.6.33,2.38.56,3.46,2.83,7.18,6.47,7.18A5.36,5.36,0,0,0,98,92.8c5.22-1,9.7-5.64,11.91-8.35,1.34-1.68,2.46-3.37,3.36-4.74s2.74-5,4.8-3.85a3.13,3.13,0,0,1,1.16,2.34c.71,3,3.38,6.07,6.72,5.86,1.91-.11,3.37-1.41,4.56-2.78a26.12,26.12,0,0,1,3.7-3.66l.51-.37a15.85,15.85,0,0,1,5.65-2,29.77,29.77,0,0,0,3.08-.83c2.14-.78,7.85-2.85,9.09-6.3A1.52,1.52,0,0,0,152.56,67ZM131.33,77.6A8.53,8.53,0,0,1,128.74,81a5,5,0,0,1-2.94,1,4,4,0,0,1-3.54-1.92c-1.34-2.17-1.39-5.23-.83-7.65A11.8,11.8,0,0,1,125,66.35a14.94,14.94,0,0,0,1.55,5.14,9.83,9.83,0,0,0,3.61,3.85C131.11,75.87,131.82,76.4,131.33,77.6Zm.72-3.83-.87-.53a7.06,7.06,0,0,1-3.59-5,6.52,6.52,0,0,1,2-5.34l.68-.7.72.66a8,8,0,0,1,1.59,10ZM75.24,57.68a1,1,0,1,1-1-1A1,1,0,0,1,75.24,57.68Z"
                transform="translate(0.05 -0.01)"
                variants={pathVariants}
                strokeWidth='5'
            />
        </motion.svg>

    )
};
export default Logo;