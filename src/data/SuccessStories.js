import logoJT from "@/assets/images/clients/just-thrive.png";
import logoUM from "@/assets/images/clients/urban-monk-logo.png";
import logoRSOF from "@/assets/images/clients/the-real-skinny-on-fat.png";
import logoTI from "@/assets/images/clients/transformation-insider.png";
import logoTS from "@/assets/images/clients/teamseas-tm-logo.png";
import logoAP from "@/assets/images/clients/activation-products.png";
import logoCBC from "@/assets/images/clients/chris-beat-cancer.png";
import logoRF from "@/assets/images/clients/revealed-films.png";
import logoJHF from "@/assets/images/clients/jeff-hays-films.png";
import logoP90 from "@/assets/images/clients/project-90.png";
import logoBL from "@/assets/images/clients/berkeley-logo.png";
import logoBT from "@/assets/images/clients/biotrust.png";
import logoB40 from "@/assets/images/clients/beyond-40.png";
import logoGRS from "@/assets/images/clients/global-risk-solutions.png";
import logoMCS from "@/assets/images/clients/mcs-logo.png";
import logoPPR from "@/assets/images/clients/pelvic-pain-relief.png";
import logoNMP from "@/assets/images/clients/network-marketing-pro.png";
import logoPP from "@/assets/images/clients/proud-patriots.png";
import logoSpa from "@/assets/images/clients/spa-dr.png";
import logoTyS from "@/assets/images/clients/the-thyroid-secret.png";
import logoJBP from "@/assets/images/clients/j-bender-pro.png";

