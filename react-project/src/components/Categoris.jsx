import { CustomLink } from './CustomLink';
import { categoriesData } from '../data';
import { Outlet, useParams } from 'react-router-dom';

export const Categoris = ({ children }) => {
  const { content } = useParams();
  const currContent = content ? content : 'movie';
  console.log(currContent);
  const categoreis = categoriesData[currContent].categories;
  console.log(categoreis);
  return (
    <>
      <div>
        <ul>
          {categoreis.map((item) => {
            const { id, name, category } = item;
            console.log(item);
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
