export default function ContactPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-heading font-bold">Contact Us</h1>
      <p className="mt-3 text-slate-300">Looking for a reliable energy or export partner? Reach out and let's start a conversation.</p>

      <div className="mt-8 max-w-xl">
        <form className="grid gap-4">
          <input className="border rounded-md px-4 py-2" placeholder="Name" />
          <input className="border rounded-md px-4 py-2" placeholder="Email" />
          <input className="border rounded-md px-4 py-2" placeholder="Company / Country" />
          <textarea className="border rounded-md px-4 py-2 h-32" placeholder="Message" />
          <div>
            <button className="bg-sky-600 text-white px-6 py-2 rounded-md">Send Message</button>
          </div>
        </form>
      </div>

      <section className="mt-12 text-slate-300">
        <h3 className="font-semibold">Head Office</h3>
        <p className="mt-2">Jodhpur, Rajasthan, India</p>
        <p className="mt-1">Email: info@anayinfinity.com</p>
      </section>
    </div>
  );
}
