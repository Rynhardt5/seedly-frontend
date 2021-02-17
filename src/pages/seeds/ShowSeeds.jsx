import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSeeds, clearSeedItem } from "../../redux/actions/seedActions";
import LoadingSpinner from "../../components/UI-components/LoadingSpinner";

import "./ShowSeeds.scss";

import SeedCard from "./SeedCard";

const ShowProducts = () => {
  const dispatch = useDispatch();
  const seeds = useSelector((state) => state.seed.collection);
  const filteredCollection = useSelector(
    (state) => state.seed.filteredCollection
  );
  const seedItem = useSelector((state) => state.seed.item);

  useEffect(() => {
    if (seedItem) {
      dispatch(clearSeedItem());
    }
  }, [dispatch, seedItem]);

  useEffect(() => {
    if (!seeds) {
      dispatch(getSeeds());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!seeds) {
    return <LoadingSpinner asOverlay />;
  }

  if (seeds.length === 0) {
    return <div>No seeds found in database</div>;
  }

  if (filteredCollection) {
    const seedList = filteredCollection.map((seed) => (
      <SeedCard key={seed.id} id={seed.id} seed={seed} />
    ));

    return <div className="show-products">{seedList}</div>;
  }

  const seedList = seeds.map((seed) => (
    <SeedCard key={seed.id} id={seed.id} seed={seed} />
  ));

  return <div className="show-products">{seedList}</div>;
};

export default ShowProducts;
