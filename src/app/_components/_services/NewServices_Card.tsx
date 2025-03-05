import Image from "next/image";
import React from "react";
import {
  AiOutlineCopy,
  AiOutlineForm,
  AiOutlineFunnelPlot,
  AiOutlineMobile,
} from "react-icons/ai";
import { GrCatalog } from "react-icons/gr";
import { IoMdAddCircleOutline } from "react-icons/io";
import { LuGalleryHorizontalEnd } from "react-icons/lu";
import { MdOutlineDashboardCustomize } from "react-icons/md";

// Définir une interface pour les props
interface NewServicesCardProps {
  index: number;
  title: string;
  description: string;
  features: string[];
  image: string;
}

// Tableau de paires clé-valeur pour les sous-chaînes et les icônes
const featureIconPairs: { substring: string; icon: JSX.Element }[] = [
  { substring: "Design personnalisé", icon: <MdOutlineDashboardCustomize /> },
  { substring: "Site responsive", icon: <AiOutlineMobile /> },
  { substring: "page", icon: <AiOutlineCopy /> },
  { substring: "pages", icon: <AiOutlineCopy /> },
  { substring: "Formulaire de contact", icon: <AiOutlineForm /> },
  {
    substring: "Tunnel vers vos réseaux sociaux",
    icon: <AiOutlineFunnelPlot />,
  },
  {
    substring: "Fonctionnalités supplémentaires",
    icon: <IoMdAddCircleOutline />,
  },
  { substring: "Galerie de photos", icon: <LuGalleryHorizontalEnd /> },
  { substring: "Catalogue de produits", icon: <GrCatalog /> },
  { substring: "Panier d'achat", icon: <AiOutlineFunnelPlot /> },
  { substring: "Paiement en ligne sécurisé", icon: <IoMdAddCircleOutline /> },
  { substring: "Gestion des stocks", icon: <MdOutlineDashboardCustomize /> },
];

// Fonction pour obtenir l'icône en fonction de la fonctionnalité
const getFeatureIcon = (feature: string): JSX.Element => {
  for (const { substring, icon } of featureIconPairs) {
    if (feature.includes(substring)) {
      return icon;
    }
  }
  return <IoMdAddCircleOutline />; // Icône par défaut si aucune correspondance n'est trouvée
};

const NewServices_Card: React.FC<NewServicesCardProps> = ({
  index,
  title,
  description,
  features,
  image,
}) => {
  const handleScroll = (event: React.MouseEvent) => {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    const servicesSection = document.getElementById("contact");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`card ${index % 2 === 0 ? "card-even" : "card-odd"}`}>

      {/* <div className="card-image">
        <Image src={image} alt={title} width={300} height={300} />
      </div> */}
      <div className="card-content">
        <h3 className="card-content-title">{title}</h3>
        <p className="card-content-description">{description}</p>
        <div className="card-content-text">
          <ul className="card-content-text-list">
            {features.map((feature, i) => (
              <li key={i} className="card-content-text-list-item">
                <div className="card-content-text-list-item-icon">
                  {getFeatureIcon(feature)}
                </div>
                <p className="card-content-text-list-item-desc">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full text-center self-end">
        <a href="#" onClick={handleScroll} className="card-content-button">
          Contactez moi
        </a>
      </div>
    </div>
  );
};

export default NewServices_Card;
