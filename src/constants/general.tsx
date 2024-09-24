import {
  Carrot,
  Drumstick,
  Package,
  Search,
  Star,
  Store,
  TicketPercent,
  User,
} from "lucide-react";

export const userLocation = "🎓 SUTD, 8 Somapah Rd, Singapore 487372";

export const homepageIcons = [
  { icon: <TicketPercent />, title: "Offers" },
  { icon: <Store />, title: "pandamart", selected: true },
  { icon: <Package />, title: "Pick-up" },
  { icon: <Star />, title: "pandago" },
];

export const cuisineImages = [
  { src: "/korean.png" },
  { src: "/japanese.png" },
  { src: "/pizza.png" },
  { src: "/singapore.png" },
];

export const navbarItems = [
  { icon: <Drumstick />, title: "Food", selected: true },
  { icon: <Carrot />, title: "Grocery" },
  { icon: <Search />, title: "Search" },
  { icon: <User />, title: "Account" },
];
