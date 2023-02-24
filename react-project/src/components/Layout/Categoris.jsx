import { CustomLink } from '../Links/CustomLink';
import { categoriesData } from '../../data';
import { Outlet, useParams } from 'react-router-dom';
export const Categoris = ({ children }) => {
  const { content } = useParams();
  const defaultContent = content ? content : 'movie';
  const categoreis = categoriesData[defaultContent].categories;
  return (
    <>
      <div>
        <ul className='categories'>
          {categoreis.map((item) => {
            const { id, name, category } = item;
            return (
              <li key={id}>
                <CustomLink to={`/${defaultContent}/${category}`}>
                  {name}
                </CustomLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='gradient-line'></div>
      <div>{children ? children : <Outlet />}</div>
    </>
  );
};
