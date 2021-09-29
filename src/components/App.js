import React from 'react';
import Header from './Header';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contest',
  };
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>...This is op</div>
      </div>
    );
  }
}

export default App;
