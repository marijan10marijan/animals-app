"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const TextParallaxContentExample = () => {
  return (
    <div className=" relative">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Who we are?"
        heading="We are a team of passionate individuals dedicated to studying and exploring animals, their behaviors, and the way they live. Our love for these creatures drives us to understand their habits, environments, and unique lifestyles, with the goal of fostering a deeper connection between humans and the animal world."
      >
        <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Our Mission"
        heading="Our mission is to educate others about animals, where they come from, what they eat, and their unique living habits. We aim to share knowledge that fosters a better understanding of the animal kingdom and the important role each species plays in our world."
      >
        <ExampleContentTwo />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
      className=" relative"
    >
      <div className="relative h-[85vh] ">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(85vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        position: "sticky",
        scale,
      }}
      ref={targetRef}
      className="  z-0 overflow-hidden rounded-3xl max-w-6xl mx-auto"
    >
      <motion.div
        className="absolute inset-0 bg-slate-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-[80vh] w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-4 text-center text-5xl md:mb-6 md:text-6xl font-bold tracking-tighter">
        {subheading}
      </p>
      <p className="text-center text-lg sm:text-xl  px-6 sm:w-[520px] mx-auto font-semibold">
        {heading}
      </p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 md:grid-cols-12">
    <h2 className="col-span-1  font-extrabold tracking-tighter md:col-span-4 text-indigo-600 text-4xl sm:text-6xl font-mono">
      Story about Us
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl xl:text-3xl">
        We started our journey five years ago as two friends with a shared
        passion for wildlife. It all began after an unforgettable trip to the
        Sahara, where we had a close encounter with a wild animal that changed
        our perspective.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl xl:text-3xl">
        Inspired by that experience, we decided to dedicate our lives to
        learning more about animals and their natural habitats. Since then, our
        passion has only grown, and we&apos;ve turned it into a mission to
        educate others about the beauty of the animal kingdom.
      </p>
      <Link
        href="/#gallery"
        className=" mt-6 block font-bold  bg-gradient-to-r  from-blue-400 rounded-md to-indigo-500 px-9 py-4 text-xl text-white transition-colors hover:bg-indigo-600 w-fit"
      >
        Photo gallery <ArrowUpRight className="inline" />
      </Link>
    </div>
  </div>
);

const ExampleContentTwo = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 md:grid-cols-12">
    <h2 className="col-span-1  font-extrabold tracking-tighter md:col-span-4 text-indigo-600 text-4xl sm:text-6xl font-mono">
      What we learn
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl xl:text-3xl">
        Over the past five years, we&apos;ve learned a great deal about the
        intricate behaviors and survival instincts of animals. We discovered how
        they adapt to different environments, form social bonds, and communicate
        in ways that are both complex and fascinating.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl xl:text-3xl">
        Through our experiences, we&apos;ve gained a deeper appreciation for the
        role animals play in maintaining the balance of nature. We&apos;ve come
        to understand their unique diets, migratory patterns, and how they
        respond to the ever-changing world around them.
      </p>
      <Link
        href={"/blog"}
        className=" mt-6 block font-bold  bg-gradient-to-r  from-blue-400 rounded-md to-indigo-500 px-9 py-4 text-xl text-white transition-colors hover:bg-indigo-600 w-fit"
      >
        Read blog <ArrowUpRight className="inline" />
      </Link>
    </div>
  </div>
);
