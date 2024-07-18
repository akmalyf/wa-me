import {Fira_Code as FontFira, Inter as FontSans, JetBrains_Mono as FontMono} from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontFira = FontFira({
  subsets: ["latin"],
  variable: "--font-fira",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})
