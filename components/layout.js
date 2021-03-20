import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/navbar";

const name = "Good Life Revival";
const tagLine = "Align your lifestyle with your local landscape";
export const siteTitle = "Good Life Revival";

export default function Layout({ children, home }) {
  return (
    <div className="bg-gray-300 text-gray-800">
      <NavBar />

        <header className="max-w-2xl mx-auto">
          {home ? (
            <div className="flex flex-col justify-center items-center py-4">
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
              <h3 className="text-gray-700 italic">{tagLine}</h3>
            </div>
          ) : (
            <div className="lg:fixed z-50 w-full sm:justify-around p-5
            lg:top-5 lg:left-4 lg:w-1/6
            xl:left-10 lg:flex lg:flex-col items-center lg:justify-center text-center">
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/berries.jpg"
                    className="rounded-full"
                    height={90}
                    width={90}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className="text-2xl tracking-tighter font-black my-4 reset-py">
                <Link href="/">
                  <a>{name}</a>
                </Link>
              </h2>
              <h3 className="text-gray-500 italic">{tagLine}</h3>
            </div>
          )}
        </header>
        <div
        className="container max-w-2xl  
    flex flex-col justify-center items-center 
    p-4 mx-auto 
    text-xl antialiased"
      >
        <main className="py-4 mb-20 px-5 my-5 rounded-xl shadow-lg border-b border-gray-300 bg-gray-100">
          {children}</main>
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
