import burger from "@/assets/burger.jpg";
import pasta from "@/assets/pasta.jpg";
import salad from "@/assets/salad.jpg";
import pizza from "@/assets/pizza.jpg";
import dessert from "@/assets/dessert.jpg";
import dosa from "@/assets/dosa.jpg";
import idli from "@/assets/idli.jpg";
import samosa from "@/assets/samosa.jpg";
import drinks from "@/assets/drinks.jpg";
import { MenuItem } from "@/types/menu";

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: 1,
    name: "Garden Fresh Salad",
    description: "Mixed greens with cherry tomatoes, avocado, and grilled chicken",
    price: 10.99,
    image: salad,
    category: "Starters",
    rating: 4.7,
    isComboEligible: true,
  },
  {
    id: 2,
    name: "Crispy Spring Rolls",
    description: "Vegetable spring rolls with sweet chili sauce",
    price: 7.99,
    image: salad,
    category: "Starters",
    rating: 4.5,
    isComboEligible: true,
  },
  
  // Main Course
  {
    id: 3,
    name: "Classic Burger",
    description: "Juicy beef patty with fresh vegetables and special sauce",
    price: 12.99,
    image: burger,
    category: "Main Course",
    rating: 4.8,
    isComboEligible: true,
  },
  {
    id: 4,
    name: "Italian Pasta",
    description: "Homemade pasta with rich tomato sauce and fresh basil",
    price: 14.99,
    image: pasta,
    category: "Main Course",
    rating: 4.9,
    isComboEligible: true,
  },
  {
    id: 5,
    name: "Pepperoni Pizza",
    description: "Wood-fired pizza with premium mozzarella and pepperoni",
    price: 16.99,
    image: pizza,
    category: "Main Course",
    rating: 4.9,
    isComboEligible: true,
  },
  {
    id: 6,
    name: "Grilled Chicken",
    description: "Tender chicken breast with roasted vegetables",
    price: 15.99,
    image: burger,
    category: "Main Course",
    rating: 4.6,
    isComboEligible: true,
  },
  
  // Desserts
  {
    id: 7,
    name: "Chocolate Cake",
    description: "Decadent chocolate cake with chocolate ganache",
    price: 6.99,
    image: dessert,
    category: "Desserts",
    rating: 4.9,
    isComboEligible: true,
  },
  {
    id: 8,
    name: "Tiramisu",
    description: "Classic Italian dessert with coffee and mascarpone",
    price: 7.99,
    image: dessert,
    category: "Desserts",
    rating: 4.8,
    isComboEligible: true,
  },
  
  // Beverages
  {
    id: 9,
    name: "Fresh Lemonade",
    description: "Homemade lemonade with fresh mint",
    price: 3.99,
    image: salad,
    category: "Beverages",
    rating: 4.5,
    isComboEligible: false,
  },
  {
    id: 10,
    name: "Iced Coffee",
    description: "Cold brew coffee with milk and ice",
    price: 4.99,
    image: salad,
    category: "Beverages",
    rating: 4.6,
    isComboEligible: false,
  },
  
  // South Indian
  {
    id: 11,
    name: "Masala Dosa",
    description: "Crispy rice crepe filled with spiced potato masala, served with sambar and chutney",
    price: 8.99,
    image: dosa,
    category: "South Indian",
    rating: 4.9,
    isComboEligible: true,
  },
  {
    id: 12,
    name: "Idli Vada",
    description: "Steamed rice cakes and crispy lentil fritters with sambar and coconut chutney",
    price: 7.99,
    image: idli,
    category: "South Indian",
    rating: 4.8,
    isComboEligible: true,
  },
  {
    id: 13,
    name: "Rava Dosa",
    description: "Crispy semolina crepe served with sambar and chutneys",
    price: 8.49,
    image: dosa,
    category: "South Indian",
    rating: 4.7,
    isComboEligible: true,
  },
  {
    id: 14,
    name: "Medu Vada",
    description: "Crispy lentil donuts served with sambar and coconut chutney",
    price: 6.99,
    image: idli,
    category: "South Indian",
    rating: 4.6,
    isComboEligible: true,
  },
  
  // Snacks
  {
    id: 15,
    name: "Samosa",
    description: "Crispy pastry filled with spiced potatoes and peas",
    price: 3.99,
    image: samosa,
    category: "Snacks",
    rating: 4.7,
    isComboEligible: true,
  },
  {
    id: 16,
    name: "Veg Pakora",
    description: "Mixed vegetable fritters with mint chutney",
    price: 4.99,
    image: samosa,
    category: "Snacks",
    rating: 4.5,
    isComboEligible: true,
  },
  {
    id: 17,
    name: "Paneer Tikka",
    description: "Grilled cottage cheese cubes marinated in Indian spices",
    price: 9.99,
    image: samosa,
    category: "Snacks",
    rating: 4.8,
    isComboEligible: true,
  },
  {
    id: 18,
    name: "Aloo Bonda",
    description: "Spiced potato balls deep-fried in gram flour batter",
    price: 3.49,
    image: samosa,
    category: "Snacks",
    rating: 4.6,
    isComboEligible: true,
  },
  
  // Drinks
  {
    id: 19,
    name: "Mango Lassi",
    description: "Refreshing yogurt-based mango smoothie",
    price: 4.49,
    image: drinks,
    category: "Drinks",
    rating: 4.8,
    isComboEligible: false,
  },
  {
    id: 20,
    name: "Masala Chai",
    description: "Traditional Indian spiced tea",
    price: 2.99,
    image: drinks,
    category: "Drinks",
    rating: 4.7,
    isComboEligible: false,
  },
  {
    id: 21,
    name: "Fresh Lime Soda",
    description: "Refreshing lime juice with soda water",
    price: 3.49,
    image: drinks,
    category: "Drinks",
    rating: 4.5,
    isComboEligible: false,
  },
  {
    id: 22,
    name: "Filter Coffee",
    description: "Authentic South Indian filter coffee",
    price: 3.99,
    image: drinks,
    category: "Drinks",
    rating: 4.9,
    isComboEligible: false,
  },
];

export const categories = ["All", "Starters", "Main Course", "Desserts", "Beverages", "South Indian", "Snacks", "Drinks"];
