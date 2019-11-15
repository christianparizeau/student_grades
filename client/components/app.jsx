import React from 'react';
import Header from './header';
import GradeTable from './gradetable';
import GradeForm from './gradeform';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.addStudent = this.addStudent.bind(this);
  }

  getAverageGrade() {
    if (this.state.grades.length === 0) return 0;
    const gradeReducer = (acc, grade) => acc + grade.grade;
    let gradeTotal = this.state.grades.reduce(gradeReducer, 0);
    return Math.round(gradeTotal / (this.state.grades.length));
  }

  deleteStudent(id) {
    fetch(`/api/grades/${id}`, { 'method': 'DELETE' })
      .then(() => {
        let grades = this.state.grades.filter(grade => grade.id !== id);
        this.setState({ grades });
      });
  }

  addStudent(grade) {
    const req = {
      'method': 'POST',
      'body': JSON.stringify(grade),
      'headers': {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/grades', req)
      .then(res => res.json())
      .then(returnedStudent => {
        let grades = [...this.state.grades];
        grades.push(returnedStudent);
        this.setState({ grades });
      })
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getAllGrades();
  }

  getAllGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(grades => {
        this.setState({ grades });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className='container'>
        <Header text='Student Grade Table' avgGrade={this.getAverageGrade()}></Header>
        <div className='row'>
          <GradeTable grades={this.state.grades} />
          <GradeForm addStudent={this.addStudent} />
        </div>
      </div>
    );
  }
}

export default App;
