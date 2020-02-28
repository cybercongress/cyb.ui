import React from 'react';

import styles from './table.less';

export const Table = props => (
    <table { ...props } className={ styles.table } />
);

