"use client";

import React from "react";
import { X } from "lucide-react";

export default function ProductModal({ open, onClose, item }) {
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  React.useEffect(() => {
    if (!open) setSelectedCategory(null);
  }, [open]);

  const renderProductsGrid = () => (
    <div>
      <p className="mb-2 text-sm font-medium text-slate-700">Products</p>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
        {item?.products?.map((p, idx) => {
          const name = typeof p === "string" ? p : p.name;
          const img = typeof p === "string" ? null : p.image;

          return (
            <li
              key={name + idx}
              onClick={() => {
                if (typeof p !== "string" && p.brands) setSelectedCategory(p);
              }}
              className="cursor-pointer flex flex-col items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-center hover:shadow-md"
            >
              {img ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={img} alt={name} className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-md object-cover" />
              ) : (
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-md bg-slate-100 text-sm text-slate-600">
                  Img
                </div>
              )}

              <div className="text-sm font-medium text-slate-800">{name}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );

  const renderBrands = () => (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <button
          onClick={() => setSelectedCategory(null)}
          className="text-sm text-slate-600 hover:underline"
        >
          ← Back
        </button>
        <div className="text-sm font-medium text-slate-700">Brands</div>
        <div />
      </div>

      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {selectedCategory?.brands?.map((b, i) => (
          <li
            key={(b.name || b) + i}
            className="flex flex-col items-center gap-2 rounded-lg border border-slate-200 bg-white p-3 text-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={(b && b.image) || "https://via.placeholder.com/80?text=Brand"} alt={(b && b.name) || b} className="h-12 w-12 sm:h-16 sm:w-16 rounded-md object-contain" />
            <div className="text-sm text-slate-800">{(b && b.name) || b}</div>
          </li>
        ))}
      </ul>
    </div>
  );

  if (!open || !item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-hidden
      />

      <div
        role="dialog"
        aria-modal="true"
        className="relative z-10 w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl rounded-2xl bg-white p-4 sm:p-6 text-slate-900 shadow-xl max-h-[90vh] overflow-auto"
      >
        <div className="flex items-start justify-between">
            <div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-1 text-sm text-slate-600 text-justify">{item.description}</p>
          </div>

          <button
            onClick={onClose}
            className="-m-2 inline-flex h-8 w-8 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mt-4">{selectedCategory ? renderBrands() : renderProductsGrid()}</div>

        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="rounded-md bg-[#0b43ac] px-4 py-3 text-sm font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
