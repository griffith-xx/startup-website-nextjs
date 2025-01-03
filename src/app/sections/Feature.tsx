import Image from "next/image";
import Button from "../components/Button";

const Feature = () => {
  return (
    <section className="mt-[60px] lg:mt-[75px]">
      <div className="container flex flex-col gap-[60px]">
        <div className="flex flex-col lg:flex-row  lg:items-center justify-between ">
          <Image
            src="/feature1.svg"
            alt="feature1"
            className="mx-auto lg:mx-0 w-[335px] h-[260px] lg:w-[600px] lg:h-[431px] mb-[30px] lg:mb-0"
            height={0}
            width={0}
          />
          <div className="max-w-[462px] flex flex-col gap-5">
            <h2 className="font-crimson font-bold text-[24px] lg:text-[40px]">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p className="text-black/50 text-[15px]">
              Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
              Suscipit nemo hic quos, ab,
              <br /> dolor aperiam nobis cum est eos error ipsum, voluptate
              culpa nesciunt delectus iste?
            </p>

            <Button title="Learn More" color="bg-black text-white" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse  lg:items-center justify-between ">
          <Image
            src="/feature2.svg"
            alt="feature2"
            className="mx-auto lg:mx-0 w-[335px] h-[315px] lg:w-[600px] lg:h-[565px] mb-[30px] lg:mb-0"
            height={0}
            width={0}
          />
          <div className="max-w-[462px] flex flex-col gap-5">
            <h2 className="font-crimson font-bold text-[24px] lg:text-[40px]">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p className="text-black/50 text-[15px]">
              Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
              Suscipit nemo hic quos, ab,
              <br /> dolor aperiam nobis cum est eos error ipsum, voluptate
              culpa nesciunt delectus iste?
            </p>

            <Button title="Learn More" color="bg-black text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
