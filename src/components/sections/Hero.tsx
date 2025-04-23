
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedGradientText from "@/components/ui/AnimatedGradientText";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current && textRef.current) {
        const scrollY = window.scrollY;
        imageRef.current.style.transform = `translateY(${scrollY * 0.05}px)`;
        textRef.current.style.transform = `translateY(${scrollY * 0.02}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-wellness-50 to-white z-0" />
      
      {/* Decorative blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-wellness-100 to-wellness-200 blur-3xl opacity-40 animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-accent/20 to-accent/40 blur-3xl opacity-40 animate-float animation-delay-500" />

      <div className="container mx-auto px-6 z-10">
        {/* Food Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 max-w-4xl mx-auto">
          <div className="group relative overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl">
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=500&h=500&fit=crop" 
                alt="Fresh Fruits" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="absolute bottom-4 left-4 text-white font-medium">Fresh Fruits</span>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl">
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&h=500&fit=crop" 
                alt="Green Vegetables" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="absolute bottom-4 left-4 text-white font-medium">Green Vegetables</span>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl">
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573851552177-7e88fb188cc9?w=500&h=500&fit=crop" 
                alt="Nuts & Seeds" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="absolute bottom-4 left-4 text-white font-medium">Nuts & Seeds</span>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl">
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1596073419667-9d77d59f033f?w=500&h=500&fit=crop" 
                alt="Dried Fruits" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="absolute bottom-4 left-4 text-white font-medium">Dried Fruits</span>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div ref={textRef} className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <span className="bg-wellness-50 text-wellness-600 px-4 py-1 rounded-full text-sm font-medium inline-block animate-fade-in">
              Experience the Future of Mental Wellness
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-wellness-900 tracking-tight animate-fade-in animation-delay-100">
              Transform Your Mind, <br />
              <AnimatedGradientText animation="flow">
                One Session at a Time
              </AnimatedGradientText>
            </h1>
            
            <p className="text-wellness-600 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 animate-fade-in animation-delay-200">
              Experience VR, EEG, and aroma therapy for improved mental wellness with our trained therapists who come directly to your home.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animation-delay-300">
              <Button 
                asChild
                size="lg" 
                className="rounded-full bg-wellness-500 hover:bg-wellness-600 text-white px-8 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <Link to="/booking">
                  Book a Session
                  <ArrowRight size={18} />
                </Link>
              </Button>
              
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="rounded-full border-wellness-300 text-wellness-700 hover:bg-wellness-50 px-8"
              >
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
