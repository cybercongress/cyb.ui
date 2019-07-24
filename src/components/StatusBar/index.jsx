import * as React from 'react';

const styles = require("./StatusBar.less");

// TODO: move in browser
const StatusBar = ({ open, message, type = 'processing', onClose }) => (
    <div style={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          display: open ? 'flex' : 'none',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '50px',
          color: '#fff'
        }}
      className={styles.container + ' ' + styles['container' + type]}
    >
        <div className={styles.message + ' ' + styles['message' + type]}>{message}</div>
        {type === 'error' && <button onClick={onClose} className={styles.button + ' ' + styles.buttonError}>try again</button>}
        {type === 'success' && <button onClick={onClose} className={styles.button+ ' ' + styles.Buttonuccess}>go to registry</button>}
    </div>
);

export default StatusBar;
