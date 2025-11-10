import Error404 from '@/components/Error404';
import FooterMain from '@/components/FooterMain';
import HeaderMain from '@/components/HeaderMain';
import Layout from '@/components/Layout';
import PageTop from '@/components/PageTop';
import React from 'react';
import fav from "@/assets/images/favicons/favicon.png"

export const metadata = {
    title: "Unlocking Your Business’s True Potential | Zaronology ",
    description:
        "Zaronology helps $5M+ DTC brands solve tracking issues, optimize data systems, and improve ROI with custom enterprise tracking solutions. Specializing in data clarity, attribution models, and privacy-compliant analytics, we empower businesses to scale faster and make confident, data-driven decisions.",
        icons: {
            icon: fav.src,
        },
        alternates: {
            canonical: 'https://zaronology.com',
        },
};

const page = () => {
    
    return (
        <Layout>
            <HeaderMain /> 
            <PageTop />
            <Error404 />
            <FooterMain />
        </Layout>
    );
};

export default page;