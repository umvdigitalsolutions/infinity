import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from "next/script";

export const metadata = {
  title: "Anay Infinity Pvt Ltd",
  description: "Legacy Driven. Globally Expanding.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@400;600&display=swap" rel="stylesheet" />
        <Script id="tailwind-config" strategy="beforeInteractive">
          {`window.tailwind = { config: { theme: { extend: { fontFamily: { sans: ['Inter','ui-sans-serif','system-ui'], heading: ['Poppins','ui-sans-serif','system-ui'] } } } } }`}
        </Script>
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      </head>
      <body className="min-h-full flex flex-col bg-[#06111f] text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
