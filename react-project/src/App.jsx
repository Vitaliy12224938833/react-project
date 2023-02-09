import { useEffect, useState } from "react";
import "./App.css";
import getData from "./API/get-data-from-api";
import generateURL from "./API/generate-url";

const ChangePage = ({ changePage, children }) => {
  return <button onClick={changePage}>{children}</button>;
};

const Items = ({ children }) => {
  return (
    <ul>
      {children.map((item) => (
        <li>{item.title}</li>
      ))}
    </ul>
  );
};

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const url = generateURL("popular", "en", page);

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

  if (page < 1) return;
  if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div>
        <h1>{page}</h1>
        <ChangePage changePage={prevPage}>Prev Page</ChangePage>
        <Items>{items}</Items>
        {/* <ShowTitle show={getTitel} /> */}

        <ChangePage changePage={nextPage}>Next Page</ChangePage>
      </div>
    );
  }
};

export default App;
