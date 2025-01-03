import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="text-white">
      <div className="container flex justify-between items-center">
        <Link className="flex items-center gap-[18px]" href="/">
          <Image src="/logo.svg" alt="logo" width={70} height={48} />
          <span className="font-work-sans font-medium text-[40px] ">Start</span>
        </Link>
        <ul className="hidden lg:flex gap-[30px]">
          <Link className="text-[20px]" href="/">
            Home
          </Link>
          <Link className="text-[20px]" href="/">
            Portfolio
          </Link>
          <Link className="text-[20px]" href="/">
            Services
          </Link>
          <Link className="text-[20px]" href="/">
            Contact
          </Link>
        </ul>
        <button className="lg:hidden" type="button">
          <Image src="/menu.png" alt="menu" width={24} height={19} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
