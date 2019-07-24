import * as React from 'react';
import styles from './ProgressBar.less';
import cx from 'classnames';

// const NumberText = [
//   {
//     id: 1,
//     number: '1',
//     text: 'Registry initialization',
//   },
//   {
//     id: 2,
//     number: '2',
//     text: 'Schema definition',
//   },
//   {
//     id: 3,
//     number: '3',
//     text: 'Contract code saving',
//   },
// ];

export default class CircleLable extends React.Component {
  render() {
    // const { visible } = this.state;
    const {number, type, text, children} = this.props;
    const circleless = cx(styles.circle, { [styles.done] : type === "complete", [styles.doneGreen] : type === "edit"} );
    return (
        
        <div key={number} className={styles.NumberText}>
       
          <div className={circleless}>
          
            <span className={styles.label}>
            {children}
              {number}
              
            </span>
          </div>
          <span className={styles.title}>{text}</span>
        </div>
  
    );
  }
}
