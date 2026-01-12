import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const PerformanceCard = () => {
  const [time, setTime] = useState(new Date());
  const [score, setScore] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const scoreTimer = setTimeout(() => {
      if (score < 100) {
        setScore((prev) => Math.min(prev + 4, 100));
      }
    }, 50);
    return () => clearTimeout(scoreTimer);
  }, [score]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="glass-card rounded-2xl p-8 animate-float"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
        <span className="text-muted-foreground text-sm font-medium">Live Performance</span>
      </div>

      <div className="flex items-center justify-center mb-8">
        <div className="relative">
          <svg className="w-36 h-36 transform -rotate-90">
            <circle
              cx="72"
              cy="72"
              r="60"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-charcoal-lighter"
            />
            <circle
              cx="72"
              cy="72"
              r="60"
              stroke="url(#goldGradient)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${(score / 100) * 377} 377`}
              className="transition-all duration-300"
            />
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(43, 56%, 52%)" />
                <stop offset="100%" stopColor="hsl(43, 70%, 65%)" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold gold-text">{score}</span>
            <span className="text-xs text-muted-foreground">Lighthouse</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center">
        {[
          { label: "Performance", icon: Zap, value: "100" },
          { label: "SEO", icon: TrendingUp, value: "100" },
          { label: "Security", icon: Shield, value: "A+" },
        ].map((stat) => (
          <div key={stat.label} className="space-y-1">
            <stat.icon className="w-4 h-4 mx-auto text-gold" />
            <p className="text-xl font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground mb-1">Server Time (UTC)</p>
        <p className="text-lg font-mono text-foreground">
          {time.toLocaleTimeString("en-US", { hour12: false })}
        </p>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-charcoal-light opacity-50" />
      <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gold/3 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-sm text-gold font-medium">Global Digital Partner</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gradient">Engineering</span>
              <br />
              <span className="text-foreground">High-Performance</span>
              <br />
              <span className="gold-text">Digital Infrastructure</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              We build the digital front door for the world's most ambitious brands. 
              Fast, SEO-optimized, and conversion-engineered.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="xl">
                Get Global Quote
              </Button>
              <Button variant="gold-outline" size="xl">
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              {[
                { value: "50+", label: "Global Clients" },
                { value: "99.9%", label: "Uptime SLA" },
                { value: "<500ms", label: "Load Time" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl md:text-3xl font-bold gold-text">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Performance Card */}
          <div className="flex justify-center lg:justify-end">
            <PerformanceCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
