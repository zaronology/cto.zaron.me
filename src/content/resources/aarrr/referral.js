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

const AarrrAcquisition = () => {
  const subject = "aarrr";
  const subjectText = "AARRR &mdash; The Pirates Framework";
  const article = "Acquisition";
  const linkedArticles = [
    {
      href: `${subject}/origins`,
      linkText: "Origins:",
      text: "Learn more about the history of the AARRR Framework",
    },
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
      href: `${subject}/revenue`,
      linkText: "Revenue:",
      text: "Average revenue per user (ARPU), lifetime value (LTV), average order value (AOV), conversion rate",
    },
  ];

  return (
    <article className="the-climb-article">
      <div className="article-top">
        <h1>AARRR &mdash; The Pirate Metrics Framework</h1>

        <div className="article-image">
          <Image
            src={articleImg}
            alt="AARRR Pirate Metrics framework Pirate holding map"
          />
        </div>
      </div>
      <div className="article-body">
        <div className="related-articles">
          <h4>Related Articles:</h4>
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
      </div>
    </article>
  );
};

export default AarrrAcquisition;
