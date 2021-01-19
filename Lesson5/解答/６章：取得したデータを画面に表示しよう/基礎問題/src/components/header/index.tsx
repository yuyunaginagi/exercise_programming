import React, {useContext} from "react";
import { DataContext } from "../../pages/top";
import './index.css';
export default function Index () {
  const { user, dispatch } = useContext(DataContext);
  return (
    <div>
      <div className='head-bar'>
          <div className='title'>
            TechCampBook
          </div>
    
        <div className='user-info'>
          ユーザー名: {user.name}  年齢: {user.year}歳
        </div>
      </div>
      <div className = 'menu'>自分の投稿一覧</div>
    </div>
  )
};