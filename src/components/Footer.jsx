export const Footer = () => {
  return (
    <>
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a
                href="https://github.com/xAd4"
                target="_blank"
                rel="noreferrer"
                className="nav-link px-2 text-muted"
              >
                GitHub
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.linkedin.com/in/ángel-estarita-21002822a/"
                target="_blank"
                rel="noreferrer"
                className="nav-link px-2 text-muted"
              >
                Linkedin
              </a>
            </li>

            <li className="nav-item">
              <a
                href="https://www.instagram.com/angel_estarita/"
                target="_blank"
                rel="noreferrer"
                className="nav-link px-2 text-muted"
              >
                Instagram
              </a>
            </li>
          </ul>
          <p className="text-center text-muted">
            @ 2025 Angel Estarita, Freelancer
          </p>
        </footer>
      </div>
    </>
  );
};
