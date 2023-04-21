import { ExperienceContent } from "@/content/aboutContent";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";
import { FadeInWhenVisible } from "./ScrollAnimations";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref} />
            <FadeInWhenVisible>
                <div>
                    <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;
                        <a href={companyLink} target='_blank' className='text-purple-700 capitalize'>@{company}</a>
                    </h3>
                    <span className='capitalize font-medium text-dark/75'>{time} | {address}</span>
                    <p className='font-medium w-full mt-2'>{work}</p>
                </div>
            </FadeInWhenVisible>
        </li>
    )
}

const Experience = () => {
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
                <h2 className='font-bold text-8xl mb-32 w-full text-center'>Experience</h2>
                <div ref={ref} className='w-[75%] mx-auto relative'>
                    <motion.div
                        style={{ scaleY: scrollYProgress }}
                        className='absolute left-9 top-0 w-[4px] bg-dark h-full origin-top'
                    />
                    <ul className='w-full flex flex-col items-start justify-between ml-4'>
                        {ExperienceContent.experiences.map((experience, index) => {
                            return (
                                <Details
                                    key={`${experience}-${index}`}
                                    position={experience.position}
                                    company={experience.company}
                                    companyLink={experience.companyLink}
                                    time={experience.time}
                                    address={experience.address}
                                    work={experience.work} />
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
};
export default Experience;