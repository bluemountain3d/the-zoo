import { createBrowserRouter } from 'react-router';
import { Layout } from './pages/Layout/Layout';
import { Animal } from './pages/Animal/Animal';
import { Animals } from './pages/Animals/Animals';
import { Home } from './pages/Home/Home';
import { animalsLoader } from './loaders/animalsLoader';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';

export const appRouter = createBrowserRouter(
  [
    {
      path: '/',
      loader: animalsLoader,
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'animals',
          element: <Animals />,
        },
        {
          path: 'animal/:id',
          loader: animalsLoader,
          element: <Animal />,
          // errorElement: <AnimalNotFound />
        },
      ],
      errorElement: <ErrorPage />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);
