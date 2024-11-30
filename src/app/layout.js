import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata = {
  title: "Animals",
  description:
    "Animals are  people's best friends and this website is all about them.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased font-sans relative`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
