import Link from "next/link";
import { GoGear } from "react-icons/go";

export function Index() {
  return (
    <div className="text-center text-3xl font-semibold flex flex-col items-center justify-end h-[50vh] space-y-20">
      <h1>
        Hello, it&apos;s <strong className="text-primary-blue">Tri</strong>
      </h1>
      <div>We are building the site as we speek...</div>
      <div className="flex flex-col items-center justify-center">
        <GoGear className="animate-spin-slow h-40 w-40 text-primary-blue" />
      </div>
    </div>
  );
}

export default Index;
