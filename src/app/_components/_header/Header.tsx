import Image from "next/image";

import HeaderButton from "./Header_Button";

export default function Header() {
  return (
    <header className="flex w-full flex-col items-center justify-center pt-10">
      {/* <MenuBar /> */}
      <div className="h-auto">
        <Image
          className="relative"
          src="/jcdev-logo-2024.svg"
          alt="JCDev Logo"
          width={350}
          height={350}
          style={{ height: "auto", width: "auto" }}
          priority
        />
      </div>
      <div className="md:w-3/4">
        <h1 className="mt-20 flex flex-col text-center text-4xl font-bold">
          <span>CREATION DE SITES WEB </span>
          <span className="text-4xl">MODERNES ET PERFORMANTS</span>
        </h1>
        <p className="mb-4 text-center text-2xl">pour entrepreneurs et PME</p>
        <p className="text-center text-text-muted">
          Site one-page / site vitrine / site e-commerce / landing page
        </p>
      </div>
      <div className="my-20 flex w-full justify-center">
        <HeaderButton />
      </div>
      <div
        className="pointer-events-none absolute -top-40 z-[-10] transform-gpu blur-2xl lg:left-0 lg:translate-y-0 lg:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-blue-rgb to-dark-blue-rgb opacity-20"
          style={{
            clipPath:
              "polygon(45.8% 10.8%, 51.6% 36.3%, 75.5% 34.8%, 89.5% 61.7%, 68.3% 95.5%, 46% 76%, 40.8% 55.3%, 21.2% 69%, 8.4% 19%, 29.5% 19.5%)",
          }}
        ></div>
      </div>
    </header>
  );
}
