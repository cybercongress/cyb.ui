import * as React from 'react';
import { Pane, Text, Link, Tooltip } from "evergreen-ui";
import styles from './Battery.less';
// import cx from 'classnames';

export const Battery = ({
    children, fontSize, bwPercent, bwRemained, bwMaxValue, linkPrice, contentTooltip, ...props
}) => (
    <Tooltip
      appearance="card"
      content={ (
//           <Pane
//             minWidth={ 200 }
//             paddingX={ 18 }
//             paddingY={ 14 }
//             borderRadius={ 4 }
//             backgroundColor='#fff'
//           >
//               <Pane marginBottom={ 12 }>
//                   <Text size={ 300 }>You have {bwRemained} BP out of {bwMaxValue} BP.</Text>
//               </Pane>
//               <Pane marginBottom={ 12 }>
//                   <Text size={ 300 }>
//                         Full regeneration of bandwidth points or BP happens in 24 hours.
//                   </Text>
//               </Pane>
//               <Pane display='flex' marginBottom={ 12 }>
//                   <Text size={ 300 }>Current rate for 1 cyberlink is {linkPrice} BP.</Text>
//               </Pane>
// {/*              <Pane>
//                   <Text size={ 300 }>
//                         More on{' '}
//                       <Link textDecoration='none' color='green' cursor='pointer'>
//                             Bandwidth
//                       </Link>
//                   </Text>
//               </Pane>*/}
//           </Pane>
        contentTooltip
      ) }
    >
        <Pane
          { ...props }
          height={ 25 }
          width='100%'
          className={
              bwPercent <= 25
                    ? styles.skillBarHoverRed
                    : bwPercent < 50
                    ? styles.skillBarHoverOrange
                    : bwPercent < 76
                    ? styles.skillBarHoverYellow
                    : styles.skillBarHoverGreen
            }
          backgroundColor='#fff'
          borderRadius={ 4 }
          position='relative'
          transition='1s'
        >
            <Pane
              height='100%'
              borderRadius='inherit'
              style={ { transition: 'width .2s ease-in' } }
              width={ `${bwPercent}%` }
              backgroundColor={
                  bwPercent <= 25
                        ? '#d32f2f'
                        : bwPercent < 50
                        ? '#f57c00'
                        : bwPercent < 76
                        ? '#fbc02d'
                        : '#4caf50'
                }
            >
                <Pane
                  display='flex'
                  alignItems='center'
                  width='100%'
                  height='100%'
                  position='absolute'
                  paddingX={ 20 }
                  justifyContent={ bwPercent < 26 ? 'flex-end' : 'flex-start' }
                >
                    <Text
                      fontSize={ fontSize || 18 }
                      fontWeight='bold'
                      color={ bwPercent < 26 ? '#d32f2f' : '#ffffff' }
                    >
                        {`${bwPercent} %`}
                    </Text>
                </Pane>
            </Pane>
            {children}
        </Pane>
    </Tooltip>
);
