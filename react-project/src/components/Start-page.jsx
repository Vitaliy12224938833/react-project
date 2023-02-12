import { useState } from "react";
import Contents from "./Movies-list";
import Header from "./Header";
import { contentTypes } from "./types";
import Link from "./Link";
import Item from "./item";

const TypeList = ({ changeType, types, currType, children, startMarker }) => {
  return (
    <ul>
      {children}
      {types.map((type) => {
        const marker = type.id === currType.id ? "marker" : "";
        return (
          <Link onClick={() => changeType(type, currType)}>
            <Item className={marker || startMarker} keyId={type.id}>
              {type.name}
            </Item>
          </Link>
        );
      })}
    </ul>
  );
};

const StartPage = () => {
  const [typeContent, setTypeContent] = useState(contentTypes[0]);
  const [typeMovie, setType] = useState(typeContent.categories[0]);
  const [page, setPage] = useState(1);
  const [marker, setMarker] = useState("");

  const nextPage = () => setPage((currPage) => currPage + 1);

  const ptevPage = () =>
    setPage((currPage) => {
      if (page === 1) return currPage;
      return currPage - 1;
    });

  const changeContent = (type) => {
    setType(typeContent.categories[0]);
    if (type.type === "popular") setMarker("marker");
    return setTypeContent(type);
  };

  const changeType = (type) => {
    setPage(1);
    return setType(type);
  };
  return [
    <Header>
      <TypeList
        changeType={changeContent}
        types={contentTypes}
        currType={typeContent}
        startMarker={marker}
      >
        <li className="logo">
          <a>Wochko</a>
        </li>
      </TypeList>
      <TypeList
        changeType={changeType}
        types={typeContent.categories}
        currType={typeMovie}
        startMarker={marker}
      />
    </Header>,
    <div className="gradient-line"></div>,
    <main>
      <div className="conteiner">
        <Contents
          typeContent={typeContent.type}
          page={page}
          listType={typeMovie.type}
          language={"ru"}
          prevPage={ptevPage}
          nextPage={nextPage}
        />
      </div>
    </main>,
  ];
};

export default StartPage;
