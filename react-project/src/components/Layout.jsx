import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink';
import { Categoris } from './Categoris';

const Layout = () => {
  return (
    <>
      <header>
        <CustomLink to='/movie'>Movies</CustomLink>
        <CustomLink to='/tv'>TV</CustomLink>
        {/* <CustomLink to='/person'>Persons</CustomLink> */}
        <div></div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
