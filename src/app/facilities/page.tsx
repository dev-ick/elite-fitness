"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ----------------------------- Data ----------------------------- */

const reassurancePoints = [
  "Spacious layout — train without overcrowding",
  "Clearly defined zones for every fitness level",
  "Daily cleaning & well-maintained equipment",
  "Certified coaches available on the floor",
];

const spaces = [
  {
    title: "Cardio Zone",
    description: "Multiple machines available so you never feel rushed or crowded.",
    image: "/gymbg/bg1.jpg",
  },
  {
    title: "Strength Training Area",
    description: "Quality equipment laid out for safe, progressive strength work.",
    image: "/gymbg/bg33.jpg",
  },
  {
    title: "Functional Training Zone",
    description: "Open space for mobility, conditioning, and athletic movement.",
    image: "/gymbg/bg29.jpg",
  },
  {
    title: "Yoga & Stretch Studio",
    description: "Quiet, calm space for recovery, flexibility, and balance.",
    image: "/gymbg/bg12.jpg",
  },
  {
    title: "Dressing Rooms & Lockers",
    description: "Relax, reset, and recover after your training sessions.",
    image: "/gymbg/bg39.jpg",
  },
    {
    title: "Size & Muscle Zone",
    description: "Multiple machines available so you never feel rushed or crowded.",
    image: "/gymbg/bg9.jpg",
  },
];

/* ----------------------------- Page ----------------------------- */

export default function FacilitiesPage() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="relative h-[95vh] w-full">
        <Image
          src="/gymbg/bg4.jpg"
          alt="Gym facilities"
          fill
          className="object-cover brightness-[0.45]"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold max-w-4xl"
          >
            Train in a Space Designed for Confidence, Comfort, and Results
          </motion.h1>

          <p className="mt-6 max-w-2xl text-gray-300 text-lg">
            A clean, spacious, and professionally designed gym environment —
            so you can focus on progress, not pressure.
          </p>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* REASSURANCE / TRUST */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
          {reassurancePoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4"
            >
              <span className="text-[#00FF00] text-2xl font-bold">✓</span>
              <p className="text-lg text-gray-300">{point}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHO THIS GYM IS FOR */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h2 className="text-3xl font-semibold">
            Designed for Every Stage of Your Fitness Journey
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-gray-300">
            <AudienceCard title="Beginners" text="Supportive, calm environment with no intimidation." />
            <AudienceCard title="Weight Loss" text="Cardio access, space, and structure to stay consistent." />
            <AudienceCard title="Strength & Performance" text="Dedicated zones for focused, serious training." />
            <AudienceCard title="Busy Professionals" text="Efficient layout so every session counts." />
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 py-24 bg-black">
        <div className="max-w-7xl mx-auto space-y-16">
          <h2 className="text-3xl font-semibold border-l-4 border-[#00FF00] pl-4">
            Explore Our Training Spaces
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {spaces.map((space, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl overflow-hidden border border-white/10 bg-black"
              >
                <div className="relative h-64">
                  <Image
                    src={space.image}
                    alt={space.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-semibold">{space.title}</h3>
                  <p className="text-sm text-gray-400">{space.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-3xl font-semibold">
            What Members Say About Training Here
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Testimonial
              quote="I joined as a complete beginner and never once felt judged."
              author="Linda M. — Member for 9 months"
            />
            <Testimonial
              quote="Clean, organized, and calm. You actually want to come train."
              author="James K. — Busy professional"
            />
            <Testimonial
              quote="Plenty of space and quality equipment. No chaos."
              author="Peter W. — Strength training focus"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-24 text-center bg-black">
        <div className="max-w-xl mx-auto space-y-6">
          <h3 className="text-3xl font-semibold">
            Come See the Space Before You Decide
          </h3>
          <p className="text-gray-300">
            No contracts. No pressure. Just a free walk-through.
          </p>
          <Link
            href="/contact"
            className="inline-block border border-[#00FF00] text-[#00FF00] px-10 py-4 rounded-lg hover:bg-[#00FF00] hover:text-black transition"
          >
            Schedule a Free Tour
          </Link>
        </div>
      </section>

      {/* FOOTER REASSURANCE */}
      <section className="px-6 py-16 text-center text-gray-300 text-base md:text-lg space-y-3">
        <p>Modern facilities • Certified trainers • Clean & welcoming environment</p>
        <p>No long-term commitment • Suitable for all fitness levels</p>
      </section>

    </main>
  );
}

/* ----------------------------- Components ----------------------------- */

function AudienceCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="p-6 border border-[#00FF00] rounded-xl bg-black space-y-2">
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-sm text-gray-400">{text}</p>
    </div>
  );
}

function Testimonial({ quote, author }: { quote: string; author: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 border border-white/10 rounded-xl bg-black"
    >
      <p className="italic text-gray-300">"{quote}"</p>
      <p className="mt-4 font-semibold">{author}</p>
    </motion.div>
  );
}
