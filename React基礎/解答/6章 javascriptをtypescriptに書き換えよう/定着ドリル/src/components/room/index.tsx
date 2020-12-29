import React from "react";
import Switch from "../switch";


interface Props {
}

interface State{
  left_switch: string,
  right_switch: string
}

export default class Index extends React.Component <Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
      left_switch: 'OFF',
      right_switch: 'OFF',
    };
  }

  handleLeftSwitch = () => {
    this.setState({ left_switch: 'ON'});
  };

  handleRightSwitch = () => {
    this.setState({ right_switch: 'ON'});
  };

  render() {
    const button_size = 100
    return (
      <div style = {{
        display: "flex"
      }}>
        {/* 1つ目のスイッチ */}
        <Switch
          switch={this.state.left_switch}
          handle_switch={this.handleLeftSwitch}
        />

        {/* 2つ目のスイッチ */}
        <Switch
          switch={this.state.right_switch}
          handle_switch={this.handleRightSwitch}
        />
      </div>
    );
  }
}
