import Cards from './Cards/Cards';
import Home from './Home/Home';

export { default as NotFound } from './NotFound/NotFound';

export default [
  { Cmp: Home, name: 'Home', route: '' },
  { Cmp: Cards, name: 'Cards', route: 'cards' }
];
