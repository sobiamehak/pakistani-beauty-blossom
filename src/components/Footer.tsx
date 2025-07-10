import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">B</span>
              </div>
              <span className="font-serif font-bold text-xl">BeautyBook</span>
            </div>
            <p className="text-background/80 mb-4 leading-relaxed">
              Pakistan's premier beauty platform connecting customers with trusted parlors nationwide.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-white hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-white hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-white hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-white transition-colors">Find Parlors</a></li>
              <li><a href="#" className="text-background/80 hover:text-white transition-colors">Book Services</a></li>
              <li><a href="#" className="text-background/80 hover:text-white transition-colors">Bridal Packages</a></li>
              <li><a href="#" className="text-background/80 hover:text-white transition-colors">Beauty Tips</a></li>
              <li><a href="#" className="text-background/80 hover:text-white transition-colors">Reviews</a></li>
            </ul>
          </div>

          {/* For Parlors */}
          <div>
            <h3 className="font-semibold text-lg mb-4">For Parlors</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-white transition-colors">Register Your Parlor</a></li>
              <li><a href="#" className="text-background/80 hover:text-white transition-colors">Parlor Dashboard</a></li>
              <li><a href="#" className="text-background/80 hover:text-white transition-colors">Manage Bookings</a></li>
              <li><a href="#" className="text-background/80 hover:text-white transition-colors">Business Tools</a></li>
              <li><a href="#" className="text-background/80 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-background/80 mb-4">
              Get beauty tips and exclusive offers directly in your inbox.
            </p>
            <div className="space-y-3">
              <Input 
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-background placeholder:text-background/60"
              />
              <Button variant="gradient" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-background/80">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Serving all major cities in Pakistan</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>+92-300-1234567</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>hello@beautybook.pk</span>
            </div>
          </div>
          
          <div className="flex items-center text-background/80">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-400 fill-current" />
            <span>in Pakistan</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 pt-6 border-t border-background/20">
          <p className="text-background/60">
            © 2024 BeautyBook. All rights reserved. | 
            <a href="#" className="hover:text-white ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-white ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;