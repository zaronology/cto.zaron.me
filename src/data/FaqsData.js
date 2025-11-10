import accordionImage from "@/assets/images/resources/accordian-image.jpg";
import faqImage1 from "@/assets/images/faq-full-1.jpg";
import faqImage2 from "@/assets/images/faq-full-2.jpg";
import faqImage3 from "@/assets/images/faq-full-3.jpg";

const FaqsData = [
  {
    id: "/what-we-do/seamless-attribution-tracking",
    tagLine: "Frequently Asked Questions",
    title: "Your Questions, Answered",
    text: "We understand that the concept of optimizing systems and data ownership can feel overwhelming or even unnecessary when things seem to be running smoothly. However, it’s natural to have questions and concerns about making changes to what’s already working. That’s why we’ve gathered some of the most common challenges and objections people face—and provided clear answers to help you see the value in taking a proactive approach to your business’s growth and sustainability.",
    showCTA: false,
    accordionData: [
      {
        id: 1,
        title: 'What exactly is an "Seamless Attribution Tracking"?',
        image: accordionImage,
        text: "<p>Seamless Attribution Tracking is a custom-tailored infrastructure that gives you complete ownership and visibility of your customer data. <p>Our systems are tailored to your specific business needs, data requirements, and growth goals, delivering clarity and actionable insights.</p><p>They include first-party attribution tracking, zero-party data collection, cross-platform attribution, and privacy-compliant infrastructure - all working together to provide a single source of truth for your marketing data.</p><p>Every solution is custom-designed around your specific business needs, compliance requirements, and growth goals.</p><p>We streamline your tools, workflows, and data to eliminate confusion, deliver clarity you can act on, and make every decision a step toward scalable, sustainable growth, all while keeping things simple.</p><p>By designing tailored processes that empower you to trust your numbers and identify where your marketing dollars drive results, we help you make decisions that consistently scale profits and grow your business.</p><p>With everything finally working in harmony, you can spend less time troubleshooting and more time focused on building the future you envision.</p>",
        isActive: false,
      },
      {
        id: 2,
        title: "How long does implementation take?",
        image: accordionImage,
        text: "<p>We are your partner in growth, the minimum engagement is 3 months, we are here to solve complex problems, and create comprehensive solutions for your business. Discovery and setup generally take 4-6 weeks, depending on your current setup and requirements.</p><p>Then, we tackle problems and create projects based on your needs as they come up, while creating incremental improvements in your attribution data.</p>",
        isActive: false,
      },
      {
        id: 3,
        title: "What kind of ROI can I expect?",
        image: accordionImage,
        text: "<p>While results vary by business, our clients typically see:</p><ul><li>15-45% increase in attribution accuracy</li><li>25-35% reduction in wasted ad spend</li><li>15-30% improvement in ROAS through better attribution</li><li>75% reduction in manual processes</li></ul><p> More importantly, you get complete confidence in your marketing decisions because you finally have data you can trust.</p>",
        isActive: false,
      },
      {
        id: 4,
        title: "Do you replace our existing analytics tools?",
        image: accordionImage,
        text: "<p>Not necessarily.</p><p>We often integrate with existing tools while providing a single source of truth through our first-party attribution tracking system.</p><p>You’ll get a tailored system that we built from the ground up, that’s created for your business, rather than trying to duct tape all these different tools together.</p>",
        isActive: false,
      },
      {
        id: 5,
        title: "How do you ensure privacy compliance?",
        image: accordionImage,
        text: "<p>Privacy compliance is built into every system we create. We:</p><ul><li>Implement first-party attribution tracking that puts you in control of data collection</li><li>Build consent management systems that comply with GDPR, CCPA, and other regulations</li><li>Create transparent data collection processes that build trust with customers</li><li>Document all data flows and processing activities for compliance audits</li><li>Regularly update systems to adapt to new privacy requirements</li><li>Follow all SOC and SOC2 compliance practices.</li></ul>",
        isActive: false,
      },
      {
        id: 6,
        title: "What makes you different from analytics companies like HYROS?",
        image: accordionImage,
        text: "<p>Unlike one-size-fits-all tools, we:</p><ul><li>Build custom solutions tailored to your specific business needs</li><li>Give you complete ownership of your attribution tracking infrastructure</li><li>Provide hands-on support from senior engineers</li><li>Implement more sophisticated attribution models</li><li>Create systems that integrate with your entire tech stack. Most importantly, you're not dependent on a third-party platform that could change their terms or shut down tomorrow.</li>",
        isActive: false,
      },
      {
        id: 7,
        title:
          "We’re hitting our revenue goals, scaling well, and our current systems (Google Analytics, Meta Ads, Shopify, CRM, etc.) seem to do the job. Why fix something that isn’t broken?",
        image: accordionImage,
        text: "<p>Success without accurate attribution is like navigating with a faulty compass. Sure, you’ve made it this far, but how much are you leaving on the table? How much more efficient could your ad spend be? The absence of data discrepancies doesn’t mean they don’t exist; it just means you don’t know about them yet. The risks of inefficiencies compound as you grow, and what works at $70 million might break down at $100 million.</p>",
        isActive: false,
      },
      {
        id: 8,
        title: "Third-party tools work fine for us.",
        image: accordionImage,
        text: "<p>These tools are built for the masses, not tailored to your unique business needs. They’ll give you aggregated insights but not the level of granularity required for precise decision-making. When the data from these tools conflicts, how do you decide which is right? Relying on their “black box” logic means putting your trust in systems that don’t always align with your goals or unique customer journey.</p><p>Additionally, these tools don’t give you data ownership. If you ever leave these platforms, you lose access to years of insights. Seamless Attribution Tracking ensures you own and control all your data, making it adaptable to any platform.</p>",
        isActive: false,
      },
      {
        id: 9,
        title:
          "Building a custom attribution tracking system seems costly, complex, and resource-intensive. We’d rather invest that money in campaigns that drive immediate ROI.",
        image: accordionImage,
        text: "<p>The is an investment, not a cost. Imagine reallocating just 5–10% of your current ad budget that’s wasted on misattributed campaigns. The system pays for itself by improving ad performance, reducing wasted spend, and creating long-term efficiencies. Moreover, modern tools and APIs make creating a central data hub less resource-intensive than you might think.</p>",
        isActive: false,
      },
      {
        id: 10,
        title:
          "How much better can this really make us? We’re already optimizing our campaigns and scaling. The marginal gains from this don’t seem worth the effort",
        image: accordionImage,
        text: "<p>Even marginal gains can make a massive impact at scale. A 5% increase in ROI on just $2 million of ad spend equals $100,000 in extra revenue. This isn’t just about marginal gains, it’s about protecting your growth trajectory. Scaling without precise attribution tracking increases the risk of inefficiencies compounding over time.</p>",
        isActive: false,
      },
      {
        id: 11,
        title:
          "Our internal team or agency manages attribution tracking. We trust them to optimize and report accurately.",
        image: accordionImage,
        text: "<p>Your team or agency is likely limited by the tools they’re using. They can only optimize within the parameters set by third-party systems. Seamless Attribution Tracking empowers your team by giving them complete visibility and customized insights that third-party tools can’t provide. It’s a force multiplier for the team you already have, not a replacement.</ul>",
        isActive: false,
      },
      {
        id: 12,
        title:
          "We’re already getting the data we need. Who cares if Shopify or Google owns it?",
        image: accordionImage,
        text: "<p>Data ownership becomes critical when you need to dig deeper than what’s presented in a dashboard. If you ever encounter discrepancies or want to train AI models for deeper insights, raw data is non-negotiable. AI models don’t work on aggregated summaries; they need granular, raw inputs. Without owning your data, you’ll miss out on the transformative potential of AI-driven decision-making.</p>",
        isActive: false,
      },
      {
        id: 13,
        title:
          "We’ve never experienced significant data discrepancies or misattribution problems. Why should I assume we will?",
        image: accordionImage,
        text: "<p>No discrepancies doesn’t mean no issues—it often means undiscovered issues. Most companies don’t realize how much data they’re losing or misattributing until they dig deeper. With new privacy laws, evolving platform rules, and the increasing complexity of customer journeys, the likelihood of errors grows over time. Waiting for a problem to surface is riskier than proactively addressing it.</p>",
        isActive: false,
      },
      {
        id: 14,
        title:
          "Why now? We’re growing just fine. Why should this be a priority right now?",
        image: accordionImage,
        text: "<p>The business landscape is shifting, and data ownership is becoming a competitive differentiator. As privacy regulations tighten and AI adoption accelerates, companies with full control over their data will have a significant edge. Waiting until it’s a necessity means falling behind competitors who are already making this investment today.</p>",
        isActive: false,
      },
    ],
    faqImage1,
    faqImage2,
    faqImage3,
  },
  {
    id: "default",
    tagLine: "Frequently Asked Questions",
    title: "Your Questions, Answered",
    text: "Tracking, attribution, and tech infrastructure aren’t just buzzwords—they’re the foundation of your business.",
    text2:
      "When your reports don’t line up, your team can’t answer basic questions, and every decision feels like a guess… you’re not operating. You’re gambling.",
    text3:
      "We hear the same frustrations all the time—“Our tracking seems fine,” “We already have a dev team,” or “The platform said it would be easy.”",
    text4:
      "And yet, here you are, still asking what’s actually driving revenue.",
    text5:
      "So we cut through the noise. Here are the real answers. The ones that help you stop wasting time, stop bleeding money, and finally get the clarity to scale.",
    showCTA: false,
    accordionData: [
      {
        id: 1,
        title: "How do we know if our systems are holding us back?",
        image: accordionImage,
        text: "<p>You feel it before you see it. Stalled projects, unclear answers, and decisions that feel more like guesses than strategy. If your tools aren’t talking to each other, if reports contradict each other, or if you have to ask the same question twice, that’s not a performance issue, it’s a systems issue.</p><p>We help you see the gaps, the misalignments, and the places your current infrastructure is silently slowing you down.</p>",
        isActive: false,
      },
      {
        id: 2,
        title:
          "How can we make our team more effective with the tools we already have?",
        image: accordionImage,
        text: "<p>Good people underperform when they’re working in bad systems. Misaligned tools and unclear workflows lead to frustration, duplication, and delay.</p><p>We optimize your tech stack, reduce friction points, and build systems and automations your team can actually use, so they stop putting out fires and start building momentum.</p>",
        isActive: false,
      },
      {
        id: 3,
        title:
          "What if our tracking and reports look fine, but things still feel off?",
        image: accordionImage,
        text: "<p>That’s the most common red flag. On the surface, everything checks out. But beneath that? Conflicting data, missed context, and decisions that never seem to land right.</p><p>If your team can’t explain the numbers, or you’re making moves that don’t move the needle, your system is feeding you surface-level clarity with underlying confusion. We fix that.</p>",
        isActive: false,
      },
      {
        id: 4,
        title: "How do we fix problems we can’t see clearly?",
        image: accordionImage,
        text: "<p>First, we map what’s really going on. Most business problems are system problems in disguise, so we go beneath the symptoms.</p><p>We diagnose where workflows are stuck, where data’s breaking down, and where ownership is unclear. Then we rebuild the infrastructure so problems don’t just get spotted, they get solved.</p>",
        isActive: false,
      },
      {
        id: 5,
        title: "How long does it take to see real results?",
        image: accordionImage,
        text: "<p>Most clients see momentum in the first 30–60 days. But this isn’t a patch job. The full transformation depends on the complexity of your systems and how deep the problems go.</p><p>What we promise: transparency, traction, and a clear roadmap forward. No fluff. No waiting in the dark. Just consistent progress from day one.</p>",
        isActive: false,
      },
      {
        id: 6,
        title: "What does success look like when this is working?",
        image: accordionImage,
        text: "<p>Your team stops scrambling and starts delivering. Projects move. Reports align. Decisions stick.</p><p>Most importantly, you stop getting pulled into the weeds. You stop working in the business, and start leading it again.</p><p>That’s what Zaronology builds: systems you can trust, outcomes you can see, and clarity you can lead from.</p>",
        isActive: false,
      },
      {
        id: 7,
        title: "Why can’t we just plug in a new tool or AI system to fix this?",
        image: accordionImage,
        text: "<p>Because tools only work as well as the systems they’re dropped into. AI won’t save you from structural mess. Garbage in, garbage out.</p><p>We help you build the system the tool can thrive inside. That means clean data, functional workflows, and the kind of clarity machines, and humans, can actually act on.</p>",
        isActive: false,
      },
      {
        id: 8,
        title:
          "Can we keep the tools we already use? Or do we need to start over?",
        image: accordionImage,
        text: "<p>We don’t believe in ripping out what works. If your tools are solid, we keep them. If they’re holding you back, we show you why, and what to do instead.</p><p>Our job isn’t to sell you on a new platform. It’s to make your system work. Period.</p>",
        isActive: false,
      },
      {
        id: 9,
        title:
          "Isn’t this expensive and hard to justify if we’re already growing?",
        image: accordionImage,
        text: "<p>Growth hides inefficiency, until it breaks something. Most fast-growing companies bleed cash, attention, and trust long before they notice it in the numbers.</p><p>We stop the leak before it costs more than it already has. This isn’t an expense, it’s a rebuild that protects your future.</p>",
        isActive: false,
      },
      {
        id: 10,
        title: "How does this actually improve our bottom line?",
        image: accordionImage,
        text: "<p>Fewer wasted decisions. Faster execution. More profitable scaling. Better ROI from your people and your platforms.</p><p>We don’t just make things cleaner, we make them smarter, so your investments finally start compounding instead of draining.</p>",
        isActive: false,
      },
    ],
    faqImage1,
    faqImage2,
    faqImage3,
  },
];

export default FaqsData;
