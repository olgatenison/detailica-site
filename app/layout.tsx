import type { Metadata } from "next";
import { Work_Sans, Noto_Sans } from "next/font/google";
import { Navbar } from "./components/Header";
import "./globals.css";
import Footer from "./components/Footer";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Detailica",
  description:
    "Integrated project partner supporting architecture and engineering teams across international markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${notoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
