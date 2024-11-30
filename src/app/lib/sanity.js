import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2022-03-07",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
// Dohvat svih blogova
export const fetchBlogs = async () => {
  const query = `*[_type == "post"]{
  _id,
  title,
  slug,
   'img': mainImage.asset._ref,
   author->{
      name, 
    },
  categories[]->{
    _id,
    title,
  },
     _createdAt
}`;
  const blogs = await client.fetch(query);
  return blogs;
};

// Dohvat svih kategorija
export const fetchCategories = async () => {
  const query = `*[_type == "category"]{
    _id,
    title
  }`;
  const categories = await client.fetch(query);
  return categories;
};
