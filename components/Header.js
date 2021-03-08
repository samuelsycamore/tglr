import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-center py-10 px-2">
      <Link href="/">
        <a>
          <h1
            className="serif font-bold tracking-tighter
      text-5xl lg:text-8xl"
          >
            Good Life Revival
          </h1>
        </a>
      </Link>
    </div>
  );
}
