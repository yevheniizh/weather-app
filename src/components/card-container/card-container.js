import React from 'react';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Card from '../card';

import styles from './card-container.module.scss';
import animationStyles from './card-container-animation.module.scss';

function CardContainer({ cities }) {
  if (Object.entries(cities).length === 0 && cities.constructor === Object) {
    return (
      <div>
        <h1>Add the first city</h1>
      </div>
    );
  }

  return (
    <TransitionGroup className={styles['card-container']}>
      {Object.values(cities).map((city) => (
        <CSSTransition key={city} timeout={500} classNames={animationStyles}>
          <Card key={city} city={city} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

const mapStateToProps = (state) => ({
  cities: state.cities,
});

export default connect(mapStateToProps)(CardContainer);
