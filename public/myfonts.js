import { Cormorant, Bebas_Neue, Nunito } from "next/font/google"

export const cormorant = Cormorant({
    subsets: ['latin'],
    variable: '--font-cormorant'
})

export const bebas_neue = Bebas_Neue({
    subsets: ['latin'],
    variable: '--font-bebas-neue',
    weight: '400'
})

export const nunito = Nunito({
    subsets: ['latin'],
    variable: '--font-nunito'
})