"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


/* ----------------------------- Data ----------------------------- */

const trainers = [
  {
    id: 1,
    name: "Daniel Mwangi",
    role: "Strength & Muscle Coach",
    experience: "6+ years experience",
    certification: "ISSA Certified",
    focuses: ["Muscle Gain", "Strength", "Beginners"],
    bio: "Daniel focuses on structured strength programs that build muscle safely and progressively.",
    philosophy: "Master the basics, then overload intelligently.",
    idealClient: "Anyone serious about gaining strength and muscle",
    availability: "Morning & Evening",
    image:
      "/gymbg/bg36.jpg",
  },
  {
    id: 2,
    name: "Faith Achieng",
    role: "Fat Loss & Conditioning Coach",
    experience: "5+ years experience",
    certification: "NASM Certified",
    focuses: ["Weight Loss", "Conditioning", "Lifestyle"],
    bio: "Faith specializes in fat loss programs that are realistic, sustainable, and results-driven.",
    philosophy: "Consistency beats intensity.",
    idealClient: "Lifestyle clients and beginners",
    availability: "Morning",
    image:
      "/gymbg/bg37.jpg",
  },
  {
    id: 3,
    name: "Kevin Otieno",
    role: "Mobility & Recovery Specialist",
    experience: "7+ years experience",
    certification: "Rehab & Mobility Specialist",
    focuses: ["Recovery", "Mobility", "Injury Prevention"],
    bio: "Kevin helps clients move better, reduce pain, and train safely long-term.",
    philosophy: "Movement quality comes first.",
    idealClient: "Desk workers & recovering athletes",
    availability: "Evening",
    image:
      "/gymbg/bg38.jpg",
  },
];

/* ----------------------------- Page ----------------------------- */

export default function TrainersPage() {
  const [activeGoal, setActiveGoal] = useState<string | null>(null);

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero */}
    <section className="relative h-[95vh] px-6 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/gymbg/bg35.jpg" 
        alt="Personal Trainers"
        fill
        priority
        className="object-cover brightness-[0.45]"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            Meet Our Personal Trainers
          </motion.h1>

          <p className="text-gray-300 max-w-2xl mx-auto">
            Certified professionals dedicated to helping you train smarter,
            safer, and stronger.
          </p>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-20" />
    </section>


      {/* Value Proposition */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-white">
          <Value_Item text="Certified & experienced coaches" />
          <Value_Item text="Goal-based training programs" />
          <Value_Item text="One-on-one accountability" />
          <Value_Item text="Safe & structured progression" />
        </div>
      </section>




      {/* Trainers Grid */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto space-y-16">
          <h2 className="text-2xl font-semibold border-l-4 border-[#00FF00] pl-4">
            Our Trainers
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {trainers.map((trainer) => {
              const matchesGoal =
                !activeGoal || trainer.focuses.includes(activeGoal);

              return (
                <TrainerCard
                  key={trainer.id}
                  trainer={trainer}
                  dimmed={!matchesGoal}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Goal Matching */}
      <section className="px-6 py-24 bg-black">
        <div className="max-w-5xl mx-auto space-y-10 text-center">
          <h2 className="text-2xl font-semibold">
            Find the Right Trainer for Your Goals
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Weight Loss",
              "Muscle Gain",
              "Strength",
              "Beginners",
              "Recovery",
            ].map((goal) => (
              <button
                key={goal}
                onClick={() =>
                  setActiveGoal(activeGoal === goal ? null : goal)
                }
                className={`px-4 py-2 rounded-full border text-sm transition ${
                  activeGoal === goal
                    ? "border-[#00FF00] text-[#00FF00]"
                    : "border-white/20 text-gray-300 hover:border-white/40"
                }`}
              >
                {goal}
              </button>
            ))}
          </div>

          {activeGoal && (
            <p className="text-xs text-gray-400">
              Showing trainers for: <strong>{activeGoal}</strong>
            </p>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              A simple, proven process designed to help you train smarter and see results faster.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <Step
              number="01"
              title="Consultation & Assessment"
              text="We assess your goals, movement, and fitness level."
            />
            <Step
              number="02"
              title="Custom Training Plan"
              text="Your trainer builds a program tailored to you."
            />
            <Step
              number="03"
              title="Ongoing Coaching"
              text="Track progress and adjust as you improve."
            />
          </div>

        </div>
      </section>


      {/* Trust */}
      <section className="px-6 py-16 text-center text-gray-200 space-y-3">
        <p className="text-lg md:text-xl font-medium">
          No long-term contracts • Cancel anytime
        </p>
        <p className="text-lg md:text-xl font-medium">
          All plans suitable for all fitness levels
        </p>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <h3 className="text-2xl font-semibold">
            Ready to Train With a Professional?
          </h3>
          <Link
            href="/contact"
            className="inline-block border border-[#00FF00] text-[#00FF00] px-8 py-3 rounded-lg hover:bg-[#00FF00] hover:text-black transition"
          >
            Talk to a Trainer
          </Link>
        </div>
      </section>
    </main>
  );
}

/* ----------------------------- Components ----------------------------- */

function ValueItem({ text }: { text: string }) {
  return <p className="text-center">{text}</p>;
}

function TrainerCard({
  trainer,
  dimmed,
}: {
  trainer: any;
  dimmed: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`rounded-xl overflow-hidden border border-white/10 bg-black transition ${
        dimmed ? "opacity-30" : "opacity-100"
      }`}
    >
      <div className="relative h-72">
        <Image
          src={trainer.image}
          alt={trainer.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-lg font-semibold">{trainer.name}</h3>
          <p className="text-sm text-gray-400">{trainer.role}</p>
        </div>

        <p className="text-xs text-gray-500">
          {trainer.experience} • {trainer.certification}
        </p>

        <div className="flex flex-wrap gap-2 text-xs">
          {trainer.focuses.map((f: string) => (
            <span
              key={f}
              className="border border-white/20 px-2 py-0.5 rounded-full"
            >
              {f}
            </span>
          ))}
        </div>

        <Link
          href="/contact"
          className="block text-center text-sm border border-[#00FF00] text-[#00FF00] py-2 rounded-lg hover:bg-[#00FF00] hover:text-black transition"
        >
          Train With Me
        </Link>
      </div>
    </motion.div>
  );
}

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="space-y-3">
      <p className="text-[#00FF00] font-mono">{number}</p>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-400">{text}</p>
    </div>
  );
}

function Value_Item({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex-shrink-0 mt-1 text-[#00FF00] text-2xl font-bold">
        ✓
      </span>
      <p className="text-lg md:text-xl font-semibold leading-snug text-white">
        {text}
      </p>
    </div>
  );
}