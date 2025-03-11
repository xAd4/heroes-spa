import { useState } from "react";
import { HeroCard } from "../components/HeroCard";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { getHeroByName } from "../helpers/getHeroByName";


export const SearchHeroes = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const query = queryString.parse(location.search);
  const {q = ""} = query;


  const [search, setSearch] = useState("");

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    navigate(`?q=${ search }`, {
      replace: true,
    });
  };

  const setHeroesByName = getHeroByName(q);

  return (
    <div className="container mt-5 animate__animated animate__fadeIn">
      <h1>Search Heroes</h1>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSearch}>
            <div className="mb-3">
              <label htmlFor="search" className="form-label">
                Hero Name
              </label>
              <input
                type="text"
                className="form-control"
                id="search"
                name="search"
                placeholder="Enter hero name"
                autoComplete="off"
                value={search}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <h2>Results <em>{q}</em></h2>
          <ul className="list-group">
            {setHeroesByName.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
