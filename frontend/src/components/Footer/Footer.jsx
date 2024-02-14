import "./Footer.css";

const Footer = () => (
  <footer className="py-3 my-4 w-100">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item">
        <a href="#" className="nav-link px-2 text-muted">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link px-2 text-muted">
          Features
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link px-2 text-muted">
          Pricing
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link px-2 text-muted">
          FAQs
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link px-2 text-muted">
          About
        </a>
      </li>
    </ul>
    <p className="text-center text-muted">© 2023 CDAC-ACTS, Group Number : 15</p>
  </footer>
);

export default Footer;
