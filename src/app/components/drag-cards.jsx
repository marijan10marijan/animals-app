"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

const MotionImage = motion.create(Image);

const galeryImages = [
  { img: "/horse.jpg" },
  { img: "/horseTwo.jpg" },
  { img: "/bird.jpg" },
  { img: "/birdTwo.jpg" },
  { img: "/birdThree.jpg" },
  { img: "/cat.jpg" },
  { img: "/catTwo.webp" },
  { img: "/lion.jpg" },
  { img: "/lionTwo.webp" },
  { img: "/dog.avif" },
  { img: "/dogTwo.jpg" },
];

export const DragCards = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-slate-700">
      <h2 className="relative z-0 text-[20vw] font-black text-white overline md:text-[200px]">
        animals<span className="text-indigo-500">.</span>
      </h2>
      <Cards />
    </section>
  );
};

const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      {galeryImages.map((image, index) => (
        <Card
          key={index}
          containerRef={containerRef}
          src={image.img}
          alt={`Image ${index + 1}`}
          className="w-36 md:w-56 xl:w-[400px]"
        />
      ))}
    </div>
  );
};

const Card = ({ containerRef, src, alt, className }) => {
  const [zIndex, setZIndex] = useState(0);
  const [position, setPosition] = useState({
    top: "0%",
    left: "0%",
    rotate: "0deg",
  });

  // Generiraj random pozicije na klijentu
  useEffect(() => {
    const randomTop = `${Math.random() * 80}%`;
    const randomLeft = `${Math.random() * 80}%`;
    const randomRotate = `${Math.random() * 60 - 30}deg`;

    setPosition({ top: randomTop, left: randomLeft, rotate: randomRotate });
  }, []);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");
    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <MotionImage
      onMouseDown={updateZIndex}
      style={{
        top: position.top,
        left: position.left,
        rotate: position.rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4 cursor-grab",
        className
      )}
      src={src}
      alt={alt}
      width={400}
      height={400}
      priority={true}
      draggable={false} // Ukloni standardno HTML draggable ponašanje
      drag
      dragConstraints={containerRef}
      dragElastic={0.95}
    />
  );
};
