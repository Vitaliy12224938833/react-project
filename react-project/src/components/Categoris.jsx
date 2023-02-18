import { CustomLink } from './CustomLink';
import { categoriesData } from '../data';
import { Outlet, useParams } from 'react-router-dom';

export const Categoris = ({ children }) => {
  const { content } = useParams();
  const currContent = content ? content : 'movie';
  const categoreis = categoriesData[currContent].categories;
  return (
    <>
      <div>
        <ul>
          {categoreis.map((item) => {
            const { id, name, category } = item;
            return (
              <li key={id}>
                <CustomLink to={`/${currContent}/${category}`}>
                  {name}
                </CustomLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div>{children ? children : <Outlet />}</div>
    </>
  );
};
