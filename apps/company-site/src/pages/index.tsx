import { FC } from "react";
import { GoGear } from "react-icons/go";

const Index: FC = () => {
  return (
    <div>
      <section className="flex flex-col justify-end h-[50vh]">
        <div className="text-center text-3xl font-semibold flex flex-col items-center h-1/2 justify-evenly dark:text-white">
          <h1 className="text-4xl">
            Hello, it&apos;s <strong className="text-primary-blue">Tri</strong>
          </h1>
          <h2>We are building the site as we speek...</h2>
        </div>
      </section>
      <section className="flex flex-col justify-start items-center h-[50vh]">
        <GoGear className="animate-spin-slow h-40 w-40 text-primary-blue" />
      </section>
    </div>
  );
};

export default Index;
