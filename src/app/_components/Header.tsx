import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  initial: {
    height: "150%",
  },
  animate: {
    height: "200%",
    transition: {
      height: {
        stiffness: 1000,
        velocity: -100,
        delay: 0.5,
        duration: 0.5,
      },
    },
  },
};

const containerTextVariants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      scale: {
        stiffness: 1000,
        velocity: -100,
        delay: 1.2,
        duration: 0.7,
      },
    },
  },
};

export default function Header() {
  return (
    <header className="relative flex w-full flex-col items-center justify-center pt-10">
      <motion.div
        transition={{ duration: 1.5, delay: 0.5 }}
        animate={{
          height: ["150%", "200%"],
          translateY: [150, 0],
        }}
      >
        <Image
          className="relative"
          src="/jcdev-logo-2024.svg"
          alt="JCDev Logo"
          width={350}
          height={350}
          priority
        />
      </motion.div>
      <motion.div
        transition={{ delay: 1.2, duration: 0.7 }}
        animate={{ scale: [0, 1] }}
        className="md:w-3/4"
      >
        <h1 className="mb-4 mt-20 text-center text-4xl">
          Création de sites web modernes et performants pour entrepreneurs et
          PME
        </h1>
        <motion.p
          animate={{ scale: [0, 1] }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="text-center text-text-muted"
        >
          Site one-page / site vitrine / site e-commerce / landing page
        </motion.p>
      </motion.div>
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
