import React from 'react';

function Grade(props) {
  const testF = () => { props.deleteStudent(props.grade.id); };
  return (
    <tr>
      <th scope='row'>{props.grade.name}</th>
      <td>{props.grade.course}</td>
      <td>{props.grade.grade}</td>
      <td><button onClick={testF} className="btn btn-danger">Delete</button></td>
    </tr>
  );
}

export default Grade;
