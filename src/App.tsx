import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import StudentPortal from "./pages/StudentPortal";
import AdminPortal from "./pages/AdminPortal";
import Offers from "./pages/Offers";
import Notifications from "./pages/Notifications";
import OrderConfirmation from "./pages/OrderConfirmation";
import Payment from "./pages/Payment";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/student-portal" element={<StudentPortal />} />
          <Route path="/admin-portal" element={<AdminPortal />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/cart" element={<Cart />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
