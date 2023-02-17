import { Outlet } from 'react-router-dom';
import CustomLink from './CustomLink';
import '../App.css';
const Layout = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <CustomLink to='/movie'>Movies</CustomLink>
          </li>
          <li>
            <CustomLink to='/tv'>TV</CustomLink>
          </li>
          <li>
            <CustomLink to='/person'>Persons</CustomLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
