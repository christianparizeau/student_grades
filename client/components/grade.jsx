import React from 'react';

function Grade(props) {
  return (
    <tr>
      <th scope='row'>{props.grade.name}</th>
      <td>{props.grade.course}</td>
      <td>{props.grade.grade}</td>
    </tr>
  );
}

export default Grade;
