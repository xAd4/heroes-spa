import { HeroList } from "../components/HeroList";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";

export const DC = () => {
  const setHeroesDC = getHeroesByPublisher("DC Comics");

  return (
    <>
      <br />
      <h1>DC</h1>
      <hr />
      <HeroList heroes={setHeroesDC} />
    </>
  );
};
