import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import HelloWorldList from './HelloWorldList';

storiesOf('HelloWorldList', module)
  .addDecorator((story) => (
    <div style={{maxWidth: '600px'}}>
      {story()}
    </div>
  ))
  .add('default', () => (
    <HelloWorldList />
  ))
