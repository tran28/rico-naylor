import Layout from "@/components/Layout";
import { PrivacyContent } from "@/content/privacyContent";
import Head from "next/head";
import Container from "@/components/Container";
import { bebas_neue } from "@/public/myfonts";
import React from "react";
import { FadeInWhenVisible, ScrollLinkedAnimation } from "@/components/ScrollAnimations";

const Privacy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta name='description' content='Privacy policy for riconaylor.com' />
      </Head>
      <ScrollLinkedAnimation />
      <main className='flex items-center justify-center w-full min-h-screen'>
        <Container>
          <Layout className='pt-0'>
            {PrivacyContent.map(({ title, text }, index) => {
              return (
                <React.Fragment key={index}>
                  <FadeInWhenVisible>
                    <h1 key={`${title}-${index}`} className={`${bebas_neue.variable} font-bebas text-2xl pt-10 pb-5`}>{title}</h1>
                  </FadeInWhenVisible>
                  <FadeInWhenVisible>
                    <p key={`${text}-${index}`} className="pt-2 pb-2">{text}</p>
                  </FadeInWhenVisible>
                </React.Fragment>
              )
            })}
          </Layout>
        </Container>
      </main>
    </>
  )
};
export default Privacy;