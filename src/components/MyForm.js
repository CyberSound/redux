import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { postQuotes } from "../actions";

class ContactFormFunc extends Component {
  Submit(values) {
    this.props.postQuotes(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.Submit.bind(this))}>
        <div>
          <label htmlFor="Name">Name</label>
          <Field name="name" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="Quote">Quote</label>
          <Field name="quote" component="input" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "contact"
})(connect(null, { postQuotes })(ContactFormFunc));
