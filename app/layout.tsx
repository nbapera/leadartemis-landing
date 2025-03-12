import type {Metadata} from "next";
import {Mulish} from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import {ThemeProvider} from "@/app/theme-provider";
import Footer from "@/components/layout/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'
const font = Mulish({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "LeadArtemis",
    description: "Discover our powerful lead generation tool to easily find business leads worldwide. Perfect for freelancers and businesses looking to boost growth and expand their client base.",
    icons: {
        icon: "/favicon.png"
    }
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="dark">
        <body className={font.className}>
        <ThemeProvider>
            <Navbar/>
            {children}
            <Footer/>
        </ThemeProvider>
        </body>
        <GoogleAnalytics gaId="G-EBGQ60F7RQ" />
        </html>
    );
}