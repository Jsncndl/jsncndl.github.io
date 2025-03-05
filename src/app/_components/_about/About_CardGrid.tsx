import { motion } from "framer-motion";
import Image from "next/image";

interface Service {
  title: string;
  description: string;
  imageUrl: string;
  features?: {
    title: string;
    description: string;
  }[];
}

const services: Service[] = [
  {
    title: "Conception et développement de sites web sur mesure",
    description: `De la conception à la mise en ligne, nous travaillons ensemble pour donner vie à vos idées. JCDev propose la création de sites web personnalisés pour vous offrir une présence en ligne impactante. Que vous préfériez utiliser des outils populaires comme WordPress, Odoo, Wix, ou Framer, ou que vous optiez pour un développement entièrement codé, nous vous offrons des solutions adaptées à vos besoins spécifiques.`,
    imageUrl: "/undraw_building-websites_k2zp.svg",
    features: [
      {
        title: "Design Responsive",
        description:
          "Assurez-vous que votre site est accessible et attrayant sur tous les appareils.",
      },
      {
        title: "SEO Optimisé",
        description:
          "Améliorez votre visibilité sur les moteurs de recherche grâce à des techniques de référencement naturel.",
      },
      {
        title: "Expérience Utilisateur (UX)",
        description:
          "Créez une navigation intuitive et agréable pour vos visiteurs.",
      },
      {
        title: "Intégration de Fonctionnalités Avancées",
        description:
          "Ajoutez des calendriers interactifs, des galeries vidéos, des animations, et bien plus encore.",
      },
    ],
  },
  {
    title: "Refonte de site web existant",
    description: `Sur toutes les plateformes, JCDev peut intervenir sur votre site web pour booster ses performances, ajouter de nouvelles fonctionnalités (calendrier relié à votre agenda, galeries vidéos, animations, etc...).`,
    imageUrl: "/undraw_design-components_529l.svg",
    features: [
      {
        title: "Optimisation des Performances",
        description:
          "Améliorez la vitesse de chargement et la réactivité de votre site.",
      },
      {
        title: "Mise à Jour Technologique",
        description:
          "Intégrez les dernières technologies pour rester compétitif.",
      },
      {
        title: "Redesign Graphique",
        description:
          "Modernisez l'apparence de votre site pour attirer davantage de visiteurs.",
      },
      {
        title: "Ajout de Nouvelles Fonctionnalités",
        description:
          "Intégrez des calendriers interactifs, des galeries vidéos, des animations, et bien plus encore.",
      },
    ],
  },
  {
    title: "Maintenance et optimisation",
    description: `Grâce à la mise en place d'outils de suivi (Google Analytics, SEMRush...) nous pouvons suivre vos KPI (indicateurs de performances) et déterminer les points à améliorer sur votre site. Suivi et amélioration continue de votre site pour garantir leur performance et leur sécurité. Mise en place de stratégies d'analyse et d'optimisation pour que votre site soit plus performant et efficace.`,
    imageUrl: "/undraw_analytics_6mru.svg",
    features: [
      {
        title: "Suivi Continu",
        description:
          "Assurez-vous que votre site reste performant et sécurisé.",
      },
      {
        title: "Stratégies d'Optimisation",
        description:
          "Mettez en place des analyses pour améliorer l'efficacité de votre site.",
      },
      {
        title: "Sécurité Renforcée",
        description: "Protégez votre site contre les menaces en ligne.",
      },
      {
        title: "Analyse des KPI",
        description:
          "Utilisez des outils comme Google Analytics et SEMRush pour suivre vos indicateurs de performance.",
      },
    ],
  },
  {
    title: "Formation et Support Continu",
    description: `Chez JCDev, nous croyons que la réussite de votre projet web ne s'arrête pas à la mise en ligne. Nous offrons des services de formation pour vous et votre équipe afin de vous permettre de gérer votre site web de manière autonome. Que ce soit pour apprendre à utiliser un CMS comme WordPress ou pour comprendre les bases du SEO, nous sommes là pour vous accompagner.`,
    imageUrl: "/undraw_active-support_v6g0.svg",
    features: [
      {
        title: "Sessions de Formation Personnalisées",
        description:
          "Apprenez à utiliser les outils et technologies intégrés à votre site.",
      },
      {
        title: "Support Technique Réactif",
        description:
          "Bénéficiez d'une assistance rapide en cas de problème ou de question.",
      },
      {
        title: "Documentation Complète",
        description:
          "Accédez à des guides et des tutoriels pour une prise en main facile.",
      },
      {
        title: "Accompagnement Stratégique",
        description:
          "Profitez de conseils personnalisés pour optimiser votre présence en ligne.",
      },
    ],
  },
];

const About_CardGrid: React.FC = () => {
  return (
    <section>
      <h2 className="text-center text-3xl">Pourquoi collaborer avec JCDev ?</h2>
      <motion.div className="relative flex w-full flex-col flex-wrap gap-6 lg:grid lg:grid-cols-2 lg:grid-rows-2">
        {services.map((service, index) => (
          <>
            {index % 2 === 0 && (
              <div key={`image-${index}`} className="hidden text-center blue-shadow lg:flex lg:items-center lg:justify-center">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  width={350}
                  height={250}
                />
              </div>
            )}
            <motion.div
              key={`card-${index}`}
              whileHover={{
                borderWidth: "1.5px",
                borderColor: "rgba(7, 152, 242, 0.38)",
                background:
                  "linear-gradient(30deg, rgba(var(7, 152, 242), 0.18) 0%,rgba(var(--purple-rgb), 0.12) 35%,rgba(var(--gradient-cyan-end), 0.12) 77%)",
              }}
              className="card-service"
            >
              <h3 className="text-center text-2xl md:w-2/3 md:pb-2">
                {service.title}
              </h3>
              <p>{service.description}</p>
              {service.features && (
                <ul className="list-inside list-disc py-2 pl-4">
                  {service.features.map((feature, idx) => (
                    <li className="py-2" key={idx}>
                      <strong>{feature.title}:</strong> {feature.description}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
            {index % 2 !== 0 && (
              <div className="hidden purple-shadow text-center lg:flex lg:items-center lg:justify-center">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  width={350}
                  height={250}
                />
              </div>
            )}
          </>
        ))}
      </motion.div>
    </section>
  );
};

export default About_CardGrid;
