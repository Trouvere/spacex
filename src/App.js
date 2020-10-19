import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./css/style.css";
import Header from "./components/header";
import Home from "./components/Home/Home";
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
        <BrowserRouter>
          <Header
            rockets={this.state.rockets}
            changeRocket={this.changeRocket}
          />
          <Route
            exact
            path="/"
            render={() =>
              this.state.company && <Home company={this.state.company} />
            }
          />
          <Route
            path="/rocket"
            render={() =>
              this.state.rocketFeatures && (
                <Features {...this.state.rocketFeatures} />
              )
            }
          />
          <Route path="/calendar" component={Calendar} />
          <Route path="/details/:id" component={Details} />
          {this.state.company && <Footer {...this.state.company} />}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
