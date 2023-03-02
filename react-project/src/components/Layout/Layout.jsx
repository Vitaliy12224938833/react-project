import { Outlet } from 'react-router-dom';
import { CustomLink } from '../Links/CustomLink';
import { categoriesData } from '../../data';
import { Link } from 'react-router-dom';
import { Search } from '../Search/Search';
import './Layout.css';

export const Layout = () => {
  const contentTypes = Object.keys(categoriesData);
  return (
    <>
      <div className='conteiner'>
        {' '}
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
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Search />
            </li>
          </ul>
        </header>
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </div>
    </>
  );
};
