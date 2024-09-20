import type { Metadata } from "next";
import localFont from "next/font/local";
import "../public/global.css";
import AnimatedBackground from "./components/naimated";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Temple Jack Chiorlu Portfolio",
  description: "Temple Jack Chiorlu Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div style={{width:"100%",height:"auto"}}>
        
          <AnimatedBackground />
          <div className="font-[family-name:var(--font-geist-sans)]">
          <Header />
          
          {children}
          <AnimatedBackground />

          <Footer />
          <AnimatedBackground />

          </div>
        
          </div>
      </body>
    </html>
  );
}
