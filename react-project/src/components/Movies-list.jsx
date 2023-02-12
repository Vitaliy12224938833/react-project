import { useEffect, useState } from "react";
import "../App.css";
import getData from "../API/get-data-from-api";
import generateURL from "../API/generate-url";
import Item from "./item";
import Image from "./img-block";
import { Title2 } from "./title";

const ContentList = ({ items, prevPage, nextPage }) => {
  return [
    <div className="change-page">
      <button onClick={prevPage}>Prev Page</button>
      <button onClick={nextPage}>Next Page</button>
    </div>,
    <ul className="content-list">
      {items.map((item) => (
        <Item keyId={item.id}>
          <Image
            src={`https://image.tmdb.org/t/p/w400${
              item.poster_path || item.profile_path
            }`}
            alt={item.title || item.name}
          />
          <Title2 text={item.title || item.name} />
        </Item>
      ))}
    </ul>,
  ];
};

const Contents = ({
  typeContent,
  listType,
  language,
  page,
  prevPage,
  nextPage,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const url = generateURL(typeContent, listType, language, page);

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
        <ContentList items={items} prevPage={prevPage} nextPage={nextPage} />
      </div>
    );
  }
};

export default Contents;
