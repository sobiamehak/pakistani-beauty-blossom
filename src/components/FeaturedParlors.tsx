import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, Heart } from "lucide-react";

const parlors = [
  {
    id: 1,
    name: "Ayesha Beauty Lounge",
    location: "DHA Phase 5, Lahore",
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop",
    specialties: ["Bridal Makeup", "Hair Styling", "Facials"],
    priceRange: "Rs. 2,000 - 25,000",
    openNow: true,
    featured: true
  },
  {
    id: 2,
    name: "Glamour Studio",
    location: "Gulberg III, Lahore",
    rating: 4.8,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=300&fit=crop",
    specialties: ["Party Makeup", "Threading", "Waxing"],
    priceRange: "Rs. 1,500 - 15,000",
    openNow: true,
    featured: false
  },
  {
    id: 3,
    name: "Royal Beauty Palace",
    location: "Clifton, Karachi",
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?w=400&h=300&fit=crop",
    specialties: ["Bridal Packages", "Skin Treatments", "Hair Color"],
    priceRange: "Rs. 3,000 - 50,000",
    openNow: false,
    featured: true
  },
  {
    id: 4,
    name: "Elegance Beauty Salon",
    location: "F-7 Markaz, Islamabad",
    rating: 4.6,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&h=300&fit=crop",
    specialties: ["Makeup", "Facial", "Manicure"],
    priceRange: "Rs. 1,200 - 12,000",
    openNow: true,
    featured: false
  }
];

const FeaturedParlors = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Top-Rated Parlors
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover Pakistan's most trusted beauty professionals
            </p>
          </div>
          <Button variant="outline" className="hidden md:block border-primary text-primary hover:bg-primary hover:text-white">
            View All Parlors
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {parlors.map((parlor) => (
            <Card key={parlor.id} className="group cursor-pointer transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 bg-card border-border overflow-hidden">
              <div className="relative">
                <img
                  src={parlor.image}
                  alt={parlor.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <Heart className="w-4 h-4 text-muted-foreground hover:text-red-500" />
                </button>
                {parlor.featured && (
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
                <div className="absolute bottom-3 left-3">
                  <Badge variant={parlor.openNow ? "default" : "secondary"} className={parlor.openNow ? "bg-success text-success-foreground" : ""}>
                    <Clock className="w-3 h-3 mr-1" />
                    {parlor.openNow ? "Open Now" : "Closed"}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {parlor.name}
                </h3>
                
                <div className="flex items-center text-muted-foreground text-sm mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {parlor.location}
                </div>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium ml-1">{parlor.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">
                    ({parlor.reviews} reviews)
                  </span>
                </div>
                
                <div className="mb-3">
                  <div className="flex flex-wrap gap-1">
                    {parlor.specialties.slice(0, 2).map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                    {parlor.specialties.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{parlor.specialties.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="text-sm text-muted-foreground mb-4">
                  {parlor.priceRange}
                </div>
                
                <Button variant="gradient" className="w-full" size="sm">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            View All Parlors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedParlors;