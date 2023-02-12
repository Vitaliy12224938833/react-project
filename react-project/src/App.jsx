import { Route, Routes } from "react-router-dom";

import StartPage from "./components/Start-page";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<StartPage />} />;
      </Routes>
    </>
  );
};
export default App;
