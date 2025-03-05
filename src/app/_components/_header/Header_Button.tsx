import React from "react";

const HeaderButton = () => {
  const handleScroll = (event: React.MouseEvent) => {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href="#services"
      onClick={handleScroll}
      className="header-link text-decoration-none rounded-lg bg-blue-rgb px-4 py-2 text-center text-2xl font-light"
    >
      Mes services
    </a>
  );
};

export default HeaderButton;
