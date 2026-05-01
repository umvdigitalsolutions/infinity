"use client"

import React from 'react'

export default function WhatsAppButton() {
  return (
    <>
      {/* Mobile bottom bar */}
      <a
        href="https://wa.me/919468849961"
        target="_blank"
        rel="noopener noreferrer"
        className="sm:hidden fixed bottom-4 left-4 right-4 z-50 bg-emerald-500 text-white py-3 px-4 rounded-lg shadow-lg flex items-center justify-between gap-3"
        aria-label="Chat on WhatsApp"
      >
        <div className="inline-flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.52 3.48A11.92 11.92 0 0012.02.5C6.15.5 1.47 5.18 1.47 11.05c0 1.95.52 3.86 1.5 5.56L.5 23.5l6.12-2.02a11.5 11.5 0 005.4 1.25c5.88 0 10.56-4.68 10.56-10.56 0-2.83-1.1-5.47-3.06-7.69z" />
          </svg>
          <div className="text-left">
            <div className="text-xs/12 opacity-90">Chat with us</div>
            <div className="font-medium">+91 94688 49961</div>
          </div>
        </div>
        <div className="text-sm opacity-90">Open</div>
      </a>

      {/* Desktop floating button */}
      <a
        href="https://wa.me/919468849961"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:inline-flex fixed bottom-6 right-6 z-50 items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-full shadow-lg transform hover:-translate-y-1 transition"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.52 3.48A11.92 11.92 0 0012.02.5C6.15.5 1.47 5.18 1.47 11.05c0 1.95.52 3.86 1.5 5.56L.5 23.5l6.12-2.02a11.5 11.5 0 005.4 1.25c5.88 0 10.56-4.68 10.56-10.56 0-2.83-1.1-5.47-3.06-7.69zM12.02 21c-1.6 0-3.15-.42-4.5-1.2l-.32-.18-3.63 1.2 1.24-3.33-.2-.34A8.66 8.66 0 013.37 11.05c0-4.8 3.9-8.7 8.67-8.7 4.79 0 8.68 3.9 8.68 8.7 0 4.79-3.89 8.7-8.68 8.7zM17 14.1c-.25-.12-1.48-.73-1.71-.81-.23-.08-.4-.12-.57.12-.17.25-.67.81-.82.98-.15.17-.3.19-.55.07-.25-.12-1.06-.39-2.02-1.25-.75-.67-1.25-1.48-1.39-1.73-.14-.25-.02-.38.11-.5.11-.11.25-.3.37-.45.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.07-.12-.57-1.38-.78-1.9-.2-.5-.4-.43-.56-.44l-.48-.01c-.17 0-.44.06-.67.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.12.17 1.72 2.62 4.18 3.67 2.46 1.05 2.46.7 2.9.66.44-.04 1.44-.58 1.64-1.14.2-.56.2-1.04.14-1.14-.06-.1-.23-.16-.48-.28z" />
        </svg>
        <span className="hidden md:inline">Chat with us</span>
      </a>
    </>
  )
}
