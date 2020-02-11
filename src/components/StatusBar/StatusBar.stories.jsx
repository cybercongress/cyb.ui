import React from 'react';
import { storiesOf } from '@storybook/react';
import { StatusBar } from '../..';

storiesOf('Atoms|StatusBar', module)
.add('success', () => (
        <StatusBar open message='message' type='success'></StatusBar>
))
.add('error', () => (
  <StatusBar open message='message' type='error'></StatusBar>
))
.add('deploy', () => (
  <StatusBar open onClose message='message'></StatusBar>
));
