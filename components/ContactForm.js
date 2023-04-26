import { useState } from "react";

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
    const [bttnBg, setBttnBg] = useState('bg-[#130F49]')

    // Validation check method
    const handleValidation = () => {
        const isValid = true
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
        <form onSubmit={handleSubmit} className="rounded-l-lg shadow-xl flex flex-col px-8 py-8 bg-secondary_light min-w-[800px]">
            <h1 className="text-2xl font-bold">Send a message</h1>

            <label htmlFor="fullname" className="text-gray-500 font-light mt-8">
                Full name<span className="text-purple-700 ml-1">*</span>
            </label>
            
            <input type="text" value={fullname} onChange={(e) => { setFullname(e.target.value); }} name="fullname" className="bg-transparent border-b py-2 focus:outline-none focus:border-b-purple-700 text-purple-700" />

            <label htmlFor="email" className="text-gray-500 font-light mt-4">E-mail</label>
            <input type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value); }} className="bg-transparent border-b py-2 focus:outline-none focus:border-b-purple-700 font-light text-purple-700" />

            <label htmlFor="subject" className="text-gray-500 font-light mt-4">
                Subject<span className="text-purple-700 ml-1">*</span>
            </label>
            <input type="text" name="subject" value={subject} onChange={(e) => { setSubject(e.target.value); }} className="bg-transparent border-b py-2 focus:outline-none focus:border-b-purple-700 font-light text-purple-700" />

            <label htmlFor="message" className="text-gray-500 font-light mt-4">
                Message<span className="text-purple-700 ml-1">*</span>
            </label>
            <textarea name="message" value={message} onChange={(e) => { setMessage(e.target.value); }} className="bg-transparent border-b py-2 focus:outline-none focus:border-b-purple-700 font-light text-purple-700"></textarea>

            <div className="flex flex-row items-center justify-start">
                <button type="submit" disabled={disable} className={`px-10 ${bttnBg} mt-8 py-2 text-gray-50 font-light rounded-md text-lg flex flex-row items-center`}>{buttonText}</button>
            </div>
        </form>
    )
}