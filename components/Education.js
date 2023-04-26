import { EducationContent } from "@/content/aboutContent";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";
import { FadeInWhenVisible } from "./ScrollAnimations";

const Details = ({ certification, institution, time, location, info }) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref} />
            <FadeInWhenVisible>
                <div>
                    <h3 className='capitalize font-bold text-2xl'>{certification}&nbsp;
                        <span className='text-purple-700 capitalize'>@{institution}</span>
                    </h3>
                    <span className='capitalize font-medium text-dark/75'>{time} | {location}</span>
                    <p className='font-medium w-full mt-2'>{info}</p>
                </div>
            </FadeInWhenVisible>
        </li>
    )
}

const Education = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ['start end', 'center start']
        }
    )

    return (
        <>
            <div className='my-48'>
                <h2 className='font-bold text-8xl mb-32 w-full text-center'>Education</h2>
                <div ref={ref} className='w-[75%] mx-auto relative'>
                    <motion.div
                        style={{ scaleY: scrollYProgress }}
                        className='absolute left-9 top-0 w-[4px] bg-dark h-full origin-top'
                    />
                    <ul className='w-full flex flex-col items-start justify-between ml-4'>
                        {EducationContent.education.map((education, index) => {
                            return (
                                <Details
                                    key={`${education}-${index}`}
                                    certification={education.certification}
                                    institution={education.institution}
                                    time={education.time}
                                    location={education.location}
                                    info={education.info} />
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
};
export default Education;