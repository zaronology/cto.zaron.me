import logo_zaronology from "@/assets/images/zaronology-logo.png";
import footerBg from "@/assets/images/footer-bkgd.webp";
import shape from "@/assets/images/shapes/footer-shape-1.png";
import shapeTwo from "@/assets/images/shapes/footer-2-shape.png";
import footerAbout from "@/assets/images/resources/footer-about.jpg";

import {
  faFacebookF,
  faLinkedin,
} from "@awesome.me/kit-d469f7d4aa/icons/classic/brands";

const widgetSocial = [
  {
    id: 1,
    icon: faFacebookF,
    href: "https://www.facebook.com/zaronology",
    title: "Facebook",
  },
  {
    id: 2,
    icon: faLinkedin,
    href: "https://www.linkedin.com/company/zaronology-inc/",
    title: "LinkedIn",
  },
];

const footerData = {
  logo_zaronology,
  footerBg,
  shape,
  shapeTwo,
  footerAbout,
  // postsSix,
  aboutTwoText:
    "We help serious online businesses build through the bottlenecks that block their momentum. You’ve got traffic. You’ve got sales. But your data is muddy, your tools break under pressure, and your deadlines keep slipping. You’re moving at full speed, but you can’t win a horse race if you’re riding a hamster. We find what’s blocking your growth and rebuild the system so your business can scale clean.",
  widgetText: "",
  widgetInfo: {
    time: "",
    timeIcon: "",
    location: "",
    locationIcon: "",
    tel: "",
    telIcon: "icofont-phone",
    subHref: "tel",
  },
  widgetSocial,
  services: [
    {
      id: 2,
      title: "Enterprise Tracking Systems",
      href: "/what-we-do/enterprise-tracking-systems",
    },
    {
      id: 3,
      title: "Customer Journey & Experience",
      href: "/what-we-do/customer-journey-and-experience",
    },
    {
      id: 4,
      title: "Enterprise Technology Solutions",
      href: "/what-we-do/seamless-technology-systems",
    },
    {
      id: 5,
      title: "Conversion Rate Optimization",
      href: "/what-we-do/conversion-rate-optimization",
    },
    {
      id: 6,
      title: "Technical Workflow Optimization",
      href: "/what-we-do/technical-workflow-optimization",
    },
    {
      id: 7,
      title: "Affiliate Systems Optimization",
      href: "/what-we-do/affiliate-program-systems-optimization",
    },
  ],
  quickLinks: [
    { id: 1, href: "/contact", title: "Contact" },
    { id: 2, href: "/privacy", title: "Privacy" },
    { id: 3, href: "/terms", title: "TOS" },
    { id: 4, href: "/acceptable-use-policy", title: "AUP" },
    { id: 5, href: "/disclaimer", title: "Disclaimer" },
    { id: 6, href: "/faqs", title: "FAQs" },
  ],
  bottomLinks: [
    { id: 1, href: "/faqs", title: "FAQs" },
    { id: 2, href: "/privacy", title: "Privacy" },
    { id: 3, href: "/terms", title: "TOS" },
    { id: 4, href: "/acceptable-use-policy", title: "AUP" },
    { id: 5, href: "/disclaimer", title: "Disclaimer" },
    { id: 6, href: "/contact", title: "Contact" },
  ],
};

export default footerData;
