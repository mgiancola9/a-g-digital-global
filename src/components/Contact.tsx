import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const projectScopes = [
  "New Website Development",
  "Website Redesign",
  "Performance Optimization",
  "SEO Strategy",
  "E-Commerce Platform",
  "Custom Web Application",
  "Other",
];

const budgetRanges = [
  "$5,000 - $15,000",
  "$15,000 - $30,000",
  "$30,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
];

interface FormData {
  name: string;
  company: string;
  email: string;
  scope: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  company?: string;
  email?: string;
  scope?: string;
  budget?: string;
}

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    scope: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.scope) {
      newErrors.scope = "Please select a project scope";
    }

    if (!formData.budget) {
      newErrors.budget = "Please select a budget range";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      company: "",
      email: "",
      scope: "",
      budget: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputStyles = `
    w-full px-4 py-3 rounded-lg bg-charcoal-light border border-border 
    text-foreground placeholder:text-muted-foreground 
    focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold
    transition-all duration-300
  `;

  const errorStyles = "text-destructive text-sm mt-1 flex items-center gap-1";

  return (
    <section id="contact" className="section-padding bg-charcoal-light/30 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-gold/[0.02] to-transparent" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Start Your</span>
            <br />
            <span className="gold-text">Global Project</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to build high-performance digital infrastructure? 
            Let's discuss how we can accelerate your global ambitions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className={inputStyles}
                />
                {errors.name && (
                  <p className={errorStyles}>
                    <AlertCircle className="w-3 h-3" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Acme Corp"
                  className={inputStyles}
                />
                {errors.company && (
                  <p className={errorStyles}>
                    <AlertCircle className="w-3 h-3" />
                    {errors.company}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@acme.com"
                className={inputStyles}
              />
              {errors.email && (
                <p className={errorStyles}>
                  <AlertCircle className="w-3 h-3" />
                  {errors.email}
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Scope *
                </label>
                <select
                  name="scope"
                  value={formData.scope}
                  onChange={handleChange}
                  className={`${inputStyles} appearance-none cursor-pointer`}
                >
                  <option value="">Select scope...</option>
                  {projectScopes.map((scope) => (
                    <option key={scope} value={scope}>
                      {scope}
                    </option>
                  ))}
                </select>
                {errors.scope && (
                  <p className={errorStyles}>
                    <AlertCircle className="w-3 h-3" />
                    {errors.scope}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Budget Range *
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={`${inputStyles} appearance-none cursor-pointer`}
                >
                  <option value="">Select budget...</option>
                  {budgetRanges.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
                {errors.budget && (
                  <p className={errorStyles}>
                    <AlertCircle className="w-3 h-3" />
                    {errors.budget}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Project Details (Optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                rows={4}
                className={inputStyles}
              />
            </div>

            <Button
              type="submit"
              variant="gold"
              size="xl"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 border-2 border-charcoal/30 border-t-charcoal rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Send Message
                  <Send className="w-5 h-5" />
                </span>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
