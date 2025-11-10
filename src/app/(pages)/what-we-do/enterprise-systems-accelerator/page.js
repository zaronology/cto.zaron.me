import Layout from '@/components/Layout';
import React from 'react';
import HeaderMain from '@/components/HeaderMain';
import CtaEight from '@/components/CtaPrimary';
import PageTop from '@/components/PageTop';
import FooterMain from '@/components/FooterMain';
import fav from "@/assets/images/favicons/favicon.png"



export const metadata = {
    title: "Enterprise Systems Accelerator",
    description: "The Enterprise Systems Accelerator is a community-driven program offering two levels of affordable access to expert guidance. Members gain access to a dedicated Discord community, the ability to ask a direct question each month, and participate in weekly live Q&A and educational sessions with me. This program is designed to eliminate bottlenecks and empower growth through collaborative learning and personalized insights.",
    icons: {
        icon: fav.src,
    },
    alternates: {
        canonical: 'https://zaronology.com/what-we-do/enterprise-systems-accelerator',
    },

};

const page = () => {
    return (

        <Layout>
            <HeaderMain />
            <PageTop />
            <CtaEight />
            <FooterMain />
        </Layout>
    );
};

export default page;