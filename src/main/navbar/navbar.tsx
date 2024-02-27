import AstroLogo from "../../assets/astro.png";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={AstroLogo} alt="Logo" />
      </div>
      <div className="navbar-text">
        <p>Il sito ufficiale è in lavorazione</p>
      </div>
    </nav>
  );
};

export default Navbar;
