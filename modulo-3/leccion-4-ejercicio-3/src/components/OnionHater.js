import React from "react";
import "../stylesheets/App.scss";

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.isHating = false;
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(ev) {
    this.forceUpdate();
    const page = document.querySelector(".page");
    if (ev.target.value.includes("cebolla")) {
      this.isHating = true;
      page.classList.add("hate");
    } else {
      this.isHating = false;
      page.classList.remove("hate");
    }
  }
  render() {
    return (
      <div className="page">
        <form className="form">
          <textarea className="textarea" onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}
export default OnionHater;
