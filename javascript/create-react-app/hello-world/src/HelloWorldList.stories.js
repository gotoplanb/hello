import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import HelloWorldList from './HelloWorldList';

storiesOf('HelloWorldList', module)
  .add('default', () => (
    <HelloWorldList />
  ))
