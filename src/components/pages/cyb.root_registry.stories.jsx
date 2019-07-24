import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import {
    Table,
    Pane,
    IconButton,
    Menu,
    Popover,
    Dialog,
    Text,
    TextInput,
    Button,
} from 'evergreen-ui';
// import { connect } from 'react-redux';

// import * as actions from '../../redux/settings';
import {
    MainContainer,
    PageTitle,
    TableCybLink,
    // Button,
    Input,
    FlexContainer,
    // Text,
    ScrollContainer,
} from '../..';

import { RadioButton } from '../RadioButton/RadioButton';
import Application from '../Application/Application';

class RootRegistryPage extends Component {
    state = {
        isShownRemove: false,
        isShownRename: false,
        isShownAdd: false,
    };

    addRegistryItem = () => {
        const name = this.name.value;
        const hash = this.hash.value;
        const isIpfs = !!this.refs.ipfs.checked;

        this.props.addRegistryItem(name, hash, isIpfs ? 'ipfs' : 'ipns').then(() => {
            this.name.value = '';
            this.hash.value = '';
        });
    };

    isShownAdd = () => {
        this.setState({
            isShownAdd: !this.state.isShownAdd,
        });
    };

    isShownRemove = () => {
        this.setState({
            isShownRemove: !this.state.isShownRemove,
        });
    };

    isShownRename = () => {
        this.setState({
            isShownRename: !this.state.isShownRename,
        });
    };

    deleteRegistryItem = (itemName) => {
        this.props.deleteRegistryItem(itemName);
    };

