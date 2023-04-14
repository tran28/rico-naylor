import Layout from "@/components/Layout";
import { TermsContent } from "@/content/termsContent";
import Head from "next/head";
import Container from "@/components/Container";
import { cormorant, bebas_neue } from "@/public/myfonts";
import React from "react";

const Terms = () => {
    return (
        <>
            <Head>
                <title>Terms of Use</title>
                <meta name='description' content='Terms of use for riconaylor.com' />
            </Head>
            <main className='flex items-center justify-center text-dark w-full min-h-screen'>
                <Container>
                    <Layout className='pt-0'>
                        {TermsContent.map(({ title, text }, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <h1 key={`${title}-${index}`} className={`${bebas_neue.variable} font-bebas text-2xl pt-10 pb-5`}>{title}</h1>
                                    {text.map((line) => {
                                        return (
                                            <p key={`${line}-${index}`} className="pt-2 pb-2">{line}</p>
                                        )
                                    })}
                                </React.Fragment>
                            )
                        })}
                    </Layout>
                </Container>
            </main>
        </>
    )
};
export default Terms;