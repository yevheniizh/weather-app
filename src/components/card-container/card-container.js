import React from 'react';
import { connect } from 'react-redux';
import { useRouteMatch, Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Card from '../card';

import styles from './card-container.module.scss';
import animationStyles from './card-container-animation.module.scss';
import {
  citiesInfoSelector,
  citiesLoadingSelector,
  citiesLoadedSelector,
} from '../../redux/selectors';

function CardContainer({ loading, loaded, citiesInfo }) {
  let match = useRouteMatch();

  if (
    Object.entries(citiesInfo).length === 0 &&
    citiesInfo.constructor === Object
  ) {
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
        {Object.entries(citiesInfo).map(([city, info]) => (
          <CSSTransition
            key={city}
            timeout={500}
            classNames={animationStyles}
            className={styles['card-container__item']}
          >
            <Link to={`${match.path}/${city}`}>
              <Card key={city} city={city} info={info} />
            </Link>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
}

const mapStateToProps = (state) => ({
  loading: citiesLoadingSelector(state),
  loaded: citiesLoadedSelector(state),
  citiesInfo: citiesInfoSelector(state),
});

export default connect(mapStateToProps)(CardContainer);
