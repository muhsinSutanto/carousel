import React, { Component } from "react";
import "./App.css";
import dummy from "../src/data/dummy";
import Card from "./component/Card";
import Slider from "react-slick";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 7,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div style={{display:'flex', justifyContent:'center'}}>
        <div style={{ width: "1000px" }}>
          <Slider {...settings}>
            {dummy.map(item => {
              return <Card image={item.image} title={item.name} />;
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default App;
