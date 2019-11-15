import React from 'react';
import Grade from './grade';
function GradeTable(props) {
  let grades = props.grades;
  if (grades.length === 0) return 'No grades recorded';
  let gradeElements = grades.map(grade => {
    return (
      <Grade grade={grade} key={grade.id} />
    );
  });
  return (
    <table className='table table-hover col-8'>
      <thead className='thead-dark'>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Course</th>
          <th scope='col'>Grade</th>
        </tr>
      </thead>
      <tbody>
        {gradeElements}
      </tbody>
    </table>

  );
}
export default GradeTable;
