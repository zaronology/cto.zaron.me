import { categories, articles } from "@/data/TheClimbData";

const TheClimbCategories = ({ params }) => {
    const { category } = params; // Extract the `category` param

    const categoryData = categories.find((cat) => cat.id === category);
    const filteredPosts = articles.filter((article) => article.category === category);

    if (!categoryData) {
        return <h1>Category Not Found</h1>;
    }

    return (
        <div>
            <h1>{categoryData.name}</h1>
            <ul>
                {filteredPosts.map((article) => (
                    <li key={article.id}>
                        <h2>{article.title}</h2>
                        <p>{article.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TheClimbCategories;