import React from "react";
import Lottie from "react-lottie";
import { replaceColor } from "lottie-colorify";
import { colorify } from "lottie-colorify";
import { getColors } from "lottie-colorify";
import animationData from "./data/floatingguy";
import "./App.css";

const windowUrl = window.location.hash;
const param = new URLSearchParams(windowUrl).toString();
let colorParam = "FFFFFF";
if (param.includes("wacky")) {
  colorParam = param.replace("#/wacky?", "").match(/color=(.*)/)[1].toString();
}

export default class Wacky extends React.Component {
  state = {
    background: colorParam,
  };

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: replaceColor(
        [231, 95, 59],
        `${this.state.background}`,
        animationData
      ),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    return (
      <div className={"container"}>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    );
  }
}