const successStoriesData = {
  title: "Brands That Built Their Systems for Smarter Growth",
  tagline: "success stories",
  pages: 3,
  stories: [
    {
      title: "Scaling the Largest Creator-Led Fundraiser to <span>$30M</span>",
      featured: true,
      page: 1,
      brandName: "TeamSeas",
      logo: logoTS,
      logoAlt: "TeamSeas logo Case Study",
      before: {
        text: "TeamSeas, led by YouTube creators MrBeast and Mark Rober, set out to raise $30 million to remove plastic from the ocean. With just 23 days to launch, they needed a system that could handle extreme traffic, process every donation seamlessly, and ensure accurate, real-time tracking of every dollar.",
        text2: "The challenge?",
        bullets: [
          "Ensure donations were tracked, attributed, and processed instantly, without loss.",
          "Handle unpredictable surges in traffic while maintaining real-time reporting.",
          "Prevent duplicate or missing transaction records across multiple payment platforms.",
          "Deliver a seamless donor experience to maximize contribution rates.",
        ],
        text3:
          "With the world watching, any tracking failure could mean millions in lost donations. The system had to be seamless.",
      },
      after: {
        text: "We built a scalable, high-performance tracking system that ensured every donation was accounted for, attributed correctly, and visible in real-time.",
        bullets: [
          "Designed a first-party tracking system to process donations instantly with zero data loss.",
          "Integrated multiple payment platforms with real-time tracking dashboards.",
          "Developed a fraud prevention system that blocked bad transactions without disrupting real donors.",
          "Provided accurate attribution to measure campaign performance and optimize outreach.",
        ],
      },
      impact: [
        "$30M+ raised in 61 days through a system built for transparency, scale, and trust.",
        "Handled over 1 billion requests with 100% uptime, preserving data integrity in real time.",
        "Seamless donor tracking eliminated drop-offs and maximized conversions.",
        "Live, transparent reporting increasing donor confidence and engagement.",
      ],
      href: "",
    },
    {
      title: "Scaling to <span>8M+ Engaged Subscribers</span>",
      featured: true,
      page: 1,
      brandName: "Transformation Insider",
      logo: logoTI,
      logoAlt: "Joel Marion's Transformation Insider logo Case Study",
      before: {
        text: "Transformation Insider needed a high-volume lead tracking system to scale affiliate-driven lead generation. Without precise attribution, they risked overpaying affiliates, missing key revenue drivers, and losing marketing efficiency.",
        text2: "The challenge?",
        bullets: [
          "Track every lead source accurately to prevent duplicate or low-quality commissions.",
          "Implement precision-based payouts based on lead quality, not just volume.",
          "Optimize lead acquisition funnels through data-driven A/B testing.",
        ],
        text3:
          "The risk? Overpaying for low-quality leads, wasted ad spend, and a system that couldn’t keep up with demand.",
      },
      after: {
        text: "We implemented advanced tracking and attribution systems to ensure lead quality, accurate affiliate payments, and maximized conversions.",
        bullets: [
          "Developed a multi-touch tracking system to ensure proper lead attribution.",
          "Automated payout structures based on real-time quality scoring.",
          "Built centralized tracking dashboards to provide full visibility across all traffic sources.",
        ],
      },
      impact: [
        "Built scalable systems to onboard 8M+ subscribers through clean, efficient funnels.",
        "Achieved 30%+ CVR by eliminating friction and dialing in strategy through clear insight.",
        "Generated $10M+ in ARR with first-party data and structure that supported growth.",
      ],
      href: "https://case-studies.zaronology.com/transformation-insider",
    },
    {
      title: "Scaling to <span>$20M+ Annual Revenue</span>",
      brandName: "Revealed Films",
      logo: logoRF,
      logoAlt: "Revealed Films logo Case Study",
      featured: true,
      page: 1,
      before: {
        text: "Revealed Films wanted to scale their high-impact docuseries launches, but tracking breakdowns, inaccurate affiliate attribution, and operational inefficiencies were capping their growth.",
        text2: "The challenge?",
        bullets: [
          "Improve affiliate tracking to ensure commissions matched actual revenue generated.",
          "Identify revenue leaks from misattributed traffic sources.",
          "Optimize attribution models for multi-touch conversions.",
        ],
        text3:
          "Without proper attribution, revenue reporting was inaccurate, making it impossible to optimize performance.",
      },
      after: {
        text: "We rebuilt their tracking ecosystem to eliminate data blind spots, improve attribution accuracy, and optimize conversion paths.",
        bullets: [
          "Implemented an attribution model to track every step of the customer journey.",
          "Automated affiliate tracking to ensure payouts aligned with actual revenue contribution.",
          "Optimized tracking for paid and organic traffic, improving marketing efficiency.",
        ],
      },
      impact: [
        "Grew from 7 figures to $20M+ by solving deep attribution and infrastructure gaps.",
        "Tracked 250,000+ registrations per launch with precision and consistency.",
        "Improved ROI by 45% through system-wide visibility and automation.",
      ],
      href: "https://case-studies.zaronology.com/revealed-films-docuseries",
    },
    {
      title: "<span>65% Improved Attribution</span> & Smarter Segmentation",
      featured: true,
      page: 1,
      brandName: "Chris Beat Cancer",
      logo: logoCBC,
      logoAlt: "Chris Beat Cancer logo Case Study",
      before: {
        text: "Chris Beat Cancer had a growing audience but struggled with messy tracking, inaccurate affiliate attribution, and poor audience segmentation.",
        text2: "The challenge?",
        bullets: [
          "Fix broken attribution models to ensure accurate revenue distribution.",
          "Segment audiences properly to improve personalization and targeting.",
          "Automate suppression list management to eliminate redundant work.",
        ],
        text3:
          "The risk? Inaccurate data led to missed revenue, partner frustration, and inefficient marketing efforts.",
      },
      after: {
        text: "We implemented a clean tracking system and optimized segmentation strategies to drive more precise marketing and revenue attribution.",
        bullets: [
          "Increased affiliate tracking accuracy by 65% with custom attribution models.",
          "Automated audience segmentation for targeted, high-converting campaigns.",
          "Implemented first-party tracking dashboards for clearer performance insights.",
        ],
      },
      impact: [
        "Increased affiliate tracking accuracy by 65%, restoring trust and boosting payouts.",
        "Enabled smarter segmentation that led to higher conversions and better targeting.",
        "Simplified operations to create a foundation for scalable, sustainable growth.",
      ],
      href: "https://case-studies.zaronology.com/chris-beat-cancer",
    },
    {
      title: "Optimizing Affiliate Attribution & Automation",
      featured: false,
      page: 2,
      brandName: "Alcohol Free Lifestyle",
      logo: logoP90,
      logoAlt: "Alcohol Free Lifestyle Logo",
      before: {
        text: "Alcohol Free Lifestyle relied on affiliate partnerships to drive revenue, but inconsistencies in tracking made it difficult to accurately attribute sales and payouts.",
        text2: "The challenge? They needed to:",
        bullets: [
          "Ensure every affiliate sale was tracked properly—without data being lost between platforms.",
          "Eliminate manual processes that slowed down attribution and created reporting errors.",
          "Gain real-time insights into affiliate performance to improve marketing decisions.",
          "Build a system that could scale as affiliate partnerships and sales volume grew.",
        ],
        text3:
          "Without accurate attribution and automation, revenue opportunities were being left on the table, and trust in the program was at risk.",
      },
      after: {
        text: "We built a scalable affiliate tracking and automation system to ensure accurate attribution and frictionless operations.",
        bullets: [
          "Seamlessly integrated tracking across Go High-Level, Calendly, and the shopping cart.",
          "Automated affiliate attribution and reporting to eliminate manual work and delays.",
          "Developed a centralized data system to track every lead from click to conversion.",
          "Created a scalable infrastructure to handle high-volume traffic and transactions effortlessly.",
        ],
      },
      impact: [
        "Eliminated affiliate tracking discrepancies, increasing payout accuracy and trust.",
        "Fully automated tracking and reporting, reducing manual workload and errors.",
        "Improved visibility into affiliate performance, allowing for smarter marketing decisions.",
        "Scalable infrastructure ensured seamless handling of increased sales and traffic.",
      ],
      href: "https://case-studies.zaronology.com/alcohol-free-lifestyle",
    },
    {
      title: "Streamlining Operations & Scaling Affiliate Program",
      featured: false,
      brandName: "Berkeley Life",
      page: 2,
      logo: logoBL,
      logoAlt: "Berkeley Life Logo",
      before: {
        text: "Berkeley Life’s affiliate program was growing, but outdated systems and manual processes made it difficult to scale efficiently.",
        text2: "The challenge? They needed to:",
        bullets: [
          "Automate affiliate onboarding, tracking, and reporting to reduce manual effort.",
          "Unify disconnected systems for a smoother flow of data and operations.",
          "Transition from WooCommerce to Shopify while integrating with Salesforce for better scalability.",
          "Ensure business continuity while upgrading critical tech infrastructure.",
        ],
        text3:
          "Without a streamlined system, inefficiencies slowed growth, created reporting gaps, and required excessive manual work.",
      },
      after: {
        text: "We designed a scalable, automated system that reduced friction and positioned the affiliate program for sustainable growth.",
        bullets: [
          "Integrated Everflow to automate affiliate tracking and streamline partner management.",
          "Migrated to Shopify and connected it with Salesforce for seamless order processing.",
          "Automated reporting workflows to provide real-time affiliate performance insights.",
          "Executed a phased transition to avoid disruptions and ensure a smooth rollout.",
        ],
      },
      impact: [
        "40–45% improvement in operational efficiency by automating manual processes.",
        "Affiliate program now supports larger-scale growth with minimal manual intervention.",
        "Seamless Shopify and Salesforce integration provided a strong foundation for scalability.",
        "Business operations remained uninterrupted throughout the transition.",
      ],
      href: "https://case-studies.zaronology.com/berkeley-life",
    },
    {
      title:
        "Achieving <span>100% Attribution Accuracy</span> & Seamless Event Execution",
      featured: false,
      page: 2,
      brandName: "Network Marketing Pro",
      logo: logoNMP,
      logoAlt: "Network Marketing Pro logo Case Study",
      before: {
        text: "Network Marketing Pro was gearing up for high-growth virtual events, but their systems weren’t built to keep up. We worked closely with them to continuously refine and optimize their event infrastructure, but their initial challenges were clear:",
        bullets: [
          "Accurately track ticket sales and affiliate-driven purchases—ensuring fair recognition and payouts.",
          "Handle massive event traffic without slowdowns, failed transactions, or system crashes.",
          "Improve their CRM (Keap) and sales funnels to convert more visitors into paying attendees.",
          "Enable real-time event interactions—so buttons, content, and CTAs triggered exactly when needed during live broadcasts.",
        ],
        text3:
          "They needed a system that could scale with them—one that eliminated bottlenecks, strengthened affiliate relationships, and optimized every touchpoint of their high-traffic events.",
      },
      after: {
        text: "We built a high-performance, event-ready system to handle massive audiences, maximize conversions, and ensure revenue accuracy.",
        bullets: [
          "Created a custom affiliate tracking system for accurate sales attribution & payouts.",
          "Optimized sales funnels to reduce friction & increase conversions.",
          "Designed a scalable event framework to handle high traffic with zero downtime.",
        ],
      },
      impact: [
        "25,000+ participants supported seamlessly.",
        "100% accurate sales tracking & payouts, strengthening partner trust.",
        "Faster load times & frictionless experience, leading to higher engagement.",
        "25% revenue growth through better optimization & tracking.",
      ],
      href: "https://case-studies.zaronology.com/network-marketing-pro",
    },
    {
      title:
        "Powering a High-Impact Docuseries & <span>Seamless Acquisition</span>",
      featured: false,
      brandName: "The Spa Dr",
      page: 2,
      logo: logoSpa,
      logoAlt: "The Spa Dr logo Case Study",
      before: {
        text: "The Spa Dr set out to launch a high-impact docuseries while preparing for an eventual acquisition. To maximize engagement and revenue, they needed a system that could handle video scheduling, affiliate tracking, and secure sales seamlessly.",
        text2: "The challenge? They needed to:",
        bullets: [
          "Automate video releases to keep audience engagement high throughout the campaign.",
          "Ensure accurate affiliate tracking to compensate partners and maximize reach.",
          "Optimize sales pages with secure transactions and dynamic upsells.",
          "Prepare for a seamless technology transition post-acquisition without operational disruptions.",
        ],
        text3:
          "Beyond a successful launch, the long-term goal was to ensure that the acquiring company could take over operations smoothly—without losing momentum or breaking anything in the process.",
      },
      after: {
        text: "We implemented a scalable, acquisition-ready system that supported the launch, maximized conversions, and ensured an easy transition post-acquisition.",
        bullets: [
          "Integrated video scheduling automation, allowing the docuseries to launch effortlessly.",
          "Built seamless affiliate tracking to ensure accurate revenue attribution and partner payouts.",
          "Optimized secure sales pages with adaptive upsell functionality to increase average order value.",
          "Worked directly with the acquiring company to transition all technology without disruptions.",
          "Provided a full year of post-acquisition support to ensure continued success.",
        ],
      },
      impact: [
        "Flawless docuseries launch with automated video scheduling and secure sales functionality.",
        "Affiliate program ran seamlessly, driving significant campaign reach and revenue.",
        "100% smooth technology transition post-acquisition, ensuring business continuity.",
        "1 year of post-acquisition support, helping the new owners maximize success.",
      ],
      href: "https://case-studies.zaronology.com/the-spa-dr",
    },
    {
      title: "<span>95% Accurate Tracking</span> for 250,000+ Registrations",
      featured: false,
      brandName: "The Thyroid Secret",
      page: 2,
      logo: logoTyS,
      logoAlt: "The Thyroid Secret logo Case Study",
      before: {
        text: "The Thyroid Secret set out to launch a high-impact docuseries with affiliate partnerships driving the majority of registrations. With over 250,000 pre-launch sign-ups, they needed airtight tracking to ensure every affiliate was credited properly.",
        text2: "The challenge? Their tracking system needed to:",
        bullets: [
          "Handle massive traffic spikes while maintaining tracking accuracy.",
          "Ensure affiliates received correct attribution, even if users clicked multiple links.",
          "Recover lost conversions caused by broken or duplicate tracking IDs.",
        ],
        text3:
          "With revenue and affiliate trust on the line, failure to track accurately would have led to lost commissions, partner frustration, and revenue leakage.",
      },
      after: {
        text: "We built a high-performance tracking system that ensured data integrity, eliminated tracking gaps, and recovered lost conversions.",
        bullets: [
          "Engineered a server-side tracking system to withstand high traffic volumes without losing attribution accuracy.",
          "Recovered affiliate misattributions by implementing a transparency layer, increasing tracking accuracy to 95%.",
          "Optimized database performance to process massive registration volumes without slowing down.",
          "Eliminated tracking link duplication issues, ensuring affiliates were credited properly.",
        ],
      },
      impact: [
        "250,000+ registrations accurately tracked during the campaign.",
        "95% affiliate attribution accuracy maintained under peak traffic.",
        "Hundreds of lost conversions recovered, protecting revenue and partner trust.",
        "Seamless tracking experience that ensured affiliates stayed engaged.",
      ],
      href: "https://case-studies.zaronology.com/the-thyroid-secret",
    },
    {
      title:
        "Pelvic Pain Relief: <span>Accurate Tracking & Smarter Segmentation</span>",
      featured: false,
      brandName: "Pelvic Pain Relief",
      page: 3,
      logo: logoPPR,
      logoAlt: "Pelvic Pain Relief logo Case Study",
      before: {
        text: "Pelvic Pain Relief relied on surveys to personalize marketing, but their tracking and segmentation systems were slowing them down. Their affiliate sales ran through ClickBank, but tracking was inconsistent, and upsell purchases weren’t being attributed properly.",
        text2: "The challenge? Their systems needed to:",
        bullets: [
          "Capture and segment customer data effectively without manual work.",
          "Ensure affiliate tracking worked across ClickBank funnels, even with multiple upsells.",
          "Optimize hosting and workflows to support their internal development team.",
        ],
        text3:
          "Without accurate tracking, they were missing key insights into customer behavior, campaign effectiveness, and revenue attribution.",
      },
      after: {
        text: "We built a seamless, automated system that improved tracking, enhanced segmentation, and reduced manual workload.",
        bullets: [
          "Developed a custom survey tool that collected zero-party data and integrated it directly into marketing workflows.",
          "Implemented middleware to track ClickBank affiliate conversions accurately, consolidating upsells into a single event for better reporting.",
          "Optimized hosting infrastructure for faster load times and increased reliability.",
          "Worked with the internal team to streamline workflows, reducing friction in daily operations.",
        ],
      },
      impact: [
        "100% tracking accuracy across all ClickBank funnels, improving revenue attribution.",
        "Smarter audience segmentation with real-time survey data flowing into marketing campaigns.",
        "Optimized hosting and workflows, reducing manual processes and improving efficiency.",
        "Stronger affiliate performance tracking, ensuring partners received the right payouts.",
      ],
      href: "https://case-studies.zaronology.com/pelvic-pain-relief",
    },
    {
      title: "<span>Scalable E-Commerce & Advanced Tracking</span>",
      featured: false,
      brandName: "BioTrust Nutrition & TrustBo",
      logo: logoBT,
      page: 3,
      logoAlt: "BioTrust Nutrition logo Case Study",
      before: {
        text: "Launching TrustBo, a CBD brand under BioTrust Nutrition, required a more flexible and scalable e-commerce solution than Shopify could provide. Shopify’s checkout limitations restricted their ability to implement advanced upsell offers, and their fulfillment process needed a more seamless integration to support rapid scaling.",
        text2: "The challenge? They needed a system that could:",
        bullets: [
          "Enable one-click upsells and customized checkout flows to maximize revenue.",
          "Integrate with fulfillment partners for real-time inventory management and order processing.",
          "Track marketing and customer behavior across multiple platforms while syncing data with BioTrust’s warehouse.",
          "Handle high traffic loads and scale without interruptions as the brand grew.",
        ],
        text3:
          "Without the right infrastructure, TrustBo risked losing conversion opportunities and struggling with operational inefficiencies that would slow down growth.",
      },
      after: {
        text: "We built a custom e-commerce system designed to scale with TrustBo’s growth, giving them full control over checkout, fulfillment, and tracking.",
        bullets: [
          "Developed a Shopify-style storefront using Laravel for full customization and user-friendly checkout.",
          "Integrated Sticky.io for order management, enabling advanced upsell capabilities beyond Shopify’s restrictions.",
          "Built a fulfillment management system that automated inventory tracking and ensured seamless order processing.",
          "Connected multiple third-party tracking tools and synced all data back to BioTrust’s data warehouse for complete visibility.",
          "Deployed scalable AWS infrastructure with load balancing and database redundancy for high performance and reliability.",
        ],
      },
      impact: [
        "Higher average order value (AOV) with advanced upsell capabilities, boosting revenue per customer.",
        "Seamless fulfillment operations reduced errors and ensured faster order processing.",
        "Comprehensive tracking enabled data-driven marketing decisions and performance optimization.",
        "Scalable, high-performance infrastructure eliminated downtime and prepared the brand for long-term growth.",
      ],
      href: "https://case-studies.zaronology.com/biotrust-trustbo",
    },
    {
      title:
        "Eliminating Data Inconsistencies & <span>Improving CLTV Accuracy</span>",
      featured: false,
      brandName: "Proud Patriots (Hero Brands)",
      page: 3,
      logo: logoPP,
      logoAlt: "Proud Patriots logo Case Study",
      before: {
        text: "Proud Patriots relied on Baremetrics to track key financial metrics, including Customer Lifetime Value (CLTV). However, major discrepancies between Baremetrics and Stripe reports created confusion and made leadership question the accuracy of their numbers.",
        text2: "The challenge? They needed a system that could:",
        bullets: [
          "Deliver 100% accurate CLTV tracking and financial reporting that aligned with Stripe data.",
          "Eliminate reliance on third-party analytics tools that introduced reporting inconsistencies.",
          "Provide leadership with real-time financial insights they could trust to make data-driven decisions.",
          "Offer deeper financial visibility with custom reports tailored to business needs.",
        ],
        text3:
          "Without reliable financial reporting, leadership couldn’t confidently evaluate profitability, customer value, or long-term growth opportunities.",
      },
      after: {
        text: "We built a custom financial reporting system designed for precision, eliminating inconsistencies and unlocking clearer financial insights.",
        bullets: [
          "Developed a Stripe-integrated dashboard for real-time tracking of CLTV, revenue, and other key metrics.",
          "Designed a scalable, API-driven architecture for seamless data collection and analysis.",
          "Replaced Baremetrics with a more accurate, cost-effective system tailored to their specific financial reporting needs.",
          "Implemented NoSQL and SQL database infrastructure on a Galera Cluster to ensure redundancy and reliability.",
        ],
      },
      impact: [
        "100% alignment with Stripe data, restoring confidence in financial metrics.",
        "Eliminated Baremetrics subscription fees while gaining a more powerful reporting system.",
        "Custom reports and dashboards delivered deeper insights into customer behavior and financial performance.",
        "Provided leadership with real-time, actionable data to drive smarter business decisions.",
      ],
      href: "https://case-studies.zaronology.com/proud-patriots",
    },
    {
      title: "Scaling bPossible with Seamless Streaming & Launch Execution",
      featured: false,
      brandName: "The Urban Monk & bPossible",
      page: 3,
      logo: logoUM,
      logoAlt: "The Urban Monk and bPossible logo Case Study",
      before: {
        text: "The Urban Monk and bPossible needed a reliable, scalable platform to support multiple docuseries launches, seamless video streaming, and advanced tracking for marketing performance.",
        text2: "The challenge? They needed a system that could:",
        bullets: [
          "Ensure 99.9% uptime across multiple high-traffic domains and launches.",
          "Power a seamless video streaming platform with zero buffering and optimized content delivery.",
          "Implement dynamic upsell and downsell logic tailored to each customer’s purchase behavior.",
          "Provide precise tracking for affiliate performance and marketing attribution across campaigns.",
        ],
        text3:
          "Without a strong infrastructure and tracking system, every launch carried the risk of technical failures, lost revenue, and poor user experience.",
      },
      after: {
        text: "We developed a high-performance, fully integrated system that supported The Urban Monk’s vision for a world-class wellness streaming platform and seamless launch execution.",
        bullets: [
          "Built and maintained a custom video streaming platform for uninterrupted content delivery.",
          "Hosted all domains on AWS for scalability and ensured 99.9% uptime during launches.",
          "Implemented advanced upsell/downsell logic, increasing Average Order Value (AOV) and optimizing the customer journey.",
          "Developed a robust tracking and attribution system for precise affiliate and marketing performance insights.",
          "Seamlessly integrated with Sticky.io for payment processing and optimized landing pages for higher conversions.",
        ],
      },
      impact: [
        "Reliably powered six high-traffic launches without technical disruptions.",
        "Seamless streaming experience for thousands of users, ensuring zero buffering.",
        "Optimized upsell flows increased AOV and improved purchase conversions.",
        "Comprehensive tracking and attribution enabled better marketing decisions and ROI.",
      ],
      href: "https://case-studies.zaronology.com/the-urban-monk-bpossible",
    },
    {
      title:
        "Automating <span>Registrations & Tracking</span> Across Multiple Email Systems",
      featured: false,
      brandName: "Johnathan Bender Productions",
      logo: logoJBP,
      page: 3,
      logoAlt: "Johnathan Bender Productions logo Case Study",
      before: {
        text: "Johnathan Bender Productions needed a way to automatically route registrations into the correct email responder system without manual intervention. Managing multiple sales funnels across Ontraport and AWeber added complexity, making tracking attribution and list assignments difficult.",
        text2: "The challenge? Their system had to:",
        bullets: [
          "Automatically assign new registrations to the correct email responder system (Ontraport or AWeber).",
          "Ensure tracking attribution was preserved across ClickFunnels' instant notifications.",
          "Eliminate errors and manual list management, allowing the team to focus on campaign execution.",
        ],
        text3:
          "Without a seamless automation system, every new campaign required manual oversight to ensure leads were placed into the correct sequences, increasing the risk of lost opportunities and tracking gaps.",
      },
      after: {
        text: "We built a custom middleware solution that automated email list assignments, ensured seamless tracking attribution, and eliminated operational inefficiencies.",
        bullets: [
          "Developed an intelligent middleware system to route registrations to the right platform in real time.",
          "Integrated ClickFunnels’ instant notifications to dynamically pass tracking identifiers for seamless attribution.",
          "Eliminated manual list management by automating email sequence assignments in Ontraport and AWeber.",
          "Ensured a scalable, error-proof solution capable of handling future growth and integrations.",
        ],
      },
      impact: [
        "Automated registration routing, reducing errors and saving hours of manual work per campaign.",
        "100% accurate tracking attribution, ensuring every lead was accounted for in marketing performance metrics.",
        "Eliminated campaign setup bottlenecks, allowing faster and smoother launches.",
        "Built a scalable middleware system that supports future integrations and expansion.",
      ],
      href: "https://case-studies.zaronology.com/jonathan-bender-productions",
    },
    // {
    //   title: "",
    //   featured: false,
    //   brandName: "",
    //   logo: logoNMP,
    //   logoAlt: "",
    //   before: {
    //     text: "",
    //     text2: "",
    //     bullets: ["", "", "", ""],
    //     text3: "",
    //   },
    //   after: {
    //     text: "",
    //     bullets: ["", "", ""],
    //   },
    //   impact: ["", "", ".", ""],
    //   href: "",
    // },
  ],
};

export default successStoriesData;
