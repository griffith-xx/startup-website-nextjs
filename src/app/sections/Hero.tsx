import Image from "next/image";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section>
      <div className="container flex flex-col lg:flex-row-reverse mt-10 lg:mt-20">
        <Image
          className="mb-[30px] mx-auto lg:mr-0 h-[196px] w-full max-w-[335px] lg:max-w-[644.28px] lg:h-[378.13px]"
          src="/hero.svg"
          alt="hero"
          height={0}
          width={0}
        />
        <div className="text-white max-w-[416px]">
          <h1 className="font-bold mb-[15px]">WELCOME</h1>
          <p className="font-bold text-[28px] lg:text-[40px] mb-[15px] font-crimson">
            Lorem ipsum dolor sit amet consectetur
          </p>
          <p className="text-[15px] mb-[25px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
            voluptate culpa nesciunt delectus iste?
          </p>

          <Button title="Explore" color="bg-white text-black" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
