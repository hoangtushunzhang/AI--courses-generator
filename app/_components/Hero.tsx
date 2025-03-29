import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="bg-gray-50 mx-auto max-w-screen-xl px-10 py-20 lg:flex lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl text-myPrimary leading-[60px]">
            {" "}
            AI Courses Generator
            <br />
            <strong className="text-black mt-3 font-extrabold sm:block leading-[60px]">
              Customized learning paths powered by AI
            </strong>
          </h1>
          <p className="mt-4 sm:text-xl/relaxed">
            Personalize learning by creating custom courses tailored to
            individual needs. Our AI-driven platform empowers educators and
            learners to design unique educational experiences, enhancing
            engagement and knowledge retention.
          </p>
          <div className="mt-8 flex justify-center ">
            <Link
              href={"/dashboard"}
              className="block w-full  px-12 py-3 text-sm font-medium bg-gradient-to-r
               from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500
               text-white focus:outline-none focus:ring active:bg-myPrimary sm:w-auto rounded-sm
            "
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
