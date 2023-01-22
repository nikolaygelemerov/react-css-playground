import { memo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import pages, { NotFound } from '@pages';
import { App } from '@root/App';

const Router = () => {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          {pages.map(({ Cmp, route }) => (
            <Route element={<Cmp />} key={route} path={route} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
};

export default memo(Router);
