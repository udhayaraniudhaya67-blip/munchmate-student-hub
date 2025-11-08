import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CreditCard, User, History, Gift } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const StudentPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cardBalance, setCardBalance] = useState(50.00);
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    toast({
      title: "Login Successful",
      description: "Welcome back, Student!",
    });
  };

  const handleRefill = (amount: number) => {
    setCardBalance(cardBalance + amount);
    toast({
      title: "Card Refilled",
      description: `$${amount.toFixed(2)} added to your meal card`,
    });
  };

  const pastOrders = [
    { id: 1, date: "2025-01-15", items: "Burger + Salad", total: "$18.99" },
    { id: 2, date: "2025-01-10", items: "Pizza + Drink", total: "$21.98" },
    { id: 3, date: "2025-01-05", items: "Pasta Combo", total: "$19.99" },
  ];

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex items-center justify-center py-12 px-4">
          <Card className="w-full max-w-md shadow-card-hover">
            <CardHeader className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <User className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-2xl">Student Portal</CardTitle>
              <p className="text-muted-foreground">Login to access your meal plan</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="email">Student Email</Label>
                  <Input id="email" type="email" placeholder="student@university.edu" required />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" required />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Login
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <a href="#" className="text-primary hover:underline">
                    Sign up
                  </a>
                </p>
              </form>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Welcome, Student!</h1>
            <p className="text-muted-foreground">Manage your meal plan and orders</p>
          </div>

          {/* Card Balance */}
          <Card className="mb-8 bg-gradient-to-r from-primary to-secondary shadow-card-hover">
            <CardContent className="p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 mb-2">Current Balance</p>
                  <p className="text-4xl font-bold">${cardBalance.toFixed(2)}</p>
                </div>
                <CreditCard className="w-16 h-16 opacity-50" />
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="refill" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="refill">Refill Card</TabsTrigger>
              <TabsTrigger value="history">Order History</TabsTrigger>
              <TabsTrigger value="offers">Student Offers</TabsTrigger>
            </TabsList>

            {/* Refill Tab */}
            <TabsContent value="refill">
              <Card>
                <CardHeader>
                  <CardTitle>Refill Your Meal Card</CardTitle>
                  <p className="text-muted-foreground">Choose an amount to add to your balance</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[10, 25, 50, 100].map((amount) => (
                      <Button
                        key={amount}
                        variant="outline"
                        onClick={() => handleRefill(amount)}
                        className="h-20 text-lg font-bold hover:scale-105 transition-transform"
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>
                  <div className="pt-4 border-t">
                    <Label htmlFor="custom">Custom Amount</Label>
                    <div className="flex gap-2 mt-2">
                      <Input id="custom" type="number" placeholder="Enter amount" min="1" />
                      <Button onClick={() => handleRefill(20)}>Add</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* History Tab */}
            <TabsContent value="history">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <History className="w-5 h-5" />
                    Order History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pastOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <div>
                          <p className="font-medium">{order.items}</p>
                          <p className="text-sm text-muted-foreground">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-primary">{order.total}</p>
                          <Button variant="link" size="sm">View Details</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Offers Tab */}
            <TabsContent value="offers">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="card-hover shadow-card">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <Gift className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Student Discount</h3>
                    <p className="text-muted-foreground mb-4">Get 15% off all orders with your student ID</p>
                    <Badge>Active</Badge>
                  </CardContent>
                </Card>
                <Card className="card-hover shadow-card">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Gift className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Combo Meal Deal</h3>
                    <p className="text-muted-foreground mb-4">Two-in-One special: Mix any 2 meals for extra savings</p>
                    <Badge>Active</Badge>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StudentPortal;
