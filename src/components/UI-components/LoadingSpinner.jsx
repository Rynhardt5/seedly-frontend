import React from 'react';

import './LoadingSpinner.css';

const LoadingSpinner = ({ asOverlay }) => {
  return (
    <div className={asOverlay && `lds-overlay`}>
      <svg
        className="seedly-loader"
        width="100"
        height="100"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 260.83 223.23"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill="#85C7B7"
              className="cls-1"
              d="M97.94,87.31s13.74-25.71-10.63-55.4S0,0,0,0,11.52,13.74,27,56.28C37.67,82,67.81,85.53,92.62,90.85L78.23,58.9Z"
            />
            <path
              fill="#85C7B7"
              className="cls-1"
              d="M114.42,109.47s-9-45.18,21.52-73.62S260.83,4.05,260.83,4.05s-20.32,25.32-23.4,32.41-22,45.27-26.9,49.27-14.13,20-50.91,23.62L122.85,113l23.81-43.5Z"
            />
            <path
              fill="#85C7B7"
              className="cls-1"
              d="M95.73,223.23h14.18S95.12,132.49,142.65,76.15c0,0-29.09,32.08-32.91,52,0,0-6.15-38.56-25.76-59,0,0,25.17,45.21,17.82,81.93S95.73,223.23,95.73,223.23Z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default LoadingSpinner;
