import { useParams } from 'react-router-dom';

export const Personpage = () => {
  console.log(useParams());
  return <h1>hi person</h1>;
};
