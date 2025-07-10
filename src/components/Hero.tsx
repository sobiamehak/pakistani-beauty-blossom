import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Star, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-beauty-salon.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful Pakistani beauty salon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-2xl">
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Pakistan's Premier
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Beauty Platform
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Discover and book the best beauty parlors across Pakistan. From makeup to bridal packages, find trusted professionals near you.
          </p>

          {/* Search Bar */}
          <div className="bg-card rounded-2xl p-6 shadow-elegant border border-border mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="What service do you need?"
                  className="pl-12 h-12 border-border focus:ring-primary"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="City or area"
                  className="pl-12 h-12 border-border focus:ring-primary"
                />
              </div>
              <Button variant="gradient" size="lg" className="h-12 font-semibold">
                <Search className="w-5 h-5 mr-2" />
                Find Parlors
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Verified Parlors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50k+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.8★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Cards */}
      <div className="hidden lg:block absolute right-8 top-1/2 transform -translate-y-1/2 space-y-4">
        <div className="bg-card p-4 rounded-xl shadow-soft border border-border max-w-xs">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <Star className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-sm">Ayesha Beauty Lounge</div>
              <div className="text-xs text-muted-foreground">DHA Phase 5, Lahore</div>
            </div>
          </div>
          <div className="text-xs text-muted-foreground">
            "Amazing bridal makeup! Highly recommended for special occasions."
          </div>
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
            </div>
            <span className="text-xs text-muted-foreground ml-2">5.0</span>
          </div>
        </div>

        <div className="bg-card p-4 rounded-xl shadow-soft border border-border max-w-xs">
          <div className="flex items-center space-x-3 mb-2">
            <Calendar className="w-5 h-5 text-primary" />
            <div>
              <div className="font-semibold text-sm">Quick Booking</div>
              <div className="text-xs text-muted-foreground">Available today</div>
            </div>
          </div>
          <div className="text-xs text-muted-foreground">
            Book instantly with real-time availability
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;