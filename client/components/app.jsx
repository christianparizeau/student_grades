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
