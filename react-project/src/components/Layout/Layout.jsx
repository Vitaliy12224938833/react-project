import { Outlet } from 'react-router-dom';
import { categoriesData } from '../../data';
import './Layout.css';
import { NavBar } from '../NavBar/NavBar';

export const Layout = () => {
  const contentTypes = Object.keys(categoriesData);
  return (
    <>
      <div className='conteiner'>
        <header>
          <NavBar />
        </header>
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </div>
    </>
  );
};
