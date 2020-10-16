import React, { Component } from "react";
import "./css/style.css";
import Header from "./components/header";
import Main from "./components/main";
import Features from "./components/features";
import Footer from "./components/footer";

import Calendar from "./components/calendar";
import Details from "./components/details";

import FetchData from "./service/fetchData";

class App extends Component {
  fetchData = new FetchData();

  state = {
    rocket: "Falcon 1",
    rocketFeatures: null,
    rockets: [],
    company: null,
  };

  componentDidMount() {
    this.updateCompany();
    this.updateRocket();
  }

  updateRocket() {
    this.fetchData
      .getRocket()
      .then((data) => {
        this.setState({ rockets: data.map((item) => item.name) });
        // здесь получаем нужные данные и отправляем data не изменяя
        return data;
      })
      .then((data) => data.find((item) => item.name === this.state.rocket))
      .then((rocketFeatures) =>
        this.setState({ rocketFeatures }, () => console.log(this.state))
      ); // вторым параметром в setState - callback-функция
  }

  changeRocket = (rocket) => {
    this.setState(
      {
        rocket,
      },
      this.updateRocket
    );
  };

  updateCompany() {
    this.fetchData
      .getCompany()
      .then((data) => this.setState({ company: data }));
  }

  render() {
    return (
      <div className="App">
        <Header rockets={this.state.rockets} changeRocket={this.changeRocket} />
        <Main rocket={this.state.rocket} />
        {this.state.rocketFeatures && (
          <Features {...this.state.rocketFeatures} />
        )}
        {/* <Details /> */}
        {this.state.company && <Footer {...this.state.company} />}
      </div>
    );
  }
}

export default App;
