import { useContext } from 'react';
import './Animal.scss';
import { AnimalsContext } from '../../contexts/animalsContext';
import { useParams } from 'react-router';
import { getFeedingStatus } from '../../utils/getFeedingStatus';
import { AnimalActionType } from '../../reducers/animalReducer';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';

export const Animal = () => {
  const context = useContext(AnimalsContext);
  const { id } = useParams();

  // Null-check för att se om context existerar.
  if (!context) {
    return <ErrorMessage message="Ett fel uppstod: data kunde inte laddas." />;
  }

  // Check för att kolla så id inte är undefined
  if (!id) {
    return <ErrorMessage message="Inget djur specificerat." />;
  }

  // Destrukturera om context finns
  const { animals, dispatch } = context;

  // Hitta enskilt djur från listan med djur med id från params
  const animal = animals.find(a => a.id === +(id || '-1'));

  // Check om jur finns 
  if (!animal) {
    return <ErrorMessage 
      message="Tyvärr! Hittar inte djuret. Det kanske sover..." 
      linkText="Gå tillbaka till våra djur"
      linkUrl="/animals"
    />;
  }

  const feedingStatus = getFeedingStatus(animal.lastFed, 'detail');

  const handleFeed = () => {
    if (animal && feedingStatus.canFeed) {
      dispatch({
        type: AnimalActionType.feedAnimal,
        payload: animal.id.toString()
      });
    }
  }

  return (
    <section className='animal'>
      <div className="container-boxed animal__inner">
        <div className="animal__image-wrapper">
          <picture>
            <img src={animal.imageUrl} alt={`Bild på djuret ${Image.name}`} className="animal__image" />
          </picture>
        </div>
        <div className="animal__details">
          <hgroup className='animal__heading'>
            <h2 className='animal__title'>{animal.name}</h2>
            <p className='animal__subtitle'>({animal.latinName})</p>
          </hgroup>
          <p className="animal__description">{animal.longDescription}</p>
          <div className="animal__status-wrapper">
            <div className="animal__status">
              <div className="animal__feed-status">
                <p className="animal__status-label">Senast matad:</p>
                <p className="animal__last-fed">{feedingStatus.lastFedFormatted}</p>
                <p className={`animal__status-message ${feedingStatus.statusClass}`}>
                  {feedingStatus.statusMessage}
                </p>
              </div>
              <div className="animal__feed-status">
                <p className="animal__status-label">Kan matas igen:</p>
                <p className="animal__last-fed">{feedingStatus.canFeedAgain}</p>
                {/* <p className="animal__status-message"></p> */}
              </div>            
            </div>
            <button 
              className={`animal__feed-btn ${feedingStatus.statusClass}`}
              onClick={handleFeed}
              disabled={!feedingStatus.canFeed}
            >
              Ge mat!
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};