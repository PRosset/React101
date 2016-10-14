import React from 'react';
// import SharedStore from './views/shared/stores/SharedStore.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var self = this;
    var childrenWithProps = React.Children.map(this.props.children, function (child) {
      return React.cloneElement(child,{})
    })

    return  (<div>
      {childrenWithProps}
    </div>)
  }
}

export default App;