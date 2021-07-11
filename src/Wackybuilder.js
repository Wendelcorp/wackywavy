import React from "react";
import Lottie from "react-lottie";
import { replaceColor } from "lottie-colorify";
import { colorify } from "lottie-colorify";
import { TwitterPicker } from "react-color";
import { CopyBlock, dracula } from "react-code-blocks";
import animationData from "./data/floatingguy";
import "./App.css";

export default class Wackybuilder extends React.Component {
  state = {
    background: "EB144C",
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex.replace("#", "") });
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
    const code = `<iframe width="300" height="400" src="https://wackywavy.com/wacky?color=${this.state.background}" title="Wacky Wavy" frameborder="0"></iframe>`;
    return (
      <div className={"container"}>
        <div className={"text-container"}>
          <span className={"line-1"}>the original</span>
          <span className={"line-2"} id={"arc-line"}>
            Wacky Wavy
          </span>
          <span className={"line-3"}>Now Web Embeddable</span>
        </div>
        <div className={"two-col"}>
          <Lottie options={defaultOptions} height={400} width={400} />
          <div className="second-col">
            <div className={"embed-code"}>
              <CopyBlock
                className={"embed-code"}
                text={code}
                language={"HTML"}
                showLineNumbers={false}
                startingLineNumber={1}
                theme={dracula}
                wrapLines
              />
            </div>
            <TwitterPicker
              color={this.state.background}
              onChangeComplete={this.handleChangeComplete}
            />
          </div>
        </div>
        <a href="https://brycewendelaar.com/" target={"_blank"} className={"footer"}>By Bryce Wendelaar</a>
      </div>
    );
  }
}
