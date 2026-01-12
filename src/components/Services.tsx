import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Search, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code2,
    title: "Bespoke Development",
    description:
      "High-speed React/Vite builds engineered for performance. Custom solutions that scale from startup to enterprise.",
    features: ["React/Vite Architecture", "TypeScript First", "Edge-Optimized"],
  },
  {
    icon: Search,
    title: "International SEO",
    description:
      "Dominating global search rankings with technical excellence. Multi-language, multi-region strategies that drive organic growth.",
    features: ["Technical SEO Audits", "Multi-Language Support", "Core Web Vitals"],
  },
  {
    icon: Rocket,
    title: "Performance Migration",
    description:
      "Rescuing slow legacy sites and transforming them into lightning-fast digital experiences. Zero downtime migrations.",
    features: ["Legacy Modernization", "Speed Optimization", "Platform Migration"],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-charcoal-light/30 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">World-Class</span>
            <br />
            <span className="gold-text">Digital Engineering</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From ground-up development to rescue missions, we deliver 
            performance-first solutions for the modern web.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card rounded-2xl p-8 group hover:border-gold/30 transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl glass-card flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-gold/20">
                <service.icon className="w-7 h-7 text-gold" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="gold-outline" className="w-full mt-auto">
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
