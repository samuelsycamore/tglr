import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  return (
    <div className="fixed z-50 
    top-100 bottom-0 w-full 
    lg:top-60 lg:left-4 lg:w-1/6 lg:my-28
    xl:left-10
    ">
        <div className="bg-blue-600 flex justify-evenly mx-auto py-4 overflow-hidden rounded-t-lg 
        text-gray-200 text-xs
        md:text-sm
        lg:flex-col lg:rounded-lg lg:py-0
        " aria-label="quick access">

        <Link href="/">
          <a className="relative text-inverted text-center hover:text-gray-100
          lg:block lg:py-4 lg:border-b-2
          lg:hover:bg-blue-400" title="Blog - Home">
          <Image
              src="/images/home-outline.svg"
              height={20}
              width={20}
              alt="icon"
            />
            <span className="block">Home</span></a>
          </Link>

            <Link href="/shop">
            <a className="relative text-inverted text-center hover:text-gray-100
          lg:block lg:py-4 lg:border-b-2
          lg:hover:bg-blue-400" title="Shop">
            <Image
                src="/images/cart-outline.svg"
                height={20}
                width={20}
                alt="icon"
              />
              <span className="block">Shop</span></a>
            </Link>

          <Link href="/about">
            <a className="relative text-inverted text-center hover:text-gray-100
          lg:block lg:py-4
          lg:hover:bg-blue-400" title="About">
            <Image
                src="/images/sun-outline.svg"
                height={20}
                width={20}
                alt="icon"
              />
              <span className="block">About</span></a>
            </Link>

          

        </div>

      </div>
    )
  }