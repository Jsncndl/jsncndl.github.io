import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full lg:mb-20 lg:min-h-[250px]">
      <div className="first-section">
        <h2 className="-mt-10 text-center text-3xl">
          Transformez votre présence en ligne
        </h2>
        <div className="first-section-image">
          <Image
            className="hidden lg:block"
            src="/undraw_bookmarks_i66k.svg"
            alt="bookmark"
            width={350}
            height={250}
            style={{ width: "350px", height: "auto" }}
          />
        </div>
        <div className="mt-4 flex flex-col flex-wrap items-center justify-between gap-4 pb-8 text-lg lg:mx-28 lg:mt-44 lg:w-1/2 lg:flex-row lg:backdrop-blur-lg">
          <p className="text-pretty text-center">
            Des <strong>solutions sur mesure</strong> pour une présence en ligne
            qui vous ressemble.
          </p>
          <p className="text-pretty text-center">
            Spécialisé dans la création de <strong>site web vitrine</strong>,
            JCDev vous accompagne pour donner vie à vos projets.
          </p>
        </div>
      </div>
      <div className="flex w-3/4 flex-wrap justify-center gap-10 text-center lg:flex-nowrap">
        <div className="w-3/4">
          <h3 className="mb-2 text-xl">Visibilité</h3>
          <div className="text-pretty text-center">
            {`Votre entreprise mérite d'être vue. 
            Avec une présence en ligne efficace, 
            vous attirez plus de clients potentiels 
            et renforcez votre crédibilité.`}
          </div>
        </div>
        <div className="w-3/4">
          <h3 className="mb-2 text-xl">Développement</h3>
          <div className="text-pretty text-center">
            {`Faites grandir votre entreprise,
            concentrez vous sur ce qui compte le plus pour vous
            et laissez votre site web attirez plus de clients.`}
            {/* Développez votre entreprise tout en vous donnant le droit 
            de vous affranchir des frontières géographiques. */}
          </div>
        </div>
        <div className="w-3/4">
          <h3 className="mb-2 text-xl">Sécurité et optimisation</h3>
          <div className="text-pretty text-center">
            {/* Profitez de sites web modernes et optimisés, 
            afin d'assurer la sécurité de vos données et de vos clients. */}
            {`Une présence en ligne fiable, fluide et moderne sur tout les appareils 
            grâce à une infrastructure robuste et sécurisée et aux dernières technologies.`}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
