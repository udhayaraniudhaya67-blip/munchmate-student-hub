import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gift, Percent, Clock, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: "Two-in-One Combo Deal",
      description: "Mix and match any two eligible dishes and save 15% on your order",
      discount: "15% OFF",
      icon: Gift,
      color: "bg-accent",
      validUntil: "Dec 31, 2025",
      code: "COMBO15",
    },
    {
      id: 2,
      title: "Student Special",
      description: "Show your valid student ID and get 15% off all orders",
      discount: "15% OFF",
      icon: Users,
      color: "bg-secondary",
      validUntil: "Always Active",
      code: "STUDENT15",
    },
    {
      id: 3,
      title: "First Order Discount",
      description: "New customers get 20% off their first order. Welcome to FoodiePalace!",
      discount: "20% OFF",
      icon: Percent,
      color: "bg-primary",
      validUntil: "First Order Only",
      code: "FIRST20",
    },
    {
      id: 4,
      title: "Happy Hour Special",
      description: "Order between 3-5 PM and enjoy 10% off all beverages",
      discount: "10% OFF",
      icon: Clock,
      color: "bg-destructive",
      validUntil: "Daily 3-5 PM",
      code: "HAPPY10",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 hero-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Special Offers</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Save more with our exclusive deals and combo offers!
            </p>
          </div>
        </section>

        {/* Offers Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {offers.map((offer) => {
                const Icon = offer.icon;
                return (
                  <Card key={offer.id} className="card-hover shadow-card overflow-hidden">
                    <div className={`${offer.color} p-6 text-white`}>
                      <div className="flex items-center justify-between mb-4">
                        <Icon className="w-12 h-12" />
                        <Badge className="bg-white text-foreground text-lg px-4 py-2">
                          {offer.discount}
                        </Badge>
                      </div>
                      <h2 className="text-2xl font-bold mb-2">{offer.title}</h2>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground mb-6">{offer.description}</p>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                          <span className="text-sm text-muted-foreground">Promo Code:</span>
                          <code className="font-mono font-bold text-primary">{offer.code}</code>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                          <span className="text-sm text-muted-foreground">Valid Until:</span>
                          <span className="font-medium">{offer.validUntil}</span>
                        </div>
                      </div>
                      <Link to="/menu">
                        <Button className="w-full mt-6" size="lg">
                          Order Now
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Save?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Browse our menu and apply these offers at checkout to enjoy amazing discounts
            </p>
            <Link to="/menu">
              <Button size="xl" variant="hero">
                Browse Menu
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Offers;
