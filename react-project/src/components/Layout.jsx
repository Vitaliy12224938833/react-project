import { Outlet } from 'react-router-dom';
import CustomLink from './CustomLink';

const Layout = () => {
  return (
    <>
      <header>
        <CustomLink to='/movie'>Movies</CustomLink>
        <CustomLink to='/tv'>TV</CustomLink>
        <CustomLink to='/person'>Persons</CustomLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
