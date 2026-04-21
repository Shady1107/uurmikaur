import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MapPin } from 'lucide-react';

const imgHero = '/images/Uurmi.jpg';
const imgFloralBg = '/images/makeupbyurmikaur_1776599411503.png';
const imgFloralInspire = '/images/makeupbyurmikaur_1776599417439.png';
const imgBeautyService = '/images/uurmikaurr_1776530868942.png';
const imgSkincarePrep = '/images/IMG_5952.JPEG';
const imgSummerGlow = '/images/IMG_5994.png';
const imgClassDive = '/images/makeupbyurmikaur_1776599387577.png';
const imgRoseShadow = '/images/makeupbyurmikaur_1776599391933.png';

const imgCouture1 = '/images/makeupbyurmikaur_1776599422724.png';
const imgCouture2 = '/images/uurmikaurr_1776530851457.png';
const imgCouture3 = '/images/uurmikaurr_1776530847000.png';
const imgCouture4 = '/images/uurmikaurr_1776530843242.png';
const imgCouture5 = '/images/uurmikaurr_1776530838850.png';
const imgCouture6 = '/images/uurmikaurr_1776530811688.png';

const imgDay0 = '/images/IMG_0373.png';
const imgDay1 = '/images/IMG_5474.png';
const imgDay2 = '/images/IMG_6465_1.png';
const imgDay3 = '/images/IMG_0376.png';
const imgDay4 = '/images/IMG_0374.png';
const imgDay5 = '/images/IMG_0378.png';
const imgDay6 = '/images/IMG_5952.png';

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
        <button className="text-xs font-sans tracking-[0.2em] uppercase border border-brand-wine px-4 md:px-6 py-2 hover:bg-brand-wine hover:text-brand-cream transition-colors">
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
            <p className="uppercase tracking-[0.35em] text-xs mb-12 opacity-70">An Empowering Journey</p>
            <div className="relative mb-24 md:mb-20 z-10 w-full md:w-max mt-4">
              <h1 className="font-serif text-6xl md:text-8xl lg:text-[8rem] leading-[0.8] uppercase font-light">7 Days</h1>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none uppercase font-light mt-4 ml-1 md:ml-2">Pro Makeup</h1>
              <span className="font-serif italic font-light text-[3rem] leading-none sm:text-6xl md:text-7xl lg:text-[7rem] tracking-wide absolute -bottom-8 sm:-bottom-12 md:-bottom-14 left-3 sm:left-auto sm:right-0 md:-right-24 text-brand-rose mix-blend-multiply opacity-90 drop-shadow-sm pointer-events-none whitespace-nowrap">masterclass</span>
            </div>
            
            <div className="space-y-4">
              <p className="flex items-center gap-6 text-xs tracking-[0.2em] uppercase opacity-80"><span className="w-8 md:w-12 h-[1px] bg-brand-wine opacity-50 shrink-0"></span> Be a Visionary</p>
              <p className="flex items-center gap-6 text-xs tracking-[0.2em] uppercase opacity-80"><span className="w-8 md:w-12 h-[1px] bg-brand-wine opacity-50 shrink-0"></span> Create Your Own Identity as an artist</p>
              <p className="flex items-center gap-6 text-xs tracking-[0.2em] uppercase opacity-80"><span className="w-8 md:w-12 h-[1px] bg-brand-wine opacity-50 shrink-0"></span> Elevate & Be Polished</p>
            </div>
          </FadeIn>
        </div>
        
        {/* Right Panel - Image */}
        <div className="lg:col-span-7 relative bg-brand-cream lg:p-8 p-6 border-t-[0.5px] border-brand-wine/20 lg:border-t-0 flex flex-col justify-center items-center">
          <div className="w-full max-w-lg lg:max-w-xl aspect-square relative overflow-hidden group shadow-2xl">
            <motion.img 
              style={{ y: heroY, scale: 1 }}
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

      {/* Slice 2: About / Quote Asymmetry & Goal Adaptation */}
      <section className="grid grid-cols-1 lg:grid-cols-12 border-b-[0.5px] border-brand-wine/20">
        <div className="lg:col-span-6 border-b-[0.5px] lg:border-b-0 lg:border-r-[0.5px] border-brand-wine/20">
          <div className="border-b-[0.5px] border-brand-wine/20 p-8 sm:p-12 md:p-16 relative bg-brand-rose/20">
            <FadeIn>
              <h3 className="font-serif text-3xl sm:text-4xl mb-6">ABOUT UURMI KAURR</h3>
              <p className="text-base font-light leading-relaxed opacity-80 mb-4">
                Born and raised in Mumbai, Uurmi Kaurr is a powerful blend of creativity, passion, and purpose. With an innate eye for aesthetics and a deep love for learning, she has carved a distinctive space for herself in the beauty industry.
              </p>
              <p className="text-base font-light leading-relaxed opacity-80 mb-4">
                A graduate in Public Relations, she began her journey at Lowe Lintas, working with leading lifestyle and beauty brands. Yet, her true calling led her into makeup artistry, where she started as a MAC artist and evolved into a celebrated name in bridal and destination weddings.
              </p>
              <p className="text-base font-light leading-relaxed opacity-80 mb-4">
                Beyond her artistry, Uurmi is a passionate educator who has mentored over 600+ students. Known for her exceptional patience and deeply empathetic approach, she creates a nurturing learning environment where every student feels seen, understood, and empowered. She believes in tailoring her teaching to each individual, helping them unlock their unique potential with confidence and clarity.
              </p>
              <p className="text-base font-light leading-relaxed opacity-80 mb-4">
                Rooted in spirituality and authenticity, Uurmi’s philosophy goes beyond creating beauty—it’s about building genuine connections and enhancing individuality. Her work reflects precision, passion, and a heartfelt commitment to both her clients and students.
              </p>
              <p className="text-base font-light leading-relaxed opacity-80">
                With a loyal clientele across India and globally, Uurmi continues to inspire through her artistry, education, and her unwavering belief in staying real, grounded, and spreading positivity.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="lg:col-span-6 p-8 sm:p-12 md:p-24 flex flex-col justify-center relative overflow-hidden bg-brand-cream border-brand-wine/20">
          <img src={imgFloralBg} className="absolute inset-0 w-full h-full opacity-25 mix-blend-multiply pointer-events-none object-cover object-center" alt="floral background" />
          
          <FadeIn>
            <h2 className="font-serif text-[1.6rem] sm:text-[2rem] md:text-[2.5rem] leading-[1.3] relative z-10 pr-4 italic">
              "Because a portfolio might open doors, 
              but your <span className="font-script text-5xl sm:text-6xl md:text-[4rem] text-brand-rose inline-block -rotate-2 mx-2 not-italic">skillset</span> 
              is what keeps them open."
            </h2>
            <div className="mt-8 md:mt-12 w-16 h-[0.5px] bg-brand-wine mb-8"></div>
            <p className="text-base md:text-lg font-light leading-relaxed max-w-sm opacity-80 mb-8">
              This course is designed to help you think strategically, create intentionally, and deliver consistently so you’re not just following trends, you’re setting your own standard.
            </p>

            <h3 className="font-serif text-xl mb-4">Whether you’re here to:</h3>
            <ul className="space-y-3 font-light text-base opacity-90">
               <li className="flex gap-3"><span>✨</span> <span>Master your craft from basics to brilliance</span></li>
               <li className="flex gap-3"><span>✨</span> <span>Elevate your skills and stand out in a competitive market</span></li>
               <li className="flex gap-3"><span>✨</span> <span>Build a strong, scroll-stopping portfolio</span></li>
               <li className="flex gap-3"><span>✨</span> <span>Or simply learn deeply while creating content for your folio</span></li>
            </ul>
            <p className="mt-8 font-serif text-2xl text-brand-accent">This course adapts to your goal.</p>
          </FadeIn>
        </div>
      </section>

      {/* Slice 4: Highlights / Final Day & Course Schedule */}
      <section className="grid grid-cols-1 lg:grid-cols-12 border-b-[0.5px] border-brand-wine/20 bg-brand-cream">
        <div className="lg:col-span-6 p-8 sm:p-10 md:p-16 border-b-[0.5px] lg:border-b-0 lg:border-r-[0.5px] border-brand-wine/20">
          <FadeIn>
            <h3 className="font-serif text-3xl mb-8 flex items-center gap-4">
              <span className="font-script text-4xl sm:text-5xl text-brand-rose -ml-2">Course</span> Highlights
            </h3>
            <ul className="space-y-6 text-base font-light">
              <li className="flex gap-4 items-start pb-4 border-b-[0.5px] border-brand-wine/10 pr-4">
                <span className="text-[10px] opacity-40 mt-1 shrink-0">01</span>
                <span><strong className="font-medium opacity-90 block">Airbrush Makeup Demonstration</strong></span>
              </li>
              <li className="flex gap-4 items-start pb-4 border-b-[0.5px] border-brand-wine/10 pr-4">
                <span className="text-[10px] opacity-40 mt-1 shrink-0">02</span>
                <span><strong className="font-medium opacity-90 block">1 Portfolio Shoot</strong></span>
              </li>
              <li className="flex gap-4 items-start pb-4 border-b-[0.5px] border-brand-wine/10 pr-4">
                <span className="text-[10px] opacity-40 mt-1 shrink-0">03</span>
                <span><strong className="font-medium opacity-90 block">5 Signature Makeup Demonstrations</strong><span className="opacity-70 block mt-1">(Covering diverse looks, techniques & real-client scenarios)</span></span>
              </li>
              <li className="flex gap-4 items-start pb-4 border-b-[0.5px] border-brand-wine/10 pr-4">
                <span className="text-[10px] opacity-40 mt-1 shrink-0">04</span>
                <span><strong className="font-medium opacity-90 block">3.5 Hour Daily Practice Sessions with Uurmi</strong><span className="opacity-70 block mt-1">(Intensive hands-on learning & guided application)</span></span>
              </li>
              <li className="flex gap-4 items-start pb-4 border-b-[0.5px] border-brand-wine/10 pr-4">
                <span className="text-[10px] opacity-40 mt-1 shrink-0">05</span>
                <span><strong className="font-medium opacity-90 block">Social Media & Business Development Class</strong><span className="opacity-70 block mt-1">– Learn how to shoot and create your own high-quality content</span></span>
              </li>
              <li className="flex gap-4 items-start pb-4 border-b-[0.5px] border-brand-wine/10 pr-4">
                <span className="text-[10px] opacity-40 mt-1 shrink-0">06</span>
                <span><strong className="font-medium opacity-90 block">2 Photoshoots (Optional)</strong><span className="opacity-70 block mt-1">Available at an additional cost of ₹40,000 on Day 6th</span></span>
              </li>
              <li className="flex gap-4 items-start pb-4 border-b-[0.5px] border-brand-wine/10 pr-4">
                <span className="text-[10px] opacity-40 mt-1 shrink-0">07</span>
                <span><strong className="font-medium opacity-90 block">Day 6 – Full Day</strong><span className="opacity-70 block mt-1">Focused on practice, doubt-solving & technique refinement</span></span>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t-[0.5px] border-brand-wine/20">
               <h4 className="font-serif text-lg mb-4 text-brand-accent">The course includes:</h4>
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-light opacity-80">
                 <li>– Mature Skin</li>
                 <li>– Male Makeup</li>
                 <li>– Acne & Pigmentation Correction</li>
                 <li>– Dusky Skin Techniques</li>
               </ul>
            </div>
          </FadeIn>
        </div>
        
        <div className="lg:col-span-6 p-8 sm:p-10 md:p-16 flex flex-col justify-center">
          <FadeIn className="mb-12">
             <h3 className="font-serif text-3xl mb-8 flex items-center gap-4">
              <span className="font-script text-4xl sm:text-5xl text-brand-rose -ml-2">Final Day</span> Experience
            </h3>
            <ul className="space-y-4 text-base font-light">
               {[
                  "Full-Day Intensive Practice Session",
                  "Interactive Q&A", 
                  "In-depth Product Knowledge", 
                  "One-on-One Session with Uurmi Kaurr", 
                  "Certification"
                ].map((item, i) => (
                <li key={i} className="flex gap-4 items-center">
                  <div className="w-1.5 h-1.5 rounded-full border border-brand-wine shrink-0"></div>
                  <span className="opacity-80">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-brand-rose/5 p-8 sm:p-10 border-[0.5px] border-brand-wine/20">
             <h3 className="font-serif text-3xl mb-2 flex items-center gap-4">Course Schedule</h3>
             <p className="text-sm tracking-widest uppercase opacity-60 mb-8 font-medium">Time: 9:30 AM – 6:30 PM</p>
             
             <div className="space-y-8 text-sm font-light">
               <div>
                 <p className="font-medium opacity-90 uppercase tracking-wider mb-2">1st June – Basics of Makeup</p>
                 <p className="opacity-70">• Online Class (Optional)</p>
               </div>
               <div>
                 <p className="font-medium opacity-90 uppercase tracking-wider mb-2">3rd & 6th June – Look Demos & Practice Sessions</p>
                 <ul className="opacity-70 space-y-1">
                   <li>• Signature Look Demonstrations</li>
                   <li>• Hands-on Practice Sessions</li>
                   <li>• Q & A</li>
                   <li>• Social Media & Business Class</li>
                 </ul>
               </div>
               <div>
                 <p className="font-medium opacity-90 uppercase tracking-wider mb-2">7th June – Photoshoot Day</p>
                 <ul className="opacity-70 space-y-2">
                   <li>• 1 Portfolio Photoshoot</li>
                   <li>• Certification</li>
                   <li>• Personal Feedback <span className="opacity-60 italic text-xs block mt-0.5">(Strengths & Weakness Analysis of Each Student)</span></li>
                 </ul>
               </div>
               <div>
                 <p className="font-medium opacity-90 uppercase tracking-wider mb-2">8th June – Practice + Optional Shoot</p>
                 <ul className="opacity-70 space-y-1">
                   <li>• Practice Session</li>
                   <li>• 2 Photoshoots (Optional)</li>
                 </ul>
               </div>
             </div>
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
              <span className="text-xs tracking-widest uppercase opacity-50 mb-2">1st June</span>
              <span className="font-serif text-3xl">Day 0</span>
              <span className="text-sm font-script mt-2 text-brand-accent">Optional</span>
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
              <p className="text-base font-light opacity-80 mb-4">Online - on Zoom. 12 to 2 - 2 hours. Introduction to Makeup For beginners, aspiring artists, and working makeup artists who want to strengthen their fundamentals. Because mastering the basics is what sets you apart.</p>
              <h5 className="font-serif text-lg mb-2">What You Will Learn</h5>
              <ul className="text-sm font-light opacity-70 space-y-2 ml-2">
                <li className="flex gap-2"><span>•</span> <span>Understanding skin types & skincare (cleansing, moisturising for different skin types)</span></li>
                <li className="flex gap-2"><span>•</span> <span>Importance of skin prep for a flawless base</span></li>
                <li className="flex gap-2"><span>•</span> <span>Understanding different undertones & skin tones</span></li>
                <li className="flex gap-2"><span>•</span> <span>Understanding different types of foundations, concealers & powders</span></li>
                <li className="flex gap-2"><span>•</span> <span>Colour theory & colour wheel basics</span></li>
                <li className="flex gap-2"><span>•</span> <span>Developing a strong sense of colour aesthetics</span></li>
                <li className="flex gap-2"><span>•</span> <span>Creating a cohesive makeup look using colour theory</span></li>
                <li className="flex gap-2"><span>•</span> <span>Identifying face shapes & enhancing features with an exercise</span></li>
                <li className="flex gap-2"><span>•</span> <span>Understanding eye shapes & eye placement techniques</span></li>
              </ul>
            </div>
          </div>

          {/* Day 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 hover:bg-brand-cream transition-colors duration-500">
            <div className="lg:col-span-3 p-8 border-r-[0.5px] border-brand-wine/transparent lg:border-brand-wine/20 flex flex-col justify-start border-b-[0.5px] lg:border-b-0 border-brand-wine/20">
              <div>
                <span className="text-xs tracking-widest uppercase opacity-50 mb-2 block">3rd June</span>
                <span className="font-serif text-3xl block">Day 1</span>
                <span className="text-xs uppercase opacity-40 mt-1 tracking-widest block">1st Day of OFFLINE CLASS</span>
              </div>
              <img src={imgDay1} className="w-full max-w-[250px] aspect-[4/5] object-cover mt-8 opacity-90 shadow-sm" alt="Day 1" />
            </div>
             <div className="lg:col-span-4 p-8 border-r-[0.5px] border-brand-wine/20 hidden lg:flex flex-col justify-center gap-8 items-center text-center">
               <h3 className="font-serif text-4xl text-brand-rose leading-tight">The Summer<br/>Edit Glow</h3>
               <img src={imgSummerGlow} className="w-2/3 max-w-[200px] aspect-[3/4] object-cover opacity-95 saturate-105 shadow-lg" alt="Summer Edit makeup preparation" />
            </div>
            <div className="lg:col-span-5 p-8 flex flex-col justify-center">
              <h4 className="font-serif text-2xl mb-4 text-brand-accent">Look 1</h4>
              <p className="text-base font-medium mb-1">Luminous Skin & Soft Sculpt. Skin First. Glam Second.</p>
              <p className="text-base font-light opacity-80 mb-6">
                This day focuses on creating skin that looks like second skin- fresh, luminous, and effortless.
                Learn how to achieve a dewy base that survives summer heat while still looking refined and long-lasting. The goal is glow that feels real, not greasy.
                Master soft sculpting that enhances your features without harsh lines, paired with ethereal eyes, subtle matte textures, clean liner, and perfectly balanced lips.
              </p>
              <h5 className="font-serif text-lg mb-4 text-brand-accent">TECHNIQUE FOCUS</h5>
              <ul className="text-sm font-light opacity-80 space-y-2">
                <li className="flex gap-2"><span>•</span> <span>Mixing liquids & creams to create bespoke, skin-like textures</span></li>
                <li className="flex gap-2"><span>•</span> <span>Mastering seamless blending techniques for smooth natural finish</span></li>
                <li className="flex gap-2"><span>•</span> <span>Soft contouring & sculpting for natural definition</span></li>
                <li className="flex gap-2"><span>•</span> <span>Strategic layering: balancing cream + powder without heaviness</span></li>
                <li className="flex gap-2"><span>•</span> <span>Precision powdering - how much, where, and why</span></li>
                <li className="flex gap-2"><span>•</span> <span>Micro-powdering techniques for longevity without dullness</span></li>
                <li className="flex gap-2"><span>•</span> <span>Long-wear luminous skin techniques for humid & summer conditions</span></li>
                <li className="flex gap-2"><span>•</span> <span>Locking makeup while maintaining natural skin texture</span></li>
                <li className="flex gap-2"><span>•</span> <span>Balancing shine and structure for both camera & real life</span></li>
              </ul>
            </div>
          </div>

          {/* Day 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 hover:bg-brand-cream transition-colors duration-500">
            <div className="lg:col-span-3 p-8 border-r-[0.5px] border-brand-wine/transparent lg:border-brand-wine/20 flex flex-col justify-start border-b-[0.5px] lg:border-b-0 border-brand-wine/20">
              <div>
                <span className="text-xs tracking-widest uppercase opacity-50 mb-2 block">4th June</span>
                <span className="font-serif text-3xl block">Day 2</span>
              </div>
              <div className="w-full max-w-[250px] aspect-[4/5] mt-8 overflow-hidden rounded-sm shadow-sm bg-brand-wine/5">
                <img src={imgDay2} className="w-full h-full object-cover opacity-90 scale-[1.2]" alt="Day 2" />
              </div>
            </div>
            <div className="lg:col-span-9 p-8 flex flex-col justify-center">
              <h4 className="font-serif text-2xl mb-2 text-brand-accent">Look 2</h4>
              <p className="text-lg font-serif mb-2">The Timeless Bride Edit with Ethereal Eye Definition Method</p>
              <p className="text-base font-medium mb-4 italic">Effortless. Glamorous. Timeless.</p>
              <p className="text-base font-light opacity-80 mb-6">
                A refined bridal approach that celebrates skin, softness, and subtle glamour paired with versatile eye techniques designed to look effortless, photograph beautifully, and remain flawless through every moment.<br/><br/>
                Featuring Uurmi’s signature eye philosophy, including her most-loved and iconic liner styles she’s known for.
              </p>
              
              <h5 className="font-serif text-lg mb-4 text-brand-accent">TECHNIQUE FOCUS</h5>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                   <h6 className="text-sm font-medium uppercase tracking-wider mb-2">Signature Eye Liner Techniques (Ethereal Edit)</h6>
                   <ul className="text-sm font-light opacity-80 space-y-1">
                     <li>• Invisible Lash Line Definition</li>
                     <li>• Soft Wing Illusion</li>
                     <li>• Diffused Wing Technique</li>
                     <li>• Micro Precision Liner</li>
                     <li>• Lift & Elongate Mapping</li>
                     <li>• Shadow Liner Technique</li>
                     <li>• Layered Liner Method</li>
                     <li>• Lower Lash Balance</li>
                   </ul>
                </div>
                <div>
                   <h6 className="text-sm font-medium uppercase tracking-wider mb-2">Corrective Liner Techniques</h6>
                   <ul className="text-sm font-light opacity-80 space-y-1">
                     <li>• Close-set vs wide-set eyes</li>
                     <li>• Hooded eyes</li>
                     <li>• Downturned vs upturned eyes</li>
                   </ul>
                   <h6 className="text-sm font-medium uppercase tracking-wider mb-2 mt-4">Bridal-Specific Liner Secrets</h6>
                   <ul className="text-sm font-light opacity-80 space-y-1">
                     <li>• How to keep liner soft in daylight but defined in photos</li>
                     <li>• When to skip liner and use only shadow (very important for your aesthetic)</li>
                     <li>• Balancing liner with lashes (strip vs individual vs none)</li>
                     <li>• Creating symmetry on different eye shapes</li>
                     <li>• Fixing liner mistakes without ruining the base</li>
                   </ul>
                </div>
              </div>
              
              <div className="mt-4 p-6 bg-brand-rose/5 border-[0.5px] border-brand-wine/20">
                <h4 className="font-serif text-xl mb-4 text-brand-accent">SOCIAL MEDIA & BRAND BUILDING MODULE</h4>
                <ul className="text-sm font-light opacity-80 space-y-2">
                  <li className="flex gap-2"><span>•</span> <span>Understanding organic growth – what truly works today</span></li>
                  <li className="flex gap-2"><span>•</span> <span>Creating content with intention (not just posting randomly)</span></li>
                  <li className="flex gap-2"><span>•</span> <span>How to shoot high-quality photos & videos using your phone or camera</span></li>
                  <li className="flex gap-2"><span>•</span> <span>Understanding angles that flatter makeup (face-focused shooting)</span></li>
                  <li className="flex gap-2"><span>•</span> <span>Capturing skin texture, glow & true-to-life colours on camera</span></li>
                  <li className="flex gap-2"><span>•</span> <span>Learning how to position yourself in the industry</span></li>
                  <li className="flex gap-2"><span>•</span> <span>One-on-one feedback on your Instagram to help refine your identity as an artist</span></li>
                  <li className="flex gap-2"><span>•</span> <span>Understanding lighting and how to use it effectively for your content</span></li>
                  <li className="flex gap-2"><span>•</span> <span>Learning how to shoot your own content with confidence and ease</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Day 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-brand-rose/5 hover:bg-brand-cream transition-colors duration-500">
            <div className="lg:col-span-3 p-8 border-r-[0.5px] border-brand-wine/transparent lg:border-brand-wine/20 flex flex-col justify-start border-b-[0.5px] lg:border-b-0 border-brand-wine/20">
              <div>
                <span className="text-xs tracking-widest uppercase opacity-50 mb-2 block">5th June</span>
                <span className="font-serif text-3xl block">Day 3</span>
              </div>
              <img src={imgDay3} className="w-full max-w-[250px] aspect-[4/5] object-cover mt-8 opacity-90 shadow-sm" alt="Day 3" />
            </div>
            <div className="lg:col-span-9 p-8 flex flex-col justify-center">
              
              <div className="pb-8 mb-8 border-b-[0.5px] border-brand-wine/20">
                <h4 className="font-serif text-2xl mb-1 text-brand-accent">Look 3 <span className="text-sm font-sans tracking-widest opacity-60 uppercase ml-2">(1st Demo)</span></h4>
                <p className="text-lg font-serif mb-2 uppercase">THE LUXE BRIDAL EDIT</p>
                <p className="text-base font-medium mb-4 italic">Luxury is in the detail. Precision is in the technique.</p>
                <p className="text-base font-light opacity-80 mb-6">
                  This module focuses on creating high-impact, flawless bridal glam using elevated product choices, advanced layering, and refined application techniques that deliver a seamless, skin-like yet luxurious finish.
                </p>
                <h5 className="font-serif text-lg mb-4 text-brand-accent">TECHNIQUE FOCUS</h5>
                <ul className="text-sm font-light opacity-80 space-y-4">
                  <li>
                    <strong className="block mb-1 opacity-90">• Luxury Product Knowledge</strong>
                    Understanding when and why to use high-end formulas (foundations, creams, powders, illuminators)
                  </li>
                  <li>
                    <strong className="block mb-1 opacity-90">• Advanced Layering Techniques</strong>
                    Building coverage in thin, strategic layers for a flawless yet breathable base (cream + liquid + powder balance)
                  </li>
                  <li>
                    <strong className="block mb-1 opacity-90">• Eye Detailing for High Glam</strong>
                    Snatched, lifted eye techniques with seamless blending and rich payoff
                  </li>
                  <li>
                    <strong className="block mb-1 opacity-90">• Luxe Glow Techniques</strong>
                    Highlighter placement, liquid glow layering & body glow blending
                  </li>
                  <li>
                    <strong className="block mb-1 opacity-90">• Lips – Couture Finish</strong>
                    Creating sculpted, well-defined lips with a focus on dimension to achieve a plush, long-lasting finish that complements the overall look
                  </li>
                  <li>
                    <strong className="block mb-1 opacity-90">Client Experience (Big Luxury Factor)</strong>
                    • How you apply matters as much as what you apply<br/>
                    • Touch, pace, communication, calm energy<br/>
                    • Making the client feel elevated -not rushed
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-serif text-2xl mb-1 text-brand-accent">Look 4 <span className="text-sm font-sans tracking-widest opacity-60 uppercase ml-2">(2nd Demo)</span></h4>
                <p className="text-lg font-serif mb-2 uppercase">THE AIRBRUSHED PLAYFUL GLAM EDIT</p>
                <p className="text-base font-medium mb-4 italic">Colour • Crystals • Modern Bridal Expression</p>
                <p className="text-base font-light opacity-80 mb-6">
                  A bold, fun take on bridal beauty for the bride who wants to step beyond the classic and explore colour, texture, and individuality
                </p>
                <h5 className="font-serif text-lg mb-4 text-brand-accent">TECHNIQUE FOCUS</h5>
                <ul className="text-sm font-light opacity-80 space-y-3">
                  <li><strong className="opacity-90">• Airbrush foundation mastery</strong><br/>→ Seamless, thin layering with a skin-like, long-wear finish</li>
                  <li><strong className="opacity-90">• Airbrush highlighting technique</strong><br/>→ High-shine, diffused glow using the airbrush for a seamless, lit-from-within effect</li>
                  <li><strong className="opacity-90">• Colour placement strategy</strong><br/>→ Bold tones placed with intention for maximum impact</li>
                  <li><strong className="opacity-90">• Metallic blending</strong><br/>→ Smooth diffusion with a clean, polished finish</li>
                  <li><strong className="opacity-90">• Crystal application</strong><br/>→ Secure placement with aesthetic balance</li>
                  <li><strong className="opacity-90">• Colour coordination</strong><br/>→ Matching tones with outfit & jewellery</li>
                  <li><strong className="opacity-90">• Undertone understanding</strong><br/>→ Adapting metallic across different undertones</li>
                  <li><strong className="opacity-90">• Balance of elements</strong><br/>→ Pairing bold eyes with fresh, airbrushed skin</li>
                  <li className="pt-2 border-t-[0.5px] border-brand-wine/10 mt-2">
                    • How tools affect finish (sheer vs full vs airbrushed skin)<br/>
                    • Minimal product, maximum impact approach
                  </li>
                </ul>
              </div>
              
            </div>
          </div>

          {/* Day 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 hover:bg-brand-cream transition-colors duration-500">
            <div className="lg:col-span-3 p-8 border-r-[0.5px] border-brand-wine/transparent lg:border-brand-wine/20 flex flex-col justify-start border-b-[0.5px] lg:border-b-0 border-brand-wine/20">
              <div>
                <span className="text-xs tracking-widest uppercase opacity-50 mb-2 block">6th June</span>
                <span className="font-serif text-3xl block">Day 4</span>
              </div>
              <img src={imgDay4} className="w-full max-w-[250px] aspect-[4/5] object-cover mt-8 opacity-90 shadow-sm" alt="Day 4" />
            </div>
            <div className="lg:col-span-9 p-8 flex flex-col justify-center">
              <h4 className="font-serif text-2xl mb-1 text-brand-accent">Look 5</h4>
              <p className="text-lg font-serif mb-2">The Midnight Luxe</p>
              <p className="text-base font-light opacity-80 mb-6">
                Designed for cocktails, receptions, and red carpet moment, this is not just a smokey eye it’s the art of creating a refined, high-glam look that adapts seamlessly to lighting, skin, undertones, and real-life movement.
              </p>
              <h5 className="font-serif text-lg mb-4 text-brand-accent">TECHNIQUE FOCUS</h5>
              <ul className="text-sm font-light opacity-80 space-y-4">
                <li><strong className="opacity-90 block mb-1">1:) Metal Theory – Gold vs Silver Aesthetic</strong> Warm, cool & Neutral Undertones</li>
                <li><strong className="opacity-90 block mb-1">2:) Feature Focus</strong> How to read the face & customise a look</li>
                <li><strong className="opacity-90 block mb-1">3.) Smokey Eye – Soft but Defined</strong>
                  • Gradient smokey technique<br/>
                  • Matte + shimmer balance<br/>
                  • Controlled glitter placement<br/>
                  • Uurmis signature liner with Smokey eyes
                </li>
                <li><strong className="opacity-90 block">4:) Strategic under-eye brightening</strong></li>
                <li><strong className="opacity-90 block">5:) Layered glow control</strong></li>
                <li><strong className="opacity-90 block mb-1">6:) Long-Wear Glam (VERY IMPORTANT)</strong>
                  Especially for: Humidity, long nights, hugs, kisses, sweat, flash photography which includes Grip layering technique
                </li>
                <li><strong className="opacity-90 block">7:) Cream + powder fusion → For longevity without heaviness</strong></li>
              </ul>
            </div>
          </div>

           {/* Day 5 */}
           <div className="grid grid-cols-1 lg:grid-cols-12 hover:bg-brand-cream transition-colors duration-500">
            <div className="lg:col-span-3 p-8 border-r-[0.5px] border-brand-wine/transparent lg:border-brand-wine/20 flex flex-col justify-start border-b-[0.5px] lg:border-b-0 border-brand-wine/20">
              <div>
                <span className="text-xs tracking-widest uppercase opacity-50 mb-2 block">7th June</span>
                <span className="font-serif text-3xl block">Day 5</span>
              </div>
              <img src={imgDay5} className="w-full max-w-[250px] aspect-[4/5] object-cover mt-8 opacity-90 shadow-sm" alt="Day 5" />
            </div>
             <div className="lg:col-span-9 p-8 flex flex-col justify-center">
              <h4 className="font-serif text-2xl sm:text-3xl break-words uppercase mb-4 text-brand-accent">1 PHOTOSHOOT DAY | Q&A | CERTIFICATION</h4>
              <p className="text-base font-light opacity-80 mb-8">A day dedicated to bringing your artistry to life and refining your professional journey.</p>
              
              <div className="space-y-8">
                <div>
                  <h5 className="font-serif text-xl mb-3 flex items-center">• PORTFOLIO PHOTOSHOOT DAY</h5>
                  <p className="text-sm font-light opacity-80 mb-3">Create high-quality, face-focused beauty images that truly reflect your signature style. Apply the techniques you’ve mastered throughout the course and bring your vision to life.</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                    <div className="bg-brand-rose/5 p-5 border-[0.5px] border-brand-wine/10">
                      <h6 className="font-medium text-xs tracking-widest uppercase mb-2">What We Provide:</h6>
                      <ul className="text-sm font-light opacity-80 space-y-1">
                        <li>• Curated Indian outfit</li>
                        <li>• Jewellery styling</li>
                        <li>• Professional stylist on board</li>
                        <li>• One-on-one consultation with Uurmi</li>
                        <li>• Dedicated photography & videography team</li>
                      </ul>
                    </div>
                    <div className="bg-brand-rose/5 p-5 border-[0.5px] border-brand-wine/10">
                      <h6 className="font-medium text-xs tracking-widest uppercase mb-2">Deliverables:</h6>
                      <ul className="text-sm font-light opacity-80 space-y-1">
                        <li>• Professionally edited high-resolution images</li>
                        <li>• 1 edited reel + all raw content (Airdrop)</li>
                      </ul>
                      <h6 className="font-medium text-xs tracking-widest uppercase mt-4 mb-2">Additional Support:</h6>
                      <p className="text-xs font-light opacity-70">We can assist you with a model list and an in-house hair artist.<br/>(At an additional cost, payable directly.)</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-serif text-xl mb-2 flex items-center">• Live Q&A & Mentorship</h5>
                  <p className="text-sm font-light opacity-80">An open, interactive session to clarify doubts, discuss real client scenarios, pricing, branding, and navigating the industry with confidence.</p>
                </div>

                <div>
                  <h5 className="font-serif text-xl mb-2 flex items-center">• Personal Feedback Session</h5>
                  <p className="text-sm font-light opacity-80">Get constructive, one-on-one insights on your work, technique, and overall growth as an artist.</p>
                </div>

                <div>
                  <h5 className="font-serif text-xl mb-2 flex items-center">• Certification Ceremony</h5>
                  <p className="text-sm font-light opacity-80">Receive your official certification upon successful completion, marking your elevation as a refined and industry-ready makeup artist.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Day 6 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-white hover:bg-brand-cream transition-colors duration-500">
            <div className="lg:col-span-3 p-8 border-r-[0.5px] border-brand-wine/transparent lg:border-brand-wine/20 flex flex-col justify-start border-b-[0.5px] lg:border-b-0 border-brand-wine/20">
              <div>
                <span className="text-xs tracking-widest uppercase opacity-50 mb-2 block">8th June</span>
                <span className="font-serif text-3xl block">Day 6</span>
              </div>
              <div className="w-full max-w-[250px] aspect-[4/5] mt-8 overflow-hidden rounded-sm shadow-sm bg-brand-wine/5">
                <img src={imgDay6} className="w-full h-full object-cover opacity-90 scale-[1.2]" alt="Day 6" />
              </div>
            </div>
             <div className="lg:col-span-9 p-8 border-r-[0.5px] border-brand-wine/20 flex flex-col justify-center border-b-[0.5px] lg:border-b-0 border-brand-wine/20">
              <p className="text-base font-light opacity-80 mb-6 mt-1">This time, we’ve gone deeper, so you don’t just learn makeup, you become an artist clients trust and choose. After months of research, conversations with industry experts, and understanding what truly works in today’s market, we’ve built a day focused on what actually drives success in-depth knowledge, refined technique, and real artistry.</p>
              
              <h5 className="font-serif text-xl mb-2 flex items-center">Certification Ceremony</h5>
              <p className="text-sm font-light opacity-80 mb-8">Receive your official certification upon successful completion, marking your elevation as a refined and industry-ready makeup artist</p>

              <p className="font-serif text-xl mb-4 text-brand-accent">You can either:</p>
              <div className="flex flex-col sm:flex-row gap-8">
                 <div className="flex-1 p-6 border-[0.5px] border-brand-wine/20 bg-brand-cream/50">
                   <h5 className="font-serif text-lg mb-2 uppercase tracking-wide">• ELEVATE YOUR SKILLSET</h5>
                   <p className="text-sm font-light opacity-80 mb-2">(PRACTICE WITH UURMI)</p>
                 </div>
                 <div className="flex items-center justify-center font-serif text-xl opacity-60">OR</div>
                 <div className="flex-1 p-6 border-[0.5px] border-brand-wine/20 bg-brand-rose/10">
                   <h5 className="font-serif text-lg mb-2 flex items-center uppercase tracking-wide">• BUILD YOUR PORTFOLIO</h5>
                   <p className="text-sm font-light opacity-80 mb-2">(OPTIONAL)<br/>Fee - 40,000/- additional</p>
                 </div>
              </div>
              <p className="mt-8 text-base font-light opacity-80 max-w-2xl">Either way—you don’t just leave with knowledge, you leave with confidence, clarity, and a stronger identity as an artist.</p>
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
                 OPTIONAL PORTFOLIO EXPERIENCE<br/><br/>
                 For those who wish to build or upgrade their portfolio, we’ve created an optional add-on experience.<br/><br/>
                 This includes:<br/>
                 • 2 portfolio shoots<br/>
                 • Guided look creation aligned with your learning with Uurmi<br/>
                 • Hands-on support from our team
               </p>
             </div>
             
             <div className="lg:col-span-6 bg-brand-wine/40 backdrop-blur-md p-6 sm:p-10 border-[0.5px] border-white/20">
               <h3 className="uppercase tracking-[0.2em] text-sm mb-6 md:mb-8 opacity-60">WHAT’S INCLUDED (PORTFOLIO ADD-ON)</h3>
               <ul className="space-y-4">
                 {[
                    "Indian outfits & jewellery sourced for your shoot",
                    "Professional stylist on board", 
                    "Exclusive consultation with Uurmi to refine your final looks",
                    "Professional photography & reel team", 
                    "Location for the shoot"
                 ].map((t, i) => (
                    <li key={i} className="text-sm font-light opacity-90 flex gap-4"><span className="text-[10px] opacity-40 shrink-0">0{i+1}</span>{t}</li>
                 ))}
               </ul>
               <p className="mt-6 md:mt-8 text-xs opacity-50 uppercase tracking-widest leading-relaxed border-t-[0.5px] border-white/20 pt-4">Note this won’t include Hair artist & Model , However the team could help you arrange models & hair artist if you wish</p>
            </div>
             <div className="lg:col-span-6 bg-brand-wine/40 backdrop-blur-md p-6 sm:p-10 border-[0.5px] border-white/20">
                <h3 className="uppercase tracking-[0.2em] text-sm mb-6 md:mb-8 opacity-60">FINAL DELIVERABLES (PORTFOLIO ADD-ON)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                     <h4 className="font-serif text-xl sm:text-2xl mb-2 text-brand-rose">Reels</h4>
                     <p className="text-sm font-light opacity-80 leading-relaxed">2 full-look reels (iPhone).</p>
                  </div>
                  <div>
                     <h4 className="font-serif text-xl sm:text-2xl mb-2 text-brand-rose">Instant</h4>
                     <p className="text-sm font-light opacity-80 leading-relaxed">Unedited content that you could Airdrop on the same day.</p>
                  </div>
                  <div>
                     <h4 className="font-serif text-xl sm:text-2xl mb-2 text-brand-rose">Imagery</h4>
                     <p className="text-sm font-light opacity-80 leading-relaxed">4–5 high-quality professional images per look.</p>
                  </div>
                   <div>
                     <h4 className="font-serif text-xl sm:text-2xl mb-2 text-brand-rose">Timeline</h4>
                     <p className="text-sm font-light opacity-80 leading-relaxed">Turnaround time: 1 month.</p>
                  </div>
                </div>
            </div>
         </div>
      </section>

      {/* Slice 6.5: Portfolio Grid Selection */}
      <section className="bg-brand-bg pt-12 md:pt-20 border-t-[0.5px] border-brand-wine/20">
        <div className="text-center mb-16 md:mb-20 mt-8 md:mt-12 flex justify-center w-full overflow-hidden">
          <div className="relative w-max inline-block px-4">
            <span className="font-script text-[3rem] md:text-[7rem] text-brand-rose absolute bottom-[35%] md:bottom-[40%] left-1/2 -translate-x-1/2 pointer-events-none drop-shadow-sm mix-blend-multiply opacity-60 leading-none">Signature</span>
            <h2 className="font-serif text-[28px] sm:text-4xl md:text-6xl uppercase tracking-widest relative z-10 whitespace-nowrap pt-12 md:pt-16">Couture Looks</h2>
          </div>
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

      {/* Slice 7: Footer / Pricing / Details */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 w-full max-w-[100vw] overflow-hidden bg-brand-cream border-t-[0.5px] border-brand-wine/20">
        
        {/* Products & Booking Info */}
        <div className="max-w-6xl mx-auto mb-16 md:mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <FadeIn>
            <h3 className="font-serif text-2xl md:text-3xl mb-6 text-brand-accent">Products & Kit Information</h3>
            <p className="text-base font-light opacity-80 leading-relaxed mb-4">
              A curated selection of luxury and economical brands, including a range of foundations across different formulas and finishes, will be provided for use during the class.
            </p>
            <p className="text-base font-light opacity-80 leading-relaxed">
              However, we highly encourage you to bring your personal makeup kit along with essential products. A detailed list of recommended items will be shared with you in advance to ensure you’re fully prepared for hands-on learning.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h3 className="font-serif text-2xl md:text-3xl mb-6 text-brand-accent">Booking & Payment Details</h3>
            <p className="text-base font-light opacity-80 leading-relaxed">
              An advance payment of <strong>₹40,000/-</strong> is required to secure your seat.<br/>
              Please note, this amount is <span className="underline decoration-brand-wine/30 underline-offset-4">non-refundable, non-transferable</span>.
            </p>
          </FadeIn>
        </div>

        {/* Pricing Matrix */}
        <div className="border-[0.5px] border-brand-wine/20 bg-brand-bg max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl relative mb-16 md:mb-24">
          <Crosshair className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-wine opacity-20 hidden md:flex" />
          
          <div className="p-8 sm:p-12 md:p-16 flex flex-col justify-center border-b-[0.5px] md:border-b-0 md:border-r-[0.5px] border-brand-wine/20">
             <span className="text-sm tracking-[0.3em] uppercase opacity-50 mb-4 block leading-relaxed">Course Fee</span>
             <h2 className="font-serif text-4xl sm:text-5xl mb-4 break-words">₹1,40,000/-</h2>
             <p className="text-base font-light opacity-70 leading-relaxed mb-4">Includes 7 days of comprehensive training and 1 portfolio shoot.</p>
             <p className="text-sm font-light opacity-60 leading-relaxed italic border-t-[0.5px] border-brand-wine/10 pt-4 mt-auto">Seats will be allotted on a first-come, first-served basis, as we intentionally keep our batches limited and intimate to ensure personalised attention and a high-quality learning experience.</p>
          </div>
          
          <div className="p-8 sm:p-12 md:p-16 flex flex-col justify-center bg-brand-bg md:bg-brand-cream/30">
             <span className="text-sm tracking-[0.3em] uppercase opacity-50 mb-4 block leading-relaxed">Optional Add-on</span>
             <h2 className="font-serif text-4xl sm:text-5xl mb-4 text-brand-accent break-words">₹40,000/-</h2>
             <p className="text-base font-light opacity-70 leading-relaxed">Couture Portfolio building experience. Includes styling, photo/video team, and 2 portfolio shoots.</p>
          </div>
        </div>

        {/* Details Note & Contact */}
        <div className="text-center w-full max-w-3xl mx-auto break-words flex flex-col items-center">
             
            <FadeIn>
              <h3 className="font-script text-4xl md:text-6xl mb-6 text-brand-rose drop-shadow-sm -rotate-2">A Note from Uurmi</h3>
              <p className="text-lg md:text-xl font-serif italic opacity-90 leading-relaxed mb-4">
                "An invitation to experience artistry, the way I truly practice it."
              </p>
              <p className="text-base font-light opacity-80 leading-relaxed mb-8">
                Step into my world- where every technique, every detail, and every secret is shared with precision, intention, and complete transparency.<br/>
                <span className="inline-block mt-4 text-brand-accent font-medium">See you there ❤️</span>
              </p>
              
              <div className="w-16 h-[0.5px] bg-brand-wine/40 mx-auto my-12"></div>
            </FadeIn>

            <h4 className="font-serif text-2xl uppercase tracking-widest mb-6 text-brand-wine">Location</h4>
            <p className="text-sm md:text-base font-medium uppercase tracking-widest opacity-80 flex items-center justify-center gap-3 mb-10"><MapPin className="w-4 h-4 shrink-0 text-brand-accent" /> <span className="truncate">MUMBAI, ANDHERI</span></p>

            <p className="text-sm font-light mt-4 opacity-60 leading-relaxed max-w-xl mx-auto border-t-[0.5px] border-brand-wine/20 pt-8">
              <strong>OPPORTUNITIES</strong><br/><br/>
              For those looking to be a part of the team or explore internship opportunities, please contact the team.
            </p>
        </div>
      </section>
      
    </div>
  );
}
