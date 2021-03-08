import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "./Header";
import SimplerNav from "./SimplerNav";
import Footer from "./Footer";

export const siteTitle = "Good Life Revival";

export default function Layout({ children, home, pages }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta
          name="description"
          content="Learn how to better align your lifestyle with your local landscape."
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="body-font antialiased text-lg text-black bg-fixed bg-gradient-to-br from-blue-100 to-blue-900">
        <Header />
        <SimplerNav />

        <main className="p-2">{children}</main>

        {!home && (
          <div className="p-5">
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
}
