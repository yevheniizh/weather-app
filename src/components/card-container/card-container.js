import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouteMatch, Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Card from '../card';

import styles from './card-container.module.scss';
import animationStyles from './card-container-animation.module.scss';
import {
  citiesSelector,
  citiesLoadingSelector,
  citiesLoadedSelector,
} from '../../redux/selectors';

function CardContainer({ cities, loading, loaded }) {
  let match = useRouteMatch();

  if (Object.entries(cities).length === 0 && cities.constructor === Object) {
    return (
      <div className={styles['card-container__no-cities']}>
        <div className={styles['card-container__no-cities_message']}>
          No cities yet. Add the first city 💅
        </div>
      </div>
    );
  }

  return (
    <>
      <TransitionGroup className={styles['card-container']}>
        {Object.keys(cities).map((city) => (
          <CSSTransition
            key={city}
            timeout={500}
            classNames={animationStyles}
            className={styles['card-container__item']}
          >
            <Link to={`${match.path}/${city}`}>
              <Card key={city} city={city} />
            </Link>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
}

const mapStateToProps = (state) => ({
  // cities: state.cities,
  cities: citiesSelector(state),
  loading: citiesLoadingSelector(state),
  loaded: citiesLoadedSelector(state),
});

export default connect(mapStateToProps)(CardContainer);
