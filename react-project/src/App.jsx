import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AuthProvider } from './hoc/AuthProvider';
import { Homepage } from './assets/pages/Homepage';
import { Listpage } from './assets/pages/Listpage';
import { Singlepage } from './assets/pages/Singlepage';
import { Categoris } from './components/Categoris';
import { Personpage } from './assets/pages/Personpage';
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
