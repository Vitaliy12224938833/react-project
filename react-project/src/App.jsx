import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AuthProvider } from './hoc/AuthProvider';
import { Homepage } from './assets/pages/Homepage';
import { Singlepage } from './assets/pages/Singlepage';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/:content' element={<Homepage />} />
          <Route path='/:content/:id' element={<Singlepage />} />
        </Route>
        ;
      </Routes>
    </AuthProvider>
  );
};
export default App;
