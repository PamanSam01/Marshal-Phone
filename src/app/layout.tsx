import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marshall Phone Cell - Toko Smartphone & Gadget Terpercaya Bergaransi Resmi",
  description: "Beli smartphone terbaru Apple, Samsung, Xiaomi, OPPO, vivo, realme, Infinix original bergaransi resmi. Cicilan 0%, gratis ongkir, dan promo flash sale setiap hari di Marshall Phone Cell.",
  keywords: "marshall phone cell, konter hp, sentraponsel, beli smartphone, hp murah, promo handphone, garansi resmi SEIN, garansi iBox, toko hp terdekat",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', sizes: '128x128', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Marshall Phone Cell - Toko Smartphone & Gadget Terpercaya",
    description: "Pusat handphone original 100% garansi resmi Indonesia. Dapatkan promo diskon, flash sale, dan cicilan 0% di Marshall Phone Cell.",
    type: "website",
    locale: "id_ID"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#F8FAFC] text-gray-900 antialiased selection:bg-[#0066FF] selection:text-white">
        {children}
      </body>
    </html>
  );
}
