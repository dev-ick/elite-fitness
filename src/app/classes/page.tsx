"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function PlansPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* Header */}
      <section className="relative h-[90vh] px-6 overflow-hidden">
        <Image
          src="/gymbg/bg26.jpg"
          alt="Workout Plans Background"
          fill
          priority
          className="object-cover brightness-[0.45]"
        />

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Workout Plans & Memberships
            </motion.h1>

            <p className="text-gray-300 max-w-2xl mx-auto">
              Choose a training plan that aligns with your fitness goal, lifestyle, and experience level.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-20" />
      </section>

      {/* FAT LOSS & CONDITIONING */}
      <Section title="Fat Loss & Conditioning">
        <div className="grid md:grid-cols-2 gap-8">
          <PlanCard
            title="Fat Burn"
            outcome="Lose body fat and improve conditioning"
            features={[
              "3–5 workouts per week",
              "HIIT & full-body sessions",
              "Cardio included",
              "Progress tracking",
            ]}
            idealFor="Beginners and lifestyle clients"
            price="KSh 4,500 / month"
            image="/gymbg/bg34.jpg"
          />

          <PlanCard
            title="Conditioning Plus"
            outcome="Build stamina, endurance, and work capacity"
            features={[
              "Circuit-based training",
              "Functional workouts",
              "Group classes",
              "Coach guidance",
            ]}
            idealFor="Active individuals and athletes"
            price="KSh 6,000 / month"
            image="/gymbg/bg27.jpg"
          />
        </div>
      </Section>

      {/* MUSCLE & STRENGTH */}
      <Section title="Muscle & Strength">
        <div className="grid md:grid-cols-3 gap-8">
          <PlanCard
            title="Muscle Build"
            outcome="Gain lean muscle with structured training"
            features={[
              "Push / Pull / Legs split",
              "Progressive overload",
              "Gym access",
              "Workout tracking",
            ]}
            idealFor="Intermediate gym members"
            price="KSh 6,500 / month"
            image="/gymbg/bg32.jpg"
          />

          <PlanCard
            title="Strength Pro"
            outcome="Increase maximal strength safely"
            features={[
              "Squat, Bench, Deadlift focus",
              "Low-rep strength cycles",
              "Periodized programming",
              "Coach support",
            ]}
            idealFor="Advanced lifters"
            price="KSh 8,000 / month"
            image="/gymbg/bg33.jpg"
            highlighted
          />

          <PlanCard
            title="General Fitness"
            outcome="Stay active, healthy, and consistent"
            features={[
              "Full-body routines",
              "Flexible schedule",
              "Moderate intensity",
              "Mobility included",
            ]}
            idealFor="Busy professionals"
            price="KSh 5,000 / month"
            image="/gymbg/bg28.jpg"
          />
        </div>
      </Section>

      {/* WELLNESS */}
      <Section title="Wellness & Recovery">
        <div className="grid md:grid-cols-2 gap-8">
          <PlanCard
            title="Body Toning"
            outcome="Improve muscle definition and shape"
            features={[
              "High-rep strength",
              "Core & glutes focus",
              "Light to moderate weights",
              "Group sessions",
            ]}
            idealFor="Clients focused on aesthetics"
            price="KSh 5,500 / month"
            image="/gymbg/bg27.jpg"
          />

          <PlanCard
            title="Mobility & Recovery"
            outcome="Improve flexibility and movement quality"
            features={[
              "Stretching routines",
              "Joint mobility work",
              "Low-impact sessions",
              "Injury prevention",
            ]}
            idealFor="Desk workers and recovery-focused clients"
            price="KSh 4,000 / month"
            image="/gymbg/bg29.jpg"
          />
        </div>
      </Section>

      <section className="py-24 text-center text-gray-400 text-sm space-y-2">
        <p>No long-term contracts • Cancel anytime</p>
        <p>All plans suitable for all fitness levels</p>
      </section>
    </main>
  );
}

/* ---------------- Shared Components ---------------- */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-xl md:text-2xl font-semibold border-l-4 border-[#00FF00] pl-4">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

function PlanCard({
  title,
  outcome,
  features,
  idealFor,
  price,
  image,
  highlighted = false,
}: {
  title: string;
  outcome: string;
  features: string[];
  idealFor: string;
  price: string;
  image: string;
  highlighted?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      className={`group rounded-2xl overflow-hidden border ${
        highlighted ? "border-[#00FF00]" : "border-white/10"
      } bg-black`}
    >
      <div className="relative h-72 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

        {highlighted && (
          <span className="absolute top-4 right-4 z-10 text-xs font-semibold bg-[#00FF00] text-black px-3 py-1 rounded-full">
            Most Popular
          </span>
        )}
      </div>

      <div className="p-6 space-y-5">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-gray-400 mt-1">{outcome}</p>
        </div>

        <ul className="space-y-2 text-sm">
          {features.map((f, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-[#00FF00]">•</span>
              <span className="text-gray-300">{f}</span>
            </li>
          ))}
        </ul>

        <p className="text-xs text-gray-500 italic">
          Ideal for: {idealFor}
        </p>

        <div className="pt-4 border-t border-white/10 space-y-4">
          <p className="text-3xl font-extrabold text-[#00FF00]">{price}</p>

          <Link
            href="/classes"
            className="block text-center border border-[#00FF00] text-[#00FF00] py-3 rounded-lg hover:bg-[#00FF00] hover:text-black transition"
          >
            Choose Plan
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
