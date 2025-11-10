import imgAarrr from "@/assets/images/the-climb/aarrr-pirates-v1.jpg";

export const categories = [
  { id: "resources", name: "Resources" },
  { id: "stories", name: "Stories" },
  { id: "insights", name: "Insights" },
];

export const articles = [
  {
    id: 1,
    href: "the-climb",
    title: "Retailing Technology",
    category: "resources",
    subjects: ["SEO", "E-commerce", "Marketing"],
    text: "This post covers the best practices for e-commerce SEO...",
    author: "Dave",
    path: "retailing-technology",
    date: 1,
    month: "Jan",
    year: 2025,
  },
  {
    id: 2,
    href: "the-climb",
    title: "UTM Variables",
    category: "resources",
    subjects: ["DTC", "Scaling", "Attribution"],
    content: "Learn how top brands scaled their operations successfully...",
    author: "Dave",
    path: "utm-variables",
    date: 1,
    month: "Jan",
    year: 2025,
  },
  {
    id: 3,
    image: imgAarrr,
    href: "the-climb",
    title: "AARRR",
    category: "resources",
    subjects: ["Customer Experience", "Technology"],
    content: "AI is transforming how brands engage with customers...",
    author: "Dave",
    path: "aarrr",
    date: 1,
    month: "Jan",
    year: 2025,
  },
];
