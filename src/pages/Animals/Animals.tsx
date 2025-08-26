import { Link, useLoaderData } from 'react-router';
import './Animals.scss';
import type { AnimalsLoader } from '../../loaders/animalsLoader';

export const Animals = () => {
  const { animals } = useLoaderData() as AnimalsLoader

  return (
    <section className="animals">
      <div className="animals__heading container-boxed">
        <h1 className='animals__title'>Våra djur</h1>
      </div>
      <div className="container-boxed animals__inner">
        <ul className="animals__list">
          {animals.map((a) => (
            <li key={a.id} className="animals__item">
              <Link to={`/animal/${a.id}`} className='animals__image-link'>
                <picture className='animals__image-wrapper'>
                  <img 
                    src={a.imageUrl} 
                    alt={`Bid på ${a.name} (${a.latinName})`}
                    className='animals__image'
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.jpeg'
                    }}
                    width="256"
                  />
                </picture>
              </Link>
              <div className='animals__details'>
                <hgroup className='animals__item-heading'>
                  <h2 className='animals__item-title'>{a.name}</h2>
                  <p className='animals__item-subtitle'>({a.latinName})</p>
                </hgroup>
                <p className='animals__item-description'>{a.shortDescription}</p> 
                <div className='animals__item-status-bar'>
                  <div className="animals__item-status">
                    Här ska status om det är dags att mata stackarn vara
                  </div>
                </div>
                <Link to={`/animal/${a.id}`} className='animals__go-to-btn'>
                    Visa mer information om djuret
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};