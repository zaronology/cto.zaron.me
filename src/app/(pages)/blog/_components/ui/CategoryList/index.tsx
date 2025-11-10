import { Category } from "@/lib/Models/Entities/Category";
import sharedStyles from "../../blog/_shared-css/shared.module.css";
import styles from "./CategoryList.module.css";
import clsx from "clsx";
import Link from "next/link";

export default function CategoryList({ categories }: { categories: Category[] }) {
  return (
    <div className={clsx(sharedStyles?.blogContainer)}>
      <div className={clsx(sharedStyles?.blogComponent)}>
        <h1 className="text-dark mb-4">Topics</h1>
        <div className={clsx(styles?.categoriesContainer, "p-4")}>
          {categories.map((category) => (
            <div key={category.id} className={clsx(styles?.categoryWrapper, "m-2")}>
              <Link href="">
                <h3 className={clsx(styles?.categoryHeader, "text-dark")}>{category.name}</h3>
              </Link>

              <ul className={clsx(styles?.topicList, "list-unstyled ps-2")}>
                {category?.topics?.map((topic) => (
                  <li key={topic.id}>
                    <Link href={`/blog/topics/${topic.slug}`} className="text-dark">
                      {topic.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
