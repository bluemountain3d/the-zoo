import { Link } from 'react-router';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import { useContext } from 'react';
import { AnimalsContext } from '../../contexts/animalsContext';
import { Button } from '../../components/Button';

export const Home = () => {
  const context = useContext(AnimalsContext);

  // Null-check för att se om context existerar.
  if (!context) {
    return <ErrorMessage message='Ett fel uppstod: data kunde inte laddas.' />;
  }

  // Destrukturera om context finns
  const { animals } = context;

  // Sortera ut tre random djur från animals-listan
  const featuredAnimals = [...animals]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <section className='page-section home'>
      <div className='home__hero'>
        <div className='container-boxed home__hero-content'>
          <hgroup className='home__hero-heading heading-group-xl'>
            <h1 className='heading-group__title'>Välkommen till Vårt Zoo</h1>
            <p className='heading-group__subtitle'>
              Upptäck fantastiska djur från hela världen
            </p>
          </hgroup>
          <Button to='/animals' variant='overlay' className='home__cta-button'>
            Se våra djur
          </Button>
        </div>
      </div>

      <div className='container-boxed home__highlight'>
        <h2 className='heading-lg home__highlight-heading'>Populära djur</h2>
        <div className='home__featured-animals'>
          {featuredAnimals.map((animal) => (
            <Link to={`/animal/${animal.id}`} key={animal.id}>
              <article className='featured-animal'>
                <div className='featured-animal__image-wrapper'>
                  <picture>
                    <img
                      src={animal.imageUrl}
                      alt={`Bild på djuret ${animal.name}`}
                      className='featured-animal__image'
                      onError={(e) => {
                        e.currentTarget.src =
                          import.meta.env.BASE_URL + 'placeholder.avif';
                      }}
                    />
                  </picture>
                </div>
                <hgroup className='featured-animal__heading heading-group-sm'>
                  <h3 className='featured-animal__title heading-group__title'>
                    {animal.name}
                  </h3>
                  <p className='featured-animal__subtitle heading-group__subtitle'>
                    ({animal.latinName})
                  </p>
                </hgroup>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
