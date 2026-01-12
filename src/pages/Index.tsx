import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Advantages />
        <Services />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
};

export default Index;
