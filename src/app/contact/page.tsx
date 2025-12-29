"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="relative h-[95vh] w-full">
        <Image
          src="/gymbg/bg32.jpg" // use one of your gym images
          alt="Contact our gym"
          fill
          priority
          className="object-cover brightness-[0.45]"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold max-w-4xl"
          >
            Let’s Talk About Your Fitness Goals
          </motion.h1>

          <p className="mt-6 max-w-2xl text-gray-300 text-lg">
            Whether you’re just starting out or ready to level up,
            our team is here to guide you — no pressure, no commitment.
          </p>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact-form"
        className="px-6 py-32"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">

          {/* FORM CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-900/80 backdrop-blur rounded-2xl p-8 md:p-10 border border-white/10"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Send Us a Message
            </h2>
            <p className="text-gray-400 mb-8">
              We usually reply within 24 hours.
            </p>

            <form className="space-y-6">
              <Input label="Full Name*" placeholder="Your name" />
              <Input label="Email Address*" type="email" placeholder="you@example.com" />
              <Input label="Phone (optional)" placeholder="+254 7XX XXX XXX" />

              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  What can we help you with?*
                </label>
                <select className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 focus:border-[#00FF00] outline-none">
                  <option>Membership inquiry</option>
                  <option>Personal training</option>
                  <option>Nutrition guidance</option>
                  <option>General question</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Message*
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us a bit about your goals..."
                  className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 focus:border-[#00FF00] outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-lg border border-[#00FF00] text-[#00FF00] font-semibold hover:bg-[#00FF00] hover:text-black transition"
              >
                Send Message
              </button>

              <p className="text-xs text-gray-400 text-center">
                No spam. Your information stays private.
              </p>
            </form>
          </motion.div>

          {/* INFO + TRUST */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Visit or Reach Us Directly
              </h3>

              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="font-semibold text-white">Phone:</span>{" "}
                  <a href="tel:+254700000000" className="text-[#00FF00]">
                    +254 700 000 000
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-white">Email:</span>{" "}
                  <a href="mailto:info@gym.com" className="text-[#00FF00]">
                    info@gym.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-white">Location:</span>{" "}
                  123 Fitness Street, Nairobi
                </p>
                <p>
                  <span className="font-semibold text-white">Hours:</span>{" "}
                  Mon–Fri 5AM–10PM · Sat–Sun 7AM–8PM
                </p>
              </div>
            </div>

            {/* MAP */}
            <div className="h-72 rounded-2xl overflow-hidden border border-white/10">
              <iframe
                title="Demo Map — Nairobi"
                className="w-full h-full"
                loading="lazy"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19958.148281492556!2d36.7812995!3d-1.2920659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10a4053b8f1d%3A0x7b9f56c06e3f87b7!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1730000000000"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>


            {/* QUICK CTA */}
            <div className="p-6 rounded-xl bg-zinc-900 border border-white/10">
              <p className="text-lg font-semibold mb-2">
                Prefer to talk instead?
              </p>
              <p className="text-gray-400 mb-4">
                Call us and we’ll guide you through your options.
              </p>
              <Link
                href="tel:+254700000000"
                className="inline-block border border-[#00FF00] text-[#00FF00] px-6 py-3 rounded-lg hover:bg-[#00FF00] hover:text-black transition"
              >
                Call Now
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* FOOTER REASSURANCE */}
      <section className="px-6 py-16 text-center text-gray-300 text-lg space-y-3">
        <p>Friendly team • No pressure • Fast response</p>
        <p>Helping you start strong and stay consistent</p>
      </section>

    </main>
  );
}

/* ---------------- Small Input Component ---------------- */

function Input({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block mb-2 text-sm text-gray-300">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 focus:border-[#00FF00] outline-none"
      />
    </div>
  );
}
