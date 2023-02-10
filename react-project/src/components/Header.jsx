const Header = ({ click, id, children, className, type }) => {
  return (
    <li key={id} className={className} onClick={() => click(type)}>
      {children}
    </li>
  );
};

export default Header;
