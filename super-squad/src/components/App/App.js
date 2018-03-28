import React, { Component } from 'react';
import CharacterList from '../CharacterList/CharacterList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-title">
        <h2>SuperSquad</h2>
        <CharacterList></CharacterList>
      </div>
    );
  }
}

export default App;
