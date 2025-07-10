import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Palette, Heart, Crown, Sparkles, Users } from "lucide-react";

const categories = [
  {
    icon: Palette,
    title: "Makeup & Beauty",
    description: "Professional makeup, party looks, everyday beauty",
    services: "12 services",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Scissors,
    title: "Hair Services",
    description: "Cutting, styling, coloring, treatments",
    services: "8 services",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Crown,
    title: "Bridal Packages",
    description: "Complete bridal makeover, mehndi, events",
    services: "15 services",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: Sparkles,
    title: "Facial & Skin",
    description: "Deep cleansing, anti-aging, skin treatments",
    services: "10 services",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: Heart,
    title: "Threading & Waxing",
    description: "Eyebrow threading, body waxing, hair removal",
    services: "6 services",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Party Packages",
    description: "Group bookings, events, celebrations",
    services: "5 services",
    color: "from-violet-500 to-purple-500"
  }
];

const ServiceCategories = () => {
  return (
    <section className="py-16 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
            Popular Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of beauty services available at parlors across Pakistan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="group cursor-pointer transition-all duration-300 hover:shadow-elegant hover:-translate-y-2 bg-gradient-card border-border">
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                    {category.services}
                  </div>
                </div>
                
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                <Button variant="ghost" className="w-full text-primary hover:bg-primary hover:text-white group-hover:bg-primary group-hover:text-white transition-all">
                  Explore Services
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;