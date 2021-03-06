import React, { Component } from "react";
import axios from "axios";
import EditURL from "./EditURL";
import EditStatus from "./EditStatus";
import "./Edit.css";

class Edit extends Component {
  constructor() {
    super();
    this.state = {
      afterURL: "",
      // infoURL: this.props.element.beforeURL.replace("367/267", "info"),
      highRes: "",
      Viewfinished: ""
    };
  }
  // let infoURL = beforeURL.replace("367/267", "info");

  componentDidMount() {
    axios
      .get(`${this.props.element.beforeURL.replace("367/267", "info")}`)
      .then(response => {
        this.setState({ highRes: response.data.download_url });
      })
      .catch(error => {});
  }

  deleteEdit = () => {
    axios.delete(`/api/list/${this.props.element.id}`).then(response => {});
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

    if (!beforeURL.includes("picsum")) {
      this.state.highRes = beforeURL;
    }

    return (
      <div className="Edit">
        <section className="Left">
          <div>Click image to view high-res / download</div>
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
          <span className="Status-Field">{status}</span>
          <span Class="Name-Field">{name}</span>
          <span className="Email-Field">{email}</span>
          <span className="Instructions">Instructions:</span>
          <textarea className="Comment-Field">{comment}</textarea>
          <a
            href={`${afterURL}`}
            target="popup"
            className="Completed-Edit-Link"
          >
            View Completed Edit
          </a>
          <div className="Update-Links">
            {this.state.editURL === "edit" ? (
              <EditURL
                // id={id}
                // key={element.id}
                // handleChange={this.handleChange}
                afterURL={afterURL}
                updateEdit={this.updateEdit}
                id={id}
                updateAllRequests={this.props.updateAllRequests}
                resetState={this.state.editURL}
              />
            ) : (
              <button
                className="Update-button"
                onClick={() => this.setState({ editURL: "edit" })}
              >
                {" "}
                Add / Update URL
              </button>
            )}
            <EditStatus
              status={status}
              id={id}
              updateStatus={this.updateStatus}
              updateAllRequests={this.props.updateAllRequests}
            />
          </div>
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
