import Image from "next/image";

const NewServices = () => {
  return (
    <section>
      <h2>Mes services</h2>
      <div className="card">
        <div className="card-image">
          <Image
            src="/undraw_progressive-app_9517.svg"
            alt="image"
            width={300}
            height={300}
          />
        </div>
        <div className="card-content">
          <h3 className="card-content-title">Site vitrine</h3>
          <div className="card-content-text">
            <ul className="card-content-text-list">
              <li className="card-content-text-list-item">
                Présentation de votre entreprise
              </li>
              <li className="card-content-text-list-item">
                Portfolio de vos réalisations
              </li>
              <li className="card-content-text-list-item">
                Formulaire de contact
              </li>
              <li className="card-content-text-list-item">Réseaux sociaux</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewServices;
