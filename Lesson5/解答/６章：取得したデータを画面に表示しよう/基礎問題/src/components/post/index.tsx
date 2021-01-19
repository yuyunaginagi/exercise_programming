import React, { useContext }  from "react";
import { DataContext } from "../../pages/top";
import './index.css';

interface Props {
  content: string
}

export default function Index (props: Props) {
  const { user, dispatch } = useContext(DataContext);
  return (
    <div className = 'post'>
      <div className = 'content'>
        {props.content}
      </div>

      <div className = 'user-info2'>
        <div>ユーザー名: {user.name}</div>
        <div>年齢: {user.year}歳</div>
      </div>
    </div>
  )
};