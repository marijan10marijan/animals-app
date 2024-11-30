import Image from "next/image";
import Link from "next/link";
import { DragCards } from "./components/drag-cards";

export default function Home() {
  return (
    <>
      <div className="min-h-[calc(100vh-148px)] sm:min-h-[calc(100vh-168px)] w-full flex flex-col items-center justify-center py-32  overflow-hidden">
        <div className="relative px-6 mb-8">
          <h1 className="bg-gradient-to-r text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter px-1 py-2 from-blue-400 to-indigo-500 text-white w-fit text-center">
            Creatures of{" "}
            <span className="bg-white text-indigo-800 px-1  py-0">the</span>{" "}
            Earth
          </h1>
          <div className="absolute w-[50px] h-20 overflow-visible right-2 -bottom-1 rounded-md sm:-right-8 sm:bottom-1/2 translate-y-1/2 rotate-12">
            <Image
              className="object-contain absolute top-0 left-0 w-full h-full"
              src={"/tree.jpg"}
              fill={true}
              sizes="100%"
              alt="tree image for decoration"
              priority={true}
            />
          </div>
          <div className="absolute left-4 sm:left-2  -top-16 w-[120px] h-[90px] overflow-visible">
            <Image
              fill={true}
              className="object-cover absolute top-0 left-0 w-full h-full"
              sizes="100%"
              src={"/tiger.png"}
              alt="tree image for decoration"
              priority={true}
            />
          </div>
        </div>
        <p className="text-slate-600 leading-6 sm:text-lg font-semibold max-w-[820px] w-full mx-auto px-2 text-center mb-10">
          Animals have an incredible way of connecting us to the world around
          us. Let&apos;s celebrate them and work together to protect the
          creatures who enrich our lives.
        </p>
        <Link
          href={"/blog"}
          className=" bg-gradient-to-r py-4 px-6 from-blue-400 rounded-md to-indigo-500 text-white font-bold"
        >
          Explore our blog
        </Link>
      </div>
      <div id="gallery">
        <DragCards />
      </div>
    </>
  );
}
