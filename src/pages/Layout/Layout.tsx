import { Outlet, useLoaderData } from 'react-router';
// import './Layout.scss';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import type { AnimalsLoader } from '../../loaders/animalsLoader';
import { AnimalsProvider } from '../../contexts/AnimalsProvider';

export const Layout = () => {
  const { animals } = useLoaderData() as AnimalsLoader;

  // Omsluter applikationens innehåll med AnimalsProvider för att ge tillgång till det delade animals-statet.
  return (
    <AnimalsProvider initialAnimals={animals}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </AnimalsProvider>
  );
};