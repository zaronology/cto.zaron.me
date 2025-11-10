import Layout from '@/components/Layout';
import React from 'react';
import HeaderMain from '@/components/HeaderMain';
import FooterMain from '@/components/FooterMain';
import WhyZaronology from '@/components/WhyZaronology';
import OurProcess from '@/components/OurProcess';
import TestimonialsMain from '@/components/TestimonialsMain';
import Faqs from '@/components/Faqs';
import CtaPrimary from '@/components/CtaPrimary';
import PageTop from '@/components/PageTop';
import fav from "@/assets/images/favicons/favicon.png"



export const metadata = {
    title: "Frequesntly Asked Questions | Zaronology",
    description:
        "Explore how Zaronology’s innovative solutions have solved complex challenges, transformed operations, and delivered measurable ROI.",
    icons: {
        icon: fav.src,
    },
    alternates: {
        canonical: 'https://zaronology.com/faqs',
    },

};

const page = () => {
    return (

        <Layout>
            <HeaderMain />
            <PageTop />
            <Faqs />
            <CtaPrimary />
            <WhyZaronology />
            <OurProcess />
            <TestimonialsMain />
            {/* <VideoFour /> */}
            <FooterMain />
        </Layout>
    );
};

export default page;