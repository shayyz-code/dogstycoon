import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { Roboto_Mono } from "next/font/google";
import Script from "next/script";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "DOGS Tycoon",
  description: "DOGS Tycoon is ...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <head>
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${robotoMono.variable} font-mono antialiased h-screen w-screen overflow-hidden`}
      >
        <div className="flex flex-col h-full w-full min-h-0 min-w-0">
          <main className="flex flex-col items-center gap-5 h-full p-5 overflow-y-scroll">
            {children}
          </main>
          <div className="">
            <Navbar />
          </div>
        </div>
      </body>
    </html>
  );
}
