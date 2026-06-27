'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PRODUCTS, BENEFITS, WHY_CHOOSE, TRUST_POINTS, BRAND_INFO } from '@/data';
import { useRouter } from 'next/navigation';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Why Choose Us */}
      <WhyChooseSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Our Story */}
      <OurStorySection />

      {/* Trust Section */}
      <TrustSection />

      {/* Newsletter */}
      <NewsletterSection email={email} setEmail={setEmail} />
    </>
  );
}

function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-hon-cream via-hon-light-cream to-white"></div>
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-5"
          viewBox="0 0 1200 600"
          fill="none"
        >
          <circle cx="200" cy="100" r="150" fill="#1a4d2e" />
          <circle cx="1000" cy="500" r="200" fill="#d4a574" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="heading-hero text-hon-dark mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Premium Bihar Makhana
            <br />
            <span className="text-hon-gold">Delivered To Your Doorstep</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-hon-light-gray mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Healthy • Crunchy • Naturally Nutritious
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button
              onClick={() => router.push('/shop')}
              className="btn-primary"
            >
              Shop Now
            </button>
            <a
              href={`https://wa.me/91${BRAND_INFO.whatsapp.replace(/\s/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              WhatsApp Us
            </a>
          </motion.div>
        </motion.div>

        {/* Product Preview Cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 md:mt-24"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              variants={item}
              className="card p-4 text-center group cursor-pointer hover:scale-105 transition-transform"
              onClick={() => router.push(`/product/${product.id}`)}
            >
              <div className="bg-hon-cream h-40 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-6xl">📦</div>
              </div>
              <h3 className="font-semibold text-sm md:text-base text-hon-dark mb-1">
                {product.name}
              </h3>
              <p className="text-xs text-hon-light-gray mb-2">{product.weight}</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg font-bold text-hon-dark">₹{product.price}</span>
                <span className="text-xs line-through text-hon-light-gray">
                  ₹{product.mrp}
                </span>
              </div>
              <div className="mt-2 inline-block bg-hon-gold text-hon-gray text-xs font-bold px-2 py-1 rounded">
                {product.discount}% OFF
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  const router = useRouter();

  return (
    <section className="section bg-white">
      <div className="section-container">
        <motion.h2
          className="heading-lg text-center text-hon-dark mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Featured Products
        </motion.h2>
        <p className="text-center text-hon-light-gray mb-12 max-w-2xl mx-auto">
          Handpicked premium makhana selections for your healthy lifestyle
        </p>

        <motion.div
          className="grid-products"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {PRODUCTS.slice(0, 4).map((product) => (
            <motion.div
              key={product.id}
              variants={item}
              className="card overflow-hidden hover:shadow-xl transition-shadow"
              onClick={() => router.push(`/product/${product.id}`)}
            >
              <div className="bg-hon-cream h-48 flex items-center justify-center relative overflow-hidden">
                <div className="text-7xl group-hover:scale-110 transition-transform">📦</div>
                <div className="absolute top-4 right-4 bg-hon-gold text-hon-gray px-3 py-1 rounded-full text-sm font-bold">
                  {product.discount}% OFF
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-hon-dark mb-2">{product.name}</h3>
                <p className="text-sm text-hon-light-gray mb-3">{product.weight}</p>
                <p className="text-xs text-hon-light-gray mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xl font-bold text-hon-dark">₹{product.price}</div>
                    <div className="text-xs line-through text-hon-light-gray">₹{product.mrp}</div>
                  </div>
                  <button className="btn-primary text-sm py-2 px-4">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link href="/shop" className="btn-outline">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <section className="section">
      <div className="section-container">
        <motion.h2
          className="heading-lg text-center text-hon-dark mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Why Choose House of Nuts?
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {WHY_CHOOSE.map((point, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="card p-6 text-center"
            >
              <p className="text-hon-dark font-semibold text-sm md:text-base">
                {point}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="section bg-white">
      <div className="section-container">
        <motion.h2
          className="heading-lg text-center text-hon-dark mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Benefits Of Makhana
        </motion.h2>
        <p className="text-center text-hon-light-gray mb-12">
          Why makhana is the perfect healthy snack choice
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {BENEFITS.map((benefit, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="card p-8 text-center hover:scale-105 transition-transform"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-hon-dark mb-2">
                {benefit.title}
              </h3>
              <p className="text-hon-light-gray">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function OurStorySection() {
  return (
    <section className="section">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-hon-cream h-80 rounded-2xl flex items-center justify-center text-7xl">
              🌾
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-lg text-hon-dark mb-4">Our Story</h2>
            <p className="text-hon-light-gray mb-4">
              House of Nuts was founded with a mission to bring premium-quality Bihar Makhana directly to Indian households.
            </p>
            <p className="text-hon-light-gray mb-4">
              We believe healthy snacking should be delicious, nutritious, and accessible to everyone.
            </p>
            <p className="text-hon-light-gray">
              Every pack is carefully selected and hygienically packed to deliver freshness and authentic taste. We work directly with farmers to ensure the highest quality standards.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="section bg-white">
      <div className="section-container">
        <motion.h2
          className="heading-lg text-center text-hon-dark mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Trust & Compliance
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {TRUST_POINTS.map((point, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="card p-6 text-center"
            >
              <div className="text-4xl mb-3">{point.icon}</div>
              <h3 className="font-semibold text-hon-dark mb-1">{point.label}</h3>
              <p className="text-xs text-hon-light-gray">{point.value}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 card p-8 text-center bg-hon-cream"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-hon-dark font-semibold">
            ✓ FSSAI Certified Food Business
          </p>
          <p className="text-sm text-hon-light-gray mt-2">
            Coming Soon - Ensuring the highest food safety standards
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function NewsletterSection({
  email,
  setEmail,
}: {
  email: string;
  setEmail: (email: string) => void;
}) {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section className="section bg-hon-dark text-white">
      <div className="section-container max-w-2xl text-center">
        <motion.h2
          className="heading-lg text-white mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Subscribe For Updates
        </motion.h2>
        <p className="text-hon-light-cream mb-8">
          Get exclusive offers, health tips, and new product launches delivered to your inbox.
        </p>

        <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg text-hon-gray"
            required
          />
          <button
            type="submit"
            className="btn-secondary px-8 py-3 whitespace-nowrap"
          >
            {subscribed ? 'Subscribed! ✓' : 'Subscribe'}
          </button>
        </form>
      </div>
    </section>
  );
}
