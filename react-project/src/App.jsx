import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { AuthProvider } from './hoc/AuthProvider';
import { Homepage } from './pages/Homepage';
import { Listpage } from './pages/Listpage';
import { Singlepage } from './pages/Singlepage';
import { Personpage } from './pages/Personpage';
import { Searchpage } from './pages/Searchpage';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Context/Context';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path='home' element={<Homepage />} />
            <Route index element={<Listpage />} />
            <Route path='/:mediaType/:category' element={<Listpage />} />
            <Route path='/:mediaType/:name/:id' element={<Singlepage />} />
            <Route path='/person/:name/:id' element={<Personpage />} />
            <Route path='/search/:mediaType/:query' element={<Searchpage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
};
