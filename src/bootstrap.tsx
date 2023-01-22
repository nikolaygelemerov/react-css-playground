import ReactDOM from 'react-dom/client';

import Router from '@root/router';
import '@styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<Router />);
