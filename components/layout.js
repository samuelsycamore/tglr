import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/navbar";

const name = "Good Life Revival";
export const siteTitle = "Good Life Revival";

export default function Layout({ children, home }) {
  return (
    <div>
      <NavBar />

        <header>
          {home ? (
            <div className="flex flex-col justify-center items-center my-4">
              <Image
                priority
                src="/images/berries.jpg"
                className="rounded-full"
                height={150}
                width={150}
                alt={name}
              />
              <h1 className="text-5xl tracking-tighter font-black my-4">
                {name}
              </h1>
            </div>
          ) : (
            <div className="flex justify-left items-center">
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/berries.jpg"
                    className="rounded-full"
                    height={70}
                    width={70}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className="text-2xl tracking-tighter font-black my-4 reset-py">
                <Link href="/">
                  <a>{name}</a>
                </Link>
              </h2>
            </div>
          )}
        </header>
        <div
        className="container max-w-2xl  
    flex flex-col justify-center items-center 
    p-4 mx-auto 
    text-xl antialiased"
      >
        <main>{children}</main>
        {!home && (
          <div className="mb-20">
            <Link href="/">
              <a className="text-blue-500 hover:underline">← Back to home</a>
            </Link>
          </div>
        )}
      </div>
</div>
  );
}
