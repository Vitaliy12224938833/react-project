import { useEffect, useState } from "react";
import "./App.css";
import getData from "./API/get-data-from-api";
import generateURL from "./API/generate-url";

const ChangePage = ({ changePage, children }) => {
  return <button onClick={changePage}>{children}</button>;
};

const Item = ({ item }) => {
  return (
    <li className="item" key={item.id}>
      <img src={`https://image.tmdb.org/t/p/w400${item.poster_path}`} />
      <h2>{item.title}</h2>
    </li>
  );
};

const List = ({ children }) => {
  return (
    <ul className="movies-list">
      {children.map((item) => (
        <Item item={item} />
      ))}
    </ul>
  );
};

const Movies = ({ listType, language, startPage }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(startPage);

  const url = generateURL(listType, language, page);

  const nextPage = () => setPage((currPage) => currPage + 1);

  const prevPage = () =>
    setPage((currPage) => {
      if (page === 1) return currPage;
      return currPage - 1;
    });

  useEffect(() => {
    (async () => {
      const items = await getData(url);
      setItems(items);
      setIsLoaded(true);
    })();
  });

  if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div>
        <h1>{page}</h1>
        <ChangePage changePage={prevPage}>Prev Page</ChangePage>
        <ChangePage changePage={nextPage}>Next Page</ChangePage>
        <List>{items}</List>
      </div>
    );
  }
};

export default Movies;
