import { ReactElement } from 'react';
import React from 'react';
import { useRouteError } from 'react-router-dom';
import { isRouteErrorResponse } from 'react-router-dom';

export const ErrorPage = (): ReactElement => {
  const error = useRouteError();
  console.error(error);
  if (isRouteErrorResponse(error)) {
    return (
      <div className="error-page">
        <h1>Oops!</h1>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
      </div>
    );
  } else {
    return <div>Oops</div>;
  }
};
