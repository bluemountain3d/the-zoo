import { Outlet } from 'react-router';
import './Layout.scss';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};