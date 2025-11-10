import Image from "next/image";
import articleImg from "@/assets/images/the-climb/aarrr-pirates-v1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble as check } from "@awesome.me/kit-d469f7d4aa/icons/duotone/light";
import { faCircle1 as one } from "@awesome.me/kit-d469f7d4aa/icons/duotone/light";
import { faCircle2 as two } from "@awesome.me/kit-d469f7d4aa/icons/duotone/light";
import { faCircle3 as three } from "@awesome.me/kit-d469f7d4aa/icons/duotone/light";
import { faCircle4 as four } from "@awesome.me/kit-d469f7d4aa/icons/duotone/light";
import { faCircle5 as five } from "@awesome.me/kit-d469f7d4aa/icons/duotone/light";
import { faLink as linkIcon } from "@awesome.me/kit-d469f7d4aa/icons/duotone/solid";

import Link from "next/link";

const AarrrOrigins = () => {
  const subject = "aarrr";
  const linkedArticles = [
    {
      href: `${subject}/acquisition`,
      linkText: "Acquisition:",
      text: "Website traffic, conversion rates, cost per acquisition (CPA), customer acquisition cost (CAC), bounce rate",
    },
    {
      href: `${subject}/activation`,
      linkText: "Activation:",
      text: "Daily active users (DAU), monthly active users (MAU), signup rate, time to first action, feature usagee",
    },
    {
      href: `${subject}/retention`,
      linkText: "Retention:",
      text: "Customer churn rate, customer lifetime value (CLTV), retention rate, repeat purchase rate",
    },
    {
      href: `${subject}/referral`,
      linkText: "Referral:",
      text: "Referral rate, Net Promoter Score (NPS), viral coefficient, social sharing rate",
    },
    {
      href: `${subject}/revenue`,
      linkText: "Revenue:",
      text: "Average revenue per user (ARPU), lifetime value (LTV), average order value (AOV), conversion rate",
    },
  ];

  return (
    <article className="the-climb-article">
      <div className="article-top">
        <h1>AARRR &mdash; The Pirate Metrics Framework</h1>
        <h2>Origins of the AARRR Framework</h2>

        <div className="article-image">
          <Image
            src={articleImg}
            alt="AARRR Pirate Metrics framework Pirate holding map"
          />
        </div>
      </div>
      <div className="article-body">
        <p>
          The AARRR framework, often referred to as “Pirate Metrics,” was
          introduced by entrepreneur and investor Dave McClure in 2007. Drawing
          from his extensive experience in the startup ecosystem, including
          roles at PayPal and Simply Hired, McClure recognized the need for a
          straightforward model to help startups navigate growth challenges.
        </p>
        <p>
          The framework was revealed during his “Startup Metrics for Pirates”
          talk at the Ignite Seattle event, aiming to provide a clear roadmap
          for startups to understand and optimize their customer lifecycle.
        </p>
        <p>
          There are 5 Stages of the AARRR Framework, which breaks down the
          customer journey into five critical stages:
        </p>
        <ol className="nice-list">
          <li className="py-4">
            <FontAwesomeIcon icon={one} />
            <span>
              Acquisition: Attracting potential users to your product or
              service.
            </span>
          </li>
          <li className="py-4">
            <FontAwesomeIcon icon={two} />
            <span>
              Activation: Ensuring users have a positive initial experience.
            </span>
          </li>
          <li className="py-4">
            <FontAwesomeIcon icon={three} />
            <span>Retention: Keeping users engaged over time.</span>
          </li>
          <li className="py-4">
            <FontAwesomeIcon icon={four} />
            <span>Referral: Encouraging satisfied users to refer others.</span>
          </li>
          <li className="py-4">
            <FontAwesomeIcon icon={five} />
            <span>Revenue: Generating income from user actions.</span>
          </li>
        </ol>
        <p>
          This structured approach allows businesses to pinpoint areas of
          strength and opportunities for improvement within their customer
          engagement strategies.
        </p>
        <h3>Why the AARRR Framework is Effective</h3>
        <p>
          The enduring popularity of the AARRR framework stems from its
          simplicity and actionable insights. By focusing on these five stages,
          businesses can:
        </p>
        <ul className="nice-list">
          <li>
            <FontAwesomeIcon icon={check} />
            <span>
              Identify Bottlenecks: Determine where users drop off and address
              those issues directly.
            </span>
          </li>
          <li>
            <FontAwesomeIcon icon={check} />
            <span>
              Enhance User Experience: Refine each stage to improve overall
              satisfaction and engagement.
            </span>
          </li>
          <li>
            <FontAwesomeIcon icon={check} />
            <span>
              Data-Driven Decision Making: Utilize specific metrics at each
              stage to inform strategic choices.
            </span>
          </li>
        </ul>
        <p>
          Over the years, this framework has been widely adopted, especially
          among startups and SaaS companies, for its effectiveness in driving
          growth and optimizing the customer journey.
        </p>
        <p>
          Incorporating the AARRR framework into your business strategy can
          provide a clear, measurable path to understanding and enhancing user
          interactions, ultimately leading to sustainable growth.
        </p>
        <p>
          OK, so I wanted you to know a little bit of backstory before we really
          dive into the good shit. All that really matters is what this
          framework can do for you. If you were a direct consumer business doing
          5 million or more in revenue, there's a lot I can do for you.
        </p>
        <p>
          Below I have listed the five pillars of this framework. Each one is
          linked to a more in-depth article That dives deeper into each pillar,
          as well as how I would assess an implement each one based on case
          studies.
        </p>
        <ul className="nice-list">
          {linkedArticles.map((item, idx) => (
            <li key={idx}>
              <FontAwesomeIcon icon={linkIcon} />
              <span>
                <Link href={`/resources/${item.href}`}>{item.linkText}</Link>
                &nbsp;{item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default AarrrOrigins;
