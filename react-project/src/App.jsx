import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Homepage } from './pages/HomePages/Homepage';
import { Listpage } from './pages/Listpage';
import { Moviespage } from './pages/Moviespage';
import { Personpage } from './pages/Personpage';
import { Searchpage } from './pages/Searchpage';
import { Serialspage } from './pages/Serialspage';
import { CreateProfilepage } from './pages/CreateProfilepage';
import { ThemeProvider } from '@mui/material/styles';
import { Seasonpage } from './pages/Seasonpage';
import { theme } from './Context/Context';
import { SavedListPage } from './pages/HomePages/SavedListPage';
import { AllSavedMediaPage } from './pages/HomePages/AllSavedMediaPage';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='home' element={<Homepage />}>
            <Route index element={<AllSavedMediaPage />} />
            <Route path='all' element={<AllSavedMediaPage />} />
            <Route path=':mediaType/:listType' element={<SavedListPage />} />
          </Route>
          <Route path='create-profile' element={<CreateProfilepage />} />
          <Route path='/:mediaType/:category' element={<Listpage />} />
          <Route path='/movie/:name/:id' element={<Moviespage />} />
          <Route path='/tv/:name/:id' element={<Serialspage />} />
          <Route path='/season/:name/:id/:seasonNum' element={<Seasonpage />} />
          <Route path='/person/:name/:id' element={<Personpage />} />
          <Route path='/search/:mediaType/:query' element={<Searchpage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
