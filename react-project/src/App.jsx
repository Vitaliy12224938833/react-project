import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AuthProvider } from './hoc/AuthProvider';
import { Homepage } from './assets/pages/Homepage';
import { Singlepage } from './assets/pages/Singlepage';
import { Categoris } from './components/Categoris';

export const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Categoris children={<Homepage />} />} />
          <Route path=':content' element={<Categoris />}>
            <Route index element={<Homepage />} />
            <Route path='/:content/:category' element={<Homepage />} />
            <Route
              path='/:content/:category/:name/:id'
              element={<Singlepage />}
            />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
};
