import React from 'react';
import withSecretToLife from './withSecretToLife';

const DisplayTheSecret = props => (
  <div>
    The secret to life is {props.secretToLife}.
    <hr/>
    <span>name: {props.details.name}</span>
    <span>color: {props.details.color}</span>
  </div>
);

const WrappedComponent = withSecretToLife(DisplayTheSecret);

export default WrappedComponent;