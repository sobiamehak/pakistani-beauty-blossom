import { Card, CardContent } from "@/components/ui/card";
import { Search, Calendar, CreditCard, Star } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Search & Discover",
    description: "Browse beauty parlors by location, services, ratings, and reviews to find the perfect match for your needs."
  },
  {
    icon: Calendar,
    step: "02", 
    title: "Book Appointment",
    description: "Select your preferred service, date, and time. Choose your favorite beautician if you have one."
  },
  {
    icon: CreditCard,
    step: "03",
    title: "Secure Payment",
    description: "Pay securely online with EasyPaisa, JazzCash, or card. Option for advance payment or pay at parlor."
  },
  {
    icon: Star,
    step: "04",
    title: "Enjoy & Review",
    description: "Get your beauty service and share your experience to help other customers make informed choices."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
            How BeautyBook Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Booking your perfect beauty service is just four simple steps away
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-card border-border hover:shadow-soft transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gradient-primary"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1">
                    <div className="w-0 h-0 border-l-4 border-l-primary border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
              Ready to Transform Your Look?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of satisfied customers who trust BeautyBook for their beauty needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-elegant transform hover:scale-105 transition-all duration-300">
                Find Parlors Near You
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                Register Your Parlor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;