import React from "react";
import { urlFor } from "../lib/sanity";
import Image from "next/image";
import BlogDate from "./blog-date";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  const imageUrl = blog.img ? urlFor(blog.img).url() : null;

  return (
    <Link href={`/blog/${blog.slug.current}`}>
      <div className=" p-4 card w-full text-start bg-slate-50 hover:bg-slate-100  flex h-auto">
        <div className="flex-1 flex flex-col">
          <h2 className="text-2xl font-bold text-slate-700 line-clamp-2 text-start capitalize">
            {blog.title}
          </h2>

          <div className="flex flex-col  justify-start items-start mt-auto">
            <p className="text-sm font-semibold text-slate-800 lowercase">
              Author
            </p>
            {blog.author?.name && (
              <p className="text-sm text-slate-500 capitalize">
                {" "}
                {blog.author.name}
              </p>
            )}
            {!blog?.author?.name && (
              <p className="text-sm text-slate-500 capitalize">
                Undefined author
              </p>
            )}
          </div>
          <BlogDate createdAt={blog._createdAt} />
        </div>
        <div className="flex-1  w-full h-40 relative overflow-hidden rounded-md">
          {imageUrl ? (
            <Image
              className="w-full absolute top-0 left-0 object-cover aspect-video rounded-md"
              src={imageUrl}
              alt={blog.title}
              sizes="100%"
              fill={true}
              priority={true}
            />
          ) : (
            <div className="w-full h-full bg-gray-600 flex absolute top-0 left-0 items-center justify-center"></div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
