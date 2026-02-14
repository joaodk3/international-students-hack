import { motion, useScroll, useTransform } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { CyberButton } from "@/components/CyberButton";
import { 
  Terminal, 
  Globe, 
  Cpu, 
  Database, 
  Scale, 
  Zap, 
  Rocket, 
  FlaskConical, 
  Briefcase,
  ChevronRight,
  MapPin,
  Calendar,
  DollarSign,
  Users,
  ShieldCheck,
  AlertTriangle,
  ChevronDown
} from "lucide-react";
import logo from "@assets/png-ustay-profile-dark-no-tag_1771105377613.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// --- HERO SECTION ---
function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-secondary/10 blur-[100px] rounded-full" />
      </div>

      <motion.div 
        style={{ y: y1, opacity }}
        className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm"
        >
          <Globe className="w-4 h-4 text-primary animate-spin-slow" />
          <span className="text-sm font-mono text-primary/80 uppercase tracking-widest">International Innovators Hackathon 2026</span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-[0.9]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          INNOVATION <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">DOESN'T NEED</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-secondary text-glow">PERMISSION</span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          45% of U.S. unicorn founders are immigrants — be the next one.
          <span className="text-primary font-mono text-base mt-2 block">Powered by USTAY Global Mobility Solutions</span>
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 w-full justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href={import.meta.env.VITE_REGISTRATION_FORM_URL || "#"} target="_blank" rel="noopener noreferrer">
            <CyberButton variant="primary" className="w-full sm:w-auto">
              Register Now <ChevronRight className="w-4 h-4" />
            </CyberButton>
          </a>
          <a href={import.meta.env.VITE_DISCORD_INVITE_URL || "#"} target="_blank" rel="noopener noreferrer">
            <CyberButton variant="outline" className="w-full sm:w-auto">
              Join Discord <Users className="w-4 h-4 ml-2" />
            </CyberButton>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 opacity-70 hover:opacity-100 transition-opacity"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Official Sponsor</p>
          <img src={logo} alt="USTAY Logo" className="h-8 md:h-10 mx-auto" />
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}

// --- ABOUT SECTION ---
function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              INNOVATION <span className="text-primary">WITHOUT BORDERS</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                The <strong className="text-white">International Innovators Hackathon</strong> is designed exclusively for F-1 visa students in the United States. We're bridging the gap between academic theory and real-world impact.
              </p>
              <ul className="space-y-4 font-mono text-sm">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  Educational & Competitive focus
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Strictly non-commercial participation
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  Showcase skills to global employers
                </li>
              </ul>
              
              <div className="p-4 border border-yellow-500/20 bg-yellow-500/5 rounded mt-8 flex gap-4 items-start">
                <AlertTriangle className="text-yellow-500 shrink-0 mt-1" />
                <div>
                  <h4 className="text-yellow-500 font-bold text-sm uppercase mb-1">Important Compliance Notice</h4>
                  <p className="text-sm text-yellow-500/80">
                    Participation in this event is purely educational and does not constitute employment. All intellectual property remains with the creators.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary opacity-20 blur-xl rounded-full" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="bg-card border border-border p-6 rounded-lg space-y-2 hover:border-primary/50 transition-colors">
                <Users className="w-8 h-8 text-primary mb-2" />
                <h3 className="text-xl font-bold">500+</h3>
                <p className="text-sm text-muted-foreground">Students Expected</p>
              </div>
              <div className="bg-card border border-border p-6 rounded-lg space-y-2 hover:border-primary/50 transition-colors mt-8">
                <Globe className="w-8 h-8 text-secondary mb-2" />
                <h3 className="text-xl font-bold">50+</h3>
                <p className="text-sm text-muted-foreground">Universities</p>
              </div>
              <div className="bg-card border border-border p-6 rounded-lg space-y-2 hover:border-primary/50 transition-colors">
                <Rocket className="w-8 h-8 text-accent mb-2" />
                <h3 className="text-xl font-bold">48h</h3>
                <p className="text-sm text-muted-foreground">To Build</p>
              </div>
              <div className="bg-card border border-border p-6 rounded-lg space-y-2 hover:border-primary/50 transition-colors mt-8">
                <DollarSign className="w-8 h-8 text-green-500 mb-2" />
                <h3 className="text-xl font-bold">$2k+</h3>
                <p className="text-sm text-muted-foreground">In Prizes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- TRACKS SECTION ---
