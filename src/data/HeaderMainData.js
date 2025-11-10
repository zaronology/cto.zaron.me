import logo_zaronology from "@/assets/images/zaronology-logo.png";

import {
  faTwitter,
  faInstagram,
  faFacebookF,
  faPinterestP,
} from "@awesome.me/kit-d469f7d4aa/icons/classic/brands";

const headerMainData = {
  logo: logo_zaronology,
  navItems: [
    // {
    // id: 1,
    // name: "Who We Are",
    // href: "/about",
    // subNavItems: [
    //   // { id: 1, name: "Enterprise Systems Accelerator", href: "/what-we-do/enterprise-systems-accelerator" },
    //   { id: 2, name: "About Zaronology", href: "/about" },
    //   { id: 3, name: "Why Zaronology", href: "/why" },
    // ],
    // },
    // {
    //   id: 2,
    //   name: "What We Do",
    //   href: "#",
    //   subNavItems: [
    //     // { id: 1, name: "Enterprise Systems Accelerator", href: "/what-we-do/enterprise-systems-accelerator" },
    //     {
    //       id: 2,
    //       name: "Seamless Attribution Tracking",
    //       href: "/what-we-do/seamless-attribution-tracking",
    //     },
    //     {
    //       id: 3,
    //       name: "Seamless Technology Systems",
    //       href: "/what-we-do/seamless-technology-systems",
    //     },
    //     {
    //       id: 4,
    //       name: "Conversion Rate Optimization",
    //       href: "/what-we-do/conversion-rate-optimization",
    //     },
    //     {
    //       id: 5,
    //       name: "Technical Workflow Optimization",
    //       href: "/what-we-do/technical-workflow-optimization",
    //     },
    //     {
    //       id: 6,
    //       name: "Affiliate Program Optimization",
    //       href: "/what-we-do/affiliate-program-optimization",
    //     },
    //   ],
    // },
    {
      id: 3,
      name: "Case Studies",
      href: "/case-studies",
    },
    // {
    //   id: 4,
    //   name: "Plans & Pricing",
    //   href: "/plans-and-pricing",
    // },
    // {
    //   id: 5,
    //   name: "The Climb",
    //   href: "/the-climb",
    // },
  ],
  social: [
    { icon: faFacebookF, link: "https://facebook.com" },
    { icon: faPinterestP, link: "https://pinterest.com" },
    { icon: faTwitter, link: "https://twitter.com" },
    { icon: faInstagram, link: "https://instagram.com" },
  ],
  btn_text: "Book Clarity Call",
  btn_href: "/book-call",
  btn_modal: false,
};

export default headerMainData;
