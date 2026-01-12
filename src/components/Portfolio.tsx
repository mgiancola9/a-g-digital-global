import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Hamilton Barber Shop Series",
    category: "E-Commerce & Branding",
    description: "Complete digital transformation for a legacy barbershop chain. 340% increase in online bookings.",
    metrics: { speed: "0.4s", seo: "100", conversions: "+340%" },
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=600&fit=crop",
  },
  {
    title: "Enterprise Web Infrastructure",
    category: "SaaS Platform",
    description: "High-availability platform serving 2M+ monthly users across 40 countries with 99.99% uptime.",
    metrics: { speed: "0.3s", seo: "98", conversions: "+180%" },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    title: "Global Finance Portal",
    category: "FinTech",
    description: "Secure, compliant financial dashboard with real-time data visualization for institutional clients.",
    metrics: { speed: "0.5s", seo: "100", conversions: "+220%" },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    title: "Luxury Brand Showcase",
    category: "Luxury Retail",
    description: "Immersive digital experience for high-end fashion brand. Featured in Awwwards.",
    metrics: { speed: "0.6s", seo: "100", conversions: "+150%" },
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Case Studies &</span>
            <br />
            <span className="gold-text">Success Stories</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Results-driven projects that showcase our commitment to 
            performance, design, and measurable business impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full glass-card text-gold">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-charcoal" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  <div>
                    <p className="text-lg font-bold gold-text">{project.metrics.speed}</p>
                    <p className="text-xs text-muted-foreground">Load Time</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold gold-text">{project.metrics.seo}</p>
                    <p className="text-xs text-muted-foreground">SEO Score</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold gold-text">{project.metrics.conversions}</p>
                    <p className="text-xs text-muted-foreground">Conversions</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-medium"
          >
            View All Case Studies
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
