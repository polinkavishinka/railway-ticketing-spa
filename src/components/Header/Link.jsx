import { HashLink } from 'react-router-hash-link';

const Link = ({ link, title }) => {
  return (
    <li className="header__nav-item">
      <HashLink smooth to={link} className="header__nav-link">
        {title}
      </HashLink>
    </li>
  );
};

export default Link;
