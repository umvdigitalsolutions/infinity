import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// removed next/script usage to avoid rendering script tags in server components

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
        {/* Tailwind is handled via local PostCSS/Tailwind setup; removed runtime CDN scripts */}
      </head>
      <body className="min-h-full flex flex-col bg-[#06111f] text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
