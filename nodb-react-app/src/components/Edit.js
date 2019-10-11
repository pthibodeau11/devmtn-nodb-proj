import React, { Component } from "react";
import axios from "axios";
import "./Edit.css";

class Edit extends Component {
  constructor() {
    super();
    this.state = {};
  }

  deleteEdit = () => {
    axios.delete(`/api/list/${this.props.element.id}`).then(response => {
      console.log(response.data);
      this.props.updateAllRequests(response.data);
    });
  };

  render() {
    const {
      name,
      beforeURL,
      status,
      comment,
      afterURL,
      email
    } = this.props.element;

    return (
      <div className="Edit">
        <section className="Left">
          <ul>Submitted by: {name}</ul>
          <div className="FixedImgSize">
            <img className="Image" src={beforeURL} />
          </div>
          <ul>Status: {status}</ul>
        </section>
        <section className="Right">
          <ul>{comment}</ul>
          <ul>{afterURL}</ul>
          <ul>{email}</ul>
          <a
            href={`https://www.ribbet.com/app/?_import=${beforeURL}&_export=EXPORT_URL &_exclude=out,home,share& _export_title=SAVE_BUTTON_TITLE &_export_agent=browser&embed=true`}
            target="popup"
          >
            EDIT PHOTO
          </a>
        </section>
        <section className="Button-Sec">
          <button className="Delete-button" onClick={this.deleteEdit}>
            X
          </button>
        </section>
      </div>
    );
  }
}

export default Edit;
