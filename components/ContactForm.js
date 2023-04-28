import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ContactForm() {
    // States for contact form fields
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    // Form validation state
    const [errors, setErrors] = useState({})

    // Setting button text on form submission
    const [buttonText, setButtonText] = useState("Send")
    const [disable, setDisable] = useState(false)
    const [bttnBg, setBttnBg] = useState('bg-purple-700')

    const errorVariants = {
        hidden: (direction) => ({
            opacity: 0,
            x: direction
        }),
        show: {
            opacity: 1,
            x: 0,
            transition: {
                ease: 'easeInOut',
                duration: 0.2
            }
        },
        exit: {
            opacity: 0,
            x: 10,
            transition: {
                ease: 'easeInOut',
                duration: 0.2
            }
        }
    }

    // Validation check method
    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;

        if (fullname.length === 0) {
            tempErrors["fullname"] = true;
            isValid = false;
        }

        if (subject.length === 0) {
            tempErrors["subject"] = true;
            isValid = false;
        }

        if (message.length === 0) {
            tempErrors["message"] = true;
            isValid = false;
        }

        setErrors({ ...tempErrors })
        return isValid
    };

    //   Handling form submit
    const handleSubmit = async (e) => {
        e.preventDefault()
        let isValidForm = handleValidation()
        if (isValidForm) {
            setButtonText("Sending");
            const res = await fetch("/api/sendgrid", {
                body: JSON.stringify({
                    email: email,
                    fullname: fullname,
                    subject: subject,
                    message: message,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });

            const { error } = await res.json()
            if (error) {
                console.log(error);
                setButtonText("Oops! Something went wrong.")
                setDisable(true)
                setBttnBg('bg-[#FF5630]')
                return;
            }
            setButtonText("Sent!")
            setDisable(true)
            setBttnBg('bg-[#36B37E]')
        }
        console.log(fullname, email, subject, message)
    };

    return (
        <form onSubmit={handleSubmit} className='shadow-[2px_2px_0px_0px_rgba(126,34,205)] border-purple-700'>
            <div className='grid grid-cols-8 sm:w-[80vw]'>
                <h1 className='col-span-3 text-2xl font-bold bg-secondary_light py-8 px-8 text-purple-700 sm:text-xl sm:col-span-8'>Send a message</h1>
                <div className='col-span-5 flex px-8 py-8 flex-col sm:col-span-8'>
                    <label htmlFor='fullname' className='text-gray-500 font-light'>
                        Full name<span className='text-[#130F49] ml-1'>*</span>
                    </label>
                    <input type='text' value={fullname} onChange={(e) => { setFullname(e.target.value); }} name='fullname' className='border-b py-2 focus:outline-none focus:border-b-purple-700 text-[#130F49]' />
                    <AnimatePresence>
                        {errors.fullname !== undefined ?
                            <motion.div
                                custom={10}
                                variants={errorVariants}
                                initial='hidden'
                                animate='show'
                                exit='exit'
                                className='text-purple-700 italic text-sm'>Full Name cannot be empty.</motion.div>
                            : null}
                    </AnimatePresence>

                    <label htmlFor='email' className='text-gray-500 font-light mt-4'>E-mail</label>
                    <input type='email' name='email' value={email} onChange={(e) => { setEmail(e.target.value); }} className='border-b py-2 focus:outline-none focus:border-b-purple-700 font-light text-[#130F49]' />

                    <label htmlFor='subject' className='text-gray-500 font-light mt-4'>
                        Subject<span className='text-[#130F49] ml-1'>*</span>
                    </label>
                    <input type='text' name='subject' value={subject} onChange={(e) => { setSubject(e.target.value); }} className='border-b py-2 focus:outline-none focus:border-b-purple-700 font-light text-[#130F49]' />
                    <AnimatePresence>
                        {errors.subject !== undefined ?
                            <motion.div
                                custom={10}
                                variants={errorVariants}
                                initial='hidden'
                                animate='show'
                                exit='exit'
                                className='text-purple-700 italic text-sm'>Subject cannot be empty.</motion.div>
                            : null}
                    </AnimatePresence>

                    <label htmlFor='message' className='text-gray-500 font-light mt-4'>
                        Message<span className='text-[#130F49] ml-1'>*</span>
                    </label>
                    <textarea name='message' value={message} onChange={(e) => { setMessage(e.target.value); }} className='border-b py-2 focus:outline-none focus:border-b-purple-700 font-light text-[#130F49]'></textarea>
                    <AnimatePresence>
                        {errors.message !== undefined ?
                            <motion.div
                                custom={10}
                                variants={errorVariants}
                                initial='hidden'
                                animate='show'
                                exit='exit'
                                className='text-purple-700 italic text-sm'>Message cannot be empty.</motion.div>
                            : null}
                    </AnimatePresence>

                    <div className='flex flex-row items-center justify-start'>
                        <button
                            type='submit'
                            disabled={disable}
                            className={`px-10 ${bttnBg} mt-8 py-2 text-light rounded-md text-lg flex flex-row items-center`}>{buttonText}</button>
                    </div>
                </div>
            </div>
        </form>
    )
}