import React from "react";
import { Link } from "react-router-dom";

interface Props {}
interface State {
  ProductCount: number;
}
export default class Index extends React.Component<Props, State> {
constructor(props: Props) {
  super(props);
  this.state = {
      ProductCount: 0,
  };
}
  //  購入ページに遷移した時、「購入ページへ遷移します」と表示させる。
  //   [①] {
  //     alert("購入ページへ遷移します。");
  //   }
 handleOnClick = (): void => {
  this.setState({ ProductCount: this.state.ProductCount + 1 })
};

  //  商品を5個以上追加しようとしたら、「注意:選択できる個数は5個までです。」と表示させる。
  //   [②] {
  //     alert(
  //       `商品を${this.state.ProductCount}個選択しました。`
  //     );
  //   }
 
  //  購入ページからトップページに戻る時、「商品を〜個選択しました。」と表示させる。 
  //  [③] {
  //    [④] {
  //         if (this.state.ProductCount > 5 ){
  //             alert("注意:選択できる個数は5個までです。");
  //         }  
  //     }
  // }

render() {
  return (
    <div>
      <h1>TechProduct</h1>
      <h2>携帯電話</h2>
      <p>・スマートフォン</p>
      <p>{this.state.ProductCount}個選択中</p>
      <button
        onClick={() => {
            this.handleOnClick()
        }}
      >商品を1つ追加する</button>
      <Link to="/">
      <h3>トップページへ戻る</h3>
      </Link>
    </div>
  );
}
}
