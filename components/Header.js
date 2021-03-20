import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed z-10 w-full bg-gray-100">
      <div className="flex py-3 px-2 items-center justify-center">
        <Link href="/">
          <a>
            <h1
              className="serif tracking-tighter
      text-4xl lg:text-6xl uppercase text-gray-900"
            >
              Good Life Revival
            </h1>
          </a>
        </Link>
      </div>
    </div>
  );
}
