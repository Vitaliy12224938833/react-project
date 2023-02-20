import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink';
import { categoriesData } from '../data';

export const Layout = () => {
  const contentTypes = Object.keys(categoriesData);
  return (
    <>
      <header>
        <ul className='categories'>
          {contentTypes.map((type) => {
            const { name, id } = categoriesData[type];
            return (
              <li key={id}>
                <CustomLink to={type}>{name}</CustomLink>
              </li>
            );
          })}
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className='footer'></div>
      </footer>
    </>
  );
};
