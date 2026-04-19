import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MapPin } from 'lucide-react';

const imgHero = '/images/makeupbyurmikaur_1776599422724.png';
const imgFloralBg = '/images/makeupbyurmikaur_1776599411503.png';
const imgFloralInspire = '/images/makeupbyurmikaur_1776599417439.png';
const imgBeautyService = '/images/uurmikaurr_1776530868942.png';
const imgSkincarePrep = '/images/uurmikaurr_1776530862673.png';
const imgSummerGlow = '/images/makeupbyurmikaur_1776599396333.png';
const imgClassDive = '/images/makeupbyurmikaur_1776599387577.png';
const imgRoseShadow = '/images/makeupbyurmikaur_1776599391933.png';

const imgCouture1 = '/images/makeupbyurmikaur_1776599360692.png';
const imgCouture2 = '/images/uurmikaurr_1776530851457.png';
const imgCouture3 = '/images/uurmikaurr_1776530847000.png';
const imgCouture4 = '/images/uurmikaurr_1776530843242.png';
const imgCouture5 = '/images/uurmikaurr_1776530838850.png';
const imgCouture6 = '/images/uurmikaurr_1776530811688.png';

// Editorial grid fine lines components
const Crosshair = ({ className = '' }: { className?: string }) => (
  <div className={`absolute w-3 h-3 flex items-center justify-center pointer-events-none z-20 opacity-40 mix-blend-multiply ${className}`}>
    <div className="absolute w-full h-[1px] bg-brand-wine" />
    <div className="absolute h-full w-[1px] bg-brand-wine" />
  </div>
);

