import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12 ">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white to-primary">
          <Image
            alt="logo"
            src="/logo2.svg"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
            height={400}
            width={400}
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href={"/"}>
              <span className="sr-only">Home</span>
              <Image
                alt="logo"
                src="/logo2.svg"
                className="bg-white rounded-full p-1"
                height={60}
                width={60}
              />
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to AI COURSE GENERATOR
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Personalize learning by creating AI-powered courses and
              customizing learning paths to suit your goals and unique
              environment
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 ">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden mb-10">
              <a
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                href={"/"}
              >
                <span className="sr-only">Home</span>
                <Image
                  alt="logo"
                  src="/logo2.svg"
                  className="bg-white rounded-full p-1"
                  height={60}
                  width={60}
                />
              </a>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to AI COURSE GENERATOR
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Personalize learning by creating AI-powered courses and
                customizing learning paths to suit your goals and unique
                environment
              </p>
            </div>

            {children}
          </div>
        </main>
      </div>
    </section>
  );
}
