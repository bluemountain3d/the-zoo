import { Link } from 'react-router';
import './Animals.scss';
import { AnimalsContext } from '../../contexts/animalsContext';
import { useContext } from 'react';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import { getFeedingStatus } from '../../utils/getFeedingStatus';

export const Animals = () => {
  const context = useContext(AnimalsContext);

  // Null-check för att se om context existerar.
  if (!context) {
    return <ErrorMessage message="Ett fel uppstod: data kunde inte laddas."/>;
  }

  // Destrukturera om context finns
  const { animals } = context;

  return (
    <section className="animals">
      <div className="animals__heading container-boxed">
        <h1 className='animals__title'>Våra djur</h1>
      </div>
      <div className="container-boxed animals__inner">
        <ul className="animals__list">
          {animals.map((animal) => {

            const feedingStatus = getFeedingStatus(animal.lastFed, 'overview');

            return (
            <li key={animal.id} className="animals__item">
              <Link to={`/animal/${animal.id}`} className='animals__image-link'>
                <div className='animals__image-wrapper'>
                  <picture>
                    <img 
                      src={animal.imageUrl} 
                      alt={`Bid på ${animal.name} (${animal.latinName})`}
                      className='animals__image'
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.jpeg'
                      }}
                      width="256"
                    />
                  </picture>
                </div>
              </Link>
              <div className='animals__details'>
                <hgroup className='animals__item-heading'>
                  <h2 className='animals__item-title'>{animal.name}</h2>
                  <p className='animals__item-subtitle'>({animal.latinName})</p>
                </hgroup>
                <p className='animals__item-description'>{animal.shortDescription}</p> 
                <div className='animals__item-status-bar'>
                  <div className="animals__item-status">
                    Status: <span className={feedingStatus.statusClass}>{feedingStatus.statusMessage}</span>
                  </div>
                </div>
                <Link to={`/animal/${animal.id}`} className='animals__go-to-btn'>
                    Visa mer information om djuret
                </Link>
              </div>
            </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};