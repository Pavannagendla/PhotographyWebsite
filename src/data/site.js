import photos from "./photos.json";

const BASE = process.env.PUBLIC_URL || "";
export const asset = (path) => `${BASE}/${path}`;

export const site = {
  brand: "Hacker Camerawork",
  name: "Pavan Kumar Nagendla",
  tagline: "Wildlife, street & portrait photography",
  location: "Nellore, Andhra Pradesh, India",
  email: "hackercamerawork@gmail.com",
  phone: "+91 79814 71527",
  phoneHref: "tel:+917981471527",
  whatsapp: "https://wa.me/917981471527",
  instagramHandle: "@hacker_camerawork",
  instagram: "https://www.instagram.com/hacker_camerawork",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/hacker_camerawork" },
    { label: "Unsplash", href: "https://unsplash.com/@hacker_camerawork" },
    { label: "Threads", href: "https://www.threads.net/@hacker_camerawork" },
    { label: "X / Twitter", href: "https://twitter.com/hackercameraart" },
    { label: "Facebook", href: "https://www.facebook.com/pavankumar.kalyan.96/" },
  ],
};

export const CATEGORIES = ["Wildlife", "Birds", "Street", "Portraits", "Nature"];

export const CATEGORY_BLURBS = {
  Wildlife: "Tigers, langurs and the quiet moments in between.",
  Birds: "Flight, courtship and colour.",
  Street: "Everyday life on the streets of Kolkata and beyond.",
  Portraits: "People, light and expression.",
  Nature: "Sunrises, fields and small wonders.",
};

/* Recognition: exhibitions and publications, newest first */
export const recognition = [
  {
    date: "July 2025",
    type: "Exhibition",
    title: "Lensified Photography Exhibition",
    place: "ICCR, Kolkata",
    note: "Third exhibition, and a return to the city where it began.",
  },
  {
    date: "April 2025",
    type: "Publication",
    title: "India in 100 Frames",
    place: "Retro Kolkata Magazine",
    note: "Selected for a print publication celebrating photographers from across India.",
  },
  {
    date: "March 2025",
    type: "Exhibition & publication",
    title: "ASX — The Picture Perfect",
    place: "Chitrakala Parishath, Bengaluru",
    note: "Second exhibition, alongside a magazine feature.",
  },
  {
    date: "June 2024",
    type: "Exhibition",
    title: "Lensified Photography Exhibition",
    place: "ICCR, Kolkata",
    note: "First exhibition — documenting the streets of Kolkata with fellow photographers.",
  },
];

export { photos };
export const featured = photos.filter((p) => p.featured);
export const byId = Object.fromEntries(photos.map((p) => [p.id, p]));
