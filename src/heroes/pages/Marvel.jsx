import { useMemo } from "react";
import { HeroList } from "../components/HeroList";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";

export const Marvel = () => {
  const setHeroesMarvel = useMemo(
    () => getHeroesByPublisher("Marvel Comics"),
    []
  );

  return (
    <>
      <br />
      <h1>Marvel</h1>
      <hr />
      <HeroList heroes={setHeroesMarvel} />
    </>
  );
};
