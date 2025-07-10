import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Search, User, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-serif font-bold text-lg">B</span>
          </div>
          <span className="font-serif font-bold text-xl text-foreground">BeautyBook</span>
        </div>

        {/* Desktop Search */}
        <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search services, parlors..."
              className="pl-10 bg-card border-border focus:ring-primary"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Button variant="ghost" className="text-foreground hover:text-primary">
            <MapPin className="w-4 h-4 mr-2" />
            Find Parlors
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            For Parlors
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            <Heart className="w-4 h-4" />
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Sign In
          </Button>
          <Button variant="gradient" size="default">
            Register Parlor
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search services, parlors..."
                className="pl-10 bg-card border-border"
              />
            </div>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                <MapPin className="w-4 h-4 mr-2" />
                Find Parlors
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                For Parlors
              </Button>
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
              <Button variant="gradient" className="w-full">
                Register Parlor
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;