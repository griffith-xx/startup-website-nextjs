import Image from "next/image";
import Button from "../components/Button";
import Header from "../components/Header";

const Partners = () => {
  return (
    <section className="mt-[22px] lg:mt-[60px]">
      <div className="container">
        <Header title="partners" />
        <h1 className="font-crimson text-[24px] lg:text-[40px] font-bold mb-4 text-center">
          Lorem Ipsum Dolor
        </h1>
        <p className="text-xl text-center">
          Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
        </p>
        <div className="my-[55px]">
          <ul className="flex flex-col justify-center items-center lg:flex-row gap-[40px] lg:gap-68px lg:justify-between">
            <Image src="/google.svg" alt="google" width={152} height={50} />
            <Image src="/microsoft.svg" alt="google" width={210} height={45} />
            <Image src="/airbnb.svg" alt="google" width={160} height={50} />
            <Image src="/facebook.svg" alt="google" width={196} height={38} />
            <Image src="/spotify.svg" alt="google" width={166} height={50} />
          </ul>
        </div>
        <div className="flex justify-center">
          <Button title="Learn More" color="bg-black text-white" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
