import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import HelloWorld from './HelloWorld';

storiesOf('HelloWorld', module)
  .add('with short name', () => (
    <HelloWorld name="Dave" />
  ))
  .add('with long name', () => (
    <HelloWorld name="Daveapotomus" />
  ))
  .add('with some emoji', () => (
    <HelloWorld name="😀 😎 👍 💯" />
  ));
