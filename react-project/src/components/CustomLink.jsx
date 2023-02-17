import { Link, useMatch } from 'react-router-dom';

export const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch({
    path: to,
    end: to.length === 1,
  });
  return (
    <Link to={to} style={{ backgroundColor: match ? 'read' : '' }} {...props}>
      {children}
    </Link>
  );
};
