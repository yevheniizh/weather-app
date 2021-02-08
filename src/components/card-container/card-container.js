import React from 'react';

import Card from '../card';

import styles from './card-container.module.scss';

function CardContainer() {
  return (
    <div className={styles['card-container']}>
      <Card />
      <Card city={'Kharkiv'} />
      <Card city={'New York'} />
      <Card city={'Oslo'} />
    </div>
  );
}

export default CardContainer;
