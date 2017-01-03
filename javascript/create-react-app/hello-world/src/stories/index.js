import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import HelloWorld from '../HelloWorld';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

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
