import { NavLink } from 'react-router-dom';

export const CustomLink = ({ children, to, ...props }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? 'category active' : 'category')}
      {...props}
    >
      {children}
    </NavLink>
  );
};
