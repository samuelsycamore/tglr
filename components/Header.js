import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed bottom-0 z-10 w-full bg-blue-900 bg-opacity-90">
      <div className="flex py-3 px-2">
        <Link href="/">
          <a>
            <h1
              className="serif font-bold tracking-tighter
      text-4xl lg:text-8xl text-blue-100"
            >
              Good Life Revival
            </h1>
          </a>
        </Link>
      </div>
    </div>
  );
}
