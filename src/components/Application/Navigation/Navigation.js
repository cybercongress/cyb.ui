import React from 'react';
import cx from 'classnames';
import { Text, Pane } from 'evergreen-ui';

const imgCyb = require('../../../img/cyb.svg');
const imgCybFail = require('../../../img/cybRed.svg');
const imgCybYellow = require('../../../img/cybYellow.svg');

const styles = require('./Navigation.less');

const Navigation = ({ children, isHome }) => (
    <div className={ cx(styles.navigation, { [styles.navigation__hide_lr]: isHome }) }>
        {children}
    </div>
);

export const NavigationLeft = ({ children }) => (
    <div className={ styles.navigation__left }>{children}</div>
);

export const NavigationRight = ({ children }) => (
    <div className={ styles.navigation__right }>{children}</div>
);

export const NavigationCenter = ({ children }) => (
    <div className={ styles.navigation__center }>{children}</div>
);

export const MenuButton = ({ status, ...props }) => {
    let stausImgCyb = imgCyb;

    switch (status) {
    case 'fail':
        stausImgCyb = imgCybFail;
        break;
    case 'local':
        stausImgCyb = imgCyb;
        break;
    default:
        stausImgCyb = imgCybYellow;
        break;
    }
    return (
        <Pane { ...props } display='flex' alignItems='center' cursor='pointer'>
            <Pane width={ 32 } height={ 32 } marginRight={ 10 }>
                <img className={ styles.imgCyb } src={ stausImgCyb } />
            </Pane>
            <Text fontSize='16px' className='text-menuButton' color='#ffffff'>
                My cyb
            </Text>
        </Pane>
    );
};

export default Navigation;
