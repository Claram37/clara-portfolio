import { Outlet } from 'react-router';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';

// Shared page shell; the current route renders into <Outlet />
const App = () => {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
