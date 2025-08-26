import { Outlet, useLoaderData } from 'react-router';
import './Layout.scss';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { AnimalsContext } from '../../contexts/animalsContext';
import type { AnimalsLoader } from '../../loaders/animalsLoader';

export const Layout = () => {
  const { animals } = useLoaderData() as AnimalsLoader;

  return (
    <AnimalsContext.Provider value={{animals}}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </AnimalsContext.Provider>
  );
};