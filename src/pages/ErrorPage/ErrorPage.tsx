// import { useRouteError } from 'react-router';

export const ErrorPage = () => {
  // const error = useRouteError();

  return (
    <section className='error-page page-section'>
      <h1 className="error-page__title heading-md">Oops! Något gick fel</h1>
      <p className="error-page__message">Ett fel inträffade när sidan skulle laddas</p>
      <a href="/" className="error-page__link">Tillbaka till startsidan</a>
    </section>
  );
};