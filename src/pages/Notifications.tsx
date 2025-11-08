import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, Check, Trash2, Package, Gift, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Notification {
  id: number;
  type: "order" | "offer" | "delivery";
  title: string;
  message: string;
  time: string;
  isRead: boolean;
}

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: "delivery",
      title: "Order Delivered",
      message: "Your order #ORD123 has been delivered successfully",
      time: "5 minutes ago",
      isRead: false,
    },
    {
      id: 2,
      type: "offer",
      title: "New Offer Available",
      message: "Get 15% off on Two-in-One Combo meals today!",
      time: "1 hour ago",
      isRead: false,
    },
    {
      id: 3,
      type: "order",
      title: "Order Confirmed",
      message: "Your order #ORD122 is being prepared",
      time: "2 hours ago",
      isRead: true,
    },
    {
      id: 4,
      type: "offer",
      title: "Student Discount",
      message: "Don't forget to use your student discount on all orders",
      time: "1 day ago",
      isRead: true,
    },
  ]);

  const handleMarkAsRead = (id: number) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
  };

  const handleDelete = (id: number) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map((notif) => ({ ...notif, isRead: true })));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "order":
        return Package;
      case "offer":
        return Gift;
      case "delivery":
        return Clock;
      default:
        return Bell;
    }
  };

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Notifications</h1>
              {unreadCount > 0 && (
                <p className="text-muted-foreground">
                  You have {unreadCount} unread notification{unreadCount !== 1 ? "s" : ""}
                </p>
              )}
            </div>
            {unreadCount > 0 && (
              <Button variant="outline" onClick={handleMarkAllAsRead}>
                <Check className="w-4 h-4 mr-2" />
                Mark all as read
              </Button>
            )}
          </div>

          {/* Notifications List */}
          <div className="space-y-4">
            {notifications.length === 0 ? (
              <Card className="shadow-card">
                <CardContent className="py-16 text-center">
                  <Bell className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <p className="text-muted-foreground text-lg">No notifications yet</p>
                </CardContent>
              </Card>
            ) : (
              notifications.map((notification) => {
                const Icon = getIcon(notification.type);
                return (
                  <Card
                    key={notification.id}
                    className={`card-hover shadow-card ${
                      !notification.isRead ? "border-l-4 border-l-primary" : ""
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                            notification.type === "order"
                              ? "bg-primary/10"
                              : notification.type === "offer"
                              ? "bg-accent/10"
                              : "bg-secondary/10"
                          }`}
                        >
                          <Icon
                            className={`w-6 h-6 ${
                              notification.type === "order"
                                ? "text-primary"
                                : notification.type === "offer"
                                ? "text-accent"
                                : "text-secondary"
                            }`}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-bold text-lg">{notification.title}</h3>
                              <p className="text-muted-foreground">{notification.message}</p>
                            </div>
                            {!notification.isRead && (
                              <Badge variant="default">New</Badge>
                            )}
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <span className="text-sm text-muted-foreground">{notification.time}</span>
                            <div className="flex gap-2">
                              {!notification.isRead && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleMarkAsRead(notification.id)}
                                >
                                  <Check className="w-4 h-4 mr-1" />
                                  Mark as read
                                </Button>
                              )}
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleDelete(notification.id)}
                              >
                                <Trash2 className="w-4 h-4 mr-1" />
                                Delete
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Notifications;
