import BlogFilter from "../components/blog-filter";
import { fetchBlogs, fetchCategories } from "../lib/sanity";

export default async function BlogPage() {
  const allBlogs = await fetchBlogs();
  const categories = await fetchCategories();

  return (
    <div className="min-h-[calc(100vh-148px)] sm:min-h-[calc(100vh-168px)] w-full  ">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-indigo-600">
          Blog
        </h1>
        <BlogFilter allBlogs={allBlogs} categories={categories} />
      </div>
    </div>
  );
}

export const revalidate = 604800;
