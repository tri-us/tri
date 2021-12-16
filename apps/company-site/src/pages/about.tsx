import { FC } from "react";

const About: FC = () => {
  return (
    <div className="text-center dark:text-white text-3xl flex flex-col justify-center items-center h-screen space-y-10">
      <h1 className="text-4xl font-medium">Welcome to About!</h1>
      <p>
        Founder: <strong className="text-primary-blue">Petar Vujović</strong>
      </p>
    </div>
  );
};

export default About;
