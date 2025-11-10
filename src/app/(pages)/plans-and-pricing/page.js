import "@/assets/vendors/bootstrap-select/bootstrap-select.min.css"
import dynamic from 'next/dynamic';
import React from 'react';
import Layout from '@/components/Layout';
import HeaderMain from '@/components/HeaderMain';

import fav from "@/assets/images/favicons/favicon.png"
import PageSlider from "@/components/PageHeroSlider";



const PricingSectionOne = dynamic(() => import("@/components/PricingSectionOne"));
const PricingSectionPackages = dynamic(() => import("@/components/PricingSectionPackages"));
const PricingSectionAddOns = dynamic(() => import("@/components/PricingSectionAddOns"));
const PricingSectionDevelopment = dynamic(() => import("@/components/PricingSectionDevelopment"));
const PricingSectionDetails = dynamic(() => import("@/components/PricingSectionDetails"));
const PricingSectionCommitment = dynamic(() => import("@/components/PricingSectionCommitment"));
const ClientCarousel = dynamic(() => import("@/components/ClientCarousel"));
const CaseStudiesGrid = dynamic(() => import("@/components/CaseStudiesGrid"));
const HowWeServe = dynamic(() => import("@/components/HowWeServe"));
const WhyZaronology = dynamic(() => import("@/components/WhyZaronology"));
const OurProcess = dynamic(() => import("@/components/OurProcess"));
const CtaPrimary = dynamic(() => import("@/components/CtaPrimary"));
const TestimonialsMain = dynamic(() => import("@/components/TestimonialsMain"));
const Newsletter = dynamic(() => import("@/components/Newsletter"));
const Faqs = dynamic(() => import("@/components/Faqs"));
const FooterMain = dynamic(() => import("@/components/FooterMain"));


export const metadata = {
    title: "Our Plans and Pricing",
    description: "Zaronology helps $5M+ DTC brands optimize their technology, ensuring seamless attribution, improved data accuracy, and enhanced customer experiences. Our expertise in tracking, conversion optimization, and workflow automation empowers businesses to eliminate inefficiencies, maximize growth potential, and increase profitability with confidence.",
    icons: {
        icon: fav.src,
    },
    alternates: {
        canonical: 'https://zaronology.com/plans-and-pricing',
    },
};
const page = () => {


    return (
        <Layout>
            <HeaderMain />
            <PageSlider />
            <PricingSectionOne />
            <PricingSectionPackages />
            <PricingSectionAddOns />
            <PricingSectionDevelopment />
            <PricingSectionDetails />
            <PricingSectionCommitment />
            <ClientCarousel />
            <CtaPrimary />
            <CaseStudiesGrid />
            <WhyZaronology />
            <OurProcess />
            <TestimonialsMain />
            <HowWeServe />
            {/* <VideoFour /> */}
            <Newsletter />
            <Faqs />
            <FooterMain />
        </Layout>
    );
};

export default page;