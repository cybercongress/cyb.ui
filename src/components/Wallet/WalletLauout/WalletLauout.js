import React from 'react';

const styles = require('./WalletLauout.less');
// import './WalletLauout.less';

export const WalletLauout = props => (
    <div { ...props } className={styles.wallet_lauout} />
);


export const WalletSidebar = props => (
    <div { ...props } className={styles.wallet_lauout__sidebar} />
);

export const WalletContent = props => (
    <div { ...props } className={styles.wallet_lauout__content} />
);