const FadeIn = ({ children, delay = 0, className = '' }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-5%' }}
    transition={{ duration: 0.9, delay, ease: [0.25, 1, 0.5, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <div className="font-sans antialiased text-brand-wine selection:bg-brand-rose selection:text-white pb-20 overflow-x-hidden max-w-[100vw]">
      
      {/* Navigation - Ultra Minimal */}
      <nav className="fixed top-0 left-0 w-full px-6 md:px-12 py-6 z-50 flex justify-between items-center border-[0.5px] border-b-brand-wine/20 bg-brand-bg/80 backdrop-blur-md">
        <div className="font-serif text-lg tracking-widest uppercase">Uurmi Kaurr</div>
        <button className="text-[10px] font-sans tracking-[0.2em] uppercase border border-brand-wine px-4 md:px-6 py-2 hover:bg-brand-wine hover:text-brand-cream transition-colors">
          Enroll Now
        </button>
      </nav>

      {/* Slice 1: Hero */}
      <section className="relative min-h-[95vh] border-b-[0.5px] border-brand-wine/20 grid grid-cols-1 lg:grid-cols-12 pt-[85px]">
        {/* Left Panel */}
        <div className="lg:col-span-5 p-6 sm:p-8 md:p-16 flex flex-col justify-center border-b-[0.5px] lg:border-b-0 lg:border-r-[0.5px] border-brand-wine/20 relative z-10 bg-brand-bg">
          <Crosshair className="-right-1.5 top-1/4 hidden lg:flex" />
          <Crosshair className="-bottom-1.5 right-1/4 lg:hidden" />
          
          <FadeIn>
            <p className="uppercase tracking-[0.35em] text-[10px] mb-12 opacity-70">An Empowering Journey</p>
            <div className="relative mb-20 z-10 w-full md:w-max">
              <h1 className="font-serif text-6xl md:text-8xl lg:text-[8rem] leading-[0.8] uppercase font-light">7 Days</h1>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none uppercase font-light mt-4 ml-1 md:ml-2">Pro Makeup</h1>
              <span className="font-script text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] absolute right-0 md:-right-36 -bottom-10 md:-bottom-16 text-brand-rose -rotate-6 mix-blend-multiply opacity-90 drop-shadow-sm pointer-events-none">masterclass</span>
            </div>
            
            <div className="space-y-4">
              <p className="flex items-center gap-6 text-[10px] tracking-[0.2em] uppercase opacity-80"><span className="w-8 md:w-12 h-[1px] bg-brand-wine opacity-50 shrink-0"></span> Be a Visionary</p>
              <p className="flex items-center gap-6 text-[10px] tracking-[0.2em] uppercase opacity-80"><span className="w-8 md:w-12 h-[1px] bg-brand-wine opacity-50 shrink-0"></span> Create Your Identity</p>
              <p className="flex items-center gap-6 text-[10px] tracking-[0.2em] uppercase opacity-80"><span className="w-8 md:w-12 h-[1px] bg-brand-wine opacity-50 shrink-0"></span> Elevate & Be Polished</p>
            </div>
          </FadeIn>
        </div>
        
        {/* Right Panel - Image */}
        <div className="lg:col-span-7 relative bg-brand-cream lg:p-8 p-6 border-t-[0.5px] border-brand-wine/20 lg:border-t-0 flex flex-col justify-center items-center">
          <div className="w-full max-w-lg lg:max-w-xl aspect-[3/4] relative overflow-hidden group shadow-2xl">
            <motion.img 
              style={{ y: heroY, scale: 1.15 }}
              src={imgHero} 
              className="absolute inset-0 w-full h-full object-cover saturate-[1.1] contrast-[1.1] opacity-95"
              alt="Editorial Makeup"
            />
            {/* Inner aesthetic frame */}
            <div className="absolute inset-4 lg:inset-6 border-[0.5px] border-white/60 pointer-events-none z-20">
              <Crosshair className="-top-1.5 -left-1.5 text-white mix-blend-normal opacity-70" />
              <Crosshair className="-bottom-1.5 -right-1.5 text-white mix-blend-normal opacity-70" />
            </div>
          </div>
        </div>
      </section>

      {/* Slice 2: About / Quote Asymmetry */}
      <section className="grid grid-cols-1 lg:grid-cols-12 border-b-[0.5px] border-brand-wine/20">
        <div className="lg:col-span-6 p-8 sm:p-12 md:p-24 border-b-[0.5px] lg:border-b-0 lg:border-r-[0.5px] border-brand-wine/20 flex flex-col justify-center relative overflow-hidden bg-brand-cream">
          <img src={imgFloralBg} className="absolute top-0 right-0 w-full md:w-3/4 opacity-15 mix-blend-multiply pointer-events-none translate-x-1/3 -translate-y-1/4 object-cover" alt="floral background" />
          
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-[3.5rem] leading-[1.2] relative z-10 pr-4">
              "Because a portfolio might open doors, 
              but your <span className="font-script text-5xl sm:text-6xl md:text-[5rem] text-brand-rose inline-block -rotate-2 mx-2">skillset</span> 
              is what keeps them open."
            </h2>
            <div className="mt-12 md:mt-16 w-16 h-[0.5px] bg-brand-wine"></div>
            <p className="mt-8 text-sm md:text-base font-light leading-relaxed max-w-sm opacity-80">
              This course is designed to help you think strategically, create intentionally, and deliver consistently so you’re not just following trends, you’re setting your own standard.
            </p>
          </FadeIn>
        </div>
        
        <div className="lg:col-span-6 border-brand-wine/20">
          <div className="grid grid-rows-1 lg:grid-rows-2 h-full">
            <div className="border-b-[0.5px] border-brand-wine/20 p-8 sm:p-12 md:p-16 relative bg-brand-rose/20">
              <Crosshair className="bottom-0 right-1/2 translate-y-1/2 hidden md:block" />
              <FadeIn delay={0.2}>
                <h3 className="font-serif text-3xl sm:text-4xl mb-6">About Uurmi</h3>
                <p className="text-sm font-light leading-relaxed opacity-80 mb-4">
                  Born and raised in Mumbai, Uurmi Kaurr is a powerful blend of creativity, passion, and purpose. Beginning her journey at Lowe Lintas, her true calling led her into makeup artistry, evolving from a MAC artist to a celebrated name in bridal and destination weddings.
                </p>
                <p className="text-sm font-light leading-relaxed opacity-80">
                  A passionate educator mentored over 600+ students, her philosophy goes beyond creating beauty—it’s about building genuine connections and enhancing individuality.
                </p>
              </FadeIn>
            </div>
            {/* Staggered Floral Image Grid Block */}
            <div className="p-8 md:p-12 relative overflow-hidden bg-brand-bg flex items-center justify-center border-t-[0.5px] lg:border-t-0 border-brand-wine/20">
              <FadeIn className="w-full max-w-xs lg:max-w-[280px] mx-auto aspect-[3/4] relative shadow-2xl">
                 <img 
                   src={imgFloralInspire} 
                   className="w-full h-full object-cover contrast-110 saturate-105" 
                   alt="floral inspiration" 
                 />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Slice 3: Goals Bento (Editorial Style) */}
      <section className="border-b-[0.5px] border-brand-wine/20 overflow-hidden">
        <div className="border-b-[0.5px] border-brand-wine/20 p-6 md:p-8 flex items-center justify-center tracking-[0.4em] uppercase text-[10px] bg-brand-cream text-center">
          Focus & Value
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {[
            { tag: "(01)", title: "MASTER CRAFT", text: "From basics to absolute brilliance." },
            { tag: "(02)", title: "ELEVATE SKILLS", text: "Stand out in a competitive beauty market." },
            { tag: "(03)", title: "BUILD PORTFOLIO", text: "Create a strong, scroll-stopping portfolio." },
            { tag: "(04)", title: "LEARN DEEPLY", text: "Master content creation simultaneously." }
          ].map((item, i) => (
             <div key={i} className="p-8 md:p-10 border-b-[0.5px] sm:border-b-[0.5px] md:border-b-0 border-r-[0.5px] border-brand-wine/20 relative hover:bg-brand-rose/10 transition-colors">
                <span className="text-xs font-serif opacity-50 mb-8 block">{item.tag}</span>
                <h4 className="font-serif text-xl md:text-2xl lg:text-3xl mb-4 leading-tight">{item.title}</h4>
                <p className="text-sm font-light opacity-70 leading-relaxed">{item.text}</p>
             </div>
          ))}
        </div>
      </section>

      {/* Slice 4: Highlights / Final Day */}
      <section className="grid grid-cols-1 lg:grid-cols-12 border-b-[0.5px] border-brand-wine/20 bg-brand-cream">
        <div className="lg:col-span-4 p-8 sm:p-12 md:p-16 flex items-center justify-center border-b-[0.5px] lg:border-b-0 lg:border-r-[0.5px] border-brand-wine/20 overflow-hidden">
          <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg aspect-[3/4] shadow-2xl overflow-hidden">
            <img 
              src={imgBeautyService} 
              className="w-full h-full object-cover contrast-110 saturate-[1.1]" 
              alt="Beauty Service" 
            />
            <div className="absolute inset-0 bg-black/5" />
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-serif text-5xl md:text-6xl leading-none text-center drop-shadow-2xl mix-blend-overlay opacity-90 w-full px-4">BEAUTY<br/>SERVICE</h2>
          </div>
        </div>
        
        <div className="lg:col-span-8 p-8 sm:p-10 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
          <FadeIn>
            <h3 className="font-serif text-3xl mb-6 flex items-center gap-4">
              <span className="font-script text-4xl sm:text-5xl text-brand-rose -ml-2">Highlights</span>
            </h3>
            <ul className="space-y-4 text-sm font-light">
              {[
                "Airbrush Makeup Demonstration",
                "1 Portfolio Shoot",
                "6 Different Makeup Demonstrations",
                "3 Hour Daily Practice (Hands-on)",
                "Social Media & Marketing Class",
                "Optional 2 Photoshoots on last day"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start pb-4 border-b-[0.5px] border-brand-wine/10 last:border-0 pr-4">
                  <span className="text-[9px] opacity-40 mt-1 shrink-0">0{i+1}</span>
                  <span className="opacity-90">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          
          <FadeIn delay={0.2}>
             <h3 className="font-serif text-3xl mb-6 flex items-center gap-4">
              <span className="font-script text-4xl sm:text-5xl text-brand-rose -ml-2">Final Day</span>
            </h3>
            <ul className="space-y-4 text-sm font-light">
               {[
                  "Full-Day Intensive Practice", "Interactive Q&A", 
                  "Photoshoot (optional)", "In-depth Product Knowledge", 
                  "One-on-One with Uurmi", "Certification"
                ].map((item, i) => (
                <li key={i} className="flex gap-4 items-center">
                  <div className="w-1.5 h-1.5 rounded-full border border-brand-wine shrink-0"></div>
                  <span className="opacity-80">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Slice 5: Editorial Itinerary Grid */}
      <section className="bg-brand-bg relative w-full overflow-hidden">
        <div className="p-12 md:p-16 border-b-[0.5px] border-brand-wine/20 text-center relative overflow-hidden">
          <span className="font-script text-6xl sm:text-7xl md:text-[10rem] text-brand-rose/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none">Schedule</span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl relative z-10 uppercase tracking-widest mt-4 lg:mt-0">Itinerary</h2>
        </div>
        
        <div className="divide-y-[0.5px] divide-brand-wine/20 w-full max-w-[100vw]">
          {/* Day 0 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 hover:bg-brand-cream transition-colors duration-500">
            <div className="lg:col-span-3 p-8 border-r-[0.5px] border-brand-wine/transparent lg:border-brand-wine/20 flex flex-col justify-center border-b-[0.5px] lg:border-b-0 border-brand-wine/20">
              <span className="text-[10px] tracking-widest uppercase opacity-50 mb-2">1st June</span>
              <span className="font-serif text-3xl">Day 0</span>
              <span className="text-xs font-script mt-2 text-brand-accent">Optional</span>
            </div>
            <div className="lg:col-span-4 p-8 border-r-[0.5px] border-brand-wine/20 hidden lg:flex items-center justify-center">
               <img 
                 src={imgSkincarePrep} 
                 className="w-2/3 max-w-[200px] aspect-[3/4] object-cover opacity-95 shadow-lg" 
                 alt="skincare prep" 
               />
            </div>
            <div className="lg:col-span-5 p-8 flex flex-col justify-center">
              <h4 className="font-serif text-2xl mb-4">Introduction to Makeup</h4>
              <p className="text-sm font-light opacity-80 mb-4">Online Session via Zoom. 12 PM - 2 PM. Mastering the basics is what sets you apart.</p>
              <ul className="text-xs font-light opacity-70 space-y-1 list-disc list-inside ml-2">
                <li>Skin types, prep & hydration</li>
                <li>Undertones, foundations & concealers</li>
                <li>Colour theory aesthetics</li>
                <li>Face & eye shapes analysis</li>
              </ul>
            </div>
          </div>

          {/* Day 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 hover:bg-brand-cream transition-colors duration-500">
            <div className="lg:col-span-3 p-8 border-r-[0.5px] border-brand-wine/transparent lg:border-brand-wine/20 flex flex-col justify-center border-b-[0.5px] lg:border-b-0 border-brand-wine/20">
              <span className="text-[10px] tracking-widest uppercase opacity-50 mb-2">3rd June</span>
              <span className="font-serif text-3xl">Day 1</span>
            </div>
             <div className="lg:col-span-4 p-8 border-r-[0.5px] border-brand-wine/20 hidden lg:flex flex-col justify-center gap-8 items-center text-center">
               <h3 className="font-serif text-4xl text-brand-rose leading-tight">The Summer<br/>Edit Glow</h3>
               <img src={imgSummerGlow} className="w-2/3 max-w-[200px] aspect-[3/4] object-cover opacity-95 saturate-105 shadow-lg" alt="Summer Edit makeup preparation" />
            </div>
            <div className="lg:col-span-5 p-8 flex flex-col justify-center">
              <h4 className="font-serif text-2xl mb-4 text-brand-accent">Look 1</h4>
              <p className="text-sm font-light opacity-80 mb-4">Luminous Skin & Soft Sculpt. Skin First. Glam Second. Achieve a dewy base that survives summer heat while looking refined.</p>
              <ul className="text-xs font-light opacity-70 space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                <li>• Mix liquids & creams</li>
                <li>• Seamless blending</li>
                <li>• Soft sculpting</li>
                <li>• Precision powdering</li>
              </ul>
            </div>
          </div>

          {/* Day 2-4 Compact */}
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y-[0.5px] sm:divide-y-0 sm:divide-x-[0.5px] divide-brand-wine/20">
             <div className="p-8 sm:p-10 flex flex-col items-center text-center hover:bg-brand-cream transition-colors">
                <span className="text-[10px] tracking-[0.2em] opacity-50 mb-4">DAY 2 / 4TH JUNE</span>
                <h4 className="font-serif text-2xl mb-4">Look 2</h4>
                <p className="text-sm font-light opacity-70">Phone & lighting class with social media content generation.</p>
             </div>
             <div className="p-8 sm:p-10 flex flex-col items-center text-center hover:bg-brand-cream transition-colors">
                <span className="text-[10px] tracking-[0.2em] opacity-50 mb-4">DAY 3 / 5TH JUNE</span>
                <h4 className="font-serif text-2xl mb-4">Looks 3 & 4</h4>
                <p className="text-sm font-light opacity-70">Expanding versatility through diverse makeup demonstrations.</p>
             </div>
             <div className="p-8 sm:p-10 flex flex-col items-center text-center bg-brand-rose/10 hover:bg-brand-cream transition-colors">
                <span className="text-[10px] tracking-[0.2em] opacity-50 mb-4">DAY 4 / 6TH JUNE</span>
                <h4 className="font-serif text-2xl mb-4">Looks 5 & 6</h4>
                <p className="text-sm font-light opacity-70">Advanced techniques and finalizing the core demonstration looks.</p>
             </div>
          </div>

          {/* Day 5 & 6 */}
           <div className="grid grid-cols-1 lg:grid-cols-12 hover:bg-brand-cream transition-colors duration-500">
            <div className="lg:col-span-3 p-8 border-r-[0.5px] border-brand-wine/transparent lg:border-brand-wine/20 flex flex-col justify-center border-b-[0.5px] lg:border-b-0 border-brand-wine/20">
              <span className="text-[10px] tracking-widest uppercase opacity-50 mb-2">7th June</span>
              <span className="font-serif text-3xl">Day 5</span>
            </div>
             <div className="lg:col-span-9 p-8 flex flex-col justify-center">
              <h4 className="font-serif text-2xl sm:text-3xl break-words">Photoshoot & Certification</h4>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 bg-white hover:bg-brand-cream transition-colors duration-500">
            <div className="lg:col-span-3 p-8 border-r-[0.5px] border-brand-wine/transparent lg:border-brand-wine/20 flex flex-col justify-center border-b-[0.5px] lg:border-b-0 border-brand-wine/20">
              <span className="text-[10px] tracking-widest uppercase opacity-50 mb-2">8th June</span>
              <span className="font-serif text-3xl">Day 6</span>
            </div>
             <div className="lg:col-span-4 p-8 border-r-[0.5px] border-brand-wine/20 flex flex-col justify-center border-b-[0.5px] lg:border-b-0 border-brand-wine/20">
              <h4 className="font-serif text-2xl mb-4">Deep Dive</h4>
              <p className="text-sm font-light opacity-80 mb-6 mt-1">Practice. Create. Shoot. We go deeper so you don't just learn makeup, you become an artist clients trust.</p>
              <div className="w-full flex justify-center lg:justify-start">
                <img src={imgClassDive} className="w-1/2 max-w-[200px] lg:w-2/3 lg:max-w-xs aspect-[3/4] object-cover opacity-95 hidden sm:block shadow-lg border-[0.5px] border-brand-wine/20" alt="class session dive" />
              </div>
            </div>
             <div className="lg:col-span-5 p-0 flex flex-col sm:flex-row">
                <div className="flex-1 p-8 border-b-[0.5px] sm:border-b-0 sm:border-r-[0.5px] border-brand-wine/20">
                   <h5 className="font-serif text-lg mb-2">A: Elevate</h5>
                   <p className="text-xs font-light opacity-70">Practice skills and capture beauty shots with team support.</p>
                </div>
                 <div className="flex-1 p-8 bg-brand-rose/20 relative">
                   <h5 className="font-serif text-lg mb-2 flex items-center">B: Portfolio <span className="text-[8px] font-sans tracking-widest uppercase ml-2 border border-brand-wine px-1 py-0.5 shrink-0">Opt</span></h5>
                   <p className="text-xs font-light opacity-80">Build your professional portfolio with guided looks & styling.</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slice 6: The Couture Portfolio Addon (Dark/High Contrast) */}
      <section className="bg-brand-accent text-brand-cream relative overflow-hidden border-y-[0.5px] border-brand-wine/20 mt-12 md:mt-20 mx-4 md:mx-10 rounded-sm">
         <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] pointer-events-none"></div>
         <img src={imgRoseShadow} className="absolute top-0 right-0 w-full md:w-1/2 h-full object-cover mix-blend-overlay opacity-50 pointer-events-none" alt="rose shadow" />
         
         <div className="p-8 sm:p-10 md:p-20 grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 relative z-10 w-full">
            <div className="lg:col-span-12 break-words">
               <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] uppercase leading-none opacity-90 drop-shadow-lg tracking-tighter mix-blend-screen overflow-hidden">COUTURE</h2>
               <span className="font-script text-4xl sm:text-5xl md:text-[5rem] translate-x-2 sm:translate-x-8 md:translate-x-12 -translate-y-6 md:-translate-y-12 block text-brand-rose drop-shadow-md">Portfolio</span>
               <p className="text-sm md:text-base font-light max-w-lg mt-2 md:mt-8 opacity-90 leading-relaxed border-l-[0.5px] border-white/30 pl-4 md:pl-6">
                 An optional add-on experience designed for maximum impact. Dedicated to realizing your vision with precision and artistry. 
               </p>
            </div>

            <div className="lg:col-span-6 bg-brand-wine/40 backdrop-blur-md p-6 sm:p-10 border-[0.5px] border-white/20">
               <h3 className="uppercase tracking-[0.2em] text-xs mb-6 md:mb-8 opacity-60">What's Included</h3>
               <ul className="space-y-4">
                 {[
                    "2 Guided Portfolio Shoots", "Sourced Indian Outfits & Jewellery",
                    "Professional Stylist on board", "Exclusive Consultation with Uurmi",
                    "Professional Photography & Reel Team", "Location Provided"
                 ].map((t, i) => (
                    <li key={i} className="text-xs sm:text-sm font-light opacity-90 flex gap-4"><span className="text-[10px] opacity-40 shrink-0">0{i+1}</span>{t}</li>
                 ))}
               </ul>
               <p className="mt-6 md:mt-8 text-[10px] opacity-50 uppercase tracking-widest leading-relaxed border-t-[0.5px] border-white/20 pt-4">Note: Excludes Hair Artist & Model<br/>(Team can assist at cost)</p>
            </div>

            <div className="lg:col-span-6 bg-brand-wine/40 backdrop-blur-md p-6 sm:p-10 border-[0.5px] border-white/20">
                <h3 className="uppercase tracking-[0.2em] text-xs mb-6 md:mb-8 opacity-60">Deliverables</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                     <h4 className="font-serif text-xl sm:text-2xl mb-2 text-brand-rose">Reels</h4>
                     <p className="text-xs font-light opacity-80 leading-relaxed">2 Full-Look iPhone Reels optimized for social.</p>
                  </div>
                  <div>
                     <h4 className="font-serif text-xl sm:text-2xl mb-2 text-brand-rose">Instant</h4>
                     <p className="text-xs font-light opacity-80 leading-relaxed">Unedited content Airdropped same day.</p>
                  </div>
                  <div>
                     <h4 className="font-serif text-xl sm:text-2xl mb-2 text-brand-rose">Imagery</h4>
                     <p className="text-xs font-light opacity-80 leading-relaxed">4-5 pro edited high-quality images per look.</p>
                  </div>
                   <div>
                     <h4 className="font-serif text-xl sm:text-2xl mb-2 text-brand-rose">Timeline</h4>
                     <p className="text-xs font-light opacity-80 leading-relaxed">1 Month Turnaround Time for final edits.</p>
                  </div>
                </div>
            </div>
         </div>
      </section>

      {/* Slice 6.5: Portfolio Grid Selection */}
      <section className="bg-brand-bg pt-12 md:pt-20 border-t-[0.5px] border-brand-wine/20">
        <div className="text-center mb-16 relative">
          <span className="font-script text-6xl md:text-[8rem] text-brand-rose absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] pointer-events-none drop-shadow-sm mix-blend-multiply opacity-60">Signature</span>
          <h2 className="font-serif text-4xl md:text-6xl uppercase tracking-widest relative z-10">Couture Looks</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-0 border-y-[0.5px] border-brand-wine/20">
          {[imgCouture1, imgCouture2, imgCouture3, imgCouture4, imgCouture5, imgCouture6].map((srcImg, i) => (
             <div key={i} className="aspect-[3/4] relative border-b-[0.5px] border-r-[0.5px] border-brand-wine/20 overflow-hidden group">
               <img 
                 src={srcImg} 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 saturate-105" 
                 alt={`Portfolio Look ${i+1}`} 
               />
               <div className="absolute inset-0 bg-brand-wine/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
             </div>
          ))}
        </div>
      </section>

      {/* Slice 7: Footer / Pricing */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 w-full max-w-[100vw] overflow-hidden">
        <div className="border-[0.5px] border-brand-wine/20 bg-brand-cream max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl relative">
          <Crosshair className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-wine opacity-20 hidden md:flex" />
          
          <div className="p-8 sm:p-12 md:p-16 flex flex-col justify-center border-b-[0.5px] md:border-b-0 md:border-r-[0.5px] border-brand-wine/20">
             <span className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-4 block leading-relaxed">Masterclass Investment</span>
             <h2 className="font-serif text-4xl sm:text-5xl mb-4 break-words">₹1,40,000</h2>
             <p className="text-xs font-light opacity-70 leading-relaxed mb-8 md:mb-10">Includes 7 days of comprehensive training and 1 portfolio shoot.</p>
             <button className="bg-brand-wine text-white text-xs uppercase tracking-widest py-3 sm:py-4 px-6 sm:px-8 hover:bg-brand-accent transition-colors w-max">Enroll Now</button>
          </div>
          
          <div className="p-8 sm:p-12 md:p-16 flex flex-col justify-center bg-brand-bg/50">
             <span className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-4 block leading-relaxed">Optional Add-on</span>
             <h2 className="font-serif text-4xl sm:text-5xl mb-4 text-brand-accent break-words">₹40,000</h2>
             <p className="text-xs font-light opacity-70 leading-relaxed">Couture Portfolio building experience. Includes styling, photo/video team, and consultation.</p>
          </div>
        </div>

        <div className="mt-16 md:mt-20 text-center w-full px-4 break-words">
            <h3 className="font-script text-4xl sm:text-5xl mb-4 text-brand-rose drop-shadow-sm">Contact Us</h3>
            <p className="text-[10px] sm:text-xs uppercase tracking-widest opacity-60 mb-2 flex items-center justify-center gap-3"><MapPin className="w-3 h-3 shrink-0" /> <span className="truncate">Mumbai, Andheri</span></p>
            <p className="text-[10px] font-light mt-8 opacity-40 leading-relaxed">Looking for an internship? Contact our team. <br className="sm:hidden" />© {new Date().getFullYear()} UURMI KAURR.</p>
        </div>
      </section>
      
    </div>
  );
}
