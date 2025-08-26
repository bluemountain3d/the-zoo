import { useContext } from 'react';
import './Animal.scss';
import { AnimalsContext } from '../../contexts/animalsContext';
import { useParams } from 'react-router';

export const Animal = () => {
  const { animals } = useContext(AnimalsContext);
  const { id } = useParams();

  const animal = animals.find(a => a.id === +(id || 0));

  if (!animal) {
    return <p>Tyvärr! Hittar inte djuret. Det kanske sover...</p>
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
            <p className='animal__subtitle'>{animal.latinName}</p>
          </hgroup>
          <p className="animal__description">{animal.longDescription}</p>
          <div className="animal__status">
            <div className="animal__last-fed">
              {/* 
                - När ett djur inte har fått mat på tre timmar skall en indikation på att djuret snart behöver matas visas.
              */}
              {animal.lastFed}
            </div>
            <button 
              className="animal__feed-btn"
            >
              {/* 
                - Om ett djur inte har fått mat på fyra timmar skall knappen Mata gå att klicka på.
                - Om ett djur har fått mat inom fyra timmar skall knappen vara oklickbar.
              */}
              Mata
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
};


// export type Animal = {
//   id: number;
//   name: string;
//   latinName: string;
//   yearOfBirth: number;
//   shortDescription: string;
//   longDescription: string;
//   imageUrl: string;
//   medicine: string;
//   isFed: boolean;
//   lastFed: string
// }