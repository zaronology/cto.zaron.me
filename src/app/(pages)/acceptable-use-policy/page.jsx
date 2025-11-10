import React from 'react';
import HeaderSixCloned from '@/components/HeaderMain';
import Layout from '@/components/Layout';
import PageTop from '@/components/PageTop';
import FooterMain from "@/components/FooterMain";
import fav from "@/assets/images/favicons/favicon.png"
import AUP from '@/components/AUP';

export const metadata = {
    title: "Privacy Policy || Zaronology",
    description: "You are safe here.",
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
            <HeaderSixCloned />
            <PageTop />
            <AUP /> 
            <FooterMain />
        </Layout>
    );
};

export default page;
