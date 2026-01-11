import { useContext } from 'react';
import { AnimalsContext } from '../../contexts/animalsContext';
import { useParams } from 'react-router';
import { getFeedingStatus } from '../../utils/getFeedingStatus';
import { AnimalActionType } from '../../reducers/animalReducer';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import { formatNamePossession } from '../../utils/formatNamePossession';
import { Button } from '../../components/Button';

export const Animal = () => {
  const context = useContext(AnimalsContext);
  const { id } = useParams();

  // Null-check för att se om context existerar.
  if (!context) {
    return <ErrorMessage message='Ett fel uppstod: data kunde inte laddas.' />;
  }

  // Check för att kolla så id inte är undefined
  if (!id) {
    return <ErrorMessage message='Inget djur specificerat.' />;
  }

  // Destrukturera om context finns
  const { animals, dispatch } = context;

  // Hitta enskilt djur från listan med djur med id från params
  const animal = animals.find((a) => a.id === +(id || '-1'));

  // Check om jur finns
  if (!animal) {
    return (
      <ErrorMessage
        message='Tyvärr! Hittar inte djuret. Det kanske sover...'
        linkText='Gå tillbaka till våra djur'
        linkUrl='/animals'
      />
    );
  }

  const feedingStatus = getFeedingStatus(animal.lastFed, 'detail');

  const handleFeed = () => {
    if (animal && feedingStatus.canFeed) {
      dispatch({
        type: AnimalActionType.feedAnimal,
        payload: animal.id.toString(),
      });
    }
  };

  return (
    <section className='animal page-section'>
      <div className='animal__hero'>
        <div className='animal__hero-content container-boxed'>
          <hgroup className='animal__heading heading-group-xl'>
            <h1 className='animal__title heading-group__title'>
              {formatNamePossession(animal.name)} sida
            </h1>
            {/* <p className="animal__subtitle heading-group__subtitle">({animal.latinName})</p> */}
          </hgroup>
        </div>
      </div>

      <div className='container-boxed animal__inner'>
        <div className='animal__presentation'>
          <div className='animal__image-wrapper'>
            <picture>
              <img
                src={animal.imageUrl}
                alt={`Bild på djuret ${animal.name}`}
                className='animal__image'
                onError={(e) => {
                  e.currentTarget.src =
                    import.meta.env.BASE_URL + 'placeholder.avif';
                }}
              />
            </picture>
          </div>

          <div className='animal__details'>
            <p className='animal__label'>Fakta om {animal.name}:</p>
            <p className='animal__description'>{animal.longDescription}</p>
            <div className='animal__status-wrapper'>
              <div className='animal__status'>
                <div
                  className={`animal__last-fed ${feedingStatus.statusClass}`}>
                  <p className='animal__label'>Senast matad:</p>
                  <p className='animal__time'>
                    {feedingStatus.lastFedFormatted}
                  </p>
                  <p
                    className={`animal__status-message ${feedingStatus.statusClass}`}>
                    {`${animal.name} ${feedingStatus.statusMessage}`}
                  </p>
                </div>

                <div
                  className={`animal__next-feed ${feedingStatus.statusClass}`}>
                  <p className='animal__label'>Kan matas igen:</p>
                  <p className='animal__time'>{feedingStatus.canFeedAgain}</p>
                  {feedingStatus.canFeed
                    ? `Nu kan ${animal.name} få mat igen`
                    : ''}
                </div>
              </div>

              <Button
                variant='primary'
                className={`animal__feed-btn ${feedingStatus.statusClass}`}
                onClick={handleFeed}
                fullWidth={true}
                disabled={!feedingStatus.canFeed}>
                Ge {animal.name} mat!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
