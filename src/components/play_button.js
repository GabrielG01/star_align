import React, { Component } from "react";
import ReactHowler from "react-howler";
import song from "../audio/DamFunkType.mp3";

import play from "../images/play button.png";

export default class PlayButton extends Component {
  constructor() {
    super();
    this.state = {
      isPlaying: false
    };
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay() {
    this.setState({
      isPlaying: !this.state.isPlaying
    });
  }

  render() {
    return (
      <div className="header_play_button">
        <img onClick={this.handlePlay} src={play} />
        <ReactHowler src={song} playing={this.state.isPlaying} volume={0.1} />
      </div>
    );
  }
}
