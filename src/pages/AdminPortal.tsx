import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Package, DollarSign, Users, Lock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const AdminPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    toast({
      title: "Admin Login Successful",
      description: "Welcome to the admin dashboard",
    });
  };

  const stats = [
    { label: "Total Orders", value: "1,234", icon: Package, color: "text-primary" },
    { label: "Revenue", value: "$12,345", icon: DollarSign, color: "text-secondary" },
    { label: "Active Users", value: "567", icon: Users, color: "text-accent" },
    { label: "Menu Items", value: "42", icon: BarChart3, color: "text-primary" },
  ];

  const recentOrders = [
    { id: "ORD001", customer: "John Doe", items: "Burger + Fries", status: "Delivered", total: "$18.99" },
    { id: "ORD002", customer: "Jane Smith", items: "Pizza Combo", status: "Preparing", total: "$24.99" },
    { id: "ORD003", customer: "Mike Johnson", items: "Pasta + Salad", status: "Pending", total: "$21.99" },
  ];

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex items-center justify-center py-12 px-4">
          <Card className="w-full max-w-md shadow-card-hover">
            <CardHeader className="text-center">
              <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                <Lock className="w-10 h-10 text-destructive" />
              </div>
              <CardTitle className="text-2xl">Admin Portal</CardTitle>
              <p className="text-muted-foreground">Secure access for administrators only</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="admin-email">Admin Email</Label>
                  <Input id="admin-email" type="email" placeholder="admin@foodiepalace.com" required />
                </div>
                <div>
                  <Label htmlFor="admin-password">Password</Label>
                  <Input id="admin-password" type="password" placeholder="••••••••" required />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Login
                </Button>
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
      
      <main className="flex-1 py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your restaurant operations</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.label} className="card-hover shadow-card">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <Icon className={`w-10 h-10 ${stat.color}`} />
                      <Badge variant="secondary">{stat.label}</Badge>
                    </div>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Tabs defaultValue="orders" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="menu">Menu Management</TabsTrigger>
              <TabsTrigger value="offers">Offers</TabsTrigger>
            </TabsList>

            {/* Orders Tab */}
            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                  <p className="text-muted-foreground">Track and manage customer orders</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="outline">{order.id}</Badge>
                            <p className="font-medium">{order.customer}</p>
                          </div>
                          <p className="text-sm text-muted-foreground">{order.items}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <Badge
                            variant={
                              order.status === "Delivered"
                                ? "secondary"
                                : order.status === "Preparing"
                                ? "default"
                                : "outline"
                            }
                          >
                            {order.status}
                          </Badge>
                          <p className="font-bold text-primary min-w-[80px] text-right">{order.total}</p>
                          <Button size="sm">Details</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Menu Management Tab */}
            <TabsContent value="menu">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Menu Items</CardTitle>
                      <p className="text-muted-foreground">Add, edit, or remove menu items</p>
                    </div>
                    <Button>Add New Item</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Input placeholder="Search menu items..." />
                    <p className="text-center text-muted-foreground py-8">
                      Menu management interface would be here
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Offers Tab */}
            <TabsContent value="offers">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Active Offers</CardTitle>
                      <p className="text-muted-foreground">Manage promotional offers and combos</p>
                    </div>
                    <Button>Create Offer</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card className="border-2 border-accent">
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between mb-4">
                          <Badge className="bg-accent text-accent-foreground">Active</Badge>
                          <Button variant="ghost" size="sm">Edit</Button>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Two-in-One Combo</h3>
                        <p className="text-muted-foreground mb-4">15% off on combo meals</p>
                        <p className="text-sm text-muted-foreground">Valid until: Dec 31, 2025</p>
                      </CardContent>
                    </Card>
                    <Card className="border-2 border-secondary">
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between mb-4">
                          <Badge className="bg-secondary text-secondary-foreground">Active</Badge>
                          <Button variant="ghost" size="sm">Edit</Button>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Student Discount</h3>
                        <p className="text-muted-foreground mb-4">15% off for students</p>
                        <p className="text-sm text-muted-foreground">Valid: Always Active</p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminPortal;
