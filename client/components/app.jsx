import React from 'react';
import Header from './header';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grade: []
    };
  }
  render() {
    return (
      <Header text='Student Grade Table'></Header>
    );
  }
}

export default App;
