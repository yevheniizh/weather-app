import React from 'react';

import Card from '../card';

import styles from './card-container.module.scss';

function CardContainer() {
  return (
    <div className={styles['card-container']}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default CardContainer;
