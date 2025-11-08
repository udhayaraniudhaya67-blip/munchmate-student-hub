import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MapPin, Clock, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  const order = {
    id: "ORD123456",
    items: [
      { name: "Classic Burger", quantity: 1, price: 12.99 },
      { name: "Italian Pasta", quantity: 1, price: 14.99 },
    ],
    subtotal: 27.98,
    tax: 2.52,
    delivery: 3.50,
    total: 34.00,
    estimatedTime: "30-40 minutes",
    deliveryAddress: "123 Food Street, Apt 4B, New York, NY 10001",
    paymentMethod: "Card ending in ****1234",
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Success Message */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-12 h-12 text-secondary" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Order Confirmed!</h1>
            <p className="text-muted-foreground text-lg">Thank you for your order</p>
          </div>

          {/* Order Details Card */}
          <Card className="shadow-card-hover mb-6">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6 pb-6 border-b">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Order ID</p>
                  <p className="text-xl font-bold">{order.id}</p>
                </div>
                <Badge className="bg-secondary text-secondary-foreground">Processing</Badge>
              </div>

              {/* Items */}
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-4">Order Items</h3>
                <div className="space-y-3">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                      </div>
                      <p className="font-bold">${item.price.toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 mb-6 pb-6 border-b">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${order.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Tax</span>
                  <span>${order.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Delivery Fee</span>
                  <span>${order.delivery.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold pt-2">
                  <span>Total</span>
                  <span className="text-primary">${order.total.toFixed(2)}</span>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Estimated Delivery Time</p>
                    <p className="text-muted-foreground">{order.estimatedTime}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Delivery Address</p>
                    <p className="text-muted-foreground">{order.deliveryAddress}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Payment Method</p>
                    <p className="text-muted-foreground">{order.paymentMethod}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="default">
              Track Order
            </Button>
            <Link to="/menu">
              <Button size="lg" variant="outline">
                Back to Menu
              </Button>
            </Link>
          </div>

          {/* Support */}
          <Card className="mt-8 bg-muted/50">
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground mb-4">
                Need help with your order? Contact our support team
              </p>
              <div className="flex gap-4 justify-center">
                <a href="tel:+15551234567">
                  <Button variant="outline">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Support
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderConfirmation;
