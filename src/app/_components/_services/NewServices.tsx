import About_BackgroundDeco from "../_about/About_BackgroundDeco";
import NewServices_Card from "./NewServices_Card";

const servicesInfo = [
  {
    title: "Site One Page / Landing Page",
    description: "Un site unique pour présenter votre activité.",
    features: [
      "Design personnalisé",
      "Site responsive (adapté aux mobiles, tablettes et ordinateurs)",
      "Une page d'accueil animée et une page pour les mentions légales",
      "Tunnel vers vos réseaux sociaux",
      "Formulaire de contact",
      "Fonctionnalités supplémentaires sur devis (ex : blog, newsletters, calendrier de réservations ...)",
    ],
    image: "/undraw_progressive-app_9517.svg",
  },
  {
    title: "Site Vitrine",
    description: "Un site complet pour présenter vos services et produits.",
    features: [
      "Design personnalisé",
      "Site responsive",
      "5 pages (ex: accueil, services, réalisations, à propos, contact)",
      "Tunnel vers vos réseaux sociaux",
      "Galerie de photos ou vidéos pour présentez votre activité",
      "Formulaire de contact",
      "Fonctionnalités supplémentaires sur devis",
    ],
    image: "/undraw_building-websites_k2zp.svg",
  },
  /*   {
    title: "Site E-commerce",
    description: "Vendez vos produits en ligne avec un site e-commerce.",
    features: [
      "Catalogue de produits",
      "Panier d'achat",
      "Paiement en ligne sécurisé",
      "Gestion des stocks",
      "Design personnalisé",
      "Site responsive",
    ],
    image: "/undraw_web-shopping_m3o2.svg",
  }, */
];

const NewServices = () => {
  return (
    <section id="services">
      <h2 className="text-4xl">Mes services</h2>
      <div className="flex w-full flex-wrap gap-8 lg:flex-nowrap">
        {servicesInfo.map((service, index) => (
          <NewServices_Card
            key={index}
            index={index}
            title={service.title}
            description={service.description}
            features={service.features}
            image={service.image}
          />
        ))}
      </div>
      <div className="italic">
        Tout les sites sont conformes aux normes RGPD.
      </div>
      <About_BackgroundDeco />
    </section>
  );
};

export default NewServices;
