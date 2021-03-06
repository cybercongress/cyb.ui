import React from 'react';

import styles from './TxQueue.less';

export const Hash = ({ children, ...props }) => (
	<span {...props} className={styles.hash}>
		{children}
	</span>
);
