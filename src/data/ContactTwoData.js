import bg from "@/assets/images/shapes/contact-2-shape-1.png";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@awesome.me/kit-d469f7d4aa/icons/classic/brands";
const contactTwoData = {
  infoIcon: "icon-customer-service",
  infoText:
    "Business tailored it design, management & support business agency elit, sed do eiusmod tempor.",
  infoTitle: "Contact Information ",

  bg,
  infoBoxs: [
    {
      id: 1,
      icon: "icon-phone-call",
      title: "Phone",
      text: "+1 (941) 444-6464",
      href: "+19414446464",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "icon-open-mail",
      title: "Email",
      text: "hello@zaronology.com",
      href: "hello@zaronology.com",
      subHref: "mailto",
    },

    {
      id: 3,
      icon: "icon-pin",
      title: "Mailing Address",
      text: "1201 6th Ave W., Bradenton, FL 34205",
    },
  ],
  socials: [
    {
      id: 1,
      icon: faFacebookF,
      link: "https://www.facebook.com/zaronology",
      name: "Facebook",
    },
    {
      id: 2,
      icon: faLinkedinIn,
      link: "https://www.linkedin.com/company/zaronology-inc/",
      name: "Pinterest",
    },
    // { id: 3, icon: faTwitter, link: "https://twitter.com", name: "Twitter" },
    // {
    //   id: 4,
    //   icon: faInstagram,
    //   link: "https://instagram.com",
    //   name: "Instagram",
    // },
  ],

  tagLine: "Contact Us",
  title: "Send Us An Email Or Book A Call Below",
  text: "Business tailored it design, management & support services \n business agency elit, sed do eiusmod tempor.",
};

export default contactTwoData;
