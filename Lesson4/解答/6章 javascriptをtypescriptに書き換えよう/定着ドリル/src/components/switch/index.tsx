import React from "react";

interface Props {
  handle_switch: ()=> void,
  switch: string
}

export default class Index extends React.Component<Props>{
  render() {
    const button_size = 100
    return (
      <div>
        <button style={{
          height: button_size,
          width: button_size,
        }} onClick={() => {
          this.props.handle_switch&&this.props.handle_switch()
        }}>
          {this.props.switch}
        </button>
      </div>
    );
  }
}