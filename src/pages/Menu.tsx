import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Star, Search, ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { menuItems, categories } from "@/data/menuData";
import { useToast } from "@/hooks/use-toast";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (itemName: string) => {
    toast({
      title: "Added to Cart",
      description: `${itemName} has been added to your cart`,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
            <p className="text-muted-foreground text-lg">Discover our delicious offerings</p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search for dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Two-in-One Combo Banner */}
          <Card className="mb-8 bg-gradient-to-r from-primary to-secondary overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">🎉 Two-in-One Combo Deal!</h3>
                  <p className="text-white/90">Mix any 2 eligible dishes and get 15% off</p>
                </div>
                <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2">
                  Save 15%
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="card-hover overflow-hidden shadow-card">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  {item.isComboEligible && (
                    <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground">
                      Combo Eligible
                    </Badge>
                  )}
                  <div className="absolute top-2 right-2 bg-card rounded-full px-2 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2">{item.category}</Badge>
                  <h3 className="font-bold text-xl mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">${item.price.toFixed(2)}</span>
                    <Button onClick={() => handleAddToCart(item.name)}>
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No items found matching your criteria</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
