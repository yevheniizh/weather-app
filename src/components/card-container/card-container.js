import React from 'react';
import { connect } from 'react-redux';
import { useRouteMatch, Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Card from '../card';

import styles from './card-container.module.scss';
import animationStyles from './card-container-animation.module.scss';

function CardContainer({ cities }) {
  let match = useRouteMatch();

  if (Object.entries(cities).length === 0 && cities.constructor === Object) {
    return (
      <div>
        <h1>Add the first city</h1>
      </div>
    );
  }

  return (
    <>
      <TransitionGroup className={styles['card-container']}>
        {Object.values(cities).map((city) => (
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
  cities: state.cities,
});

export default connect(mapStateToProps)(CardContainer);
