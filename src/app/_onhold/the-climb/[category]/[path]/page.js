import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '@/components/Layout';
import HeaderMain from '@/components/HeaderMain';
// import PageHeroSlider from '@/components/PageHeroSlider';
// import TheClimb from '@/components/TheClimb';
// import fav from "@/assets/images/favicons/favicon.png"
const TheClimbContent = dynamic(() => import("@/components/TheClimbContent"));
const CaseStudiesGrid = dynamic(() => import("@/components/CaseStudiesGrid"));
const TestimonialsMain = dynamic(() => import("@/components/TestimonialsMain"));
const FooterMain = dynamic(() => import("@/components/FooterMain"));



// export const metadata = {
//     title: "The Climb by Zaronology | Stories & Insights from the Trenches",
//     description: "The Climb is about navigating the challenges of growth, finding balance across the four key areas of life—spiritual, mental, physical, and emotional—and learning from the struggles along the way. Here, we share real experiences from our projects, lessons learned from wins and setbacks, and practical insights into the tech that drives success.",
//     icons: {
//         icon: fav.src,
//     },
//     alternates: {
//         canonical: 'https://zaronology.com/the-climb',
//     },
    
// };

const page = () => {
    return (

        <Layout>
            <HeaderMain />
            <TheClimbContent />
            <TestimonialsMain />
            <CaseStudiesGrid />
            <FooterMain />
        </Layout>
    );
};

export default page;