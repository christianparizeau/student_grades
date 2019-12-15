import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.fieldChange = this.fieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearFields = this.clearFields.bind(this);
  }

  fieldChange(e) {
    let newState = {};
    const newValue = e.target.name === 'grade' ? parseInt(e.target.value) : e.target.value;
    newState[e.target.name] = newValue;
    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addStudent(this.state);
    this.setState({
      name: '',
      course: '',
      grade: ''
    }
    );
  }

  clearFields(e) {
    e.preventDefault();
    const resetState = {
      name: '',
      course: '',
      grade: ''
    };
    this.setState(resetState);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='col-4'>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <div className="input-group-text"><i className='fas fa-user-alt fa-fw'></i></div>
          </div>
          <input
            className='form-control'
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.fieldChange}
            placeholder='Name' />
        </div>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <div className="input-group-text"><i className="fas fa-book fa-fw"></i></div>
          </div>
          <input
            className='form-control'
            name='course'
            type="text"
            value={this.state.course}
            onChange={this.fieldChange}
            placeholder='Course' />
        </div>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <div className="input-group-text"><i className="fas fa-graduation-cap fa-fw"></i></div>
          </div>
          <input
            className='form-control'
            name="grade"
            type="number"
            placeholder="Grade"
            value={this.state.grade}
            onChange={this.fieldChange} />
        </div>
        <button className="btn btn-success m-1">Add</button>
        <button className="btn btn-danger m-1" onClick={this.clearFields}>Cancel</button>
      </form >
    );

  }
}
