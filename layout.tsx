'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCartStore } from '@/store';
import { BRAND_INFO } from '@/data';
import { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';
import '@/styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartCount = useCartStore((state) => state.getCount());

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>House of Nuts - Premium Bihar Makhana</title>
        <meta
          name="description"
          content="Premium Bihar Makhana delivered to your doorstep. Healthy, nutritious, and naturally gluten-free snacks."
        />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-hon-cream">
        {/* Announcement Bar */}
        <AnnouncementBar />

        {/* Header */}
        <Header
          navigation={navigation}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          cartCount={cartCount}
        />

        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <Footer navigation={navigation} />

        {/* WhatsApp Button */}
        <WhatsAppButton />

        {/* Toast Notifications */}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}

function AnnouncementBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-hon-dark text-white text-center py-2 text-sm md:text-base"
    >
      🚚 Free Shipping Above ₹499 | Premium Bihar Makhana
    </motion.div>
  );
}

function Header({
  navigation,
  mobileMenuOpen,
  setMobileMenuOpen,
  cartCount,
}: {
  navigation: any[];
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  cartCount: number;
}) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-hon-dark rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-hon-dark">
                House of Nuts
              </h1>
              <p className="text-xs text-hon-gold">Pure Indulgence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href
                    ? 'text-hon-dark font-semibold'
                    : 'text-hon-light-gray hover:text-hon-dark'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <Link
              href="/cart"
              className="relative p-2 hover:bg-hon-cream rounded-lg transition-colors"
            >
              <svg
                className="w-6 h-6 text-hon-dark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-hon-gold text-hon-gray text-xs font-bold px-2 py-1 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-6 h-6 text-hon-dark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pt-4 border-t border-gray-200"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-hon-light-gray hover:text-hon-dark"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </div>
    </header>
  );
}

function Footer({ navigation }: { navigation: any[] }) {
  return (
    <footer className="bg-hon-dark text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-4">House of Nuts</h3>
            <p className="text-hon-light-gray text-sm">{BRAND_INFO.tagline}</p>
            <p className="text-hon-light-gray text-sm mt-2">{BRAND_INFO.mission}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-hon-light-gray hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-semibold mb-4">Policies</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-hon-light-gray hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-hon-light-gray hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-hon-light-gray hover:text-white transition-colors"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund"
                  className="text-hon-light-gray hover:text-white transition-colors"
                >
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`https://wa.me/91${BRAND_INFO.whatsapp.replace(/\s/g, '')}`}
                  className="text-hon-light-gray hover:text-white transition-colors"
                >
                  WhatsApp: {BRAND_INFO.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="text-hon-light-gray hover:text-white transition-colors"
                >
                  {BRAND_INFO.email}
                </a>
              </li>
              <li className="text-hon-light-gray text-xs">
                {BRAND_INFO.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-hon-green pt-8">
          <p className="text-center text-hon-light-gray text-sm">
            © 2024 House of Nuts. GSTIN: {BRAND_INFO.gstin}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/91${BRAND_INFO.whatsapp.replace(/\s/g, '')}?text=Hello%20House%20of%20Nuts,%20I%20would%20like%20to%20know%20more%20about%20your%20products.`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-colors"
    >
      <svg
        className="w-7 h-7"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.039-5.02 5.618-5.02 9.262 0 3.280 1.023 6.388 2.948 8.986l-3.135 1.143 1.208-3.93c1.676 2.323 4.206 3.861 7.046 3.861 5.487 0 9.854-4.365 9.854-9.75 0-2.646-.639-5.127-1.852-7.31-1.207-2.15-2.964-3.95-5.031-5.122-2.067-1.17-4.38-1.789-6.987-1.789z" />
      </svg>
    </motion.a>
  );
}
