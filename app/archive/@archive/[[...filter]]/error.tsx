'use client';

import { FC } from 'react';

type Props = {
  error: Error;
};

const FilterError: FC<Props> = ({ error }) => {
  return (
    <div id="error">
      <h2>An error occurred!</h2>
      <p>{error.message}</p>
    </div>
  );
};

export default FilterError;
