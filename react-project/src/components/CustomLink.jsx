import { NavLink } from 'react-router-dom';

export const CustomLink = ({ children, to, ...props }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? 'active' : '')}
      {...props}
    >
      {children}
    </NavLink>
  );
};
