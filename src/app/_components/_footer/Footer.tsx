import Link from "next/link";

import Footer_Terms from "./Footer_Terms";

const Footer: React.FC = () => {
  return (
    <footer className="p-4">
      <div className="container mx-auto text-center">
        <p>
          Site réalisé par{" "}
          <Link href="https://jsncndl.github.io/" className="text-blue-500">
            JCDev
          </Link>
        </p>
        <p>2025 - Tous droits réservés.</p>
        <Footer_Terms />
      </div>
    </footer>
  );
};

export default Footer;
