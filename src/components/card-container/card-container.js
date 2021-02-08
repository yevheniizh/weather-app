import React from 'react';
import { connect } from 'react-redux';

import Card from '../card';

import styles from './card-container.module.scss';

function CardContainer({ cities }) {
  if (Object.entries(cities).length === 0 && cities.constructor === Object) {
    return (
      <div>
        <h1>Add the first city</h1>
      </div>
    );
  }

  return (
    <div className={styles['card-container']}>
      {Object.values(cities).map((city) => (
        <Card key={city} city={city} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  cities: state.cities,
});

export default connect(mapStateToProps)(CardContainer);
