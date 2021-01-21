
import React from "react";

interface Props {
}

interface State {
  click_count : number
  point : number
}

export default class Index extends React.Component <Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
      click_count: 0,
      point: 0
    };
  }

  handleOnClick = (): void => {
    this.setState({ click_count: this.state.click_count + 1 })
    this.setState({ point: Math.floor(Math.random() * 4 - 1) })
  };

  render() {
    const buttom_size = 200
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <div>ボタンを押した回数:{this.state.click_count}</div>
        <div>得点:{this.state.point}</div>
        <button style={{
          height: buttom_size,
          width: buttom_size,
        }}
        onClick={() => {
            this.handleOnClick()
        }}>
          ボタンを押すとランダムな得点が表示されます
        </button>
      </div>
    );
  }
}


