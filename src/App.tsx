import { FC, memo, ReactNode } from 'react';

import styles from './App.scss';

interface AppProps {
  children: ReactNode;
}

export const App: FC<AppProps> = memo(({ children }) => {
  return <main className={styles.Container}>{children}</main>;
});

App.displayName = 'App';
