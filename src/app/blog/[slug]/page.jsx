import { client, urlFor } from "@/app/lib/sanity";
import React from "react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowBigLeftDashIcon } from "lucide-react";
import { notFound } from "next/navigation";
import { User2 } from "lucide-react";

const getBlog = async (slug) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    'img': mainImage.asset._ref,
    categories[]->{
      _id,
      title,
    },
    _createdAt,
     author->{
    name
  },
    body
  }`;

  try {
    const data = await client.fetch(query, { slug });
    return data;
  } catch (err) {
    console.error(err);
  }
};

// Define custom components for PortableText
const components = {
  types: {
    image: ({ value }) => {
      return (
        <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden rounded-md ">
          <Image
            src={urlFor(value).url()}
            alt="Blog Image"
            fill={true}
            sizes="100%"
            className=" rounded-md mb-12 object-cover"
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="marker:text-indigo-500">{children}</ul>
    ),
  },
};

const SingleBlogPage = async ({ params }) => {
  const slug = params.slug;
  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  const imageUrl = blog.img ? urlFor(blog.img).url() : null;

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(blog._createdAt));

  return (
    <div className="w-full py-10">
      <div className="max-w-5xl mx-auto px-2 mb-10">
        <Link
          href={"/blog"}
          className="text-slate-700 text-lg hover:text-slate-900 transition duration 300 mb-4  flex items-center gap-1 font-serif  active:scale-105 "
        >
          <ArrowBigLeftDashIcon />
          Back to blogs
        </Link>
        <h1 className="text-center mt-6 mb-10 text-3xl sm:text-4xl text-slate-800 font-bold">
          {blog.title}
        </h1>
        {imageUrl ? (
          <div className="relative w-full sm:w-3/4 mx-auto h-[450px] sm:h-[550px] mb-6 overflow-hidden rounded-md">
            <Image
              src={imageUrl}
              alt="Blog Image"
              fill={true}
              sizes="100%"
              className=" rounded-md object-center object-cover"
              priority
            />
          </div>
        ) : (
          <div className="w-full h-full bg-gray-600 flex absolute top-0 left-0 items-center justify-center"></div>
        )}
        <div className="prose mx-auto prose-p:text-lg prose-p:sm:text-xl prose-h3:sm:text-2xl prose-h3:sm:font-bold  prose-ul:marker:text-indigo-500 prose-p:font-serif">
          <PortableText value={blog.body} components={components} />
        </div>
        <div className="pb-6 pt-6 px-2 flex flex-col sm:flex-row gap-2 sm:items-center justify-between border-t border-gray-400 mt-8 sm:border-none">
          {blog.author?.name && (
            <p className="text-md text-slate-600 font-semibold capitalize flex items-center gap-1">
              {" "}
              <User2 />
              <span className="me-1">Written by:</span>
              {blog.author.name}
            </p>
          )}
          {!blog.author?.name && (
            <p className="text-sm text-slate-500 capitalize">
              Undefined author
            </p>
          )}
          <p className="text-gray-800 text-xl ">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;

export const revalidate = 604800;
