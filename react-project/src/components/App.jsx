import { useState } from "react";
import Movies from "../Movies-list";
import Header from "./Header";
import typeMovies from "./types";

const App = () => {
  const [typeMovie, setType] = useState(typeMovies[0]);
  console.log(typeMovie);
  return [
    <header>
      <nav>
        <ul>
          {typeMovies.map((type) => {
            const marker = type.id === typeMovie.id ? "marker" : "";
            return (
              <Header
                className={marker}
                key={type.id}
                click={setType}
                type={type}
              >
                {type.name}
              </Header>
            );
          })}
        </ul>
      </nav>
    </header>,
    <main>
      <div>
        <Movies startPage={1} listType={typeMovie.type} language={"ru"} />
      </div>
    </main>,
  ];
};

export default App;
