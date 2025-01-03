import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#74C69D] py-[50px]">
      <div className="container flex flex-col gap-5 lg:flex-row lg:justify-between items-center">
        <Image src="/icons.png" alt="icons" width={242} height={18} />
        <p className="text-xl text-white">
          © Start, 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
