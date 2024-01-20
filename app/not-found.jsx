import Link from "next/link";

function NotFound() {
  return (
    <div className="main-container flex flex-col items-center justify-center h-screen">
      <Link href="/">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
          Back to Home
        </button>
      </Link>
      <h2 className="text-4xl font-bold mt-8 text-gray-800">Page not found</h2>
      <p className="text-gray-600">Could not find requested resource</p>
    </div>
  );
}

export default NotFound;
