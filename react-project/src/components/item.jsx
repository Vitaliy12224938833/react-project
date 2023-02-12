const Item = ({ keyId, children, className }) => {
  return (
    <li key={keyId} className={className}>
      {children}
    </li>
  );
};

export default Item;
