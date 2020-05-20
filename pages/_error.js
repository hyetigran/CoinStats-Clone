import React from "react";

const Error = ({ statusCode }) => {
  let errorMessage = "An unexpected error occured";

  if (statusCode === 404) {
    errorMessage = "Page could not be found";
  }

  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{errorMessage}</p>
    </div>
  );
};

export default Error;
