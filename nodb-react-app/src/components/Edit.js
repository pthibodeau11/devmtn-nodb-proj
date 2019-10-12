import React, { Component } from "react";
import axios from "axios";
import EditURL from "./EditURL";
import "./Edit.css";

class Edit extends Component {
  constructor() {
    super();
    this.state = {
      afterURL: "",
      // infoURL: this.props.element.beforeURL.replace("367/267", "info"),
      highRes: ""
    };

    // this.updateEdit = this.updateEdit.bind(this);
  }
  // let infoURL = beforeURL.replace("367/267", "info");

  componentDidMount() {
    axios
      .get(`${this.props.element.beforeURL.replace("367/267", "info")}`)
      .then(response => {
        console.log(response.data.download_url);
        this.setState({ highRes: response.data.download_url });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteEdit = () => {
    axios.delete(`/api/list/${this.props.element.id}`).then(response => {
      console.log(response.data);
      this.props.updateAllRequests(response.data);
    });
  };

  handleChange = event => {
    this.setState({ afterURL: event.target.value });
  };

  render() {
    const {
      name,
      beforeURL,
      status,
      comment,
      afterURL,
      email,
      id
    } = this.props.element;

    return (
      <div className="Edit">
        <section className="Left">
          <div className="FixedImgSize">
            <img className="Image" src={beforeURL} />
          </div>
        </section>
        <section className="Right">
          <ul>status: {status}</ul>
          <ul>Submitted by: {name}</ul>
          <ul>{comment}</ul>
          <ul>{this.state.afterURL}</ul>
          <ul>{email}</ul>
          <a
            href={`https://www.ribbet.com/app/?_import=${this.state.highRes} &_export=EXPORT_URL&_exclude=out,home,share &_export_title=SAVE_BUTTON_TITLE &_export_agent=browser&embed=true`}
            target="popup"
          >
            EDIT PHOTO
          </a>
          <a href={`${this.state.highRes}` + ".jpg"} target="popup">
            VIEW HIGH-RES
          </a>
        </section>
        <section className="Button-Sec">
          <button className="Delete-button" onClick={this.deleteEdit}>
            X
          </button>
          <button
            className="Update-button"
            onClick={() => this.setState({ editURL: "edit" })}
          >
            Update
          </button>
          {this.state.editURL === "edit" ? (
            <EditURL
              // id={id}
              // key={element.id}
              handleChange={this.handleChange}
              afterURL={afterURL}
              // update={this.updateEdit}
              id={id}
            />
          ) : null}
        </section>
      </div>
    );
  }
}

export default Edit;
