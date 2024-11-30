"use client";

import { useState } from "react";
import BlogCard from "./blog-card";

const BlogFilter = ({ allBlogs, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filtriraj blogove na temelju odabrane kategorije
  const filteredBlogs =
    selectedCategory === "all"
      ? allBlogs
      : allBlogs.filter((blog) =>
          blog.categories.some(
            (category) => category.title === selectedCategory
          )
        );

  return (
    <div>
      <p className="text-slate-600 text-sm font-bold mb-2">Select category</p>
      {/* Gumbovi za odabir kategorije */}
      <div className="grid grid-flow-col auto-cols-[22%] sm:auto-cols-[14%]  gap-2 overflow-x-scroll overscroll-x-contain snap-x snap-mandatory hide-scrollbar mb-6">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`relative w-full p-2 rounded border-[1px] border-slate-300 overflow-hidden group ${
            selectedCategory === "all"
              ? "bg-gradient-to-r from-blue-400 to-indigo-600 text-white"
              : "bg-white"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
          <span
            className={`relative z-10 font-medium text-lg ${
              selectedCategory === "all" ? "text-white" : "text-slate-950"
            } group-hover:text-white transition-colors duration-300`}
          >
            All
          </span>
        </button>

        {categories.map((category) => (
          <button
            key={category._id}
            onClick={() => setSelectedCategory(category.title)}
            className={`relative w-full p-2 rounded border-[1px] border-slate-300 overflow-hidden group ${
              selectedCategory === category.title
                ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                : "bg-white"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
            <span
              className={`relative z-10 font-medium text-lg ${
                selectedCategory === category.title
                  ? "text-white"
                  : "text-slate-950"
              } group-hover:text-white transition-colors duration-300`}
            >
              {category.title}
            </span>
          </button>
        ))}
      </div>

      {/* Prikaz filtriranih blogova */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => <BlogCard blog={blog} key={blog._id} />)
        ) : (
          <p>No blogs found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default BlogFilter;
