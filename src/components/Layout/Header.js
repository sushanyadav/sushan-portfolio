import Link from "next/link";

import Button from "components/Button";
import { DownloadIcon } from "components/Icons";

const NavItems = () => {
  return (
    <nav>
      <ul className="flex items-center space-x-xl h-full font-medium text-gray-900 text-xl leading-8">
        <li className="font-bold">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <section className="bg-gray-50 h-24">
      <header className="container h-full flex justify-between">
        <NavItems />
        <div className="flex  flex-col items-center justify-center">
          <Button Icon={DownloadIcon} text="Resume" />
        </div>
      </header>
    </section>
  );
};

export default Header;
