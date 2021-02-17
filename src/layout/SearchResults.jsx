import React, { useState, useLayoutEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import './SearchResults.scss';

const SearchResults = ({ seeds }) => {
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    setLoading(true);

    return () => setLoading(false);
  }, []);

  return (
    <CSSTransition
      in={loading}
      timeout={300}
      mountOnEnter
      unmountOnExit
      classNames="search-results__open"
    >
      <div className="search-results">
        <ul className="search-results__list">
          {seeds.map((seed) => (
            <li key={seed.id} className="search-results__item">
              <div className="search-results__info">
                <img
                  src={seed.imageUrl}
                  alt={seed.name}
                  className="search-results__img"
                />
                <div>
                  <h4 className="search-results__name">{seed.name}</h4>
                  <p className="search-results__scientific-name">
                    {seed.scientificName}
                  </p>
                </div>
              </div>

              <div className="search-results__btn-group">
                <h3 className="search-results__price">
                  $ {seed.price.toFixed(2)}
                </h3>
                <button className="search-results__button">Add to cart</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </CSSTransition>
  );
};

export default SearchResults;
