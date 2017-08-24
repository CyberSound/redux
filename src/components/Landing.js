import React, { Component } from "react";
import { connect } from "react-redux";
import MyForm from "./MyForm";
import { deleteQuotes, fetchQuotes, likeQuotes } from "../actions";

class Landing extends Component {
  renderContent() {
    switch (this.props.quotes) {
      case null:
        return "No quotes found";
      case "Not logged in":
        return "Not logged in";
      default:
        return this.props.quotes.map(quotes => {
          return (
            <li
              style={{ paddingBottom: "30px" }}
              key={quotes._id}
              className="collection-item"
            >
              {quotes.name} {quotes.quote}
              <button
                onClick={() => {
                  this.likeIt(quotes._id);
                }}
                className="btn left waves-effect green"
              >
                {quotes.likes}
              </button>
              <button
                className="btn right waves-effect red"
                onClick={() => {
                  this.deleteIt(quotes._id);
                }}
              >
                Delete
              </button>
            </li>
          );
        });
    }
  }

  likeIt(id) {
    this.props.likeQuotes(id);
  }

  deleteIt(id) {
    this.props.deleteQuotes(id);
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Emaily</h1>
        <MyForm />
        <ul style={{ marginTop: "100px" }} className="collection">
          {this.renderContent()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  };
};

export default connect(mapStateToProps, {
  fetchQuotes,
  deleteQuotes,
  likeQuotes
})(Landing);
