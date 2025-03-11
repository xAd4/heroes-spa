import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImage = `/assets/heroes/${id}.jpg`;

  const charactersByHero = (
    <ul>
      <li>
        <p className="card-text">{characters}</p>
      </li>
    </ul>
  );

  return (
    <>
      <div className="card-deck animate__animated animate__fadeIn">
        <div className="card">
          <img
            height={450}
            className="card-img-top"
            src={heroImage}
            alt={superhero}
          />
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">{alter_ego}</p>
            {alter_ego !== characters && charactersByHero}
            <p className="card-text">
              <small className="text-muted">{first_appearance}</small>
            </p>
            <Link to={`/hero/${id}`}>More...</Link>
          </div>
        </div>
      </div>
    </>
  );
};
