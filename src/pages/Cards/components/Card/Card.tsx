import { FC, memo, useLayoutEffect, useState } from 'react';

import styles from './Card.scss';

interface CardsProps {
  isOpened: boolean;
  openCard: (name: string) => void;
  pair: { name: string };
}

const CLOSE_TIMEOUT = 500; // ms

const Card: FC<CardsProps> = ({ isOpened, openCard, pair }) => {
  const [isOpen, setIsOpen] = useState(false);

  useLayoutEffect(() => {
    let closeCardTimeoutId: NodeJS.Timeout;

    if (!isOpened) {
      setIsOpen(false);

      // closeCardTimeoutId = setTimeout(() => {
      //   setIsOpen(false);
      // }, CLOSE_TIMEOUT);
    }

    return () => {
      if (closeCardTimeoutId) {
        clearTimeout(closeCardTimeoutId);
      }
    };
  }, [isOpened, isOpen]);

  return (
    <div className={styles.Container}>
      {!isOpen ? (
        <button
          className={styles.Button}
          onClick={() => {
            setIsOpen(true);
            openCard(pair.name);
          }}
          type="button"
        >
          Click
        </button>
      ) : (
        <span className={styles.CardText}>{pair.name}</span>
      )}
    </div>
  );
};

export default memo(Card);
