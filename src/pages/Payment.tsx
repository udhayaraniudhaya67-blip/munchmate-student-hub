import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, DollarSign, QrCode, Wallet } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Payment Successful",
      description: "Your order has been placed successfully",
    });
    setTimeout(() => {
      navigate("/order-confirmation");
    }, 1000);
  };

  const orderSummary = {
    subtotal: 27.98,
    tax: 2.52,
    delivery: 3.50,
    total: 34.00,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold mb-8">Payment</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Payment Methods */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Select Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="space-y-3">
                      {/* Card Payment */}
                      <label
                        htmlFor="card"
                        className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-colors ${
                          paymentMethod === "card" ? "border-primary bg-primary/5" : "hover:bg-muted/50"
                        }`}
                      >
                        <RadioGroupItem value="card" id="card" />
                        <CreditCard className="w-6 h-6 text-primary" />
                        <div>
                          <p className="font-medium">Credit/Debit Card</p>
                          <p className="text-sm text-muted-foreground">Pay securely with your card</p>
                        </div>
                      </label>

                      {/* Cash */}
                      <label
                        htmlFor="cash"
                        className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-colors ${
                          paymentMethod === "cash" ? "border-primary bg-primary/5" : "hover:bg-muted/50"
                        }`}
                      >
                        <RadioGroupItem value="cash" id="cash" />
                        <DollarSign className="w-6 h-6 text-secondary" />
                        <div>
                          <p className="font-medium">Cash on Delivery</p>
                          <p className="text-sm text-muted-foreground">Pay with cash when delivered</p>
                        </div>
                      </label>

                      {/* QR Code */}
                      <label
                        htmlFor="qr"
                        className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-colors ${
                          paymentMethod === "qr" ? "border-primary bg-primary/5" : "hover:bg-muted/50"
                        }`}
                      >
                        <RadioGroupItem value="qr" id="qr" />
                        <QrCode className="w-6 h-6 text-accent" />
                        <div>
                          <p className="font-medium">QR Code / UPI</p>
                          <p className="text-sm text-muted-foreground">Scan to pay instantly</p>
                        </div>
                      </label>

                      {/* Meal Card */}
                      <label
                        htmlFor="meal-card"
                        className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-colors ${
                          paymentMethod === "meal-card" ? "border-primary bg-primary/5" : "hover:bg-muted/50"
                        }`}
                      >
                        <RadioGroupItem value="meal-card" id="meal-card" />
                        <Wallet className="w-6 h-6 text-destructive" />
                        <div>
                          <p className="font-medium">Student Meal Card</p>
                          <p className="text-sm text-muted-foreground">Use prepaid meal balance</p>
                        </div>
                      </label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Payment Form */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Payment Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePayment} className="space-y-4">
                    {paymentMethod === "card" && (
                      <>
                        <div>
                          <Label htmlFor="card-number">Card Number</Label>
                          <Input
                            id="card-number"
                            placeholder="1234 5678 9012 3456"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input
                              id="expiry"
                              placeholder="MM/YY"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV</Label>
                            <Input
                              id="cvv"
                              placeholder="123"
                              type="password"
                              maxLength={3}
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="name">Cardholder Name</Label>
                          <Input
                            id="name"
                            placeholder="John Doe"
                            required
                          />
                        </div>
                      </>
                    )}
                    
                    {paymentMethod === "qr" && (
                      <div className="py-8 text-center">
                        <div className="w-48 h-48 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                          <QrCode className="w-32 h-32 text-muted-foreground" />
                        </div>
                        <p className="text-muted-foreground">Scan this QR code to complete payment</p>
                      </div>
                    )}
                    
                    {paymentMethod === "cash" && (
                      <div className="py-8 text-center">
                        <DollarSign className="w-16 h-16 text-secondary mx-auto mb-4" />
                        <p className="text-muted-foreground">You will pay ${orderSummary.total.toFixed(2)} in cash upon delivery</p>
                      </div>
                    )}
                    
                    {paymentMethod === "meal-card" && (
                      <div className="py-8 text-center">
                        <Wallet className="w-16 h-16 text-destructive mx-auto mb-4" />
                        <p className="text-xl font-bold mb-2">Current Balance: $50.00</p>
                        <p className="text-muted-foreground">After payment: ${(50 - orderSummary.total).toFixed(2)}</p>
                      </div>
                    )}

                    <Button type="submit" className="w-full" size="lg">
                      Complete Payment
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="shadow-card sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal</span>
                      <span>${orderSummary.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Tax</span>
                      <span>${orderSummary.tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Delivery Fee</span>
                      <span>${orderSummary.delivery.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span className="text-primary">${orderSummary.total.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Payment;
