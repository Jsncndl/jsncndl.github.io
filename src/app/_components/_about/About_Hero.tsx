const About_Hero: React.FC = () => {
  return (
    <section className="md:w-3/4">
      <h2 className="w-2/3 text-center text-3xl">
        Qui est JCDev ?
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
  );
};

export default About_Hero;
