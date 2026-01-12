import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const MobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden glass-nav border-t border-border p-4">
      <Button variant="gold" size="lg" className="w-full" asChild>
        <a href="#contact">Get Global Quote</a>
      </Button>
    </div>
  );
};

export default MobileCTA;
