import React, { useEffect, useRef, useState } from "react";

const Footer_Terms: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else if (contentRef.current) {
      contentRef.current.style.maxHeight = "0";
    }
  }, [isOpen]);

  return (
    <div className="footer-terms-accordion">
      <button onClick={toggleAccordion} className="accordion-header">
        {isOpen
          ? "Masquer les Mentions Légales"
          : "Afficher les Mentions Légales"}
      </button>
      <div ref={contentRef} className="accordion-content">
        <div className="accordion-inner">
          <h2 className="text-xl">{`Données Personnelles`}</h2>
          <p>
            {`Conformément à la loi informatique et libertés, vous disposez d'un
            droit d'accès, de rectification et de suppression des données vous
            concernant.`}
          </p>
          <p>
            {`Pour exercer ce droit, contactez-nous à l'adresse suivante :`}
            {` `}
            <span className="text-blue-rgb">{`contact.jcdev74@gmail.com`}</span>
            .
          </p>
          <p>
            {`Ce site est édité par JCDev, situé à 71 Route de Plan de Poche,
            74420 Habère-Poche.`}
          </p>
          <p>{`Directeur de la publication : Josian Candel`}</p>
          <p>
            {`Hébergement : Ce site est hébergé par GitHub Pages, un service
            fourni par GitHub, Inc., situé au 88 Colin P. Kelly Jr. Street, San
            Francisco, CA 94107, États-Unis.`}
          </p>
          <h2 className="text-xl">{`Propriété Intellectuelle`}</h2>
          <p>
            {`Tous les contenus présents sur ce site sont couverts par le droit
            d'auteur. Toute reproduction est interdite sans autorisation
            préalable.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer_Terms;
