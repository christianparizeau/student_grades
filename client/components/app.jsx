import React from 'react';
import Header from './header';
import GradeTable from './gradetable';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  getAverageGrade() {
    const gradeReducer = (acc, grade) => acc + grade.grade;
    let gradeTotal = this.state.grades.reduce(gradeReducer);
    return Math.round(gradeTotal / (this.state.grades.length));
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
        <Header text='Student Grade Table'></Header>
        <GradeTable grades={this.state.grades} />
      </div>
    );
  }
}

export default App;
