"use client";

import { motion } from "framer-motion";

import Contact from "./_components/Contact";
import Header from "./_components/Header";
import ProjectsSection from "./_components/ProjectsSection";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center gap-40 overflow-x-hidden overflow-y-clip p-8 md:p-24">
      <Header />

      <motion.section
        className="w-full md:w-3/4"
      >
        <h2 className="text-center text-3xl md:w-2/3">
          Transformez votre présence en ligne avec des solutions web sur mesure
        </h2>
        <p>
          Passionné par le développement web et autodidacte déterminé, je vous
          propose des services de création de sites internet utilisant les
          dernières technologies pour donner vie à vos projets en ligne. Que
          vous soyez une <strong>petite entreprise</strong>, un{" "}
          <strong>entrepreneur</strong> ou une <strong>association</strong>, je
          suis là pour réaliser un site web qui vous ressemble et qui répond à
          vos besoins.
        </p>
      </motion.section>
      <section>
        <h2 className="w-2/3 text-center text-3xl">Mes services</h2>
        <motion.div className="relative flex w-full flex-col flex-wrap gap-6 md:grid md:grid-cols-2 md:grid-rows-2">
          <motion.div
            whileHover={{
              borderWidth: "1.5px",
              borderColor: "rgba(7, 152, 242, 0.38)",
              background:
                "linear-gradient(30deg, rgba(var(7, 152, 242), 0.18) 0%,rgba(var(--purple-rgb), 0.12) 35%,rgba(var(--gradient-cyan-end), 0.12) 77%)",
            }}
            className="card-service"
          >
            <h3 className="text-center text-2xl md:w-2/3 md:pb-2">
              Conception et développement de sites web
            </h3>
            <p>
              {`De la conception à la réalisation, du conseil à l’opérationnel,
              nous collaborons main dans la main pour donner vie à vos idées. À
              toutes vos questions, des solutions qui vous permettront
              d’atteindre votre cible et de mettre en avant votre entreprise.`}
            </p>
          </motion.div>
          <motion.div
            whileHover={{
              borderWidth: "1.5px",
              borderColor: "rgba(7, 152, 242, 0.38)",
              background:
                "linear-gradient(30deg, rgba(var(7, 152, 242), 0.18) 0%,rgba(var(--purple-rgb), 0.12) 35%,rgba(var(--gradient-cyan-end), 0.12) 77%)",
            }}
            className="card-service"
          >
            <h3 className="w-2/3 text-center text-2xl md:w-auto md:pb-2">
              Développement full-stack
            </h3>
            <p>
              Utilisation de technologies modernes comme React et NextJS pour
              des interfaces utilisateur dynamiques et réactives. Mise en place
              de bases de données et de services robustes pour assurer la
              fiabilité et la performance de vos applications.
            </p>
          </motion.div>
          <motion.div
            whileHover={{
              borderWidth: "1.5px",
              borderColor: "rgba(7, 152, 242, 0.38)",
              background:
                "linear-gradient(30deg, rgba(var(7, 152, 242), 0.18) 0%,rgba(var(--purple-rgb), 0.12) 35%,rgba(var(--gradient-cyan-end), 0.12) 77%)",
            }}
            className="card-service"
          >
            <h3 className="w-2/3 text-center text-2xl md:w-auto md:pb-2">
              Refonte de sites webs existants
            </h3>
            <p>
              Refonte de votre site web pour de meilleures performances et une
              meilleure sécurité. Que vous souhaitiez modifier le design, le
              contenu, les fonctionnalités ou migrer votre site web, je peux
              vous aider.
            </p>
          </motion.div>
          <motion.div
            whileHover={{
              borderWidth: "1.5px",
              borderColor: "rgba(7, 152, 242, 0.38)",
              background:
                "linear-gradient(30deg, rgba(var(7, 152, 242), 0.18) 0%,rgba(var(--purple-rgb), 0.12) 35%,rgba(var(--gradient-cyan-end), 0.12) 77%)",
            }}
            className="card-service"
          >
            <h3 className="w-2/3 text-center text-2xl md:w-auto md:pb-2">
              Maintenance et optimisation
            </h3>
            <p>
              {`Suivi et amélioration continue de vos sites pour garantir leur
              performance et leur sécurité. Mise en place de stratégie d'analyse
              et d'optimisation pour que votre site soit plus performant et
              efficace.`}
            </p>
          </motion.div>
          {
            <div
              className="pointer-events-none absolute -left-96 top-20 z-[-10] blur-2xl lg:left-0 lg:top-0"
              aria-hidden="true"
            >
              <div
                className="aspect-[1155/678] w-[100rem] rotate-[75deg] bg-gradient-to-tr from-gradient-cyan-end from-30% via-purple-rgb via-50% to-dark-blue-rgb to-70% opacity-20 lg:rotate-45"
                style={{
                  clipPath:
                    "polygon(41.9% 36%, 70.5% 20.3%, 81.7% 12%, 95.5% 50.8%, 82.6% 85.8%, 47.5% 91.8%, 6% 78%, 8.9% 24.5%, 27.3% 17.5%)",
                }}
              ></div>
            </div>
          }
        </motion.div>
        <div className="absolute -right-14 z-[-2]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { fillOpacity: 0, translateX: 100, rotate: 35 },
              visible: {
                fillOpacity: 1,
                translateX: 0,
                rotate: 0,
                translateY: 65,
                transition: { delay: 0.2, duration: 0.5 },
              },
            }}
            className="relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="250"
              height="300"
              viewBox="0 0 500 650"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="756.54"
                  x2="69.004"
                  y1="564.35"
                  y2="645.31"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="20%" stopOpacity={0.85} stopColor="#1C3659" />
                  <stop offset="100%" stopOpacity={0.85} stopColor="#0798F2" />
                </linearGradient>
              </defs>
              <path
                fill="url(#a)"
                d="M318.214 0H141.429c-19.557 0-35.358 15.864-35.358 35.5S121.872 71 141.429 71v147.325c0 13.091-3.647 26.07-10.497 37.164L11.381 450.628C3.978 462.831 0 476.698 0 491.009 0 533.498 34.363 568 76.68 568h341.64c42.317 0 76.68-34.502 76.68-76.991 0-14.2-3.978-28.178-11.381-40.381L364.068 255.6c-6.85-11.205-10.497-24.073-10.497-37.164V71c19.557 0 35.358-15.864 35.358-35.5S373.128 0 353.571 0h-35.357ZM212.143 218.325V71h70.714v147.325c0 26.292 7.293 52.03 20.993 74.439L341.97 355H153.03l38.12-62.236c13.7-22.409 20.993-48.147 20.993-74.439Z"
              />
            </svg>
          </motion.div>
        </div>
        <div className="absolute -left-20 z-[-2]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { fillOpacity: 0, translateX: -100, rotate: -35 },
              visible: {
                fillOpacity: 1,
                translateX: 0,
                rotate: 0,
                transition: { delay: 0.4, duration: 0.5 },
              },
            }}
            className="relative top-[45rem] rotate-12 md:top-20 lg:top-48"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="326"
              height="421"
              viewBox="0 0 626 721"
            >
              <defs>
                <linearGradient
                  id="b"
                  x1="756.54"
                  x2="69.004"
                  y1="564.35"
                  y2="645.31"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="20%" stopOpacity={0.85} stopColor="#0798F2" />
                  <stop offset="100%" stopOpacity={0.85} stopColor="#1C3659" />
                </linearGradient>
              </defs>
              <path
                fill="url(#b)"
                d="M377.14 219.624c10.709-2.995 18.605-11.93 19.009-23.006.167-6.707.07-13.41-.446-20.056l-.639-7.217a204.708 204.708 0 0 0-3.243-20.229c-2.328-10.833-11.778-18.509-22.883-19.928l-34.747-4.55c-7.077-14.619-16.658-28.375-28.339-40.181l7.844-33.415c2.575-10.687-1.455-22.07-10.957-27.98-6.608-4.282-13.571-8.092-20.839-11.534l-.748-.354a201.716 201.716 0 0 0-22.078-8.92c-10.592-3.608-22.002.59-28.589 9.249l-20.933 27.344c-16.692-1.504-33.248-.255-49.043 3.53l-25.691-23.946c-8.133-7.693-20.059-10.141-29.916-5.079-6.069 3.143-12.023 6.597-17.813 10.257l-5.831 4.023c-5.47 3.812-10.717 7.984-15.85 12.467-8.263 7.225-10.174 18.995-5.755 29.282l13.92 31.944a145.905 145.905 0 0 0-12.119 20.892 148.335 148.335 0 0 0-8.535 22.716l-33.534 9.468C8.676 157.395.78 166.331.375 177.407c-.166 6.706-.07 13.41.397 20.161l.631 6.956c.68 6.852 1.83 13.542 3.35 20.28 2.328 10.833 11.778 18.51 22.883 19.928l34.747 4.55c7.078 14.619 16.658 28.375 28.34 40.181l-7.894 33.52c-2.575 10.687 1.455 22.071 10.957 27.979a207.656 207.656 0 0 0 21.209 11.582 207.755 207.755 0 0 0 22.398 9.072c10.592 3.608 22.002-.59 28.59-9.249l20.933-27.344c16.691 1.504 33.247.255 49.042-3.531l25.535 24.001c8.133 7.693 20.059 10.141 29.916 5.078 6.069-3.143 11.973-6.492 17.706-10.307l5.988-4.077c5.469-3.812 10.716-7.984 15.8-12.362 8.263-7.225 10.174-18.996 5.755-29.283l-13.92-31.944a148.356 148.356 0 0 0 12.168-20.996 148.253 148.253 0 0 0 8.535-22.716l33.535-9.468.164.206Zm-230.181-56.91c6.306-13.313 17.758-23.521 31.838-28.377 14.079-4.857 29.633-3.965 43.24 2.479 13.606 6.444 24.15 17.913 29.313 31.884 5.163 13.97 4.521 29.298-1.785 42.611-6.305 13.313-17.757 23.52-31.837 28.377-14.08 4.857-29.634 3.965-43.24-2.479-13.606-6.445-24.151-17.914-29.313-31.884-5.163-13.971-4.521-29.298 1.784-42.611Zm259 538.139c3.217 10.614 12.411 18.554 23.649 19.139 6.804.278 13.6.296 20.331-.101l7.307-.508a210.048 210.048 0 0 0 20.459-2.858c10.946-2.113 18.571-11.305 19.822-22.236l4.027-34.198c14.706-6.735 28.493-15.953 40.268-27.276l34.124 8.351c10.881 2.721 22.357-1.062 28.188-10.335a194.984 194.984 0 0 0 11.387-20.726 194.775 194.775 0 0 0 8.821-21.941c3.48-10.387-.97-21.713-9.862-28.357l-28.031-21.215a147.05 147.05 0 0 0-4.409-48.436l23.907-24.783c7.665-7.893 9.945-19.616 4.646-29.424-3.29-6.039-6.893-11.971-10.702-17.744l-4.178-5.82c-3.958-5.459-8.277-10.706-12.91-15.845-7.466-8.273-19.434-10.357-29.791-6.171l-32.158 13.192a158.365 158.365 0 0 0-21.496-12.358 158.314 158.314 0 0 0-23.18-8.802l-10.167-33.239c-3.217-10.614-12.412-18.553-23.65-19.139-6.804-.277-13.6-.295-20.437.051l-7.044.505c-6.937.555-13.702 1.577-20.508 2.962-10.946 2.114-18.572 11.306-19.823 22.236l-4.027 34.198c-14.705 6.735-28.493 15.953-40.268 27.277l-34.074-8.457c-10.881-2.721-22.357 1.063-28.188 10.336a194.708 194.708 0 0 0-11.387 20.726 194.7 194.7 0 0 0-8.821 21.941c-3.48 10.387.97 21.713 9.862 28.357l28.081 21.11a147.023 147.023 0 0 0 4.408 48.436l-23.907 24.783c-7.664 7.893-9.945 19.616-4.645 29.424 3.29 6.039 6.785 11.92 10.75 17.639l4.237 5.976c3.957 5.459 8.277 10.706 12.802 15.794 7.466 8.273 19.434 10.357 29.791 6.171l32.158-13.192a158.32 158.32 0 0 0 21.496 12.358 158.282 158.282 0 0 0 23.181 8.802l10.167 33.239-.206.158Zm53.825-226.094a57.858 57.858 0 0 1 17.823 13.12 56.868 56.868 0 0 1 11.49 18.764 55.467 55.467 0 0 1 3.408 21.552 54.502 54.502 0 0 1-5.192 21.059 54.514 54.514 0 0 1-13.004 17.36 55.468 55.468 0 0 1-18.834 11.017 56.848 56.848 0 0 1-21.797 2.998 57.846 57.846 0 0 1-21.443-5.477 57.858 57.858 0 0 1-17.823-13.12 56.868 56.868 0 0 1-11.49-18.764 55.467 55.467 0 0 1-3.408-21.552 54.502 54.502 0 0 1 5.192-21.059 54.514 54.514 0 0 1 13.004-17.36 55.468 55.468 0 0 1 18.834-11.017 56.848 56.848 0 0 1 21.797-2.998 57.846 57.846 0 0 1 21.443 5.477Z"
              />
            </svg>
          </motion.div>
        </div>
      </section>
      <section className="md:w-3/4">
        <h2 className="w-2/3 text-center text-3xl">
          Pourquoi collaborer avec moi ?
        </h2>
        <div>
          <p>
            {`En tant que développeur web autodidacte, je comprends l'importance de
            rester à la pointe des tendances et des technologies. Je suis
            passionné par la création de sites web et déterminé à offrir des
            solutions qui non seulement répondent à vos attentes, mais les
            dépassent.`}
          </p>
          <p>
            {`N'hésitez pas à me contacter pour discuter de votre projet et
            découvrir comment je peux vous aider à atteindre vos objectifs en
            ligne. Ensemble, faisons passer votre présence en ligne au niveau
            supérieur.`}
          </p>
        </div>
      </section>
      <ProjectsSection />
      <Contact />
    </main>
  );
}
