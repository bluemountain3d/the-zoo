// import { useRouteError } from 'react-router';
import './ErrorPage.scss';

export const ErrorPage = () => {
  // const error = useRouteError();

  return (
    <section className='error-page'>
      <h1>Oops! Något gick fel</h1>
      <p>Ett fel inträffade när sidan skulle laddas</p>
      <a href="/">Tillbaka till startsidan</a>
    </section>
  );
};