import { memo, useCallback, useState } from 'react';

import { arrayShuffle } from '@services';

import { Card } from './components';

import styles from './Cards.scss';

const list = [{ name: 'Test' }, { name: 'Gest' }, { name: 'Rest' }, { name: 'Nest' }];

const pairs = arrayShuffle([...list, ...list]);

const Cards = () => {
  const [openPairs, setOpenPairs] = useState<Record<string, number>>({});

  const openCard = useCallback((name: string) => {
    setOpenPairs((prevState) => {
      const newState = { ...prevState };

      if (newState[name] === 1) {
        newState[name] = 2;
      } else {
        const canOpen = Object.keys(newState).every((key) => newState[key] !== 1);

        if (canOpen) {
          newState[name] = 1;
        } else {
          newState[name] = 0;

          Object.keys(newState).forEach((key) => {
            if (newState[key] !== 2) {
              newState[key] = 0;
            }
          });
        }
      }

      return newState;
    });
  }, []);

  return (
    <div className={styles.Container}>
      {pairs.map((pair, index) => (
        <Card key={index} openCard={openCard} pair={pair} isOpened={!!openPairs?.[pair.name]} />
      ))}
    </div>
  );
};

export default memo(Cards);
