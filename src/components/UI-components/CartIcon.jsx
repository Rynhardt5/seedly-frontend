import React from 'react';
import './CartIcon.scss';

import { Link } from 'react-router-dom';

const CartIcon = () => {
  return (
    <Link className="cart-icon__link" to="/cart">
      <div className="cart-icon__container">
        <svg
          className="cart-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 174.71 233.98"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                className="cart-icon__lines"
                d="M174.71,47.4a3.93,3.93,0,0,0-.06-.6.25.25,0,0,1,0-.08s0-.09,0-.14a2.4,2.4,0,0,0-.12-.38.74.74,0,0,0,0-.14s0-.05,0-.08a3.75,3.75,0,0,0-.24-.44.16.16,0,0,0,0-.07v0l0,0a3.47,3.47,0,0,0-.35-.43l0,0h0l-.07-.06-.35-.29-.1-.08-.07,0a3,3,0,0,0-.44-.23l-.09,0h0l-.1,0L172,44l-.08,0h-.13a3.29,3.29,0,0,0-.44-.05H131.67A44.32,44.32,0,0,0,43,43.9H3.39A3.29,3.29,0,0,0,3,44H2.82l-.08,0a4.42,4.42,0,0,0-.48.15.32.32,0,0,0-.09,0h0l-.09,0a2.93,2.93,0,0,0-.43.23l-.07,0-.11.08c-.12.09-.23.19-.34.29L1,45a3.47,3.47,0,0,0-.35.43l0,0v0l0,.06A3.21,3.21,0,0,0,.31,46a.59.59,0,0,0,0,.08l-.05.14c0,.12-.08.25-.11.38s0,.09,0,.14a.19.19,0,0,0,0,.08,3,3,0,0,0-.06.6V230.48A3.5,3.5,0,0,0,3.5,234H171.21a3.5,3.5,0,0,0,3.5-3.5V47.4Zm-43.05,40,0-7.23a44.17,44.17,0,0,0-11-29.24h42.19L147.44,66.22l0,0a3.56,3.56,0,0,0-.39.48l0,0,0,.08a3,3,0,0,0-.23.44s0,0,0,.08a.56.56,0,0,0,0,.12,2.91,2.91,0,0,0-.12.39c0,.05,0,.09,0,.13a.22.22,0,0,1,0,.08,3.87,3.87,0,0,0-.05.49V87.37Zm-6.91,13.24a3.43,3.43,0,1,1-6.85,0V80.46a30.55,30.55,0,0,0-61.1,0V100.6a3.43,3.43,0,1,1-6.85,0V91.13a3.59,3.59,0,0,0,0-1.41V80.14a37.33,37.33,0,1,1,74.66,0l.08,10.67s0,0,0,0v0ZM110.9,86.93H63.8V80.46a23.55,23.55,0,0,1,47.1,0Zm-91-18.19-7.08,7.38L7,82.17V55.85L16.17,65Zm1.33,8.73.07-.08V87l-9.41.19Zm7.07-8.78h0v0a.28.28,0,0,0,0-.09,2.63,2.63,0,0,0-.05-.49.22.22,0,0,0,0-.08.79.79,0,0,0,0-.13,2.91,2.91,0,0,0-.12-.39.56.56,0,0,0,0-.12.59.59,0,0,0,0-.08,3.68,3.68,0,0,0-.23-.44l-.05-.09h0a3.56,3.56,0,0,0-.39-.48l0,0L12,50.9H54A44.13,44.13,0,0,0,43,80.14v6.79H28.29V68.69ZM64,42.44a23.54,23.54,0,0,1,46.89.2A44.2,44.2,0,0,0,64,42.44Zm96.31,32-5.48-5.71,12.89-12.89V82.17Zm-6.88,2.94,9.57,10h-9.57ZM87.35,7a37.37,37.37,0,0,1,37.32,36.9H118a30.53,30.53,0,0,0-61,0H50A37.36,37.36,0,0,1,87.35,7Zm80.36,220H7V94.29l17.82-.36H43v6.67a10.43,10.43,0,1,0,20.85,0V93.93h47.1v6.67a10.43,10.43,0,1,0,20.85,0v0l0-6.2h36Z"
              />
              <path
                className="cart-icon__shell"
                d="M114.36,149.72a1.16,1.16,0,0,0-1.11-.79c-13.3,0-22.72,23-25.9,41.7-3.17-18.68-12.59-41.7-25.89-41.7a1.17,1.17,0,0,0-1.12.79c-7.74,22.44-1.55,36.1,2.84,42.25a29.92,29.92,0,0,0,48.35,0C115.92,185.82,122.11,172.16,114.36,149.72ZM79,197a1.18,1.18,0,0,1-1.54.64A23.92,23.92,0,0,1,67,189.24c-5.52-7.74-7-18.81-4.18-31.16a1.18,1.18,0,0,1,2.3.53c-2.68,11.68-1.33,22.07,3.8,29.26a21.62,21.62,0,0,0,9.45,7.6A1.18,1.18,0,0,1,79,197Z"
              />
              <path
                className="cart-icon__seed"
                d="M87.35,179.76C90.52,168.3,95.73,157,102.61,151c-3.12-10.72-8.86-17.42-15.26-17.42S75.21,140.32,72.1,151C79,157,84.18,168.3,87.35,179.76ZM76.68,152.13c1.56-5.31,3.81-9.52,6.35-11.83A1.17,1.17,0,1,1,84.62,142c-2.19,2-4.26,5.93-5.69,10.76a1.18,1.18,0,0,1-1.12.85,1.33,1.33,0,0,1-.34,0A1.17,1.17,0,0,1,76.68,152.13Z"
              />
            </g>
          </g>
        </svg>

        {/* <div className="cart-icon__items__number">{total}</div> */}
      </div>
    </Link>
  );
};

export default CartIcon;
