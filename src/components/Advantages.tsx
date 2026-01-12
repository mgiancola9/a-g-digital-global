import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Wrench, Globe } from "lucide-react";

const advantages = [
  {
    icon: Target,
    title: "Lead-Driven Design",
    description:
      "Every pixel engineered for conversion. We design digital experiences that transform visitors into loyal customers across every market.",
  },
  {
    icon: Wrench,
    title: "Zero Tech Stress",
    description:
      "Focus on your business while we handle the complexity. Our white-glove service means you never touch a line of code or manage a server.",
  },
  {
    icon: Globe,
    title: "Edge-Delivery Network",
    description:
      "Your site served from the nearest global server. Sub-100ms response times for users in Tokyo, London, New York, and everywhere in between.",
  },
];

const Advantages = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="methodology" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            The A&G Advantage
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Why Global Brands</span>
            <br />
            <span className="gold-text">Choose Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We combine technical excellence with strategic thinking to deliver 
            digital infrastructure that scales with your ambitions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card rounded-2xl p-8 group hover:border-gold/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <advantage.icon className="w-7 h-7 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
