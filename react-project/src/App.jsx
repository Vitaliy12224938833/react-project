import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { AuthProvider } from './hoc/AuthProvider';
import { Homepage } from './pages/Homepage';
import { Listpage } from './pages/Listpage';
import { Singlepage } from './pages/Singlepage';
import { Categoris } from './components/Layout/Categoris';
import { Personpage } from './pages/Personpage';

export const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='home' element={<Homepage />} />
          <Route path=':content' element={<Categoris />}>
            <Route index element={<Listpage />} />
            <Route path='/:content/:category' element={<Listpage />} />
            <Route
              path='/:content/:category/:name/:id'
              element={<Singlepage />}
            />
          </Route>
          <Route path='/person/:category/:name/:id' element={<Personpage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};
