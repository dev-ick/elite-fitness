"use client";  // For potential animations

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";  // Optional: For fade-in
import { MapPin, Phone, DollarSign, Dumbbell, Apple, Clock, Mail } from "lucide-react";



export default function Home() {
  return (
    <>
      {/* Full-Bleed Hero – Starts at absolute top, image covers behind navbar */}
      <section className="relative h-screen w-full">
        {/* Background Image – Fills entire viewport including behind navbar */}
        <Image
          src="/gymbg/bg5.jpg"  // Your local file — sharp, moody gym interior
          alt="Elite Fitness – Premium Training Environment"
          fill
          className="object-cover brightness-[0.5]"
          priority
          quality={100}
        />

        {/* Content Overlay – Split top tagline + bottom buttons */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent pointer-events-none" />

        {/* Your existing content overlay */}
        <div className="relative z-10 flex flex-col justify-between h-screen px-6 max-w-7xl mx-auto">
          {/* Top tagline */}
        <div className="mt-32 text-center">
          {/* First line – Bold, large but not overwhelming */}
          <p className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide text-white leading-tight mb-6">
            Transform Your Body.
          </p>

          {/* Second line – Smaller, lighter, narrower for hierarchy */}
          <p className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wider text-white leading-tight max-w-3xl mx-auto">
            Dominate Your Goals.
          </p>
        </div>

          {/* Bottom buttons */}
        <div className="mb-12 text-center">  {/* Reduced from mb-20 to mb-12 */}
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-16 justify-center">
            <Link
              href="/classes"
              className="text-white font-bold text-xl px-8 py-4 border-2 border-[#00FF00] rounded-lg transition hover:bg-[#00FF00]/10"
            >
              Get Started
            </Link>
          </div>
        </div>
        </div>
      </section>

      {/* Teaser Section: "Why Elite" – Solid black with top fade for seamless blend */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-black py-32 overflow-hidden"
      >
        {/* Top Fade Gradient Overlay */}
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black to-transparent pointer-events-none opacity-80" />

        {/* Decorative blur elements from the second section */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#00FF00]/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#00FF00]/5 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* First part: Why Choose Elite Fitness - Three image columns */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-16 tracking-tight">
            Why Choose Elite Fitness
          </h2>

          <div className="grid md:grid-cols-3 gap-12 mb-32">
            {/* Column 1 */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              transition={{ delay: 0.1 }}
              className="text-center group"
            >
              <Image 
                src="/gymbg/bg13.jpg" 
                alt="Workouts" 
                width={400} 
                height={300} 
                className="mx-auto mb-6 rounded-lg object-cover group-hover:scale-105 transition" 
              />
              <h3 className="text-3xl font-semibold text-white mb-4">Expert Workouts</h3>
              <p className="text-gray-300">Beginner to intermediate bodybuilding, weight loss programs, and women-only sessions for real results.</p>
              <div className="mt-8">
                <Link
                  href="/classes"
                  className="group relative text-[#00FF00] font-light text-xl px-8 py-4 inline-block overflow-hidden"
                >
                  Start Training
                  <span className="absolute left-0 right-0 bottom-0 block h-[2px] bg-[#00FF00] transform origin-center scale-x-0 transition-transform duration-600 ease-in-out group-hover:scale-x-100" />
                </Link>
              </div>
            </motion.div>

            {/* Column 2 */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              transition={{ delay: 0.2 }}
              className="text-center group"
            >
              <div className="relative mx-auto mb-6 w-full max-w-md overflow-hidden rounded-lg group">
                <Image 
                  src="/gymbg/bg11.jpg" 
                  alt="Nutrition" 
                  width={400} 
                  height={300} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                />
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.9)_90%,black_100%)] opacity-80"></div>
              </div>
              <h3 className="text-3xl font-semibold text-white mb-4">Nutrition Edge</h3>
              <p className="text-gray-300">Tailored plans with supplement recommendations for recovery, muscle gain, and sustainable weight loss.</p>
              <div className="mt-8">
                <Link
                  href="/classes"
                  className="group relative text-[#00FF00] font-light text-xl px-8 py-4 inline-block overflow-hidden"
                >
                  Learn More
                  <span className="absolute left-0 right-0 bottom-0 block h-[2px] bg-[#00FF00] transform origin-center scale-x-0 transition-transform duration-600 ease-in-out group-hover:scale-x-100" />
                </Link>
              </div>
            </motion.div>

            {/* Column 3 */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              transition={{ delay: 0.3 }}
              className="text-center group"
            >
              <div className="relative mx-auto mb-6 w-full max-w-2xl overflow-hidden rounded-lg group">
                <Image 
                  src="/gymbg/bg6.jpg" 
                  alt="Facilities" 
                  width={800} 
                  height={600} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                />
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.9)_90%,black_100%)] opacity-70"></div>
              </div>
              <h3 className="text-3xl font-semibold text-white mb-4">Premium Spaces</h3>
              <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                Modern Nairobi-area facilities with certified trainers ready to guide your journey.
              </p>
              <div className="mt-8">
                <Link
                  href="/classes"
                  className="group relative text-[#00FF00] font-light text-xl px-8 py-4 inline-block overflow-hidden"
                >
                  Tour Facilities
                  <span className="absolute left-0 right-0 bottom-0 block h-[2px] bg-[#00FF00] transform origin-center scale-x-0 transition-transform duration-600 ease-in-out group-hover:scale-x-100" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Second part: Community / Features section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              A space where <span className="text-[#00FF00]">everyone</span> feels welcome
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Experience fitness redefined with premium amenities, expert guidance, and a community that supports your journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="relative bg-black rounded-2xl p-8 h-full border border-white hover:border-[#00FF00]/30 hover:shadow-2xl hover:shadow-[#00FF00]/10 transition-all duration-300">
                <div className="absolute -top-4 left-8 w-16 h-16 rounded-xl bg-black border border-[#00FF00] flex items-center justify-center shadow-lg">
                  <DollarSign className="w-8 h-8 text-[#00FF00]" />
                </div>
                <div className="pt-12">
                  <h3 className="text-white text-2xl font-bold mb-4">Best Value for Money</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Premium facilities, expert coaching, and cutting-edge equipment at an accessible price point.
                  </p>
                  <Link href="/pricing" className="inline-flex items-center text-[#00FF00] font-semibold group/link">
                    Learn More
                    <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="relative bg-black rounded-2xl p-8 h-full border border-white hover:border-[#00FF00]/30 hover:shadow-2xl hover:shadow-[#00FF00]/10 transition-all duration-300">
                <div className="absolute -top-4 left-8 w-16 h-16 rounded-xl bg-black border border-[#00FF00] flex items-center justify-center shadow-lg">
                  <Dumbbell className="w-8 h-8 text-[#00FF00]" />
                </div>
                <div className="pt-12">
                  <h3 className="text-white text-2xl font-bold mb-4">Cutting-Edge Equipment</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    State-of-the-art cardio and strength machines in an immaculate, spacious training environment.
                  </p>
                  <Link href="/facilities" className="inline-flex items-center text-[#00FF00] font-semibold group/link">
                    Explore Equipment
                    <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="relative bg-black rounded-2xl p-8 h-full border border-white hover:border-[#00FF00]/30 hover:shadow-2xl hover:shadow-[#00FF00]/10 transition-all duration-300">
                <div className="absolute -top-4 left-8 w-16 h-16 rounded-xl bg-black border border-[#00FF00] flex items-center justify-center shadow-lg">
                  <Apple className="w-8 h-8 text-[#00FF00]" />
                </div>
                <div className="pt-12">
                  <h3 className="text-white text-2xl font-bold mb-4">Nutrition & Supplements</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Personalized nutrition plans and premium supplement guidance for optimal performance and recovery.
                  </p>
                  <Link href="/nutrition" className="inline-flex items-center text-[#00FF00] font-semibold group/link">
                    Get Guidance
                    <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group"
            >
              <div className="relative bg-black rounded-2xl p-8 h-full border border-white hover:border-[#00FF00]/30 hover:shadow-2xl hover:shadow-[#00FF00]/10 transition-all duration-300">
                <div className="absolute -top-4 left-8 w-16 h-16 rounded-xl bg-black border border-[#00FF00] flex items-center justify-center shadow-lg">
                  <div className="flex items-center justify-center w-8 h-8 bg-black rounded-full">
                    <span className="text-lg font-bold text-[#00FF00]">👥</span>
                  </div>
                </div>
                <div className="pt-12">
                  <h3 className="text-white text-2xl font-bold mb-4">Supportive Community</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Join a welcoming community of fitness enthusiasts, trainers, and friends who motivate each other.
                  </p>
                  <Link href="/community" className="inline-flex items-center text-[#00FF00] font-semibold group/link">
                    Join Community
                    <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}