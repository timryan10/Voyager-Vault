import React from 'react';

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="spinner-border" role="status">
      </div>
      <span className="sr-only ms-2">Loading...</span>
    </div>
  );
};

export default Loading;