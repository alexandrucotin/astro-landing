import AstroLogo from "../../assets/logo_web.svg";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={AstroLogo} alt="Astro collective logo" />
      </div>
      <h3 className="navbar-text">Il sito ufficiale è in lavorazione</h3>
    </nav>
  );
};

export default Navbar;
