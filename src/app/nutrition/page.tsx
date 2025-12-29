"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ----------------------------- Data ----------------------------- */

const stats = [
  { label: "Personalized Meal Plans", value: "1,000+" },
  { label: "Certified Nutritionists", value: "5+" },
  { label: "Supplements Backed by Research", value: "All" },
];


const supplements = [
  {
    title: "Protein Powders",
    description: "Support muscle recovery and growth with high-quality protein.",
    image: "/gymbg/bg20.jpg",
  },
  {
    title: "Vitamins & Minerals",
    description: "Boost energy, immunity, and overall health.",
    image: "/gymbg/bg22.jpg",
  },
  {
    title: "Pre/Post Workout",
    description: "Enhance performance and recovery around your training sessions.",
    image: "/gymbg/bg21.jpg",
  },
];

const nutritionists = [
  {
    name: "Sarah K.",
    role: "Certified Nutritionist",
    tip: "Personalized guidance ensures sustainable results.",
    image: "/gymbg/bg25.jpg",
  },
  {
    name: "David M.",
    role: "Sports Dietitian",
    tip: "Nutrition fuels performance. Small changes yield big results.",
    image: "/gymbg/bg24.jpg",
  },
  {
    name: "Lina W.",
    role: "Wellness Coach",
    tip: "Healthy habits are built gradually, focus on consistency.",
    image: "/gymbg/bg23.jpg",
  },
];

const testimonials = [
  {
    quote: "Their nutrition advice completely changed my performance and recovery.",
    author: "James K.",
  },
  {
    quote: "The meal plans are simple, effective, and easy to follow.",
    author: "Linda M.",
  },
  {
    quote: "I feel healthier, more energetic, and motivated every day.",
    author: "Peter W.",
  },
];

/* ----------------------------- Page ----------------------------- */

export default function NutritionPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* Hero Section */}
      <section className="relative min-h-[85vh] w-full bg-black">
        <Image
          src="/gymbg/bg14.jpg"
          alt="Nutrition Hero"
          fill
          className="object-cover brightness-[0.5]"
          priority
        />

        {/* Centered hero content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Fuel Your Fitness. Nourish Your Body.
          </motion.h1>

          <p className="text-gray-300 max-w-2xl">
            Expert nutrition plans, supplement guidance, and practical tips tailored for you.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="absolute bottom-16 left-0 right-0 flex justify-center z-20">
          <Link
            href="/contact"
            className="border border-[#00FF00] text-[#00FF00] px-6 py-3 rounded-lg hover:bg-[#00FF00] hover:text-black transition"
          >
            Get a Free Consultation
          </Link>
        </div>

        {/* Gradient starts BELOW the CTA */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
      </section>


      {/* Stats / Value Strip */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="text-4xl font-bold text-[#00FF00]">{s.value}</p>
              <p className="text-gray-300 mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* Tips / Guides */}
      {/* How Our Nutrition Coaching Works */}
      <section className="px-6 py-24 bg-black">
        <div className="max-w-7xl mx-auto space-y-12">
          <h2 className="text-2xl font-semibold border-l-4 border-[#00FF00] pl-4">
            How Our Nutrition Coaching Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Assessment",
                description:
                  "We evaluate your current diet, fitness level, and lifestyle to create a baseline."
              },
              {
                step: "2",
                title: "Custom Plan",
                description:
                  "Receive a personalized meal and supplement plan designed to meet your fitness goals."
              },
              {
                step: "3",
                title: "Ongoing Support",
                description:
                  "Track progress with weekly check-ins, adjustments, and expert guidance."
              },
              {
                step: "4",
                title: "Achieve Results",
                description:
                  "Experience sustainable fitness and nutrition improvements tailored just for you."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-black border border-white text-center flex flex-col items-center"

              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00FF00] text-black font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Supplements Section */}
      <section className="px-6 py-24 bg-black">
        <div className="max-w-7xl mx-auto space-y-12">
          <h2 className="text-2xl font-semibold border-l-4 border-[#00FF00] pl-4">
            Supplements We Recommend
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {supplements.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl overflow-hidden border border-white/10 bg-black shadow-lg"
              >
                {/* Image */}
                <div className="relative w-full h-64">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill                      // takes full width & height of parent
                    className="object-cover rounded-t-xl"
                    unoptimized
                  />
                </div>

                {/* Title & Description */}
                <div className="p-4 bg-black/50">
                  <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-gray-300">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Nutritionists / Expert Staff */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto space-y-12">
          <h2 className="text-2xl font-semibold border-l-4 border-[#00FF00] pl-4">
            Meet Our Nutrition Experts
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {nutritionists.map((n, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 bg-black text-center"
              >
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                  <Image src={n.image} alt={n.name} fill className="object-cover" />
                </div>
                <h3 className="text-lg font-semibold">{n.name}</h3>
                <p className="text-sm text-gray-400">{n.role}</p>
                <p className="mt-2 italic text-gray-300">"{n.tip}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <h3 className="text-2xl font-semibold">
            Ready to Optimize Your Nutrition?
          </h3>
          <Link
            href="/contact"
            className="inline-block border border-[#00FF00] text-[#00FF00] px-8 py-3 rounded-lg hover:bg-[#00FF00] hover:text-black transition"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
