import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, Clock, TrendingUp, Gift } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBanner from "@/assets/hero-banner.jpg";
import burger from "@/assets/burger.jpg";
import pasta from "@/assets/pasta.jpg";
import salad from "@/assets/salad.jpg";
import pizza from "@/assets/pizza.jpg";

const Home = () => {
  const featuredDishes = [
    {
      id: 1,
      name: "Classic Burger",
      description: "Juicy beef patty with fresh vegetables",
      price: "$12.99",
      image: burger,
      rating: 4.8,
      isSpecial: true,
    },
    {
      id: 2,
      name: "Italian Pasta",
      description: "Homemade pasta with rich tomato sauce",
      price: "$14.99",
      image: pasta,
      rating: 4.9,
      isSpecial: false,
    },
    {
      id: 3,
      name: "Fresh Caesar Salad",
      description: "Crispy greens with grilled chicken",
      price: "$10.99",
      image: salad,
      rating: 4.7,
      isSpecial: false,
    },
    {
      id: 4,
      name: "Pepperoni Pizza",
      description: "Wood-fired pizza with premium toppings",
      price: "$16.99",
      image: pizza,
      rating: 4.9,
      isSpecial: true,
    },
  ];

  const offers = [
    { icon: Gift, title: "20% Off First Order", description: "New customers get 20% discount" },
    { icon: TrendingUp, title: "Two-in-One Combos", description: "Mix any 2 dishes and save big" },
    { icon: Clock, title: "Quick Delivery", description: "Hot meals delivered in 30 mins" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroBanner} 
              alt="Delicious food" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
          </div>
          
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <Badge className="mb-4 bg-accent text-accent-foreground">Welcome to MEC CANTEEN</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Delicious Meals,
              <br />
              <span className="text-primary">Delivered Fresh</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Experience culinary excellence with every bite. Order now and taste the difference!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/menu">
                <Button size="xl" variant="hero">
                  Order Now
                </Button>
              </Link>
              <Link to="/offers">
                <Button size="xl" variant="accent">
                  View Offers
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Offers Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {offers.map((offer, index) => {
                const Icon = offer.icon;
                return (
                  <Card key={index} className="card-hover shadow-card">
                    <CardContent className="pt-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                      <p className="text-muted-foreground">{offer.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Dishes */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Dishes</h2>
                <p className="text-muted-foreground">Our most popular items this week</p>
              </div>
              <Link to="/menu">
                <Button variant="outline">View All Menu</Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredDishes.map((dish) => (
                <Card key={dish.id} className="card-hover overflow-hidden shadow-card">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={dish.image} 
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    {dish.isSpecial && (
                      <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground">
                        Special
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-lg">{dish.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        <span className="text-sm font-medium">{dish.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{dish.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">{dish.price}</span>
                      <Button size="sm">Add to Cart</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Order?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers. Download our app or order online now!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/menu">
                <Button size="xl" className="bg-white text-primary hover:bg-white/90">
                  Browse Menu
                </Button>
              </Link>
              <Link to="/student-portal">
                <Button size="xl" variant="outline" className="text-white border-white hover:bg-white/10">
                  Student Login
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
