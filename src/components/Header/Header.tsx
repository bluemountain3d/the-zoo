import { NavLink } from 'react-router';
// import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="container-boxed header__inner">
        <div className="header__brand">
          Vårt Zoo
        </div>
        <nav className="header__nav">
          <ul className="header__nav-menu">
            <li className="header__nav-item">
              <NavLink to="/" className="header__nav-link">Hem</NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="/animals" className="header__nav-link">Våra djur</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};