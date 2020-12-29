
import React from "react";

interface Props {
}

interface State {
  click_count : number
  sum : number
}

export default class Index extends React.Component <Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
      click_count: 0,
      sum: 0
    };
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevState.click_count !== this.state.click_count) {
      if (this.state.click_count > this.state.sum){
        alert("注意:得点が回数を下回っています");
      }
    }
  }

  handleOnClick = (): void => {
    this.setState({ click_count: this.state.click_count + 1 })
    this.setState({ sum: this.state.sum + Math.floor(Math.random() * 4 - 1) })
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
        <div>得点:{this.state.sum}</div>
        <button style={{
          height: buttom_size,
          width: buttom_size,
        }}
        onClick={() => {
            this.handleOnClick()
        }}>
          ボタンを押すとランダムに得点が増減します
        </button>
      </div>
    );
  }
}
