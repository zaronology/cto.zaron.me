import clsx from "clsx";
import { useParams } from "next/navigation";
import Breadcrumbs from "../Breadcrumbs";
import SearchInput from "../SearchInput";
import sharedStyles from "../../blog/_shared-css/shared.module.css";
import layoutStyles from "./BlogLayout.module.css";

export default function LayoutTopNav() {
  const params = useParams();
  const slug = params?.slug || null;

  console.log("Slug: ", slug);

  return (
    <div className={clsx(sharedStyles?.blogContainer, "px-2 px-xl-0")}>
      <div className={clsx(slug ? sharedStyles?.blogBlock : sharedStyles.blogComponent, layoutStyles?.layoutTopNav)}>
        <SearchInput />
        <Breadcrumbs />
      </div>
    </div>
  );
}
