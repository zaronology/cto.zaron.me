import { redirect } from 'next/navigation';
import { categories } from "@/data/TheClimbData";
export async function generateStaticParams() {
  // Optional: Generate static paths for known categories (SEO-friendly)
  return categories.map((category) => ({ category: category.id }));
}

const CategoryPage = () => {
  redirect('/the-climb'); 
};

export default CategoryPage;