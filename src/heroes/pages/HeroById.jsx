import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";
import { useMemo } from "react";

export const HeroById = () => {
  const handleBack = useNavigate();

  const onBack = () => {
    handleBack(-1);
  };

  const { id } = useParams();
  const hero = useMemo(() => getHeroById(id), [id]);
  if (!hero) return <Navigate to="/marvel" />;

  return (
    <div className="container mt-5 animate__animated animate__fadeIn">
      <div className="row">
        <div className="col-md-4">
          <img
            className="img-fluid rounded"
            src={`/assets/heroes/${id}.jpg`}
            alt={hero.superhero}
            height={800}
          />
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{hero.superhero}</h5>
              <p className="card-text">
                <strong>Alter Ego:</strong> {hero.alter_ego}
              </p>
              <p className="card-text">
                <strong>Characters:</strong> {hero.characters}
              </p>
              <p className="card-text">
                <small className="text-muted">
                  <strong>First Appearance:</strong> {hero.first_appearance}
                </small>
              </p>
              <button onClick={onBack} className="btn btn-outline-primary mt-3">
                Regresar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
