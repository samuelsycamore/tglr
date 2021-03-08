import Link from "next/link";

function NavItem({ location, label }) {
  return (
    <li className="mx-3 my-1">
      <Link href={location} className="hover:text-gray-500">
        {label}
      </Link>
    </li>
  );
}
function Nav() {
  return (
    <div className="print:hidden bg-gray-500 text-gray-50 text-xl font-light py-1 absolute top-90 left-0 md:top-0 md:left-0 md:h-full w-32">
      <nav>
        {/* wide nav - row */}
        <div>
          <ul className="">
            <NavItem location="/" label="Blog" />
            <NavItem location="/shop" label="Shop" />
            <NavItem location="/about" label="About" />
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
