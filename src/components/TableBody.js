import React from 'react'

export const TableBody =(props)=>{
  const {charactersData, removeCharacter} = props;
  const rows = charactersData.map((row,index)=>{
    return(
    <tr key={index}>
      <td>{row.name}</td>
      <td>{row.job}</td>
      <td><button onClick={()=>removeCharacter(index)}>Delete</button></td>
    </tr>
    );
  })
    return(
    <tbody>
    {rows}
  </tbody>
    )
}

export default TableBody;