import React, {Component} from 'react'
import TableBody from './TableBody';
import TableHeader from './TableHeader';

class Table extends Component {
  render() {
    const {charactersData,removeCharacter} = this.props;
    return (
      <table>
        <TableHeader/>
        <TableBody charactersData={charactersData} removeCharacter={removeCharacter} />
      </table>
    )
  }
}

export default Table