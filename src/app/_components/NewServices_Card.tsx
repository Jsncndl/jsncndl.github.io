import Image from "next/image";
import {
  AiOutlineCopy,
  AiOutlineForm,
  AiOutlineFunnelPlot,
  AiOutlineMobile,
} from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineDashboardCustomize } from "react-icons/md";

const NewServices_Card = ({ index } : { index: number }) => {
  return (
    <div className={`card ${index % 2 === 0 ? 'card-even' : 'card-odd'}`}>
      <div className="card-image">
        <Image
          src="/undraw_progressive-app_9517.svg"
          alt="image"
          width={300}
          height={300}
        />
      </div>
      <div className="card-content">
        <h3 className="card-content-title">Site one page / landing page</h3>
        <div className="card-content-text">
          <ul className="card-content-text-list">
            <li className="card-content-text-list-item">
              <div className="card-content-text-list-item-icon">
                <MdOutlineDashboardCustomize />
              </div>
              <p>Design personnalisé</p>
            </li>
            <li className="card-content-text-list-item">
              <div className="card-content-text-list-item-icon">
                <AiOutlineMobile />
              </div>
              <p>
                {`Site responsive (adpaté aux mobiles, tablettes et ordinateurs)`}
              </p>
            </li>
            <li className="card-content-text-list-item">
              <div className="card-content-text-list-item-icon">
                <AiOutlineCopy />
              </div>
              <p>
                {`Une page d'accueil animée et une page pour les mentions légales`}
              </p>
            </li>
            <li className="card-content-text-list-item">
              <div className="card-content-text-list-item-icon">
                <AiOutlineForm />
              </div>
              <p>Formulaire de contact</p>
            </li>
            <li className="card-content-text-list-item">
              <div className="card-content-text-list-item-icon">
                <AiOutlineFunnelPlot />
              </div>
              <p>Tunnel vers vos réseaux sociaux</p>
            </li>
            <li className="card-content-text-list-item">
              <div className="card-content-text-list-item-icon">
                <IoMdAddCircleOutline />
              </div>
              <p>
                {`Fonctionnalités supplémentaires sur devis (ex : blog, newsletters, calendrier de réservations ...)`}
              </p>
            </li>
            <li className="card-content-text-list-item"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewServices_Card;