const tracks = [
  { icon: Briefcase, title: "Workforce & EdTech", desc: "Revolutionizing how we learn and work globally." },
  { icon: FlaskConical, title: "Healthcare & Life Sci", desc: "Biotech innovations and patient care solutions." },
  { icon: Cpu, title: "Engineering & Infra", desc: "Smart cities, robotics, and resilient systems." },
  { icon: Database, title: "Data & Analytics", desc: "Big data insights and decision support systems." },
  { icon: Scale, title: "GovTech & Policy", desc: "Solutions for compliance, civic tech, and governance." },
  { icon: Zap, title: "Energy & Climate", desc: "Sustainable tech for a greener future." },
  { icon: Rocket, title: "Entrepreneurship", desc: "Scalable business models and startup tools." },
  { icon: Terminal, title: "Applied Science", desc: "Deep tech, quantum computing, and R&D." },
];

function Tracks() {
  return (
    <section id="tracks" className="py-20 md:py-32 bg-black/40">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Challenge Tracks" subtitle="Choose your arena. Build solutions that matter." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map((track, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-1"
            >
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              
              <div className="relative h-full bg-card border border-border group-hover:border-transparent rounded-xl p-6 transition-all duration-300 flex flex-col items-start hover:translate-y-[-4px]">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <track.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{track.title}</h3>
                <p className="text-sm text-muted-foreground">{track.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- TIMELINE SECTION ---
const events = [
  { date: "Feb 20, 2026", title: "Registration Opens", desc: "Sign up and form your teams." },
  { date: "Mar 07, 2026", title: "Opening Ceremony", desc: "Challenge reveal and hacking begins." },
  { date: "Mar 07-12, 2026", title: "Building Phase", desc: "5 days of intense development." },
  { date: "Mar 12-17, 2026", title: "Judging Period", desc: "Expert panel reviews submissions." },
  { date: "Mar 20, 2026", title: "Winners Announced", desc: "Closing ceremony & awards." },
];

function Timeline() {
  return (
    <section id="timeline" className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Event Timeline" subtitle="Mark your calendars." />
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-secondary/20 to-primary/20 -translate-x-1/2" />

          {events.map((event, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative flex items-center gap-8 mb-12 md:mb-24 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Desktop Content */}
                <div className="hidden md:block flex-1 text-right">
                  {isLeft ? (
                    <div className="pr-8">
                      <span className="text-primary font-mono text-sm mb-2 block">{event.date}</span>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground text-sm">{event.desc}</p>
                    </div>
                  ) : null}
                </div>

                {/* Center Node */}
                <div className="relative z-10 w-10 h-10 rounded-full border-4 border-background bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)] shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>

                {/* Mobile/Right Content */}
                <div className="flex-1">
                   <div className={`${isLeft ? "pl-0 md:pl-8" : "pl-0 md:pr-8 md:text-right"}`}>
                    <div className="md:hidden">
                       <span className="text-primary font-mono text-sm mb-1 block">{event.date}</span>
                    </div>
                    {/* Only show on right for desktop if right aligned, show always on mobile */}
                    <div className={`${!isLeft ? "hidden md:block" : "block md:hidden"}`}>
                      {!isLeft && (
                        <>
                          <span className="hidden md:block text-primary font-mono text-sm mb-2">{event.date}</span>
                          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                          <p className="text-muted-foreground text-sm">{event.desc}</p>
                        </>
                      )}
                      {isLeft && (
                         <div className="md:hidden">
                            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                            <p className="text-muted-foreground text-sm">{event.desc}</p>
                         </div>
                      )}
                    </div>
                     {/* Show on right for desktop if even index */}
                     {!isLeft && (
                       <div className="block md:hidden">
                           <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                           <p className="text-muted-foreground text-sm">{event.desc}</p>
                       </div>
                     )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// --- PRIZES SECTION ---
function Prizes() {
  return (
    <section id="prizes" className="py-20 md:py-32 bg-black/40">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="The Rewards" subtitle="Compete for glory and grants." centered />

        <div className="flex flex-col md:flex-row justify-center items-end gap-6 max-w-5xl mx-auto">
          {/* 2nd Place */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full md:w-1/3 bg-card/50 border border-border rounded-xl p-8 flex flex-col items-center text-center hover:border-secondary/50 transition-colors order-2 md:order-1"
          >
            <div className="text-4xl font-bold text-muted-foreground mb-4">2nd</div>
            <div className="text-3xl font-mono font-bold text-secondary mb-2">$500</div>
            <p className="text-sm text-muted-foreground">Cash Prize</p>
          </motion.div>

          {/* 1st Place */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 }}
            className="w-full md:w-1/3 bg-gradient-to-b from-card to-card/50 border-2 border-primary rounded-xl p-10 flex flex-col items-center text-center shadow-[0_0_30px_rgba(6,182,212,0.2)] order-1 md:order-2 relative z-10 transform md:-translate-y-8"
          >
            <div className="absolute -top-6 bg-primary text-background font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wider">Champion</div>
            <div className="text-6xl mb-4">👑</div>
            <div className="text-5xl font-mono font-bold text-primary mb-2 text-glow">$1,000</div>
            <p className="text-lg text-white font-bold">Grand Prize</p>
          </motion.div>

          {/* 3rd Place */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full md:w-1/3 bg-card/50 border border-border rounded-xl p-8 flex flex-col items-center text-center hover:border-accent/50 transition-colors order-3"
          >
            <div className="text-4xl font-bold text-muted-foreground mb-4">3rd</div>
            <div className="text-3xl font-mono font-bold text-accent mb-2">$300</div>
            <p className="text-sm text-muted-foreground">Cash Prize</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- SPONSOR SECTION ---
function Sponsor() {
  return (
    <section id="sponsor" className="py-20 bg-background border-y border-border/50">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-8">Powered By</p>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 mb-8 flex items-center justify-center">
             <img src={logo} alt="USTAY Global" className="max-w-[280px] w-full h-auto opacity-90 hover:opacity-100 transition-opacity" />
          </div>

          <p className="text-xl md:text-2xl font-light text-muted-foreground">
            "Sponsored by <strong className="text-white">USTAY Global Mobility Solutions</strong>, supporting international students building their future in the United States."
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// --- FAQ SECTION ---
function FAQ() {
  const faqs = [
    { q: "Who can participate?", a: "This hackathon is exclusively for students currently on F-1 visa status residing within the United States. We will verify status during registration." },
    { q: "Is this considered employment?", a: "No. This is an educational competition. There is no employer-employee relationship, and participation does not constitute work authorization or OPT/CPT usage." },
    { q: "What is the team size?", a: "You can participate solo or in teams of up to 3 people. We encourage forming diverse teams with different skill sets." },
    { q: "Does it cost anything?", a: "No, participation is completely free for all eligible students." },
    { q: "Do I need to be a coder?", a: "Not necessarily! We need designers, project managers, and domain experts. However, your team must produce a working prototype." },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-black/40">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionHeading title="FAQ" subtitle="Common questions answered." centered />
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-border bg-card/50 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-medium hover:text-primary hover:no-underline py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Tracks />
        <Timeline />
        <Prizes />
        <Sponsor />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
