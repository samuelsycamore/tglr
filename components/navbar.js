import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  return (
    <div className="fixed z-50 
    top-100 bottom-0 w-full 
    lg:top-60 lg:left-4 lg:w-1/6
    xl:left-10
    ">
        <div className="bg-blue-500 bg-opacity-90 flex justify-evenly mx-auto py-3 overflow-hidden rounded-t-lg 
        text-gray-50 text-xs
        md:text-sm
        lg:flex-col lg:rounded-lg lg:py-0
        lg:bg-gradient-to-b lg:from-blue-600 lg:to-blue-400 
        " aria-label="quick access">

        <Link href="/">
          <a className="relative text-inverted text-center hover:text-gray-900
          lg:block lg:py-4 lg:border-b-2
          lg:hover:bg-blue-400" title="Blog - Home">
          <Image
              src="/images/home-outline.svg"
              height={20}
              width={20}
              alt="icon"
            />
            <span className="block">Blog</span></a>
          </Link>

          <Link href="/portfolio">
            <a className="relative text-inverted text-center hover:text-gray-900
          lg:block lg:py-4 lg:border-b-2
          lg:hover:bg-blue-400" title="Portfolio">
            <Image
                src="/images/folder-outline.svg"
                height={20}
                width={20}
                alt="icon"
              />
              <span className="block">Portfolio</span></a>
            </Link>

            <Link href="/about">
            <a className="relative text-inverted text-center hover:text-gray-900
          lg:block lg:py-4 lg:border-b-2
          lg:hover:bg-blue-400" title="About">
            <Image
                src="/images/sun-outline.svg"
                height={20}
                width={20}
                alt="icon"
              />
              <span className="block">About</span></a>
            </Link>

          <Link href="/contact">
            <a className="relative text-inverted text-center hover:text-gray-900
          lg:block lg:py-4
          lg:hover:bg-blue-400" title="Contact">
            <Image
                src="/images/mail-outline.svg"
                height={20}
                width={20}
                alt="icon"
              />
              <span className="block">Contact</span></a>
            </Link>

          

        </div>

      </div>
    )
  }