import React from 'react';

const withSecretToLife = (WrappedComponent) => {
  class HOC extends React.Component {
      constructor(props) {
          super(props)
      
          this.state = {
               details:{
                   name: 'Manish',
                   color: 'Maroon'
               }
          }
      }
      
    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          secretToLife={42}
          text={'text'}
        />
      );
    }
  }
    
  return HOC;
};

export default withSecretToLife;