const Link = ({ link, title }) => {
  return (
    <li className="header__nav-item">
      <a href={link} className="header__nav-link">
        {title}
      </a>
    </li>
  );
};

export default Link;
