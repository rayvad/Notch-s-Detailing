import React, { useState } from 'react';
import { Star, MapPin, Phone, Car, User, CheckCircle2, Mail, Shield, Droplets } from 'lucide-react';
import { motion } from 'motion/react';

// Components for Scroll Reveal Animations
const SlideText = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false, margin: "-10%" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const ScaleImage = ({ children, className }: { children: React.ReactNode, className?: string, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: false, margin: "-10%" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const PopBubble = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false, margin: "-5%" }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className={`absolute pointer-events-none ${className}`}
  >
    {children}
  </motion.div>
);

// Image Component with Loading State
const LoadedImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-sky-50 ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-sky-50">
          <div className="w-8 h-8 border-4 border-sky-200 border-t-blue-900 rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans relative overflow-hidden pt-20">
      
      {/* Global Floating Bubbles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <PopBubble className="-top-20 -left-20">
          <div className="w-96 h-96 rounded-full bg-[radial-gradient(circle_at_30%_30%,#E0F2FE,transparent)] opacity-40 blur-xl bubble-anim" style={{ animationDelay: '0s' }}></div>
        </PopBubble>
        <PopBubble className="top-1/4 -right-32">
          <div className="w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_70%_30%,#E0F2FE,transparent)] opacity-30 blur-2xl bubble-anim" style={{ animationDelay: '-5s' }}></div>
        </PopBubble>
        <PopBubble className="-bottom-40 left-1/3">
          <div className="w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_50%_50%,#E0F2FE,transparent)] opacity-40 blur-3xl bubble-anim" style={{ animationDelay: '-10s' }}></div>
        </PopBubble>
        
        {/* Distinct visible bubbles */}
        <PopBubble className="top-32 left-10">
          <div className="w-16 h-16 rounded-full border border-sky-200 bg-gradient-to-br from-white/40 to-sky-100/20 opacity-60 shadow-[inset_0_0_10px_rgba(255,255,255,0.8)] bubble-anim" style={{ animationDelay: '-2s' }}></div>
        </PopBubble>
        <PopBubble className="top-1/3 right-20">
          <div className="w-24 h-24 rounded-full border border-sky-200 bg-gradient-to-br from-white/40 to-sky-100/20 opacity-50 shadow-[inset_0_0_15px_rgba(255,255,255,0.8)] bubble-anim" style={{ animationDelay: '-7s' }}></div>
        </PopBubble>
        <PopBubble className="bottom-1/4 left-1/4">
          <div className="w-12 h-12 rounded-full border border-sky-200 bg-gradient-to-br from-white/40 to-sky-100/20 opacity-70 shadow-[inset_0_0_8px_rgba(255,255,255,0.8)] bubble-anim" style={{ animationDelay: '-12s' }}></div>
        </PopBubble>
      </div>

      {/* Stay-Top Navigation */}
      <nav className="nav-fixed px-6 py-4 flex justify-between items-center w-full">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter text-[#1E3A8A]">
            NOTCH'S<span className="text-[#87CEEB] font-light">DETAILING</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-bold text-slate-600">
            <a href="#process" className="hover:text-[#1E3A8A] transition-colors">Process</a>
            <a href="#reviews" className="hover:text-[#1E3A8A] transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-[#1E3A8A] transition-colors">Contact Us</a>
            <a href="#area" className="hover:text-[#1E3A8A] transition-colors">Service Area</a>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-[#1E3A8A] rounded-full shimmer-pulse-btn">
            Get Quote
          </a>
        </div>
      </nav>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 min-h-[85vh]">
          <SlideText className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0F2FE] text-[#1E3A8A] text-xs font-bold uppercase tracking-wider mb-6">
              <Star className="w-3.5 h-3.5 fill-[#1E3A8A]" />
              <span>Top Rated in Sarasota</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Sarasota’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#87CEEB]">Surgical-Grade</span> Auto Care.
            </h1>
            <p className="text-2xl md:text-3xl text-slate-800 mb-4 font-semibold">
              We Don’t Just Wash, We Refine.
            </p>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Skilled hands. Better chemistry. A higher standard for every car on the Florida coast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-[#1E3A8A] rounded-full shadow-lg shadow-blue-900/20 shimmer-pulse-btn">
                Get Your Instant Quote
              </a>
            </div>
          </SlideText>
          
          <ScaleImage className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] group border-4 border-white">
              <LoadedImage 
                src="https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern White BMW SUV" 
                className="w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-semibold text-lg flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#87CEEB]" />
                  Precision for the Modern Family
                </p>
              </div>
            </div>
          </ScaleImage>
        </section>

        {/* SURGICAL CARE (PROCESS) */}
        <section id="process" className="bg-[#E0F2FE]/30 py-24 relative border-y border-[#E0F2FE]">
          <div className="max-w-7xl mx-auto px-6">
            <SlideText className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#1E3A8A] mb-6">Surgical Care. Flawless Results.</h2>
              <p className="text-lg text-slate-700 font-medium">
                We combine trustworthy expertise with careful hands to deliver a level of clean that goes beyond the surface.
              </p>
            </SlideText>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              <ScaleImage className="bg-white p-10 rounded-[2rem] shadow-lg shadow-[#1E3A8A]/5 border border-white hover:border-[#E0F2FE] transition-colors relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,#E0F2FE,transparent)] opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="w-16 h-16 bg-[#E0F2FE] rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Shield className="w-8 h-8 text-[#1E3A8A]" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">Precision Paint Correction</h3>
                <p className="text-slate-600 leading-relaxed mb-6 relative z-10">
                  Our trustworthy expertise means we never cut corners. We use pH-neutral soaps, grit-guarded buckets, and ultra-plush microfiber to ensure a scratch-free, surgical-grade wash that protects your clear coat.
                </p>
                <ul className="space-y-3 relative z-10">
                  {['Two-bucket wash method', 'Touchless drying systems', 'Ceramic-infused sealants'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-800 font-semibold">
                      <CheckCircle2 className="w-5 h-5 text-[#1E3A8A]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScaleImage>

              <ScaleImage className="bg-white p-10 rounded-[2rem] shadow-lg shadow-[#1E3A8A]/5 border border-white hover:border-[#E0F2FE] transition-colors relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,#E0F2FE,transparent)] opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="w-16 h-16 bg-[#E0F2FE] rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Droplets className="w-8 h-8 text-[#1E3A8A]" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">Deep Interior Sanitization</h3>
                <p className="text-slate-600 leading-relaxed mb-6 relative z-10">
                  Careful hands meticulously clean every crevice of your cabin. We don't just vacuum; we extract, steam, and sanitize to restore a factory-fresh feel and eliminate hidden allergens.
                </p>
                <ul className="space-y-3 relative z-10">
                  {['Deep steam cleaning', 'Leather conditioning & UV protection', 'Odor neutralization'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-800 font-semibold">
                      <CheckCircle2 className="w-5 h-5 text-[#1E3A8A]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScaleImage>
            </div>
            
            <SlideText className="text-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-[#1E3A8A] rounded-full shadow-lg shadow-blue-900/20 shimmer-pulse-btn">
                Check Availability
              </a>
            </SlideText>
          </div>
        </section>

        {/* REVIEWS (5-STAR) */}
        <section id="reviews" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <SlideText className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Real-World 5-Star Reviews</h2>
              <p className="text-lg text-slate-600 font-medium">See what your neighbors are saying about our surgical-grade care.</p>
            </SlideText>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  name: "Michael T.",
                  text: "He made my BMW X5 look better than the day I drove it off the lot. Incredible focus and careful hands.",
                  car: "BMW X5",
                  img: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&q=80&w=400"
                },
                {
                  name: "Sarah L.",
                  text: "Notch was so careful with my daily driver. Finally found someone I can trust in Sarasota with my Honda.",
                  car: "Honda Accord",
                  img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400"
                },
                {
                  name: "David R.",
                  text: "The attention to detail is insane. He spent 2 hours just on my interior! The surgical focus is real.",
                  car: "Lexus ES",
                  img: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=400"
                }
              ].map((review, i) => (
                <ScaleImage key={i} className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#E0F2FE] opacity-20 rounded-bl-full"></div>
                  <div className="flex gap-1 mb-6 relative z-10">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-[#1E3A8A] text-[#1E3A8A]" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-8 italic text-lg leading-relaxed flex-grow relative z-10">"{review.text}"</p>
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-100 relative z-10">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#E0F2FE]">
                      <LoadedImage src={review.img} alt={review.car} />
                    </div>
                    <div>
                      <span className="block font-bold text-slate-900">{review.name}</span>
                      <span className="block text-sm font-bold text-[#1E3A8A]">{review.car}</span>
                    </div>
                  </div>
                </ScaleImage>
              ))}
            </div>
            
            <SlideText className="text-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-[#1E3A8A] rounded-full shadow-lg shadow-blue-900/20 shimmer-pulse-btn">
                Experience This Quality
              </a>
            </SlideText>
          </div>
        </section>

        {/* FLORIDA MAP & SERVICE AREA */}
        <section id="area" className="bg-[#1E3A8A] text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#E0F2FE,transparent)]"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
            <SlideText className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#E0F2FE] text-xs font-bold uppercase tracking-wider mb-6">
                <MapPin className="w-4 h-4" />
                <span>Service Zone</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-white">We Come To You.</h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed font-medium">
                Proudly serving Sarasota, Siesta Key, and the surrounding Florida coast. Our fully-equipped mobile studio brings surgical-grade detailing to your driveway.
              </p>
              <ul className="space-y-4 mb-10">
                {['Sarasota', 'Siesta Key', 'Longboat Key', 'Bradenton'].map((city) => (
                  <li key={city} className="flex items-center gap-3 text-[#E0F2FE]">
                    <CheckCircle2 className="w-6 h-6 text-[#E0F2FE]" />
                    <span className="font-bold text-xl">{city}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-[#1E3A8A] bg-white rounded-full shadow-lg shadow-black/20 shimmer-pulse-btn">
                See if we cover your street
              </a>
            </SlideText>
            
            <ScaleImage className="flex-1 relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center">
              {/* Large SVG Map of Florida */}
              <svg viewBox="0 0 400 400" className="w-full h-full opacity-90 drop-shadow-2xl" fill="none" stroke="currentColor">
                <path 
                  d="M80,40 L220,40 C250,40 270,50 280,80 L300,160 C310,200 340,280 360,330 C370,360 350,380 320,380 C290,380 270,360 260,320 L230,220 C210,160 180,120 150,90 L80,80 C50,70 50,40 80,40 Z" 
                  fill="rgba(255, 255, 255, 0.05)" 
                  stroke="#E0F2FE" 
                  strokeWidth="3"
                  strokeLinejoin="round"
                  className="drop-shadow-[0_0_15px_rgba(224,242,254,0.2)]"
                />
              </svg>
              
              {/* Bright Blue Pulse Ripple for Sarasota */}
              <div className="absolute top-[58%] left-[55%]">
                <div className="relative flex items-center justify-center">
                  <div className="w-6 h-6 bg-[#87CEEB] rounded-full z-10 shadow-[0_0_20px_rgba(135,206,235,1)]"></div>
                  <div className="absolute inset-0 w-6 h-6 bg-[#87CEEB] rounded-full animate-ping opacity-100 scale-150"></div>
                  <div className="absolute inset-0 w-6 h-6 bg-[#87CEEB] rounded-full animate-pulse opacity-50 scale-[3]"></div>
                  
                  <div className="absolute top-10 bg-white text-[#1E3A8A] text-sm font-extrabold px-5 py-2 rounded-full shadow-2xl whitespace-nowrap">
                    Sarasota / Siesta Key
                  </div>
                </div>
              </div>
            </ScaleImage>
          </div>
        </section>

        {/* CONTACT US (FOOTER) */}
        <section id="contact" className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16">
              <SlideText className="flex-1">
                <h2 className="text-4xl md:text-6xl font-extrabold text-[#1E3A8A] mb-6">Ready for a Refresh?</h2>
                <p className="text-xl text-slate-600 mb-12 font-medium">
                  Get an instant quote and book your surgical-grade detail today. We respond to all inquiries within 2 hours.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-[#E0F2FE] rounded-2xl flex items-center justify-center shrink-0">
                      <Phone className="w-7 h-7 text-[#1E3A8A]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-1">Call or Text</h4>
                      <p className="text-slate-600 text-lg font-medium">(941) 555-0199</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-[#E0F2FE] rounded-2xl flex items-center justify-center shrink-0">
                      <Mail className="w-7 h-7 text-[#1E3A8A]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-1">Email Us</h4>
                      <p className="text-slate-600 text-lg font-medium">hello@notchdetailing.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-[#E0F2FE] rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin className="w-7 h-7 text-[#1E3A8A]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-1">Service Area</h4>
                      <p className="text-slate-600 text-lg font-medium">Serving Sarasota, FL</p>
                    </div>
                  </div>
                </div>
              </SlideText>

              <ScaleImage className="flex-1">
                <form className="bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl shadow-[#1E3A8A]/10 border-2 border-[#E0F2FE]" onSubmit={(e) => e.preventDefault()}>
                  <h3 className="text-3xl font-extrabold text-[#1E3A8A] mb-8">Get Your Instant Quote</h3>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <User className="h-6 w-6 text-[#1E3A8A]/50" />
                        </div>
                        <input 
                          type="text" 
                          id="name" 
                          className="block w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-[#E0F2FE] rounded-2xl text-slate-900 focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all outline-none font-medium" 
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="vehicle" className="block text-sm font-bold text-slate-700 mb-2">Vehicle Make & Model</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Car className="h-6 w-6 text-[#1E3A8A]/50" />
                        </div>
                        <input 
                          type="text" 
                          id="vehicle" 
                          className="block w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-[#E0F2FE] rounded-2xl text-slate-900 focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all outline-none font-medium" 
                          placeholder="e.g. 2024 BMW X5"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Phone className="h-6 w-6 text-[#1E3A8A]/50" />
                        </div>
                        <input 
                          type="tel" 
                          id="phone" 
                          className="block w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-[#E0F2FE] rounded-2xl text-slate-900 focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all outline-none font-medium" 
                          placeholder="(941) 555-0123"
                        />
                      </div>
                    </div>

                    <button type="submit" className="w-full flex items-center justify-center px-8 py-5 text-xl font-extrabold text-white bg-[#1E3A8A] rounded-2xl shadow-lg shadow-blue-900/20 shimmer-pulse-btn mt-8">
                      Request Quote
                    </button>
                  </div>
                </form>
              </ScaleImage>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Bottom */}
      <footer className="bg-slate-50 text-slate-500 py-8 text-center relative z-10 border-t border-[#E0F2FE]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xl font-bold tracking-tighter text-[#1E3A8A]">
            NOTCH'S<span className="text-[#87CEEB] font-light">DETAILING</span>
          </div>
          <p className="text-sm font-medium">© {new Date().getFullYear()} Notch's Car Detailing. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
