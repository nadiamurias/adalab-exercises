import React from "react";
const Data = "https://randomuser.me/api/?results=50";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
    this.fetchData = this.fetchData.bind(this);
  }
  fetchData() {
    fetch(Data)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          results: data,
        });
      });
  }

  render() {
    return <div>Hola</div>;
  }
}
export default App;
