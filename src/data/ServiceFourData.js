
import shape from '@/assets/images/shapes/service-4-bottom-shape.png';
import image1 from '@/assets/images/how-we-serve/seamless-attribution-tracking.jpg';
import image2 from '@/assets/images/how-we-serve/customer-journey.jpg';
import image3 from '@/assets/images/how-we-serve/conversion-rate-optimization.jpg';
import image4 from '@/assets/images/how-we-serve/seamless-technology-systems.jpg';

const serviceFourData = {

    shape,
    tagLine: "How We Serve You",
    title: "Tailored Solutions to Drive Your Success",
    carouselData: [
        {
            id: 1,
            image: image1,
            icon: "tolak-icons-two-smart-grid",
            title: "Seamless Attribution Tracking",
            text: "Tailor-made Seamless Attribution Tracking provides full data ownership and visibility. Combining first-party tracking, cross-platform attribution, and workflows, it drives clarity and scalable growth.",
            href: "/what-we-do/seamless-attribution-tracking",
        },
        {
            id: 2,
            image: image2,
            icon: "tolak-icons-two-algorithm",
            title: "Customer Journey & Experience",
            text: "Your customer journey defines their connection to your brand. We optimize paths, enhance interactions, and build trust, loyalty, and growth. Let’s craft groth driven and impactful experiences that deliver results.",
            href: "/what-we-do/customer-journey-and-experience",
        },
        {
            id: 3,
            image: image3,
            icon: "tolak-icons-two-cybersecurity",
            title: "Conversion Rate Optimization",
            text: "CRO optimizes customer journeys by auditing websites, mapping interactions, leveraging insights, and personalizing experiences to drive growth. Paired with tracking, it bridges data to action.",
            href: "/what-we-do/conversion-rate-optimization",
        },
        {
            id: 4,
            image: image4,
            icon: "tolak-icons-two-seo",
            title: "Seamless Technology Systems",
            text: "Scaling smarter means creating systems that handle today’s needs and prepare for tomorrow’s growth. By cutting inefficiencies and leveraging technology, we help you operate faster, compete stronger, and stay ahead.",
            href: "/what-we-do/seamless-technology-systems",
        },
    ],
    bottom: {
        title: "Discover More About How We Can Help You Grow",
        list: [
            {
                icon: "tolak-icons-two-arrow-circle-right",
                text: "Expert Consultancy & Tailored Solutions",
            },
            {
                icon: "tolak-icons-two-arrow-circle-right",
                text: "Competitor Analysis & Market Research",
            },
        ],
        btnText: "Explore All Services",
        btnLink: "/about",
    }};

export default serviceFourData;
