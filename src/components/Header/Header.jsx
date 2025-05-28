import Link from "./Link";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__logo-container">
          <a href="/" className="header__logo-link">
            <p className="header__logo">Лого</p>
          </a>
        </div>
        <div className="header__nav-container">
          <ul className="header__nav-list">
            <Link link="/#about" title="О нас" />
            <Link link="/#hiw" title="Как это работает" />
            <Link link="/#feedback" title="Отзывы" />
            <Link link="/#footer" title="Контакты" />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
