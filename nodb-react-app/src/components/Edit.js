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
          {status}
          <div className="FixedImgSize">
            <a href={`${this.state.highRes}` + ".jpg"} target="popup">
              <img className="Image" src={beforeURL} />
            </a>
          </div>
          <a
            href={`https://www.ribbet.com/app/?_import=${this.state.highRes} &_export=EXPORT_URL&_exclude=out,home,share &_export_title=SAVE_BUTTON_TITLE &_export_agent=browser&embed=true`}
            target="popup"
          >
            EDIT PHOTO
          </a>
        </section>
        <section className="Right">
          Submitted by: {name}
          <span className="Comment-Field">{comment}</span>
          <a href={`${afterURL}`} target="popup">
            {afterURL}
          </a>
          <span>{email}</span>
        </section>
        <section className="Button-Sec">
          <button className="Delete-button" onClick={this.deleteEdit}>
            X
          </button>
          {/* <button
            className="Update-button"
            onClick={() => this.setState({ editURL: "edit" })}
          >
            Update
          </button> */}
          {this.state.editURL === "edit" ? (
            <EditURL
              // id={id}
              // key={element.id}
              // handleChange={this.handleChange}
              afterURL={afterURL}
              updateEdit={this.updateEdit}
              id={id}
            />
          ) : (
            <button
              className="Update-button"
              onClick={() => this.setState({ editURL: "edit" })}
            >
              {" "}
              + URL
            </button>
          )}
        </section>
      </div>
    );
  }
}

export default Edit;
