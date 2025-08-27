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

  const dateTransform = (dateStr) => {
    const date = new Date(dateStr);

    return {
      date: date, // För tidsberäkningar
      display: date.toLocaleString('sv-SE', {
        year: 'numeric',
        month: '2-digit', 
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      }) // "2021-04-15 14:09"
    };
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
              {/* 
                - När ett djur inte har fått mat på tre timmar skall en indikation på att djuret snart behöver matas visas.
              */}
              <div className="animal__feed-status">
                <p className="animal__status-label">Senast matad:</p>
                <p className="animal__last-fed">{dateTransform(animal.lastFed).display}</p>
                <p className="animal__status-message">{/* Meddelande från logik */} Statusmeddelande</p>
              </div>
              <div className="animal__feed-status">
                <p className="animal__status-label">Kan matas igen:</p>
                <p className="animal__last-fed">{dateTransform(animal.lastFed).display}</p>
                <p className="animal__status-message">{/* Meddelande från logik */} Statusmeddelande</p>
              </div>            
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