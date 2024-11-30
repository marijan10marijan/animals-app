import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col  justify-center h-[calc(100vh-168px)] max-w-5xl mx-auto px-6">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-500">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        className="mt-6 px-4 py-2  text-white rounded-md bg-gradient-to-tr from-blue-500 to-indigo-600 w-fit transition duration-200 hover:bg-gradient-to-tr hover:from-blue-600 hover:to-indigo-700 "
        href="/"
      >
        Go back home
      </Link>
    </div>
  );
}
