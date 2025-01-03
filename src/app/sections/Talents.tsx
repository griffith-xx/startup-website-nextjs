import Image from "next/image";
import Header from "../components/Header";
import Button from "../components/Button";

const Talents = () => {
  return (
    <section className="mt-10 lg:mt-[100px] mb-[40px] lg:mb-[54px]">
      <div className="container">
        <Header title="team" />
        <h1 className="font-crimson text-[24px] lg:text-[40px] font-bold mb-4 text-center">
          Our Talents
        </h1>
        <p className="text-xl text-center mb-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[35px] lg:gap-[47px]">
          <div className="shadow-2xl px-10 py-5 rounded-[5px] bg-white w-full flex flex-col justify-center border border-gray-200">
            <Image
              src="/peg.svg"
              alt="peg"
              className="size-[175px] mb-5 mx-auto"
              width={0}
              height={0}
            />
            <h4 className="font-crimson text-2xl font-bold mb-4">Peg Legge</h4>
            <p className="text-black/75 text-start">CEO</p>
          </div>
          <div className="shadow-2xl px-10 py-5 rounded-[5px] bg-white  w-full flex flex-col justify-center border border-gray-200">
            <Image
              src="/richard.svg"
              alt="richard"
              className="size-[175px] mb-5 mx-auto"
              width={0}
              height={0}
            />
            <h4 className="font-crimson text-2xl font-bold mb-4">
              Richard Guerra
            </h4>
            <p className="text-black/75">CTO</p>
          </div>
          <div className="shadow-2xl px-10 py-5 rounded-[5px] bg-white  w-full flex flex-col justify-center border border-gray-200">
            <Image
              src="/alexandra.svg"
              alt="alexandra"
              className="size-[175px] mb-5 mx-auto"
              width={0}
              height={0}
            />
            <h4 className="font-crimson text-2xl font-bold mb-4">
              Alexandra Stolz
            </h4>
            <p className="text-black/75">DESIGNER</p>
          </div>
          <div className="shadow-2xl px-10 py-5 rounded-[5px] bg-white  w-full flex flex-col justify-center border border-gray-200">
            <Image
              src="/janet.svg"
              alt="janet"
              className="size-[175px] mb-5 mx-auto"
              width={0}
              height={0}
            />
            <h4 className="font-crimson text-2xl font-bold mb-4">Janet Bray</h4>
            <p className="text-black/75">DEVELOPER</p>
          </div>
        </div>

        <div className="mt-[45px] flex justify-center">
          <Button title="View Team" color="bg-black text-white" />
        </div>
      </div>
    </section>
  );
};

export default Talents;
