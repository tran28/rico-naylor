import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { nunito } from '@/public/myfonts'
import Head from 'next/head'
import Footer from '@/components/Footer'
import { useState } from 'react'
import Maintenance from '@/components/Maintenance'


export default function App({ Component, pageProps }) {
  const [maintenanceMode, setMaintenanceMode] = useState(true);
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='favicon.ico' />
      </Head>
      {maintenanceMode ? <Maintenance setMaintenanceMode={setMaintenanceMode} /> :
        <main className={`${nunito.variable} font-nunito bg-light text-dark stroke-dark dark:text-light dark:bg-dark dark:stroke-light w-full min-h-screen`}>
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </main>
      }
    </>
  )
}
