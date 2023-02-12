const Link = ({ className, children, onClick }) => {
  return (
    <a className={className} onClick={onClick}>
      {children}
    </a>
  );
};
export default Link;
