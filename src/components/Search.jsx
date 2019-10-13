import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        location: ""
      }
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      formData: {
        [name]: value
      }
    });
  };

  clearForm = () => {
    this.setState({
      formData: {
        location: '',
      }
    })
  }

  render() {
    const { location } = this.state.formData;
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(location);
        this.clearForm();
      }}>
        <input
          value={location}
          name="location"
          onChange={this.handleChange} />
        <button>search</button>
      </form>
    );
  }
}
