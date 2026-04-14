export default function ExportLanding() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-heading font-bold">Your Trusted Export Partner from India</h1>
      <p className="mt-4 text-slate-600">Supplying high-quality products with reliable sourcing, competitive pricing, and seamless global logistics.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold">What We Export</h3>
          <ul className="mt-3 list-disc list-inside text-slate-600">
            <li>Batteries & Energy Products</li>
            <li>Home Décor & Handicrafts</li>
            <li>Agro & Processed Products</li>
            <li>Industrial & Trading Commodities</li>
          </ul>
        </div>

        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold">Why Global Buyers Choose Us</h3>
          <ul className="mt-3 list-disc list-inside text-slate-600">
            <li>Strong sourcing network across India</li>
            <li>Competitive pricing with quality assurance</li>
            <li>Private label & customization available</li>
            <li>Export-ready documentation & reliable supply chain</li>
          </ul>
        </div>
      </div>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold">Our Capabilities</h3>
        <ul className="mt-3 list-disc list-inside text-slate-600">
          <li>Bulk order fulfillment</li>
          <li>Multi-product sourcing</li>
          <li>Container load management</li>
          <li>Long-term supply partnerships</li>
        </ul>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold">Export Process</h3>
        <ol className="mt-3 list-decimal list-inside text-slate-600">
          <li>Requirement Understanding</li>
          <li>Product Sourcing & Sampling</li>
          <li>Pricing & Negotiation</li>
          <li>Quality Check</li>
          <li>Packaging & Dispatch</li>
          <li>Shipping & Documentation</li>
        </ol>
      </section>

      <div className="mt-8">
        <a className="inline-block bg-sky-600 text-white px-6 py-3 rounded-md" href="/contact">Request Quote</a>
        <a className="inline-block border ml-4 px-6 py-3 rounded-md" href="/contact">Schedule a Call</a>
      </div>
    </div>
  );
}
