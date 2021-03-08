import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div
      className="fixed z-50 
    bottom-0 w-full 
    lg:top-0 lg:left-0 lg:w-1/12
    "
    >
      <div
        className="bg-blue-500 bg-opacity-90 flex justify-evenly mx-auto py-3 overflow-hidden rounded-t-lg
        text-gray-50 text-xs
        md:text-sm
        lg:flex-col lg:rounded-none lg:py-0 lg:h-full
        lg:bg-gradient-to-b lg:from-blue-900 lg:to-blue-600 
        lg:justify-start
        "
        aria-label="quick access"
      >
        <Link href="/">
          <a
            className="relative text-inverted text-center hover:text-gray-900
          lg:block lg:py-4
          lg:hover:bg-blue-400"
            title="Blog - Home"
          >
            <span className="block">Blog</span>
          </a>
        </Link>


        <Link href="/shop">
          <a
            className="relative text-inverted text-center hover:text-gray-900
          lg:block lg:py-4
          lg:hover:bg-blue-400"
            title="Contact"
          >
            <span className="block">Shop</span>
          </a>
        </Link>

        <Link href="/about">
          <a
            className="relative text-inverted text-center hover:text-gray-900
          lg:block lg:py-4
          lg:hover:bg-blue-400"
            title="About"
          >
            <span className="block">About</span>
          </a>
        </Link>
      </div>
    </div>
  );
}
