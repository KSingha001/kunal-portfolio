import React from 'react';

const Loader = () => (
  <div className="loader-screen" role="status" aria-live="polite">
    <div className="liquid-loader">
      <div className="loading-text">
        Loading<span className="dot">.</span><span className="dot">.</span><span className="dot">.</span>
      </div>
      <div className="loader-track" aria-hidden="true">
        <div className="liquid-fill" />
      </div>
    </div>
  </div>
);

export default Loader;
