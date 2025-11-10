import shape1 from "@/assets/images/shapes/feature-1-shape-1.png";
import shape2 from "@/assets/images/shapes/feature-1-shape-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine as iconOne } from "@awesome.me/kit-d469f7d4aa/icons/duotone/regular";
import { faSliders as iconTwo } from "@awesome.me/kit-d469f7d4aa/icons/duotone/regular";
import { faCogs as iconThree } from "@awesome.me/kit-d469f7d4aa/icons/duotone/regular";
import { faArrowTrendUp as iconFour } from "@awesome.me/kit-d469f7d4aa/icons/duotone/regular";

const ourProcessData = {
  tagLine: "Our Process",
  title: "From Chaos to Clarity That Scales",
  items: [
    {
      id: 1,
      daIcon: <FontAwesomeIcon icon={iconOne} />,
      title: "Diagnose What’s Broken",
      text: "We audit your systems, workflows, and tools to uncover bottlenecks, misalignments, and operational drag. You’ll know exactly what’s broken and what’s holding your team back.",
      shape: shape1,
    },
    {
      id: 2,
      daIcon: <FontAwesomeIcon icon={iconTwo} />,
      title: "Fix & Stabilize Your Systems",
      text: "We repair what’s failing, eliminate redundancy, and rebuild the core infrastructure so your business runs clean. Whether we refine what exists or overhaul from the ground up, your foundation gets locked in.",
      shape: shape2,
    },
    {
      id: 3,
      daIcon: <FontAwesomeIcon icon={iconThree} />,
      title: "Align Systems with Strategy",
      text: "We connect the dots across platforms, teams, and tools so everything works together, and points toward growth. No more silos. No more rework. Just systems that support the direction you’re leading.",
      shape: shape1,
    },
    {
      id: 4,
      daIcon: <FontAwesomeIcon icon={iconFour} />,
      title: "Continuous Optimization",
      text: "As your business evolves, we keep your systems sharp and your performance stable. You’ll always have a tech foundation you can trust, so growth doesn’t mean chaos.",
    },
  ],
};
export default ourProcessData;
