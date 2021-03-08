import Link from 'next/link'

function NavItem({ location, label }) {
  return (
    <li className="ml-5">
      <Link
        href={location}
        className="hover:text-gray-50 whitespace-nowrap"
      >
        {label}
      </Link>
    </li>
  );
}

function SimplerNav() {

  return (
    <div className="sticky top-0 z-10 print:hidden">
      <nav className="">
        {/* wide nav - row */}
        <div className="flex justify-evenly md:items-center">

            <ul className="flex justify-between flex-wrap">
              <NavItem location="/" label="Blog" />
              <NavItem location="/shop" label="Shop" />
              <NavItem location="/about" label="About" />
            </ul>
          </div>

      </nav>
    </div>
  );
}

export default SimplerNav;
