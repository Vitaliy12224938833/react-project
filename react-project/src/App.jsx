import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AuthProvider } from './hoc/AuthProvider';
import { Homepage } from './assets/pages/Homepage';
import { Singlepage } from './assets/pages/Singlepage';
import { Categoris } from './components/Categoris';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Categoris children={<Homepage />} />} />
          <Route path=':content' element={<Categoris />}>
            <Route index element={<Homepage />} />
            <Route path='/:content/:categori' element={<Homepage />} />
            <Route path='/:content/:categori/:id' element={<Singlepage />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
};
export default App;
