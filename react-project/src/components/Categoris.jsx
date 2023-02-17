import { CustomLink } from './CustomLink';
import { categoris } from '../data';
import { Outlet, useParams } from 'react-router-dom';

export const Categoris = () => {
  const { content } = useParams();
  console.log({ content });
  return (
    <>
      <div>
        <ul>
          {categoris[content].map((categori, index) => (
            <li key={index}>
              <CustomLink to={`/${content}/${categori}`}>{categori}</CustomLink>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
