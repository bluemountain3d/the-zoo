import { useLoaderData } from 'react-router';
import './Animals.scss';
import type { AnimalsLoader } from '../../loaders/animalsLoader';

export const Animals = () => {
  const { animals } = useLoaderData() as AnimalsLoader

  return (
    <section>
      <h1>Våra djur</h1>
      <div>
        {animals.map((a) => (
          <article key={a.id}>
            <picture>
              <img 
                src={a.imageUrl} 
                alt={`Bid på ${a.name} (${a.latinName})`}
                width="256"
              />
            </picture>
            <hgroup>
              <h2>{a.name}</h2>
              <p>({a.latinName})</p>
            </hgroup>
          </article>
        ))}
      </div>
    </section>
  );
};