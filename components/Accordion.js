import { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${id === open ? "rotate-180" : ""
                } h-5 w-5 transition-transform`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );
}

export default function AnimatedAccordion() {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)} className='text-xl text-purple-700 font-semibold sm:text-base'>
                    Commercial Awareness
                </AccordionHeader>
                <AccordionBody className='pt-4 text-md'>
                    Over the last three years alone, we have endured a global pandemic, a cost of living crisis, a climate change crisis, the effects of the war, political controversy, and ongoing economic uncertainty.
                    All such factors significantly impact real estate; from property values to investor sentiment, there is much to discuss.
                    Within commercial awareness, I speak with experts to discuss the implications and possible effects at play across various markets.

                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)} className='text-xl text-purple-700 font-semibold sm:text-base'>
                    Career Development
                </AccordionHeader>
                <AccordionBody className='pt-4 text-md'>
                    Real estate boasts fantastic opportunities.
                    As a graduate surveyor, I am early in my journey and passionate about nurturing a solid relationship network and developing my career.
                    Here I discuss with senior experts what skills, attitudes, and advice can be leveraged to excel within the industry and hear more about the career journeys of others.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)} className='text-xl text-purple-700 font-semibold sm:text-base'>
                    Diversity, Equity & Inclusion (DEI)
                </AccordionHeader>
                <AccordionBody className='pt-4 text-md'>
                    The property industry is aware of the need to diversify its demographic.
                    As a gay person of colour from a socially mobile background, I believe visibility is fundamental to redefining what a surveyor looks like and comes from.
                    Empathy is key in addressing inequality.
                    Here I strive to demystify DEI by bridging the gap through education and thought leadership from diverse champions.
                </AccordionBody>
            </Accordion>
        </>
    );
}