import { HeroCard } from "./HeroCard";

export const HeroList = ({ heroes }) => {
  return (
    <>
      <main className="animate__animated animate__fadeIn">
        <header>
          <h2>HeroList</h2>
        </header>
        <br />
        <section className="row rows-cols-1 row-cols-md-3 g-3">
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </section>
      </main>
    </>
  );
};
