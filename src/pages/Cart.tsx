import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import burger from "@/assets/burger.jpg";
import pasta from "@/assets/pasta.jpg";
import salad from "@/assets/salad.jpg";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Classic Burger", price: 12.99, quantity: 1, image: burger },
    { id: 2, name: "Italian Pasta", price: 14.99, quantity: 1, image: pasta },
    { id: 3, name: "Fresh Salad", price: 10.99, quantity: 1, image: salad },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.09;
  const delivery = 3.5;
  const total = subtotal + tax + delivery;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <Card className="shadow-card">
              <CardContent className="py-16 text-center">
                <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
                <p className="text-muted-foreground mb-6">Add some delicious items to get started!</p>
                <Link to="/menu">
                  <Button size="lg">Browse Menu</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="shadow-card">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-bold text-lg">{item.name}</h3>
                              <p className="text-primary font-bold">${item.price.toFixed(2)}</p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="w-4 h-4 text-destructive" />
                            </Button>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 border rounded-lg">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => updateQuantity(item.id, -1)}
                                className="h-8 w-8"
                              >
                                <Minus className="w-4 h-4" />
                              </Button>
                              <span className="w-12 text-center font-medium">{item.quantity}</span>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => updateQuantity(item.id, 1)}
                                className="h-8 w-8"
                              >
                                <Plus className="w-4 h-4" />
                              </Button>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Total: <span className="font-bold text-foreground">${(item.price * item.quantity).toFixed(2)}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Combo Offer Banner */}
                <Card className="bg-gradient-to-r from-accent to-primary overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <h3 className="font-bold text-lg mb-1">🎉 Two-in-One Combo Active!</h3>
                        <p className="text-white/90 text-sm">You're saving 15% on this order</p>
                      </div>
                      <Badge className="bg-white text-primary">-15%</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div>
                <Card className="shadow-card-hover sticky top-24">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-muted-foreground">
                        <span>Subtotal ({cartItems.length} items)</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-muted-foreground">
                        <span>Tax (9%)</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-muted-foreground">
                        <span>Delivery Fee</span>
                        <span>${delivery.toFixed(2)}</span>
                      </div>
                      <div className="pt-3 border-t">
                        <div className="flex justify-between text-xl font-bold">
                          <span>Total</span>
                          <span className="text-primary">${total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                    <Link to="/payment">
                      <Button size="lg" className="w-full mb-3">
                        Proceed to Checkout
                      </Button>
                    </Link>
                    <Link to="/menu">
                      <Button size="lg" variant="outline" className="w-full">
                        Continue Shopping
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
