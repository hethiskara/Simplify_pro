import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";
const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      {/* info sec */}
      <Info />
      {/* Images sec */}
      <ImagesSection />
    </section>
  );
};
function Info() {
  return (
    <div
      className=" relative xl:w-2/5 flex flex-col justify-center
  items-start w-full max-xl:padding-x pt-28">
      <InfoText />
      <Button label="Shop Now" iconURL={arrowRight} />
      <StatisticsList />
    </div>
  );
}
function InfoText() {
  return (
    <>
      <p className="text-xl text-coral-red font-montserrat">
        Our Summer Collection
      </p>
      <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
        <span className="xl:bg-white xl:whitespace-nowrap relative pr-10 z-10">
          the New Arrival
        </span>
        <br />
        <span className="text-coral-red mt-3 inline-block ">Nike</span> Shoes
      </h1>
      <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
        Discover stylish Nike arrivals,quality comfort,and innovation for active
        life.
      </p>
    </>
  );
}
function StatisticsList() {
  return (
    <div className="flex flex-wrap justify-start w-full mt-20 gap-16">
      {statistics.map((stat) => (
        <div key={stat.label}>
          <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
          <p className=" leading-7 font-montserrat text-slate-gray">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function ImagesSection() {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <div
      className=" relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40
bg-primary bg-hero bg-cover bg-center">
      <img
        src={bigShoeImg}
        alt="shoe collection"
        width={610}
        height={500}
        className=" object-contain relative z-10 "
      />
      <ImagesList bigShoeImg={bigShoeImg} setBigShoeImg={setBigShoeImg} />
    </div>
  );
}
function ImagesList({ bigShoeImg, setBigShoeImg }) {
  return (
    <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
      {shoes.map((shoe) => (
        <div key={shoe}>
          <ShoeCard
            imgURL={shoe}
            changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
            bigShoeImg={bigShoeImg}
          />
        </div>
      ))}
    </div>
  );
}
export default Hero;