    render() {
        const {
            registryItems,
            // isShown
            // isShownRename,
            // isShownAdd,
        } = this.props;

        const rows = registryItems.map((item, index) => (
            <Table.Row borderBottom='none' paddingLeft={ 20 } height={ 50 } isSelectable key={ index }>
                <Table.TextCell>
                    <span style={ { color: '#fff', fontSize: 17 } }>
.
                        {item.name}
                    </span>
                </Table.TextCell>
                <Table.TextCell flexShrink={ 0 } flexGrow={ 2 }>
                    <span style={ { color: '#fff', fontSize: 17 } }>{item.hash}</span>
                </Table.TextCell>
                {/* <Table.TextCell>{item.protocol}</Table.TextCell> */}
                <Table.Cell width={ 60 } flex='none'>
                    {/* <Button sizeSm color='blue' onClick={ () => this.deleteRegistryItem(item.name) }> */}
                    <Popover
                      position='bottom'
                      content={ (
                          <Menu>
                              <Menu.Group>
                                  <Menu.Item icon='edit' onClick={ () => this.isShownRename() }>
                                        Rename
                                  </Menu.Item>
                              </Menu.Group>
                              <Menu.Divider />
                              <Menu.Group>
                                  <Menu.Item
                                    icon='trash'
                                    intent='danger'
                                    onClick={ () => this.isShownRemove() }
                                  >
                                        Remove
                                  </Menu.Item>
                              </Menu.Group>
                          </Menu>
) }
                    >
                        <Pane paddingY={ 5 } paddingX={ 5 } width='100%'>
                            <IconButton
                              iconSize={ 12 }
                              className='icon-btn color-white-svg'
                              appearance='minimal'
                              icon='more'
                            />
                        </Pane>
                    </Popover>
                    {/* </Button> */}
                </Table.Cell>
            </Table.Row>
        ));

        return (
            <div>
                <ScrollContainer>
                    <MainContainer>
                        <Table>
                            <Table.Head
                              style={ {
                                    backgroundColor: '#000',
                                    borderBottom: '1px solid #ffffff80',
                                } }
                              paddingLeft={ 20 }
                            >
                                <Table.TextHeaderCell>
                                    <span style={ { color: '#fff', fontSize: 17 } }>Name</span>
                                </Table.TextHeaderCell>
                                <Table.TextHeaderCell flexShrink={ 0 } flexGrow={ 2 }>
                                    <span style={ { color: '#fff', fontSize: 17 } }>IPFS Hash</span>
                                </Table.TextHeaderCell>
                                <Table.TextHeaderCell width={ 60 } flex='none' />
                            </Table.Head>
                            <Table.Body style={ { backgroundColor: '#000', overflowY: 'hidden' } }>
                                {rows}
                            </Table.Body>
                        </Table>
                        <Dialog
                          isShown={ this.state.isShownRemove }
                          title='Remove domain'
                          intent='danger'
                            // onCloseComplete={() => setState({ isShown: false })}
                          confirmLabel='Delete'
                          width={ 450 }
                        >
                            Are you sure you want to delete Presentation?
                        </Dialog>

                        <Dialog
                          isShown={ this.state.isShownRename }
                          title='Rename domain'
                            // onCloseComplete={() => setState({ isShown: false })}
                          confirmLabel='Update'
                          width={ 450 }
                        >
                            <Pane
                              paddingTop={ 20 }
                              paddingBottom={ 30 }
                              paddingX={ 40 }
                              display='flex'
                              flexDirection='column'
                            >
                                <Pane display='flex' flexDirection='column' marginBottom={ 25 }>
                                    <Text display='inline-block' marginBottom={ 10 }>
                                        Name
                                    </Text>
                                    <TextInput width='100%' />
                                </Pane>
                                <Pane display='flex' flexDirection='column'>
                                    <Text display='inline-block' marginBottom={ 10 }>
                                        IPFS Hash
                                    </Text>
                                    <TextInput width='100%' />
                                </Pane>
                            </Pane>
                        </Dialog>

                        <Dialog
                          isShown={ this.state.isShownAdd }
                          title='Add domain'
                            // onCloseComplete={() => this.setState({ isShown: false })}
                          confirmLabel='Update'
                          width={ 450 }
                        >
                            <Pane
                              paddingTop={ 20 }
                              paddingBottom={ 30 }
                              paddingX={ 40 }
                              display='flex'
                              flexDirection='column'
                            >
                                <Pane display='flex' flexDirection='column' marginBottom={ 25 }>
                                    <Text display='inline-block' marginBottom={ 10 }>
                                        Name
                                    </Text>
                                    <TextInput width='100%' />
                                </Pane>
                                <Pane display='flex' flexDirection='column'>
                                    <Text display='inline-block' marginBottom={ 10 }>
                                        IPFS Hash
                                    </Text>
                                    <TextInput width='100%' />
                                </Pane>
                            </Pane>
                        </Dialog>
                    </MainContainer>
                </ScrollContainer>
                <Pane
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  position='fixed'
                  bottom={ 0 }
                  width='100%'
                  backgroundColor='#000000'
                  paddingY={ 15 }
                  zIndex={ 2 }
                >
                    <Pane
                      alignItems='center'
                      justifyContent='center'
                      display='flex'
                      width='100%'
                      maxWidth={ 1000 }
                    >
                        <Button
                          height={ 32 }
                          paddingX={ 15 }
                          marginX={ 10 }
                          className='btn'
                          minWidth={130}
                          fontSize='14px'
                            //   onClick={ () => this.isShownAdd() }
                        >
                            RESET TO DEFAULT
                        </Button>
                        <Button
                          iconBefore='add'
                          height={ 32 }
                          paddingX={ 15 }
                          marginX={ 10 }
                          className='btn'
                          minWidth={130}
                          justifyContent='center'
                          fontSize='14px'
                          onClick={ () => this.isShownAdd() }
                        >
                            Add
                        </Button>
                    </Pane>
                </Pane>
            </div>
        );
    }
}
const addRegistryItem = [
    {
        name: 'yyg',
        hash: 'QmS2F1UgmYHAekcvezFLCrBibEBjJezSDqwq8fuwF5Qqvi',
        protocol: 'ipfs',
    },
    {
        name: 'dfgd1',
        hash: 'QmS2F1UgmYHAekcvezFLCrBibEBjJezSDqwq8fuwF5Qqvi',
        protocol: 'ipfs',
    },
    {
        name: 'dfgd2',
        hash: 'QmS2F1UgmYHAekcvezFLCrBibEBjJezSDqwq8fuwF5Qqvi',
        protocol: 'ipfs',
    },
    {
        name: 'dfgd3',
        hash: 'QmS2F1UgmYHAekcvezFLCrBibEBjJezSDqwq8fuwF5Qqvi',
        protocol: 'ipfs',
    },
];

storiesOf('Examples/id', module).add('root.cyb', () => (
    <Application>
        <RootRegistryPage registryItems={ addRegistryItem } />
    </Application>
));
