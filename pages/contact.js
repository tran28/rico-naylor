import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import Layout from "@/components/Layout";
import Head from "next/head";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact | Rico Naylor</title>
                <meta name='description' content='Rico Naylor contact form for feedback, partnerships, sponsors, and general enquiries.' />
            </Head>
            <main className='flex items-center justify-center'>
                <Container>
                    <Layout>
                        <ContactForm />
                    </Layout>
                </Container>
            </main>
        </>
    )
}