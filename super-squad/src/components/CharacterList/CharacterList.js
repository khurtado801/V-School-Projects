import React, { Component } from 'react';
import { connect } from 'react-redux';

class CharacterList extends Component {
  render() {
    return (
      <div>
        <h4>Characters</h4>
        <ul className="list-group">
          {this.props.characters.map(character => {
            return (
                <li key={ character.id } className="list-group-item">
                  <div className="list-item">{ character.name }</div>
                </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    characters: state.characters
  };
}

export default connect(mapStateToProps, null)(CharacterList);
