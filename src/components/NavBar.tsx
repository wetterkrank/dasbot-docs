import Link from 'next/link'
import DasbotLogo from "./DasbotLogo";

const NavBar = () => (
  <nav className="bg-white border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3">
      <Link
        href="/"
        className="flex items-center space-x-3"
      >
        <DasbotLogo height={"70px"} />
      </Link>
    </div>
  </nav>
);

export default NavBar;
