import { HeroSVG } from "./HeroSVG";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <main className="flex flex-col lg:flex-row-reverse justify-center align-center  text-white text-center" >
      {/* <img src={heroImg} alt='nust-hostel-img' className='opacity-[0.05] absolute top-[50vh] left-[50vw] translate-x-[-50%] translate-y-[-50%] select-none' /> */}
      <div className="w-[70%] pl-40 animate-pulse lg:w-[30%] lg:p-0">
        <HeroSVG />
        {/* <img src="https://i2-prod.mirror.co.uk/incoming/article171956.ece/ALTERNATES/n615/ms-dhoni-324192112.jpg" alt="HELLO" /> */}
      </div>
      <div className="md:pt-[8%]">
        <h1 className="font-bold text-5xl">
           <span className="text-yellow-400">Urban Nest Management System</span> 
        </h1>
        <p className="py-10 text-2xl">
        Your Ultimate College Retreat
        </p>
        <div className="py-20">
          <Link
            to="/auth/login"
            className="bg-green-500 py-3 px-40 hover:bg-green-700 transition rounded text-2xl"
          >
            Login
          </Link>
          <p className="mt-6 mb-3">OR</p>
          <Link
            to="/auth/request"
            className="text-xl hover:underline hover:text-green-700"
          >
            Request Registration
          </Link>
        </div>
      </div>
    </main>
  );
}
export { HeroSection };
