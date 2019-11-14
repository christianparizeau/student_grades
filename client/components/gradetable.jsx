import React from 'react';
import Grade from './grade';
function GradeTable(props) {
  let grades = props.grades;
  if (grades.length === 0) return 'No grades recorded';
  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Course</th>
          <th scope='col'>Grade</th>
        </tr>
      </thead>
      <tbody>
        <Grade name={grades[0].name} course={grades[0].course} grade={grades[0].grade} />
      </tbody>
    </table>

  );
}

export default GradeTable;
